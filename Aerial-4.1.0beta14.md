This version does **NOT** work on Sequoia. It *does* have a limitation on external drive usage which is not functional, but is otherwise stable, and the most up-to-date. If you run macOS Tahoe or Golden Gate beta, you should consider using these betas.   

What's new :
- Fix support for the latest `yt-dlp` command line changes

Known issues : 
- Using an external location for Cache or Expansions doesn't work right now. If you need that feature, stick to stable.

Important : 
- You can start fresh if you get stuck by deleting `/Users/Shared/Aerial`. It resets *everything*, including settings. 
- You can go back to stable if you prefer, you will have to reset your wallpaper manually in that case. 
- When upgrading from one beta to another, you **need** to manually restart the wallpaper. This can be done (most of the times) by running `killall WallpaperAgent` in a terminal. Sometimes that may leads to your Wallpaper being reset to the default ones, before coming back "after a while". You can try triggering it a few times. Restarting macOS is the best way to ensure you are running the latest after updating from one beta to another. This will be improved later. 
- Use Settings > Advanced > Export Diagnostics to generate the logs before posting about your issue in Discord or Github, it will help !