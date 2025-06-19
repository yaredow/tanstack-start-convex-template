"use client";

import SignUp from "@/components/sign-up";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/sign-up")({
  component: SignUp,
  beforeLoad: ({ context }) => {
    if (context.userId) {
      throw redirect({ to: "/" });
    }
  },
});
