self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('vip-card-v1').then((cache) => {
      return cache.addAll([
        '/index.html',
        'https://i.imgur.com/OleuXpc.jpeg',
        'https://www.dropbox.com/scl/fi/qcuibo6bpi0psrdmx2vkp/Misc-ILayMyLoveOnYou.mp3?rlkey=14fglohomgxmueohfu85h0yh5&st=2pz9sfwk&raw=1',
        'https://www.dropbox.com/scl/fi/8yaa69amlqq38s404go7g/Way-Back-Home.mp3?rlkey=3w6087iq48jznanjn578uvqsv&st=7rc65wbs&raw=1',
        'https://www.dropbox.com/scl/fi/syz43s5068jup0pjup5z6/Westlife-My-Love.mp3?rlkey=ny1i20m8oigd6ry254wb6y3u9&st=8dn77mai&raw=1'
        // Add more song URLs if desired
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});