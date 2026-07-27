This is a beta version, and has known issues. This version does **NOT** work on Sequoia. If you run macOS Golden Gate beta, you should use these betas.   

What's new :
- Improve startup time/fluidity of wallpaper <-> screensaver transition, they should be perfectly smooth in all cases now
- You should (generally) no longer see flashing "old" images when starting screensaver
- Fix some crashes that cause the wallpaper to reset
- You can now have the wallpaper rotate periodically if you want, to avoid staying on the same one. This is configurable in settings in Wallpaper > Auto Advance
- More CPU usage optimizations
- Various minor fixes

Known issues : 
- Using an external location for Cache or Expansions doesn't work right now. If you need that feature, stick to stable.

Important : 
- You can start fresh if you get stuck by deleting `/Users/Shared/Aerial`. It resets *everything*, including settings. 
- You can go back to stable if you prefer, you will have to reset your wallpaper manually in that case. 
- When upgrading from one beta to another, you **need** to manually restart the wallpaper. This can be done (most of the times) by running `killall WallpaperAgent` in a terminal. Sometimes that may leads to your Wallpaper being reset to the default ones, before coming back "after a while". You can try triggering it a few times. Restarting macOS is the best way to ensure you are running the latest after updating from one beta to another. This will be improved later. 
- Use Settings > Advanced > Export Diagnostics to generate the logs before posting about your issue in Discord or Github, it will help !