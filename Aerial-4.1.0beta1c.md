## Aerial 4.1.0beta1c — corner-overlap fixes (diagnostic follow-up)

Building on the beta1b evidence (thanks to the tester logs — they nailed it):

- **Frozen wallpaper fix**: a window whose video renderer entered a failed state used to
  stay frozen forever while everything else kept playing. The renderer now detects this,
  flushes, re-primes the current frame and rejoins playback automatically (🚑 in the log).
- **Quarter-window fix attempt**: the "small window in the top-right corner" was proven to
  be macOS compositing our (fully correct) layer tree without the Retina ×2 factor. The
  extension now declares the display scale on its rendering context explicitly instead of
  letting the system infer it. If the small window still appears on this build, the
  remaining bug is on Apple's side and we'll file a Feedback with the evidence.
- Geometry audit now reports per-layer renderer health (st=FAILED / needsFlush).

**For testers:** same drill — reproduce, send `/Users/Shared/Aerial/Logs/wallpaper.txt` and
the app log. Look out for whether the small corner window still happens at all.
