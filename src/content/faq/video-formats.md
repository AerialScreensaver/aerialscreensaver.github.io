---
question: What video formats can I import?
category: Library
order: 46
---

If QuickTime plays it, Aerial plays it. The sweet spot is an MP4 or MOV container with H.264 or HEVC (H.265). Drop files into Video Library → My Videos, or copy them into `/Users/Shared/Aerial/My Videos/`.

If a file doesn't play (older AVI, MKV, niche codecs), transcode it. [HandBrake](https://handbrake.fr) does it with a GUI, [ffmpeg](https://ffmpeg.org) from the command line. H.265 with the `hvc1` tag gives the best result: hardware decoding and small files. With ffmpeg:

```
ffmpeg -i input.mkv -c:v hevc_videotoolbox -b:v 8M -tag:v hvc1 output.mp4
```
