This version does **NOT** work on Sequoia. It *does* have a limitation on external drive usage which is not functional, but is otherwise stable, and the most up-to-date. If you run macOS Tahoe or Golden Gate beta, you should consider using these betas.   

What's new :
- Likely last beta before release
- Add new dock mode, if you don't want to Aerial to be in your menu bar, you can keep it in your dock instead. While running, clicking the icon in the dock will bring the home screen for configuration !
- Fix for multiple bugs with multi monitor issues that were introduced in beta15. Aerial is now a lot more robust with the most esotheric/transient dock/displaylink setups and should do the right thing by default 
- Fix some crashes
- Lots of hardening for various edge cases in some setups that could lead to black screens/crashes
- After an update, Aerial restarts the wallpaper extension, so the new versions runs immediately.
- Various extra fixes

Known issues : 
- Using an external location for Cache or Expansions doesn't work right now. If you need that feature, stick to stable.

Important : 
- You can start fresh if you get stuck by deleting `/Users/Shared/Aerial`. It resets *everything*, including settings. 
- You can go back to stable if you prefer, you will have to reset your wallpaper manually in that case. 
- When upgrading from one beta to another, you **need** to manually restart the wallpaper. This can be done (most of the times) by running `killall WallpaperAgent` in a terminal. Sometimes that may leads to your Wallpaper being reset to the default ones, before coming back "after a while". You can try triggering it a few times. Restarting macOS is the best way to ensure you are running the latest after updating from one beta to another. This will be improved later. 
- Use Settings > Advanced > Export Diagnostics to generate the logs before posting about your issue in Discord or Github, it will help !