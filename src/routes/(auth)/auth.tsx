import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex mt-12 flex-col items-center justify-center h-full">
      <h1>Login</h1>
      <Outlet />
    </div>
  );
}
