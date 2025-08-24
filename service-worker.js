let wasmBuffer = null;
let pckBuffer = null;

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('message', (event) => {
  if (event.data.type === 'SET_ARRAY_BUFFERS') {
    wasmBuffer = event.data.wasm;
    pckBuffer = event.data.pck;
  }
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  if (url.pathname.endsWith('index.wasm') && wasmBuffer) {
    event.respondWith(new Response(wasmBuffer, {
      headers: { 'Content-Type': 'application/wasm' }
    }));
    return;
  }
  
  if (url.pathname.endsWith('index.pck') && pckBuffer) {
    event.respondWith(new Response(pckBuffer, {
      headers: { 'Content-Type': 'application/octet-stream' }
    }));
    return;
  }
  
  // For all other requests, use the network
  event.respondWith(fetch(event.request));
});