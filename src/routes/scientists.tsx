import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/scientists")({
  component: () => <Outlet />,
});
