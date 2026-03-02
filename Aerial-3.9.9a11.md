🚨🚨🚨 This is a test of the Sparkle auto update integration, test #2 🚨🚨🚨


⚠️⚠️⚠️ These alpha versions finally fix the Sequoia/Tahoe black screen issues. Some features still missing, bugs expected. Support for this on Discord, or report issues on github ⚠️⚠️⚠️

**Do not install this if you changed the cache location (to a NAS or an external drive for example and this is important to you).** All Aerial data is stored in  `/Users/Shared/Aerial` and will offer migrating data from the container. Other location support will come back in a subsequent alpha. 

🚨🚨🚨 WARNING : 🚨🚨🚨
- **DO NOT LAUNCH THE APP FROM YOUR DOWNLOAD FOLDER**. After you download the app, move it to your `/Applications` folder (or if you want to test things, you can try `~/Applications`, it's untested but should work). You **will** have issues if you move around the app, so pick one and stay with it, or the new screensaver **will not work**.   

What's new :
- Sparkle integration and auto update testing, test 2
- Rename to Aerial.app for simplicity as the new format screensaver (appex) is part of the app. Because of this, if you have installed a previous beta, you **will** need to remove your old Aerial Companion.app. Two issues may arise : 
	- When opening settings, it will complain that the screensaver is not registered. If that happens, you *have to wait* (could be up to 12 hours) until some internal cache in macOS gets refreshed. It's annoying, but this is the last time this should happen. Various fixes I tried (including the Register button) that works for other kinds of appex don't work for ScreenSaver appexes. 
	- If it says registered, launch the screensaver manually once. If you get a black screen, exit and you may see a system warning that "this app has changed since you last used it". This seems to be a security warning triggered by the name change. Allow it and things will work again. 
Sorry for both inconveniences, that's why those are alphas 😅

Known issues/Various gotchas :
- Music overlay is not working and will require changes as Apple no longer allow us to grab the information in `mediaremoted`. 

Important : 
- If things don't work, open the "new" settings and look at the checklist on top. You should get buttons to resolve issues if any. (register/enable). Report issues about this on discord/github.
- You can be sure you are running the new version if you see a version number at the bottom corner of the screen when you start the screensaver. It disappears after a few seconds and will be removed in the future. 
- You can start fresh if needed by deleting /Users/Shared/Aerial