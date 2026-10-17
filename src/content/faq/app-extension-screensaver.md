---
question: Why isn't Aerial a .saver file like other screensavers?
category: Getting started
order: 18
---

Aerial 4 no longer ships as a `.saver` bundle. The screensaver and the wallpaper are one macOS extension (an `.appex`) bundled inside `Aerial.app`, the same mechanism Apple uses for its own wallpapers and screensavers. Apple has never documented it for third parties, so Aerial relies on private APIs to do it, and as far as I know it's the first third-party screensaver that does.

What it gets you:

- **Compatibility.** No more random black screens, no stacked screensaver instances after wake, and a long list of bugs that piled up against the legacy `.saver` host over the years simply doesn't apply any more.
- **Isolation.** Aerial runs in its own process and sandbox, not inside Apple's shared legacy screensaver host next to every other `.saver` you have installed.
- **A real wallpaper.** The same extension plays as your desktop and on the lock screen, which no `.saver` can do.

It took a rewrite from Aerial 3 to get there. If you'd like to build your own extension-based screensaver, I put together a minimal sample project at [AerialScreensaver/AppexSaverMinimal](https://github.com/AerialScreensaver/AppexSaverMinimal) to get you started.
