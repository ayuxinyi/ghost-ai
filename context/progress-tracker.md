# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- **02 – Editor** 🚧 In Progress

## Current Goal

- Build the core editor workspace: editor navbar, project sidebar, and dialog pattern.

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
- [x] Configure `globals.css` with custom dark theme variables from ui-context.md.

## In Progress

- [x] Create `components/editor/editor-navbar.tsx` — Editor Navbar
- [x] Create `components/editor/project-sidebar.tsx` — Project Sidebar
- [x] Dialog pattern ready (styled via globals.css variables)

## Next Up

- **03 – Database & Auth**
  - Set up Prisma schema for projects, collaborators, specs, and task runs.
  - Configure Clerk authentication and route protection.
  - Add project creation and ownership logic.
- **04 – Collaborative Canvas**
  - Integrate Liveblocks for real-time rooms and presence.
  - Integrate React Flow for node/edge canvas editing.
  - Implement canvas snapshot persistence to Vercel Blob.
- **05 – Starter System Designs**
  - Create prebuilt template library (monolith, microservices, event-driven, serverless, etc.).
  - Implement template import into active canvas room.
- **06 – AI Architecture Generation**
  - Set up Trigger.dev background tasks.
  - Implement AI design generation from natural language prompts.
- **07 – Spec Generation**
  - Implement Markdown spec generation from canvas graph.
  - Persist specs to Vercel Blob and link to project records.

## Open Questions

- Do we need additional shadcn components (e.g., `DropdownMenu`, `Tooltip`, `Avatar`) before moving to the canvas phase?

## Architecture Decisions

- Use shadcn/ui base-nova style as the component foundation.
- Keep `components/ui/*` files unmodified after generation to avoid breaking upstream component behavior.
- Tailwind CSS v4 with `@theme inline` for token mapping.
- Editor sidebar uses floating overlay pattern (absolute positioning over canvas, no layout shift).

## Session Notes

- Design system scaffolding is fully in place. All components in `components/ui/` are default shadcn implementations and should not be edited directly.
- Phase 02 Editor components delivered: EditorNavbar (fixed top bar with sidebar toggle) and ProjectSidebar (floating left panel with Tabs, slide animation, and new-project button). Dialog pattern confirmed compatible with the dark theme.
