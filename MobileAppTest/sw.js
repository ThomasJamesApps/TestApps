self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open("Rugby-Clocks-App").then((cache) => {
            return cache,addAll([
                "/",
                "/RugbyTimer_V3.html",
                "/script.js"
            ]);
        })
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});