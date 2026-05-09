---
question: Why does my desktop wallpaper look off when an HDR video is playing?
category: Known limitations
order: 70
---

When the active video is HDR, Wallpaper Continuity has to pull a still frame and write it to the macOS wallpaper image. The Dolby Vision tone-mapping that makes the *playing* video look correct can't be applied to a single extracted frame (Apple only exposes that decoder path to live `AVPlayerLayer` rendering), so the wallpaper image shows wrong colors. The video itself looks great on screen — only the desktop background snapshot is affected.

**Workaround**: pick an SDR format for Wallpaper Continuity, or turn the feature off when using HDR. The app shows a warning in Settings → Desktop when this combination is selected.
