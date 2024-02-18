const cacheName = "v1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll([
        "/static/js/bundle.js",
        "/index.html",
        "./",
        "/favicon.ico",
        "/static/js/vendors-node_modules_react-icons_ci_index_mjs-node_modules_react-icons_fa6_index_mjs-node_mod-63ca8c.chunk.js",
        "/static/js/src_components_Cars_Cars_tsx.chunk.js",
        "/static/js/src_components_Flights_Flights_tsx.chunk.js",
        "/static/js/src_components_Hotels_Hotels_tsx.chunk.js",
        "/static/js/src_components_Activities_Activities_tsx.chunk.js",
        "/static/js/src_components_Home_Home_tsx.chunk.js",
        "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?v=18",
        "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=18",
        "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/UK.png?v=18",
        "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?v=18",
        "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/I5.png?v=18",
        "/static/js/vendors-node_modules_react-icons_ci_index_mjs-node_modules_react-icons_fa6_index_mjs-node_mod-63ca8c.chunk.js",
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
