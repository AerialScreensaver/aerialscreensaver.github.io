⚠️⚠️⚠️ Still alpha versions. Some features missing, bugs expected. ⚠️⚠️⚠️

What's new :
- Fix missing icon for battery overlay when plugged in 
- More fixes for desktop mode not always understanding display mode. 
- Fix auto-pause creating black screens if you had fades enabled
- Auto-pause has a better understanding of video framerate, and adjust the start/stop animation on low fps videos 
- Add opacity setting for overlays
- Add vertical spacer overlay for more precise control
- Overlays can be dragged directly in the editor after they have already been placed

Known issues/Various gotchas :
- Music overlay is not working and will require changes as Apple no longer allow us to grab the information in `mediaremoted`. 


**Do not install this if you changed the cache location (to a NAS or an external drive for example and this is important to you).** All Aerial data is stored in  `/Users/Shared/Aerial` and will offer migrating data from the container. Other location support will come back in a subsequent alpha. 

After you download the app, move it to your `/Applications` or `~/Applications` folder.

Important : 
- If things don't work, open the "new" settings and look at the checklist on top. You should get buttons to resolve issues if any. (register/enable). Report issues about this on discord/github.
- You can be sure you are running the new version if you see a version number at the bottom corner of the screen when you start the screensaver. It disappears after a few seconds and will be removed in the future. 
- You can start fresh if you encounter issues by deleting `/Users/Shared/Aerial`