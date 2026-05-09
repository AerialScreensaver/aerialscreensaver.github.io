---
title: Live camera feeds
summary: Stream RTSP cameras, HLS feeds, or YouTube live URLs directly as your screensaver. Real-time, no caching.
icon: radio
order: 70
homepage: false
---

Add a live URL — RTSP camera, HLS stream, or YouTube live — and Aerial transmuxes it on the fly into a screensaver-ready source. There's no caching: what you see is the stream as it happens. RTSP needs `ffmpeg` and YouTube live needs `yt-dlp`, both via Homebrew; if either is missing, the app shows the install command.
