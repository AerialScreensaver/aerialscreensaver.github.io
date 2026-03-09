⚠️⚠️⚠️ These alpha versions finally fix the Sequoia/Tahoe black screen issues. Some features still missing, bugs expected. Support for this on Discord, or report issues on github ⚠️⚠️⚠️

**Do not install this if you changed the cache location (to a NAS or an external drive for example and this is important to you).** All Aerial data is stored in  `/Users/Shared/Aerial` and will offer migrating data from the container. Other location support will come back in a subsequent alpha. 

After you download the app, move it to your `/Applications` or `~/Applications` folder.

What's new :
- Fix Countdown/Timer overlays
- Fix Battery overalay. Should work again on all macs.
- Fix desktop mode not closing correctly on screen disconnect, and not restarting correctly on reconnect
- More fix to independant mode playback, it seems it still acts up from time to time, report your issues
- Add new auto pause feature for desktop mode, it will pause/restart the desktop mode smoothly if your windows cover a large portion of the screen : 


Known issues/Various gotchas :
- Music overlay is not working and will require changes as Apple no longer allow us to grab the information in `mediaremoted`. 

Important : 
- If things don't work, open the "new" settings and look at the checklist on top. You should get buttons to resolve issues if any. (register/enable). Report issues about this on discord/github.
- You can be sure you are running the new version if you see a version number at the bottom corner of the screen when you start the screensaver. It disappears after a few seconds and will be removed in the future. 
- You can start fresh if you encounter issues by deleting `/Users/Shared/Aerial`