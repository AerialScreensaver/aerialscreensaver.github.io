---
question: What permissions does Aerial need?
category: Getting started
order: 15
---

None to run. Aerial doesn't need Full Disk Access or anything like it: its data lives in `/Users/Shared/Aerial/`, which any app can read and write.

You may see three optional prompts:

- **Location Services**, if you want Aerial to find your position for sunrise and sunset times and for the weather overlay. You can also type a location by hand in Settings › Time, and a city in the weather overlay's settings.
- **Access to the macOS wallpaper cache folder**, once, when Aerial offers to keep that cache from growing (see the Wallpaper section below).
- **Access to your old Aerial 3 folder**, if the setup assistant finds videos from Aerial 3 and offers to move them.

Aerial can start at login; that's in Settings › Advanced. It uses Apple's current login-item API, so there's nothing to clean up in your LaunchAgents folder, and if an older version left a file there, Aerial removes it.
