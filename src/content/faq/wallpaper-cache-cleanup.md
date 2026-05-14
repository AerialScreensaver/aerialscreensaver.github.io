---
question: What is the Wallpaper Cache Cleanup doing?
category: Wallpaper
order: 66
---

macOS 26 has a bug in its wallpaper agent: every wallpaper image it's asked to display gets cached, and that cache is **never cleaned**. Aerial with Wallpaper Continuity sets the wallpaper many times per session — every video change, every Space switch, every wake from sleep — so the leak adds up fast. Real-world growth is in the tens of gigabytes over a few weeks.

The Wallpaper Cache Cleanup option (Settings → Wallpaper → **Automatically clean wallpaper cache**, on by default when continuity is enabled on macOS 26) keeps that cache pruned to 2 GB. The first time you enable it, macOS asks you to grant Aerial access to the folder — that's a one-time prompt. We hope Apple fixes the underlying bug in a future macOS update; in the meantime this keeps wallpaper continuity from quietly filling your drive.

Thanks to **Joshua Michaels** ([24 Hour Wallpaper](https://www.24hourwallpaper.com/)) for surfacing the bug and providing the cleanup approach we adapted.
