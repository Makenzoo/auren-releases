const CACHE_NAME = 'auren-service-shell-v3';
const APP_SHELL = ['/mobile', '/backoffice', '/mobile.webmanifest', '/assets/icons/pos.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))));
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin || url.pathname.startsWith('/api/')) return;
  if (url.pathname === '/mobile' || url.pathname === '/backoffice') {
    const cacheKey = url.pathname;
    event.respondWith(fetch(event.request).then(async response => {
      if (response.ok) {
        try { await (await caches.open(CACHE_NAME)).put(cacheKey, response.clone()); }
        catch { /* Keep the live response usable when browser storage is unavailable. */ }
      }
      return response;
    }).catch(async () => (await caches.match(cacheKey)) || Response.error()));
    return;
  }
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
