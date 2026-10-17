---
question: Can I add live YouTube streams or other live videos?
category: Library
order: 42
---

Yes. Open Video Library → **Live Feeds**, click **Add Live Feed** and paste the URL. For YouTube, only live streams work: regular videos and scheduled premieres don't, and there's no channel or playlist support.

Local camera support via direct stream URLs works the same way: HLS (`.m3u8`), RTSP and RTSPS, and progressive HTTP MP4 can be pasted as live feeds. 

Some of these will require external command-line tools: **YouTube needs [yt-dlp](https://github.com/yt-dlp/yt-dlp)** and **RTSP needs [ffmpeg](https://ffmpeg.org/)**. The easiest way to get them is via [Homebrew](https://brew.sh) (`brew install yt-dlp ffmpeg`). Aerial will let you know the exact command when one is missing.

A word of warning on YouTube: it breaks whenever YouTube changes something on their end, despite the yt-dlp project's best efforts. When a stream stops working, update yt-dlp first (`brew upgrade yt-dlp`); fixes usually land there within hours. YouTube support in Aerial is best-effort, and I can't offer support for it myself.
