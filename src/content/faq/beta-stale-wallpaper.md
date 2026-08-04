---
question: I updated from one 4.1 beta to another and the wallpaper looks stale or frozen.
category: Known limitations
order: 78
badge: Beta
---

When updating between betas, macOS keeps the previous extension running. Restarting your Mac is the reliable fix; running `killall WallpaperAgent` in Terminal usually works too (your wallpaper may briefly reset to a default before coming back). This will be handled automatically in a later beta.
