---
question: What is an AppExtension screensaver?
category: Getting started
order: 18
---

Apple introduced AppExtension screensavers (`.appex`) all the way back in macOS 10.15 (Catalina) — that's the format Apple's own video screensavers (the aerial views built into macOS) have used ever since. But the API has been private the entire time; Apple has never documented it publicly, which is why every other third-party screensaver still ships in the older `.saver` bundle format.

Aerial 4 is the first third-party screensaver to implement this via the private API. We hope that after all these years, Apple will finally make it public soon!

What this gets you in practice:

- **Better compatibility** — no more random black screens, no more stacking screensaver instances on wake, and a long list of long-standing bugs that piled up against the legacy `.saver` host over the years are simply gone.
- **Better isolation and stability** — Aerial runs in its own process and sandbox, not bundled inside Apple's shared legacy screensaver host alongside every other `.saver` you have installed.
- **Better permission needs** — you no longer need to grant Full Disk Access for Aerial to work.

This required a significant rewrite from Aerial 3, which still uses the older `.saver` format.

The API is private and still undocumented by Apple. If you'd like to build your own AppExtension screensaver, I've put together a minimal sample project at [AerialScreensaver/AppexSaverMinimal](https://github.com/AerialScreensaver/AppexSaverMinimal) to get you started.
