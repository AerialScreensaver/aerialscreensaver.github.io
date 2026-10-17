---
question: My Mac warms up when Aerial is running. Is that normal?
category: Performance
order: 80
---

There are two usual reasons. On older Intel Macs, decoding 4K HDR video is GPU-intensive, mostly because of the tone mapping needed to show the colors accurately. On Apple Silicon, Aerial decodes everything in hardware and the load is negligible, even at 240 fps. If you're on Intel and notice the heat, switch to 4K HEVC or a 1080p format in Settings › Advanced.

The second reason has nothing to do with Aerial: macOS defers a lot of background work to the moment the screensaver starts. The services that tag your photo and video library are the most common culprit for fans spinning up, especially after you add a large batch of photos or right after a major macOS upgrade, when Photos rescans your whole library.
