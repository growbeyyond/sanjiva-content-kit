import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Minimal typed wrapper for the beta supabase.auth.oauth namespace.
type OAuthResult = {
  data?: {
    redirect_url?: string;
    redirect_to?: string;
    client?: { name?: string; client_uri?: string; redirect_uris?: string[] };
    scope?: string;
    scopes?: string[];
  } | null;
  error?: { message: string } | null;
};
const oauth = (supabase.auth as unknown as {
  oauth: {
    getAuthorizationDetails: (id: string) => Promise<OAuthResult>;
    approveAuthorization: (id: string) => Promise<OAuthResult>;
    denyAuthorization: (id: string) => Promise<OAuthResult>;
  };
}).oauth;

export default function OAuthConsent() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const authorizationId = params.get("authorization_id") ?? "";
  const [details, setDetails] = useState<OAuthResult["data"] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      if (!authorizationId) {
        setError("Missing authorization_id");
        return;
      }
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        const next = window.location.pathname + window.location.search;
        navigate(`/login?next=${encodeURIComponent(next)}`, { replace: true });
        return;
      }
      const { data, error } = await oauth.getAuthorizationDetails(authorizationId);
      if (!active) return;
      if (error) {
        setError(error.message);
        return;
      }
      const immediate = data?.redirect_url ?? data?.redirect_to;
      if (immediate && !data?.client) {
        window.location.href = immediate;
        return;
      }
      setDetails(data ?? null);
    })();
    return () => {
      active = false;
    };
  }, [authorizationId, navigate]);

  async function decide(approve: boolean) {
    setBusy(true);
    setError(null);
    const { data, error } = approve
      ? await oauth.approveAuthorization(authorizationId)
      : await oauth.denyAuthorization(authorizationId);
    if (error) {
      setBusy(false);
      setError(error.message);
      return;
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      setError("No redirect returned by the authorization server.");
      return;
    }
    window.location.href = target;
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-subtle">
      <Card className="w-full max-w-md p-8 space-y-6">
        {error ? (
          <>
            <h1 className="text-2xl font-semibold text-foreground">Could not authorize</h1>
            <p className="text-sm text-foreground/80">{error}</p>
          </>
        ) : !details ? (
          <p className="text-foreground/70">Loading authorization request…</p>
        ) : (
          <>
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold text-foreground">
                Connect {details.client?.name ?? "an app"} to your account
              </h1>
              <p className="text-sm text-foreground/80">
                {details.client?.name ?? "This client"} will be able to call this app's enabled tools while
                you are signed in. This does not bypass this app's permissions or backend policies.
              </p>
            </div>
            <div className="text-xs text-foreground/60 space-y-1">
              {details.client?.client_uri && (
                <p>Client URL: <span className="font-mono">{details.client.client_uri}</span></p>
              )}
              {details.scope && <p>Requested scope: <span className="font-mono">{details.scope}</span></p>}
            </div>
            <div className="flex gap-3 pt-2">
              <Button onClick={() => decide(true)} disabled={busy} className="flex-1">
                Approve
              </Button>
              <Button onClick={() => decide(false)} disabled={busy} variant="outline" className="flex-1">
                Cancel connection
              </Button>
            </div>
          </>
        )}
      </Card>
    </main>
  );
}