💡 Still alpha versions. Near feature complete, but bugs expected. 💡

What's new :
- Continuity between desktop and screensaver. Not 100% perfect but videos should resume at the right time in the right situation (there may be a few seconds lag that will be fixed later)
- Redone launch at startup implementation using the new SMAppService API. 
- Redo Auto updates panel not being wired to the correct Sparkle settings. May fix some crashes
- Massive massive code cleanup.
- More bug fixes.

Known issues/Various gotchas :
- User made playlist may not stay selected on restart. 
- Automatic downloads are *very* lazy.
- Sunset does not show night videos only right now if you have time adaptation selected and no sunset videos, same issue with sunrise. IF you have no video of a given type it will fallback to *everything*, which is not correct. 

After you download the app, move it to your `/Applications` or `~/Applications` folder. Auto updates are provided via Sparkle. 

Important : 
- If things don't work, open settings and look at the checklist on top. You should get buttons to resolve issues if any (register/enable). Report issues about this on discord/github.
- You can start fresh if you encounter issues by deleting `/Users/Shared/Aerial`