---
question: What cameras are supported as live feeds?
category: Library
order: 44
---

Any camera that exposes a direct stream URL — RTSP, RTSPS, HLS (`.m3u8`), or progressive HTTP MP4. Paste it in Video Library → Sources → **Add From Link** and you're done. Prosumer and IP camera brands generally do expose this: Reolink, Ubiquiti / UniFi Protect, Hikvision, Dahua, Amcrest, Foscam, TP-Link Tapo, and Aqara G2H / G3 are all known-good.

Most consumer "cloud" cameras — Ring, Nest, Arlo, Wyze, Blink, Eufy on most models — don't expose a direct URL. The vendor's app is the only sanctioned way to view them, and many only stream on motion or when you open the app, not 24/7. That makes them poor fits for a screensaver even if you can get a stream out.

Third-party bridges can sometimes expose cloud cameras as RTSP: [docker-wyze-bridge](https://github.com/mrlt8/docker-wyze-bridge) for Wyze, and [Home Assistant](https://www.home-assistant.io/) with [go2rtc](https://github.com/AlexxIT/go2rtc) for Ring / Nest / Arlo / Eufy (varies by model and current vendor app version). I don't maintain or endorse any specific bridge — they tend to break when vendors push app updates. Check your camera model's community for what's working right now.
