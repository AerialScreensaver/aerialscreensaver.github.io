---
question: How do I uninstall Aerial?
category: Getting started
order: 90
---

First, if Aerial is your wallpaper or screensaver, pick another one in System Settings › Wallpaper and System Settings › Screen Saver, so macOS isn't left pointing at an extension that no longer exists. Then drag `Aerial.app` from `/Applications` to the Trash.

To remove the downloaded videos and settings as well, delete `/Users/Shared/Aerial/`. The only other trace is a small preferences file in `~/Library/Preferences`. Homebrew users can do all of it with `brew uninstall --zap aerial`.
