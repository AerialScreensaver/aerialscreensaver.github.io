---
question: My Mac warms up when Aerial is running. Is that normal?
category: Performance
order: 80
---

4K HDR video decoding is GPU-intensive on older Intel Macs, particularly because of the tone mapping needed to display the colors accurately. On Apple Silicon, Aerial uses full hardware decoding and the load is insignificant in practice — even at 240fps. If you're on Intel and notice heat, switch to a 4K SDR variant in Format settings, or even 1080p if it's still a concern.
