---
title: Live desktop wallpaper
summary: The same engine that drives the screensaver, running as your actual desktop. It pauses by itself when windows cover it, so it never spends power on something you can't see.
icon: monitor
order: 2
homepage: false
video: login-screen.mp4
videoPoster: login-screen.jpg
alt: Aerial's video wallpaper still playing on the macOS login screen.
---

Aerial registers as a native macOS wallpaper extension. It appears in System Settings › Wallpaper next to Apple's own wallpapers, the video is your real desktop with nothing underneath, and it keeps playing on the login screen after your Mac wakes from sleep.

When you first open Aerial, the setup assistant asks what you want: **No wallpaper** (just the screensaver), **Still wallpaper** (a frame from the current video, refreshed as videos change, the way Apple's own video wallpapers behave once paused) or **Live wallpaper** (the video itself, pausing when windows cover it). You can switch between still and live at any time from the Wallpaper card in the menu bar popover.

A video playing behind a wall of windows would waste battery and GPU for nothing, so Aerial watches how much of your desktop is visible and pauses past a threshold you choose, 60% covered by default. Settings › Wallpaper shows which apps are covering it right now, with live percentages, and lets you ignore the ones that shouldn't count, such as utilities that keep a transparent window over the whole screen. The wallpaper can also pause on battery, under thermal pressure, in Low Power Mode, or while your camera is in use. And if you'd rather not look at the same paused frame all afternoon, **Auto-Advance** moves to a new video on a schedule of your choosing, even while paused.
