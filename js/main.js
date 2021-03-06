this.addEventListener('activate', function(event) {
    var cachesToKeep = ['v2'];
  
    event.waitUntil(
      caches.keys().then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          if (cachesToKeep.indexOf(key) === -1) {
            return caches.delete(key);
          }
        }));
      })
    );
  });