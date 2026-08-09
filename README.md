# Glindo

AI workspace for creators — content gap finder, script studio, and SEO tools
in one place. This is the MVP scaffold: real, working Next.js pages using
the locked brand identity, with static placeholder data where the AI/API
integrations will eventually go.

## Run it

```
npm install
npm run dev
```

Open http://localhost:3000 — you'll see the landing page. Click "Get started
free" to reach the dashboard, and "Gap Finder" in the sidebar for that screen.

This has already been build-tested (`npm run build`) with zero errors.

## What's here

- `app/page.tsx` — landing page
- `app/dashboard/page.tsx` — project dashboard (static example projects)
- `app/gap-finder/page.tsx` — Gap Finder screen (static example ideas)
- `app/globals.css` — the full Glindo design token system (colors,
  spacing, component classes) — this is your single source of truth for
  styling, matching the locked brand identity
- `components/` — shared building blocks: `AppShell`, `Sidebar`, `TopNav`,
  `ProjectCard`, `GapIdeaCard`

## What's NOT here yet (on purpose)

Following the build order from the roadmap — cheapest and fastest first —
this scaffold is UI-only. No real data, no AI calls, no auth yet. Next steps
in order:

1. **Wire the Gap Finder to real data.** Replace the static `ideas` array in
   `app/gap-finder/page.tsx` with a real API route that calls the YouTube
   Data API (channel + competitor data) and the Claude API (scoring), using
   the exact validated prompts from your manual testing round.
2. **Build Script Studio and SEO Center pages**, reusing `AppShell` and the
   same card/badge classes already in `globals.css` — the visual language
   is already defined, so these should go fast.
3. **Add authentication** (Supabase Auth is a good free option) so a
   creator's projects actually persist between visits.
4. **Deploy privately** to Vercel and test with your real beta creators
   before opening it up publicly.

## Notes

- `TZ` in the top-right avatar is a placeholder for the logged-in creator's
  initials — wire this to real user data once auth is in.
- Every color in `globals.css` is a CSS variable prefixed `--glindo-*` —
  never hardcode a hex value in a component; reference the variable so the
  whole app stays consistent if the palette ever changes.
