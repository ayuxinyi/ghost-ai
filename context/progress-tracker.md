# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- **01 – Design System** ✅ Completed

## Current Goal

- Prepare for Phase 02: Database schema, Prisma setup, and Clerk authentication.

## Completed

- [x] Initialize Next.js 16 + TypeScript project.
- [x] Install and configure `shadcn/ui` (base-nova style, RSC, TSX).
- [x] Install `lucide-react` icon library.
- [x] Create `lib/utils.ts` with the `cn()` Tailwind class-merge utility.
- [x] Add required shadcn/ui components to `components/ui/`:
  - `Button`
  - `Card`
  - `Dialog`
  - `Input`
  - `Tabs`
  - `Textarea`
  - `ScrollArea`
- [x] Configure `globals.css` with Tailwind v4 + shadcn theme tokens.

## In Progress

- None yet.

## Next Up

- **02 – Database & Auth**
  - Set up Prisma schema for projects, collaborators, specs, and task runs.
  - Configure Clerk authentication and route protection.
  - Add project creation and ownership logic.
- **03 – Collaborative Canvas**
  - Integrate Liveblocks for real-time rooms and presence.
  - Integrate React Flow for node/edge canvas editing.
  - Implement canvas snapshot persistence to Vercel Blob.
- **04 – Starter System Designs**
  - Create prebuilt template library (monolith, microservices, event-driven, serverless, etc.).
  - Implement template import into active canvas room.
- **05 – AI Architecture Generation**
  - Set up Trigger.dev background tasks.
  - Implement AI design generation from natural language prompts.
- **06 – Spec Generation**
  - Implement Markdown spec generation from canvas graph.
  - Persist specs to Vercel Blob and link to project records.

## Open Questions

- Should the custom Ghost AI dark theme variables from `ui-context.md` replace the default shadcn tokens in `globals.css` now, or wait until canvas implementation?
- Do we need additional shadcn components (e.g., `DropdownMenu`, `Tooltip`, `Avatar`) before moving to the canvas phase?

## Architecture Decisions

- Use shadcn/ui base-nova style as the component foundation.
- Keep `components/ui/*` files unmodified after generation to avoid breaking upstream component behavior.
- Tailwind CSS v4 with `@theme inline` for token mapping.

## Session Notes

- Design system scaffolding is fully in place. All components in `components/ui/` are default shadcn implementations and should not be edited directly.
- The next session should begin by deciding whether to apply the custom dark theme from `ui-context.md` immediately or proceed to database/auth setup.
