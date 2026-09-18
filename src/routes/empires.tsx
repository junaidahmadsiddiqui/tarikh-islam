import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/empires")({
    component: () => <Outlet />,
});