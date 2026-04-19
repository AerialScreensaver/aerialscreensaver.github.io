💡 Still alpha versions, install accordingly. But it's getting close 💪 💡

What's new :
- Live feeds, *finally*. Aerial now handles three kind of live feeds that can be used for showing your local cameras if that's what you want, assuming they support some form of open streaming protocol (not all "cloud" cameras do, or you may need a 3rd party bridge for this). What is supported : 
	- HLS/HTTP : This is natively supported by Aerial, and the best thing to use if available
	- RSTP : Second best, this however requires you have ffmpeg installed on your Mac.
	- yt-dlp streams : This requires yt-dlp, obviously. yt-dlp is provided as is, and is likely to *often* break
- Desktop mode <-> Screensaver continuity. It works as expected all the time ? I probably missed some cases but it's very close, you should see near seamless transitions from all modes, with speed ramp up/down if you use slow desktop playback. It's a cool effect !
- Add independent wind unit choice, and introduce m/s unit for it. 
- Fix unlimited cache not being unlimited 
- Bunch of other fixes

Known issues/Various gotchas :
- Not sure ? 🤞 Maybe I broke your settings if you used a previous alpha ? Live feeds may have issues ?

After you download the app, move it to your `/Applications` or `~/Applications` folder. Auto updates are provided via Sparkle. 

Important : 
- If things don't work, open settings and look at the checklist on top. You should get buttons to resolve issues if any (register/enable). Report issues about this on discord/github.
- You can start fresh if you get stuck by deleting `/Users/Shared/Aerial`. It resets *everything*, including settings. 