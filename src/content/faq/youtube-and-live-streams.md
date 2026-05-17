---
question: Can I add live YouTube streams or other live videos?
category: Library
order: 42
---

Yes — open Video Library → Sources → **Add From Link** and paste the URL. **YouTube limitation: only live feeds work.** Regular VOD videos and scheduled Premieres aren't supported, and there's no channel or playlist scraping — paste the live URL directly.

Direct stream URLs (HLS `.m3u8`, RTSP, RTSPS, and progressive HTTP MP4) work the same way. Live entries play straight from the network, so they need an active connection while they're on screen.

Some of these need third-party command-line tools to work: **YouTube requires [yt-dlp](https://github.com/yt-dlp/yt-dlp)** and **RTSP requires [ffmpeg](https://ffmpeg.org/)**. Both are easiest to install via [Homebrew](https://brew.sh) (`brew install yt-dlp ffmpeg`). Aerial will show the exact install command in-app if one is missing.

A note on YouTube: despite the yt-dlp project's best efforts, YouTube support frequently breaks when YouTube changes things on their end. If a stream stops working, the first thing to try is updating yt-dlp (`brew upgrade yt-dlp`) — fixes usually land there within hours. For deeper issues, check the [yt-dlp project](https://github.com/yt-dlp/yt-dlp) directly. YouTube support in Aerial is provided on a best-effort basis and I can't offer direct support for it.
