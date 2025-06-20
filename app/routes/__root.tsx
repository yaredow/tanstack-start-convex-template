import {
  Outlet,
  createRootRouteWithContext,
  useRouteContext,
} from "@tanstack/react-router";
import { Meta, Scripts, createServerFn } from "@tanstack/react-start";
import { QueryClient } from "@tanstack/react-query";
import * as React from "react";
import { ConvexQueryClient } from "@convex-dev/react-query";
import { ConvexReactClient } from "convex/react";
import { getCookie, getWebRequest } from "@tanstack/react-start/server";
import { ConvexBetterAuthProvider } from "@convex-dev/better-auth/react";
import {
  fetchSession,
  getCookieName,
} from "@convex-dev/better-auth/react-start";
import { createAuth } from "../../convex/auth";

import appCss from "../styles/app.css?url";
import { authClient } from "@/lib/auth-client";

// Server side session request
const fetchAuth = createServerFn({ method: "GET" }).handler(async () => {
  const sessionCookieName = await getCookieName(createAuth);
  const token = getCookie(sessionCookieName);
  const request = getWebRequest();
  const { session } = await fetchSession(createAuth, request);
  return {
    userId: session?.user.id,
    token,
  };
});

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
  convexClient: ConvexReactClient;
  convexQueryClient: ConvexQueryClient;
}>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  beforeLoad: async (ctx) => {
    // all queries, mutations and action made with TanStack Query will be
    // authenticated by an identity token.
    const auth = await fetchAuth();
    const { userId, token } = auth;

    // During SSR only (the only time serverHttpClient exists),
    // set the auth token for Convex to make HTTP queries with.
    if (token) {
      ctx.context.convexQueryClient.serverHttpClient?.setAuth(token);
    }

    return { userId, token };
  },
  component: RootComponent,
});

function RootComponent() {
  const context = useRouteContext({ from: Route.id });
  return (
    <ConvexBetterAuthProvider
      client={context.convexClient}
      authClient={authClient}
    >
      <RootDocument>
        <Outlet />
      </RootDocument>
    </ConvexBetterAuthProvider>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <Meta />
      </head>
      <body className="bg-neutral-950 text-neutral-50">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
