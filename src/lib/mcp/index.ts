import { auth, defineMcp } from "@lovable.dev/mcp-js";
import whoamiTool from "./tools/whoami";
import listGalleryImagesTool from "./tools/list-gallery-images";

// Build the Supabase auth issuer from the project ref. Vite inlines this env
// var as a literal at build time, so it stays import-safe.
const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "pcos-thyrocure-mcp",
  title: "PCOS & ThyroCure Homeopathy MCP",
  version: "0.1.0",
  instructions:
    "Tools for Dr. Prasanna Boddupally's PCOS & ThyroCure Homeopathy site. Use `whoami` to confirm authentication and `list_gallery_images` to browse clinic gallery entries.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [whoamiTool, listGalleryImagesTool],
});