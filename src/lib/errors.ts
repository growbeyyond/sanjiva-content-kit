import { toast } from "sonner";

/**
 * Normalize any thrown value into a real Error with a message.
 */
export function toError(err: unknown): Error {
  if (err instanceof Error) return err;
  if (typeof err === "string") return new Error(err);
  try {
    return new Error(JSON.stringify(err));
  } catch {
    return new Error("Unknown error");
  }
}

/**
 * Return a user-friendly message for a caught value.
 * Never leak stack traces or internal identifiers.
 */
export function getErrorMessage(err: unknown, fallback = "Something went wrong. Please try again."): string {
  const e = toError(err);
  const msg = e.message?.trim();
  if (!msg) return fallback;
  // Hide overly technical messages from users
  if (/fetch|network|failed to fetch|NetworkError/i.test(msg)) {
    return "Network error. Please check your connection and try again.";
  }
  if (msg.length > 200) return fallback;
  return msg;
}

/**
 * Log an error to the console (and future remote sink) with a tag.
 */
export function logError(tag: string, err: unknown, extra?: Record<string, unknown>) {
  const e = toError(err);
  // eslint-disable-next-line no-console
  console.error(`[${tag}]`, e.message, { stack: e.stack, ...extra });
}

/**
 * Wrap an async operation with standardized error handling.
 * Shows a toast on failure and returns [data, error].
 */
export async function safeAsync<T>(
  fn: () => Promise<T>,
  options: { tag: string; toastOnError?: boolean; fallbackMessage?: string } = { tag: "safeAsync" }
): Promise<[T | null, Error | null]> {
  try {
    const data = await fn();
    return [data, null];
  } catch (err) {
    const e = toError(err);
    logError(options.tag, e);
    if (options.toastOnError !== false) {
      toast.error(getErrorMessage(e, options.fallbackMessage));
    }
    return [null, e];
  }
}

/**
 * Install global handlers for unhandled errors and promise rejections.
 * Call once at app startup.
 */
export function installGlobalErrorHandlers() {
  if (typeof window === "undefined") return;
  window.addEventListener("error", (event) => {
    logError("window.error", event.error ?? event.message);
  });
  window.addEventListener("unhandledrejection", (event) => {
    logError("unhandledrejection", event.reason);
  });
}