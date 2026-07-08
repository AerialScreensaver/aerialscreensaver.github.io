This is a beta version, and has known issues. Prefer the stable version unless directed to this or you want to give feedback. 

Generally what changes in 4.1 ?
- Aerial 4.1 replaces the "fake" wallpaper mode with a native macOS Wallpaper Extension. In practice, Aerial now shows up as a Wallpaper in System Settings. The recommended way to activate it is to let it activate itself when prompted at startup. 
- When upgrading from one beta to another, you need to manually restart the wallpaper. This can be done (most of the times) by running `killall WallpaperAgent` in a terminal. Sometimes that may leads to your Wallpaper being reset to the default ones, before coming back "after a while". Restarting macOS is the best way to ensure you are running the latest after updating from one beta to another. This will be improved later. 
- The Wallpaper Extension means video plays truly as your wallpaper, there is nothing underneath. This also means video plays on your login screen after waking up from sleep. 
- During 1st startup you can pick between always still wallpaper (the way macOS works) or the video wallpaper with auto pause based on your windows. You can switch from one mode to another by using the "Play/pause" button for Wallpaper in the Aerial menu in your menubar.  
- There's now an home screen that lets you configure easily most things. open the Video Library to see it. This will become the main way to configure things soon.  
- There is now a beta track for auto updates. 

What's new :
- New pause features for wallpaper : pause on low power mode, pause on thermal, pause on camera use
- UI now tells you why your wallpaper is paused
- Settings > Advanced > Export Diagnostics will now make a zip with the logs and your configuration files, so issues can be better reported 
- Possible fixes for some spanned geometry issues
- Message overlays should work again
- Import/export playlist buttons
- You can view release notes in the app now in Settings > Auto Updates (What's new button)
- Better UI for per screen margins
- Various fixes
- Lots of code cleanups

Important : 
- You can start fresh if you get stuck by deleting `/Users/Shared/Aerial`. It resets *everything*, including settings. 
- You can go back to stable if you prefer, you will have to reset your wallpaper manually in that case. 
- Use Settings > Advanced > Export Diagnostics to generate the logs before posting about your issue in Discord or Github, it will help !