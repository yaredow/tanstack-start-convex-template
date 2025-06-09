import { createAuthClient } from "better-auth/react";
import {
  convexClient,
  crossDomainClient,
} from "@erquhart/convex-better-auth/client/plugins";

export const authClient = createAuthClient({
  // Your Convex site URL
  baseURL: "https://adjective-animal-123.convex.site",
  plugins: [
    convexClient(),
    // Required if using the cross domain server plugin
    crossDomainClient(),
  ],
});
