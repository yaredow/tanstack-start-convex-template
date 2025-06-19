"use client";

import { SignIn } from "@/components/sign-in";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/sign-in")({
  component: SignIn,
  beforeLoad: ({ context }) => {
    if (context.userId) {
      throw redirect({ to: "/" });
    }
  },
});
