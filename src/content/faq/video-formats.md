---
question: What video formats can I import?
category: Library
order: 46
---

Aerial uses macOS hardware accelerated video decoding, similar to Quicktime. So anything that plays in QuickTime will play in Aerial. More precisely MP4 or MOV containers with H.264 or HEVC (H.265) are the best supported formats. You can drop files into Video Library → My Videos, or copy them into `/Users/Shared/Aerial/My Videos/`.

If a file doesn't play (older AVI, MKV, AV1), you can transcode it. [HandBrake](https://handbrake.fr) is a user friendly option with a GUI, or [ffmpeg](https://ffmpeg.org) if you prefer a command line option. H.265 with the `hvc1` tag gives the best result: hardware decoding and small files. With ffmpeg:

```
ffmpeg -i input.mkv -c:v hevc_videotoolbox -b:v 8M -tag:v hvc1 output.mp4
```
