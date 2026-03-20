💡 Still alpha versions. Near feature complete, but bugs expected. 💡

What's new :
- Cleanup of settings, moved things around, renamed a few things, should make more sense
- "My videos" feature is part of the video browser now, it fits better there than in settings. 
- Improved some settings panels so they are more understandable. There's a timeline that shows how long screensaver runs, etc. Removed (most) references to Companion so it gets less confusing. Probably missed some, more cleanup needed
- Bring back version overlay that took a vacation somwhow. It briefly shows the current version of Aerial when the screensaver starts. If it annoys you, you can disable it in the Overlays settings. 
- Probable fix for "Others" tab in settings not working correctly ? It's also renamed "Auto-updates" to reflect what's inside it (Sparkle settings). 
- More bug fixes.

Known issues/Various gotchas :
- User made playlist may not stay selected on restart. 
- Automatic downloads are *very* lazy.
- Sunset does not show night videos only right now if you have time adaptation selected and no sunset videos, same issue with sunrise. IF you have no video of a given type it will fallback to *everything*, which is not correct. 

After you download the app, move it to your `/Applications` or `~/Applications` folder. Auto updates are provided via Sparkle. 

Important : 
- If things don't work, open settings and look at the checklist on top. You should get buttons to resolve issues if any (register/enable). Report issues about this on discord/github.
- You can start fresh if you encounter issues by deleting `/Users/Shared/Aerial`