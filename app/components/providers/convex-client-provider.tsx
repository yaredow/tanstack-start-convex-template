"use client";

import { ConvexReactClient } from "convex/react";
import { PropsWithChildren } from "react";

import { ConvexBetterAuthProvider } from "@erquhart/convex-better-auth/react";
import { authClient } from "@/lib/auth-client";

const convex = new ConvexReactClient(process.env.CONVEX_URL as string);

const ConvexProvider = ({ children }: PropsWithChildren) => (
  <ConvexBetterAuthProvider client={convex} authClient={authClient}>
    {children}
  </ConvexBetterAuthProvider>
);

export default ConvexProvider;
