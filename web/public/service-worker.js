self.addEventListener('install', function (e) {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  self.registration
    .unregister()
    .then(function () {
      if (caches) {
        caches.keys().then(async (names) => {
          await Promise.all(names.map((name) => caches.delete(name)));
        });
      }
      return self.clients.matchAll();
    })
    .then(function (clients) {
      clients.forEach((client) => client.navigate(client.url));
    });
});
