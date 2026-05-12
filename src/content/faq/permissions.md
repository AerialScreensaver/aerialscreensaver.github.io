---
question: What permissions does Aerial require?
category: Getting started
order: 15
---

Unlike previous versions, Aerial 4 no longer requires Full Disk Access to function. All its data lives in `/Users/Shared/Aerial/` and can be read and written without extra permissions.

The only optional permission you may see prompted is **Location Services**. Aerial asks for it if you want it to automatically detect your location for sunrise/sunset time calculation or for weather forecasts. It's entirely optional — you can also specify your position manually, or set the city you want forecasts from.

Aerial can be set to launch at startup if you'd like — that's controlled from **Settings → Desktop**. The new version use the latest API from Apple and will, unlike the previous version, not leave a file in your **Launch Services** folder. Installation will automatically remove the offending file if it exists. 
