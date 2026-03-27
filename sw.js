self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('mlbb').then(cache => cache.addAll(['./']))
  );
});
