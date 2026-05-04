💡 Still alpha version, install with caution. 💡

What's new :
- Add tvOS 26 source
- Add optional md5 checking for downloads to avoid corrupted videos
- Add download resume support, handling for stale download URLs
- Many improvements to Video Library UI/functionality
- Add Expansions in Video Library
- Improve accessibility with toolips, voice over support and other changes
- Fix startup bug that changed video when you opened the popover for the first time
- Fix now playing section not showing the right videos when you have multiple screens
- Improved settings UI
- Better thumbnail generation, faster/less downloads required
- Bunch of fixes to Wallpaper Continuity feature
- Final (hopefully) fix for screen detection in the extension. 
- Fix spanned mode not working in many situations in the extension
- Fix auto pause in desktop mode not correctly taking into account both screens to play/pause
- Add activity Log
- Bunch of various fixes

Known issues/Various gotchas :
- Wallpaper Continuity can sometimes show the wrong wallpaper after sleep
- Wallpaper Continuity does not update (yet) all your Spaces if you use that macOS feature. 

After you download the app, move it to your `/Applications` or `~/Applications` folder. Auto updates are provided via Sparkle. 

Important : 
- If things don't work, open settings and look at the checklist on top. You should get buttons to resolve issues if any (register/enable). Report issues about this on discord/github.
- You can start fresh if you get stuck by deleting `/Users/Shared/Aerial`. It resets *everything*, including settings. 