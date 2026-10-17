---
question: What does "Automatically clean wallpaper cache" do?
category: Wallpaper
order: 66
---

macOS Sonoma and Tahoe keep an uncompressed copy of every wallpaper image they're asked to display, and never clean that cache. Aerial 4.0's wallpaper continuity feature set a new wallpaper image many times a day, so for people who used it the cache grew by tens of gigabytes over a few weeks. The option in Settings › Storage, on by default, keeps it under 2 GB. The first time it runs, macOS asks you to grant Aerial access to that folder, once.

Aerial 4.1 no longer sets wallpaper images, since it *is* the wallpaper, so the cache stops growing on its own. The option stays so you can reclaim the space it took before you upgraded.

Thanks to **Joshua Michaels** ([24 Hour Wallpaper](https://www.24hourwallpaper.com/)) for surfacing the bug and for the cleanup approach I adapted.
