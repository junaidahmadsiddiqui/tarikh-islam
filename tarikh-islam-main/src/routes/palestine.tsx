import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/palestine')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/palestine"!</div>
}
