💡 Still alpha versions. Near feature complete, but bugs expected. 💡

What's new :
- New video browser that lets you browse what's available. It also gives you information on what will play based on the time adaptation that you picked in settings. 
- You can use the video browser to change the time a video should appear (day, night, sunset, sunrise)
- Fix time adaptation that didn't work in previous alphas
- Overlays now hide themselves by default when macOS logging in ui comes up, avoiding those not super pretty overlaps. You can disable this in Overlay settings 
- Fix Advanced panel sometimes closing when getting selected in settings
- Fix *one more* bug with multimonitor and fades disabled. 
- Remove old settings panel 

Known issues/Various gotchas :
- Music overlay is not working and will require changes as Apple no longer allow us to grab the information in `mediaremoted`. 


**Do not install this if you changed the cache location (to a NAS or an external drive for example and this is important to you).** All Aerial data is stored in  `/Users/Shared/Aerial` and will offer migrating data from the container. Other location support will come back in a subsequent alpha. 

After you download the app, move it to your `/Applications` or `~/Applications` folder.

Important : 
- If things don't work, open the "new" settings and look at the checklist on top. You should get buttons to resolve issues if any. (register/enable). Report issues about this on discord/github.
- You can be sure you are running the new version if you see a version number at the bottom corner of the screen when you start the screensaver. It disappears after a few seconds and will be removed in the future. 
- You can start fresh if you encounter issues by deleting `/Users/Shared/Aerial`