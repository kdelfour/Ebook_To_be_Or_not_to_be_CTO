// Service Worker pour PWA - To be or not to be... a CTO
const CACHE_NAME = 'cto-book-v1.0.0';
const OFFLINE_PAGE = './offline.html';

// Fichiers essentiels à mettre en cache
const CORE_FILES = [
  './',
  './index.html',
  './introduction.html',
  './preface.html',
  './conclusion.html',
  './css/variables.css',
  './css/general.css',
  './css/chrome.css',
  './theme/catppuccin.css',
  './theme/catppuccin-admonish.css',
  './theme/pagetoc.css',
  './theme/navigation.css',
  './fonts/fonts.css',
  './FontAwesome/css/font-awesome.css',
  './book.js',
  './theme/pagetoc.js',
  './theme/navigation.js',
  './mermaid.min.js',
  './mermaid-init.js',
  './favicon.svg',
  './favicon.png',
  './illustrations/cover.png'
];

// Chapitres du livre
const CHAPTER_FILES = [
  './partie1/chapitre1.html',
  './partie1/chapitre2.html',
  './partie1/chapitre3.html',
  './partie1/chapitre4.html',
  './partie2/chapitre5.html',
  './partie2/chapitre6.html',
  './partie2/chapitre7.html',
  './partie2/chapitre8.html',
  './partie3/chapitre9.html',
  './partie3/chapitre10.html',
  './partie3/chapitre11.html',
  './partie4/chapitre12.html',
  './partie4/chapitre13.html',
  './partie4/chapitre14.html',
  './partie5/chapitre15.html',
  './partie5/chapitre16.html',
  './annexes.html'
];

// Installation du Service Worker
self.addEventListener('install', (event) => {
  console.log('[SW] Installation du Service Worker');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Mise en cache des fichiers essentiels');
        return cache.addAll(CORE_FILES);
      })
      .then(() => {
        console.log('[SW] Fichiers essentiels mis en cache');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Erreur lors de la mise en cache:', error);
      })
  );
});

// Activation du Service Worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Activation du Service Worker');
  
  event.waitUntil(
    // Nettoyer les anciens caches
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Suppression du cache obsolète:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[SW] Service Worker activé');
      return self.clients.claim();
    })
  );
});

// Stratégie de mise en cache : Cache First avec fallback réseau
self.addEventListener('fetch', (event) => {
  // Ignorer les requêtes non-GET
  if (event.request.method !== 'GET') return;
  
  // Ignorer les requêtes externes
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Si la ressource est en cache, la retourner
        if (cachedResponse) {
          console.log('[SW] Ressource servie depuis le cache:', event.request.url);
          return cachedResponse;
        }

        // Sinon, essayer de la récupérer du réseau
        return fetch(event.request)
          .then((networkResponse) => {
            // Vérifier que la réponse est valide
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }

            // Cloner la réponse pour la mettre en cache
            const responseToCache = networkResponse.clone();
            
            caches.open(CACHE_NAME)
              .then((cache) => {
                // Mettre en cache les chapitres et ressources importantes
                if (shouldCache(event.request.url)) {
                  console.log('[SW] Mise en cache de:', event.request.url);
                  cache.put(event.request, responseToCache);
                }
              });

            return networkResponse;
          })
          .catch((error) => {
            console.log('[SW] Échec réseau pour:', event.request.url);
            
            // Pour les pages HTML, retourner une page offline
            if (event.request.destination === 'document') {
              return caches.match(OFFLINE_PAGE) || 
                     new Response('Contenu hors-ligne non disponible', {
                       status: 503,
                       statusText: 'Service Unavailable'
                     });
            }
            
            // Pour les autres ressources, retourner une erreur
            return new Response('Ressource non disponible hors-ligne', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
      })
  );
});

// Déterminer si une URL doit être mise en cache
function shouldCache(url) {
  // Mettre en cache les pages HTML du livre
  if (url.includes('.html')) return true;
  
  // Mettre en cache les CSS et JS
  if (url.includes('.css') || url.includes('.js')) return true;
  
  // Mettre en cache les images importantes
  if (url.includes('/illustrations/') || url.includes('favicon')) return true;
  
  // Mettre en cache les fonts
  if (url.includes('/fonts/') || url.includes('/FontAwesome/')) return true;
  
  return false;
}

// Gestion des messages depuis l'application
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('[SW] Message reçu: SKIP_WAITING');
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_CHAPTERS') {
    console.log('[SW] Message reçu: CACHE_CHAPTERS');
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => {
          console.log('[SW] Mise en cache des chapitres en arrière-plan');
          return cache.addAll(CHAPTER_FILES);
        })
        .then(() => {
          console.log('[SW] Tous les chapitres sont maintenant disponibles hors-ligne');
          // Notifier l'application que le cache est complet
          self.clients.matchAll().then((clients) => {
            clients.forEach((client) => {
              client.postMessage({
                type: 'CACHE_COMPLETE',
                message: 'Livre entièrement disponible hors-ligne'
              });
            });
          });
        })
        .catch((error) => {
          console.error('[SW] Erreur lors de la mise en cache des chapitres:', error);
        })
    );
  }
});

// Mise à jour automatique du cache
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('[SW] Synchronisation en arrière-plan');
    event.waitUntil(updateCache());
  }
});

// Fonction pour mettre à jour le cache
async function updateCache() {
  try {
    const cache = await caches.open(CACHE_NAME);
    const requests = await cache.keys();
    
    for (const request of requests) {
      try {
        const response = await fetch(request);
        if (response.status === 200) {
          await cache.put(request, response);
          console.log('[SW] Cache mis à jour pour:', request.url);
        }
      } catch (error) {
        console.log('[SW] Impossible de mettre à jour:', request.url);
      }
    }
  } catch (error) {
    console.error('[SW] Erreur lors de la mise à jour du cache:', error);
  }
}