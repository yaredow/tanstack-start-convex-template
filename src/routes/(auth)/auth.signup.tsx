import { createFileRoute } from "@tanstack/react-router";
import { SignupForm } from "../../features/auth/components/signup-form";

export const Route = createFileRoute("/(auth)/auth/signup")({
  component: SignupForm,
});
