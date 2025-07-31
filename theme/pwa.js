// PWA - Gestion de l'installation et du cache
(function() {
    'use strict';

    let deferredPrompt = null;
    let swRegistration = null;

    // Enregistrer le Service Worker
    function registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            // Utiliser le chemin absolu vers le Service Worker
            const rootPath = getRootPath();
            const swPath = getServiceWorkerPath();
            
            navigator.serviceWorker.register(swPath, { scope: '/' })
                .then((registration) => {
                    swRegistration = registration;
                    
                    // Vérifier les mises à jour
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                // showUpdateNotification(); // Notifications désactivées
                            }
                        });
                    });
                })
                .catch((error) => {
                    console.error('[PWA] Erreur lors de l\'enregistrement du Service Worker:', error);
                });

            // Écouter les messages du Service Worker
            navigator.serviceWorker.addEventListener('message', (event) => {
                if (event.data && event.data.type === 'CACHE_COMPLETE') {
                    // showOfflineReadyNotification(); // Notifications désactivées
                }
            });
        }
    }

    // Gérer l'événement d'installation PWA
    function handleInstallPrompt() {
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            showInstallButton();
        });

        // Détecter si l'app est déjà installée
        window.addEventListener('appinstalled', () => {
            hideInstallButton();
            // showInstalledNotification(); // Notifications désactivées
            deferredPrompt = null;
        });
    }

    // Afficher le bouton d'installation
    function showInstallButton() {
        const installButton = createInstallButton();
        document.body.appendChild(installButton);
    }

    // Créer le bouton d'installation
    function createInstallButton() {
        const button = document.createElement('button');
        button.id = 'pwa-install-button';
        button.className = 'pwa-install-btn';
        button.innerHTML = `
            <i class="fa fa-download"></i>
            <span>Installer l'app</span>
        `;
        button.setAttribute('title', 'Installer le livre comme application');
        button.setAttribute('aria-label', 'Installer le livre comme application');

        button.addEventListener('click', installApp);
        return button;
    }

    // Installer l'application
    async function installApp() {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            
            if (outcome === 'accepted') {
                // Installation acceptée
            } else {
                // Installation refusée
            }
            
            deferredPrompt = null;
            hideInstallButton();
        }
    }

    // Masquer le bouton d'installation
    function hideInstallButton() {
        const button = document.getElementById('pwa-install-button');
        if (button) {
            button.remove();
        }
    }

    // Demander la mise en cache complète
    function requestFullCache() {
        if (swRegistration && swRegistration.active) {
            swRegistration.active.postMessage({
                type: 'CACHE_CHAPTERS'
            });
        }
    }

    // Afficher une notification de mise à jour (désactivée)
    function showUpdateNotification() {
        // Notifications désactivées
    }

    // Afficher une notification de disponibilité hors-ligne (désactivée)
    function showOfflineReadyNotification() {
        // Notifications désactivées
    }

    // Afficher une notification d'installation (désactivée)
    function showInstalledNotification() {
        // Notifications désactivées
    }

    // Créer une notification
    function createNotification(title, message, type, action, autoHide = null) {
        const notification = document.createElement('div');
        notification.className = `pwa-notification pwa-notification-${type}`;
        notification.innerHTML = `
            <div class="pwa-notification-content">
                <h4>${title}</h4>
                <p>${message}</p>
                ${action ? '<button class="pwa-notification-action">Mettre à jour</button>' : ''}
                <button class="pwa-notification-close">&times;</button>
            </div>
        `;

        // Événements
        const closeBtn = notification.querySelector('.pwa-notification-close');
        closeBtn.addEventListener('click', () => notification.remove());

        if (action) {
            const actionBtn = notification.querySelector('.pwa-notification-action');
            actionBtn.addEventListener('click', () => {
                action();
                notification.remove();
            });
        }

        // Auto-hide
        if (autoHide) {
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, autoHide);
        }

        return notification;
    }

    // Détecter le mode hors-ligne
    function handleOfflineStatus() {
        function updateOnlineStatus() {
            const isOnline = navigator.onLine;
            document.body.classList.toggle('pwa-offline', !isOnline);
        }

        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);
        updateOnlineStatus();
    }

    // Obtenir le chemin vers la racine
    function getRootPath() {
        // Utiliser la variable globale path_to_root définie par mdBook
        if (window.path_to_root) {
            return window.path_to_root;
        }
        
        // Calculer le chemin vers la racine basé sur l'URL actuelle
        const currentPath = window.location.pathname;
        const pathSegments = currentPath.split('/').filter(segment => segment !== '');
        
        // Si on est à la racine, utiliser ./
        if (pathSegments.length === 0) {
            return './';
        }
        
        // Sinon, remonter vers la racine
        const upLevels = pathSegments.length;
        const rootPath = '../'.repeat(upLevels);
        
        return rootPath;
    }

    // Obtenir le chemin vers le Service Worker
    function getServiceWorkerPath() {
        // Le Service Worker est servi depuis la racine
        const rootPath = getRootPath();
        const swPath = rootPath + 'sw.js';
        return swPath;
    }

    // Initialiser PWA
    function init() {
        // Attendre que le DOM soit chargé
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        registerServiceWorker();
        handleInstallPrompt();
        handleOfflineStatus();

        // Demander la mise en cache complète après un délai
        setTimeout(() => {
            requestFullCache();
        }, 2000);

        // Ajouter les styles PWA
        addPWAStyles();
    }

    // Ajouter les styles PWA
    function addPWAStyles() {
        const styles = `
            .pwa-install-btn {
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: var(--links);
                color: white;
                border: none;
                border-radius: 25px;
                padding: 12px 24px;
                font-size: 1.4rem;
                cursor: pointer;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                z-index: 1000;
                display: flex;
                align-items: center;
                gap: 8px;
                transition: all 0.3s ease;
            }

            .pwa-install-btn:hover {
                transform: translateX(-50%) translateY(-2px);
                box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
            }

            .pwa-notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--bg);
                border: 1px solid var(--table-border-color);
                border-radius: 8px;
                padding: 16px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                z-index: 1001;
                max-width: 350px;
                animation: slideInRight 0.3s ease;
            }

            .pwa-notification-update {
                border-left: 4px solid #ff9500;
            }

            .pwa-notification-offline {
                border-left: 4px solid #28a745;
            }

            .pwa-notification-installed {
                border-left: 4px solid var(--links);
            }

            .pwa-notification h4 {
                margin: 0 0 8px 0;
                font-size: 1.4rem;
                color: var(--fg);
            }

            .pwa-notification p {
                margin: 0 0 12px 0;
                font-size: 1.2rem;
                color: var(--fg);
                opacity: 0.8;
            }

            .pwa-notification-action {
                background: var(--links);
                color: white;
                border: none;
                border-radius: 4px;
                padding: 8px 16px;
                font-size: 1.1rem;
                cursor: pointer;
                margin-right: 8px;
            }

            .pwa-notification-close {
                background: none;
                border: none;
                font-size: 1.8rem;
                cursor: pointer;
                float: right;
                color: var(--fg);
                opacity: 0.6;
                margin-top: -8px;
            }

            .pwa-notification-close:hover {
                opacity: 1;
            }

            @keyframes slideInRight {
                from { transform: translateX(100%); }
                to { transform: translateX(0); }
            }

            .pwa-offline .reading-progress {
                filter: grayscale(50%);
            }

            @media screen and (max-width: 768px) {
                .pwa-notification {
                    right: 10px;
                    left: 10px;
                    max-width: none;
                }
            }
        `;

        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }

    // Initialiser
    init();

    // Exposer certaines fonctions globalement
    window.PWA = {
        requestFullCache,
        installApp
    };
})();