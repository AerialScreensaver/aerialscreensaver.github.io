Aerial 4.0.0 is finally out 🍾 This took a long while, so a massive thanks to all the alpha testers who helped with their testing, bug reports and feedback !

If you are upgrading from the old Aerial Companion, close it in the menubar before install. After you download the app, move it to your `/Applications` or `~/Applications` folder and launch it, it will offer to migrate your data and cleanup the old versions. 

Auto updates are provided via Sparkle from now on. 

What's new (very short recap) :
- Aerial is now distributed as an AppExtension for perfect compaibility with macOS Sonoma and Tahoe. No more black screens bugs or other annoyances that have plagued previous versions of all third party screensavers to date : Aerial uses the same (private) API that Apple uses nowadays for it's screensavers
- Wallpaper mode with auto-pause : by default plays 4K 240fps videos at a slower pace on desktop, pausing when your windows cover your screens to save gpu, and transitionning to/from screensaver.  
- New My Videos feature for easy import of your own videos
- Live feed support : RTSP, http streaming and `yt-dlp` are supported (`yt-dlp support provided as a best effort)
- New visual overlay editor, just drag'n drop, with more options than ever before. Per screen, with the ability to now have separate overlays on desktop if you want
- Global hotkeys support to play/pause/prev/next 
- New video library with a host of new features. Including ordered, fully customizable playlists
- And plenty more, check https://aerialscreensaver.github.io/ for more

Important : 
- If things don't work, open the app settings and look at the checklist on top. You should get buttons to resolve issues if any.
- You can start fresh if you get stuck by deleting `/Users/Shared/Aerial`. It resets *everything*, including settings. 