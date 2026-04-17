💡 Still alpha versions, install accordingly. But it's getting close 💪 💡

What's new :
- Add overlay rotation setting, you can have overlays rotate to alleviate burn-in if you are concerned by this.
- Add a tiny spinner when you have advanced screen detection on. If you don't have two monitors of the same size, you should disable this option in Displays (at the bottom). It's now off by default for new installs. I may change this in the future or make it optional. 
- Fix nightshift not correctly triggering in the extension. It properly uses the cached values now
- Fix selection change not sticking on restarts (for good!)
- Fix selection change sometimes not triggering a download (it should download a video, if it has none, after a few seconds)
- Fix auto download quite not auto downloading 
- Remove tons of dead code/cleanup of deprecated/moved settings. If you have issues, you may want to delete your `/Users/Shared/Aerial` folder and start fresh. It's an alpha, you were warned !
- Fix default settings not being quite right (default video format, cache size, advanced detection being forced on while it really should not)
- Fix fallback when you have no videos, there's a new message telling you what's wrong now. And a cool fallback !

Known issues/Various gotchas :
- Continuity between screensaver and desktop mode doesn't work as expected. This may be the last known issue until first proper beta 🤞

After you download the app, move it to your `/Applications` or `~/Applications` folder. Auto updates are provided via Sparkle. 

Important : 
- If things don't work, open settings and look at the checklist on top. You should get buttons to resolve issues if any (register/enable). Report issues about this on discord/github.
- You can start fresh if you get stuck by deleting `/Users/Shared/Aerial`. It resets *everything*, including settings. 