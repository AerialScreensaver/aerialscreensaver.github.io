---
question: Why don't my own videos slow down as smoothly as the built-in ones?
category: Library
order: 41
---

It's the frame rate. The aerials Aerial plays by default are 240 frames per second, and that's what lets the live wallpaper run in slow motion (down to 1/8× speed) and ease to a stop over a few seconds when it pauses, without looking choppy. Most videos you shoot or download are 24, 30 or 60 fps. Slowed down to 1/8×, a 30 fps video only shows about 4 new frames per second, and below 60 fps Aerial stops the video almost instantly when it pauses instead of easing out, as a slow stop would step visibly from frame to frame.

You can get the same effect with your own videos by converting them to 240 fps with [ffmpeg](https://ffmpeg.org), which creates the in-between frames using motion interpolation. If you don't have it, install it with [Homebrew](https://brew.sh): `brew install ffmpeg`.

Using the Mac's hardware encoder (larger files):

```
ffmpeg -i in.mp4 \
  -vf "minterpolate=fps=240:mi_mode=mci:mc_mode=aobmc:me_mode=bidir:vsbmc=1" \
  -c:v hevc_videotoolbox -q:v 65 -profile:v main10 -pix_fmt p010le \
  -tag:v hvc1 -c:a copy \
  out_240.mp4
```

Using the x265 software encoder (files less than half the size, a little slower):

```
ffmpeg -i in.mp4 \
  -vf "minterpolate=fps=240:mi_mode=mci:mc_mode=aobmc:me_mode=bidir:vsbmc=1" \
  -c:v libx265 -crf 18 -preset slow -pix_fmt yuv420p10le \
  -tag:v hvc1 -c:a copy \
  out_240.mp4
```

Be patient: the interpolation itself runs on a single CPU core and takes most of the time, whichever encoder you pick. On an M1 Ultra, 2 seconds of 4K took about 7 minutes with either command, so plan on a few hours per minute of 4K video. Try a short excerpt first by adding `-t 10` right after `-i in.mp4`. Interpolated frames are an educated guess, so fast or complex motion can show some warping; slow, steady footage like drone shots converts best. Once converted, add the new file to My Videos like any other.
