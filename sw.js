const CACHE_NAME = 'zenflow-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.png',
  // Ambient sounds
  '/assets/ambient/Calm%20Ambient.mp3',
  '/assets/ambient/Campfire.mp3',
  '/assets/ambient/Forest%20Ambience.mp3',
  '/assets/ambient/Forest%20Stream.mp3',
  '/assets/ambient/Meditation%20Bell.mp3',
  '/assets/ambient/Ocean%20Waves.mp3',
  '/assets/ambient/Rain%20Ambient.mp3',
  '/assets/ambient/Singing%20Bowls.mp3',
  // Breathing sounds
  '/assets/breathe/Soft%20Whoosh.mp3',
  '/assets/breathe/Deep%20Breath.mp3',
  '/assets/breathe/Gentle%20Chime.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});
