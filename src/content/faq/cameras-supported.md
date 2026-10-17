---
question: What cameras are supported as live feeds?
category: Library
order: 44
---

Any camera that exposes a direct stream URL: RTSP, RTSPS, HLS (`.m3u8`) or progressive HTTP MP4. Paste it in Video Library → Live Feeds → **Add Live Feed** and you're done. Prosumer and IP camera brands generally expose one: Reolink, Ubiquiti / UniFi Protect, Hikvision, Dahua, Amcrest, Foscam, TP-Link Tapo, and Aqara G2H / G3 are all known to work.

Most consumer "cloud" cameras (Ring, Nest, Arlo, Wyze, Blink, Eufy on most models) don't expose a direct URL. The vendor's app is the only sanctioned way to view them, and many only stream on motion or while you have the app open, not 24/7. That makes them a poor fit for a screensaver even when you can get a stream out.

Third-party bridges can sometimes expose cloud cameras as RTSP: [docker-wyze-bridge](https://github.com/mrlt8/docker-wyze-bridge) for Wyze, and [Home Assistant](https://www.home-assistant.io/) with [go2rtc](https://github.com/AlexxIT/go2rtc) for Ring, Nest, Arlo and Eufy, depending on the model and the vendor's current app. I don't maintain or endorse any particular bridge; they tend to break when vendors push updates. Your camera's community will know what works right now.
