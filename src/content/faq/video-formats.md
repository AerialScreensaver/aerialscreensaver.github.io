---
question: What video formats can I import?
category: Library
order: 46
---

If QuickTime plays it, Aerial plays it. The sweet spot is MP4 or MOV containers with H.264 or HEVC (H.265). Drop files into Video Library → My Videos (or copy them into `/Users/Shared/Aerial/My Videos/`).

If your file doesn't play (older AVI, MKV, niche codecs), transcode it. Use [HandBrake](https://handbrake.fr) for a GUI workflow or [ffmpeg](https://ffmpeg.org) on the command line. H.265 with the `hvc1` tag gives the best playback — hardware decode plus small files. ffmpeg example:

```
ffmpeg -i input.mkv -c:v hevc_videotoolbox -b:v 8M -tag:v hvc1 output.mp4
```
