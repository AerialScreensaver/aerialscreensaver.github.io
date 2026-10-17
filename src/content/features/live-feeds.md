---
title: Live camera feeds
summary: Play an RTSP camera, an HLS stream or a YouTube live URL as your screensaver or wallpaper, in real time.
icon: radio
order: 30
homepage: true
imageSrc: live-feeds.webp
alt: The Add Live Feed dialog in Aerial, with fields for a name, a stream URL (HTTPS, RTSP, or YouTube), and a play-for duration slider.
---

Add a feed from Video Library → Live Feeds, give it a name and a URL, and it joins your rotation like any other video, except that it plays live from the network and is never cached. HLS streams (`.m3u8`) and progressive MP4 play directly. RTSP cameras need `ffmpeg`, which Aerial uses to repackage the stream on the fly, and YouTube live streams need `yt-dlp` to find the stream URL. Both install with Homebrew, and Aerial shows you the exact command when one is missing.
