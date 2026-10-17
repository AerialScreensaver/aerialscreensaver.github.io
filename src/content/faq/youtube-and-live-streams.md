---
question: Can I add live YouTube streams or other live videos?
category: Library
order: 42
---

Yes. Open Video Library → **Live Feeds**, click **Add Live Feed** and paste the URL. For YouTube, only live streams work: regular videos and scheduled premieres don't, and there's no channel or playlist support, so paste the live stream's own URL.

Direct stream URLs work the same way: HLS (`.m3u8`), RTSP and RTSPS, and progressive HTTP MP4. Live entries play straight from the network, so they need a connection while they're on screen.

Two of those need a command-line tool: **YouTube needs [yt-dlp](https://github.com/yt-dlp/yt-dlp)** and **RTSP needs [ffmpeg](https://ffmpeg.org/)**. The easiest way to get them is [Homebrew](https://brew.sh) (`brew install yt-dlp ffmpeg`), and Aerial shows you the exact command when one is missing.

A word of warning on YouTube: it breaks whenever YouTube changes something on their end, despite the yt-dlp project's best efforts. When a stream stops working, update yt-dlp first (`brew upgrade yt-dlp`); fixes usually land there within hours. YouTube support in Aerial is best-effort, and I can't offer support for it myself.
