var CACHE = 'lvbooks-v3';
var SHELL = [
  '/aplicativo/',
  '/aplicativo/index.html',
  '/aplicativo/manifest.json',
  '/aplicativo/data.js'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(c) { return c.addAll(SHELL); })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE; }).map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  // Só intercepta requisições do próprio domínio do app
  // Externas (Google Drive, fontes, capas, CDN) vão direto à rede sem overhead do SW
  if (e.request.url.indexOf(self.location.origin) !== 0) return;

  e.respondWith(
    caches.match(e.request).then(function(r) {
      return r || fetch(e.request).catch(function() {
        return caches.match('/aplicativo/');
      });
    })
  );
});
