---
question: Can I add live YouTube streams or other live videos?
category: Library
order: 42
---

Yes. Open Video Library → **Live Feeds**, click **Add Live Feed** and paste the URL. For YouTube, only live streams work: regular videos and scheduled premieres don't, and there's no channel or playlist support.

Local camera support via direct stream URLs works the same way: HLS (`.m3u8`), RTSP and RTSPS, and progressive HTTP MP4 can be pasted as live feeds. 

Some of these will require external command-line tools: **YouTube needs [yt-dlp](https://github.com/yt-dlp/yt-dlp)** and **RTSP needs [ffmpeg](https://ffmpeg.org/)**. The easiest way to get them is via [Homebrew](https://brew.sh) (`brew install yt-dlp ffmpeg`). Aerial will let you know the exact command when one is missing.

**Note for Intel Macs** : Homebrew no longer support Intel Macs in macOS 27. Consider using [MacPorts](https://www.macports.org) (`sudo port install yt-dlp ffmpeg`) instead. You can also install both tools by hand: download the macOS builds from the [yt-dlp](https://github.com/yt-dlp/) and [ffmpeg](https://ffmpeg.org/download.html) sites and put them in `/usr/local/bin`. Aerial looks in the Homebrew, MacPorts and `/usr/local/bin` folders. Make sure to follow those project installation instructions. 

A word of warning on YouTube: it breaks whenever YouTube changes something on their end, despite the yt-dlp project's best efforts. When a stream stops working, update yt-dlp first (`brew upgrade yt-dlp`, `sudo port selfupdate && sudo port upgrade yt-dlp`, or `yt-dlp -U` for a manual install); fixes usually land there within hours. 

Also, note that initial setup can be pretty involved and will require some additional setup including some JavaScript runtime. Refer to [their documentation](https://github.com/yt-dlp/yt-dlp/wiki/EJS).  

YouTube support in Aerial is best-effort, and I can't offer direct support for it myself.
