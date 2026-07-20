This is a beta version, and has known issues. Prefer the stable version unless directed to this or you want to give feedback. 

Generally what changes in 4.1 ?
- Aerial 4.1 replaces the "fake" wallpaper mode with a native macOS Wallpaper Extension. In practice, Aerial now shows up as a Wallpaper in System Settings. The recommended way to activate it is to let it activate itself when prompted at startup. 
- When upgrading from one beta to another, you **need** to manually restart the wallpaper. This can be done (most of the times) by running `killall WallpaperAgent` in a terminal. Sometimes that may leads to your Wallpaper being reset to the default ones, before coming back "after a while". You can try triggering it a few times. Restarting macOS is the best way to ensure you are running the latest after updating from one beta to another. This will be improved later. 
- The Wallpaper Extension means video plays truly as your wallpaper, there is nothing underneath. This also means video plays on your login screen after waking up from sleep. 
- During 1st startup you can pick between always still wallpaper (the way macOS works) or the video wallpaper with auto pause based on your windows. You can switch from one mode to another by using the "Play/pause" button for Wallpaper in the Aerial menu in your menubar.  
- There's now an home screen that lets you configure easily most things. open the Video Library to see it. This will become the main way to configure things soon.  
- There is now a beta track for auto updates. 

What's new :
- Add ability to ignore apps for auto-pause calculations
- Fix versions not displaying correctly
- Various minor fixes

Known issues : 
- Using an external location for Cache or Expansions doesn't work right now. If you need that feature, stick to stable.

Important : 
- You can start fresh if you get stuck by deleting `/Users/Shared/Aerial`. It resets *everything*, including settings. 
- You can go back to stable if you prefer, you will have to reset your wallpaper manually in that case. 
- Use Settings > Advanced > Export Diagnostics to generate the logs before posting about your issue in Discord or Github, it will help !