const cacheName = "v1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll([
        "/static/js/bundle.js",
        "/index.html",
        "./",
        "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?v=18",
        "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=18",
        "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/UK.png?v=18",
        "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?v=18",
        "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/I5.png?v=18",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (event.request.url === "http://localhost:3000") {
    event.waitUntil(
      this.registration.showNotification("Internet", {
        body: "internet not working",
      })
    );
  }

  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((res) => {
        return res;
      })
    );
  }
});
