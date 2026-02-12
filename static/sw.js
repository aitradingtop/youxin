importScripts("service-worker.js");

self.addEventListener('install', (e) => {
    console.log('sw install');
});

self.addEventListener('fetch', (e) => {});
