---
question: My Mac warms up when Aerial is running. Is that normal?
category: Performance
order: 80
---

There are two possible reasons for this. On older Intel macs, 4K HDR video decoding can be  GPU-intensive, particularly because of the tone mapping needed to display the colors accurately. On Apple Silicon, Aerial uses full hardware decoding and the load is insignificant in practice — even at 240fps. If you're on Intel and notice heat, switch to a 4K SDR variant in Format settings, or even 1080p if it's still a concern.

The second reason is not specific to Aerial : macOS does defer many tasks to when the screensaver starts. macOS background services for auto tagging your photo/video library is the most common culprit for increased heat/fan usage. This is particularly apparent after you add a large bunch of photos/videos in your library, or just after a major macOS upgrade where `Photos.app` will rescan your entire library to update the tags. 