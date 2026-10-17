---
question: Can I keep the videos on an external drive?
category: Library
order: 49
---

Yes. In Settings › Cache, turn on **Use Custom Location for Cache** and pick a folder on the drive. Aerial creates a disk image in that folder and keeps the videos inside it. That detour is what lets the wallpaper extension play them: it's sandboxed and can't read external volumes directly, but it can read the image once Aerial has attached it. You can keep expansion packs there too, with the option just below. When the drive isn't plugged in, those videos simply don't play until it comes back.

Two caveats. Network shares (SMB, a NAS) can't hold the disk image unless the share supports full sync, the same requirement Time Machine has, and Aerial tells you when a folder won't work. And if you come from Aerial 4.0 or Aerial 3 with videos already on an external drive, Aerial offers to convert that folder when it finds it.

The same panel has the cache size limit and a **Trim Cache to Limit…** button if you want space back right away.
