# ZenFlow - Breathing Meditation App

ZenFlow is a Progressive Web App (PWA) designed to guide you through various breathing techniques for relaxation, focus, and wellbeing.

## Features

- Multiple breathing techniques: Box Breathing, 4-7-8, Wim Hof, Pranayama, Alternate Nostril, Cardiac Coherence
- Animated breathing circle with cues and countdown timers
- Customizable inhale, exhale, and hold durations
- Ambient background sounds and breathing cues
- Dark mode support
- Mobile-friendly responsive design
- Works offline as a PWA
- Add to Home Screen on iOS and Android

## How to Use

1. **Open `index.html`** in your browser or host it on a local server (e.g., XAMPP, Python HTTP server).
2. **Select a breathing technique** or customize your own timings.
3. **Choose ambient and breathing sounds** from the dropdowns.
4. **Toggle sound on/off** using the sound button.
5. **Start the breathing exercise** and follow the visual and audio cues.

## PWA Support

- Add ZenFlow to your home screen for a native app-like experience.
- Works offline after first load.
- Includes manifest and service worker for caching.
- Optimized for iOS with Apple touch icon and meta tags.

## Folder Structure

```
/assets
  /ambient       # Ambient background sounds
  /breathe       # Breathing phase sounds
icon.png         # App icon (512x512 recommended)
index.html       # Main app file
manifest.json    # PWA manifest
sw.js            # (Optional) Service worker for offline support
README.md        # This file
```

## Setup Notes

- Place your audio files in `assets/ambient` and `assets/breathe`.
- Filenames should match the dropdown options (spaces URL-encoded as `%20` in HTML).
- The app is fully client-side and requires no backend.

## Credits

- Icons: [Font Awesome](https://fontawesome.com/)
- Sounds: Your own or free sources like Pixabay, Mixkit, etc.
- UI: Tailwind CSS

---

Enjoy mindful breathing with ZenFlow!
