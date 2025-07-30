// Améliorations de navigation pour le livre
(function() {
    'use strict';

    let progressBar = null;
    let backToTocButton = null;
    let chapterIndicator = null;

    function createProgressBar() {
        progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        progressBar.id = 'reading-progress';
        progressBar.innerHTML = `
            <svg viewBox="0 0 60 60">
                <circle class="reading-progress-bg" cx="30" cy="30" r="25"></circle>
                <circle class="reading-progress-fill" cx="30" cy="30" r="25"></circle>
            </svg>
            <div class="reading-progress-text">0%</div>
        `;
        document.body.appendChild(progressBar);
    }

    // Fonctions supprimées : bouton sommaire et navigation flottante

    function createChapterIndicator() {
        const title = document.title;
        const match = title.match(/^(.+?) - To be or not to be/);
        if (!match) return;

        const chapterTitle = match[1];
        if (chapterTitle === 'Accueil') return;

        chapterIndicator = document.createElement('div');
        chapterIndicator.className = 'chapter-indicator';
        chapterIndicator.textContent = chapterTitle;
        document.body.appendChild(chapterIndicator);
    }

    function getPathToRoot() {
        // Déterminer le chemin vers la racine basé sur l'URL actuelle
        const path = window.location.pathname;
        const depth = (path.match(/\//g) || []).length - 1;
        
        if (depth <= 1) return './';
        return '../'.repeat(depth - 1);
    }

    function updateProgressBar() {
        if (!progressBar) return;

        const content = document.querySelector('#content main');
        if (!content) return;

        const contentHeight = content.offsetHeight;
        const contentTop = content.offsetTop;
        const windowHeight = window.innerHeight;
        
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollableHeight = Math.max(0, contentHeight + contentTop - windowHeight);
        
        let progress = 0;
        if (scrollableHeight > 0) {
            progress = Math.min(100, Math.max(0, (scrollTop / scrollableHeight) * 100));
        }

        // Mettre à jour le cercle SVG
        const progressCircle = progressBar.querySelector('.reading-progress-fill');
        const progressText = progressBar.querySelector('.reading-progress-text');
        
        if (progressCircle && progressText) {
            const circumference = 157; // 2π × 25
            const offset = circumference - (progress / 100) * circumference;
            progressCircle.style.strokeDashoffset = offset;
            progressText.textContent = Math.round(progress) + '%';
        }

        // Animation subtile quand on atteint certains jalons
        if (progress > 0 && progress < 100 && (progress % 25 < 1)) {
            progressBar.classList.add('animate');
            setTimeout(() => {
                if (progressBar) progressBar.classList.remove('animate');
            }, 500);
        }
    }

    function enhanceNavigation() {
        // Améliorer les boutons de navigation existants
        const navButtons = document.querySelectorAll('.mobile-nav-chapters, .nav-chapters');
        
        navButtons.forEach(button => {
            // Ajouter des transitions plus fluides
            button.style.transition = 'all 0.3s ease';
            
            // Améliorer l'accessibilité
            if (button.classList.contains('previous')) {
                button.setAttribute('aria-label', 'Chapitre précédent');
            } else if (button.classList.contains('next')) {
                button.setAttribute('aria-label', 'Chapitre suivant');
            }
        });
    }

    function addKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ignorer si on est dans un champ de saisie
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                return;
            }

            switch(e.key) {
                case 'ArrowLeft':
                    // Flèche gauche pour précédent
                    const prevButton = document.querySelector('.nav-chapters.previous, .mobile-nav-chapters.previous');
                    if (prevButton) {
                        window.location.href = prevButton.href;
                    }
                    break;
                
                case 'ArrowRight':
                    // Flèche droite pour suivant
                    const nextButton = document.querySelector('.nav-chapters.next, .mobile-nav-chapters.next');
                    if (nextButton) {
                        window.location.href = nextButton.href;
                    }
                    break;
            }
        });
    }

    function addScrollToTop() {
        // Double-clic sur la barre de progression pour remonter en haut
        if (progressBar) {
            progressBar.addEventListener('dblclick', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            progressBar.style.cursor = 'pointer';
            progressBar.setAttribute('title', 'Double-cliquez pour remonter en haut');
        }
    }

    function handleVisibilityChanges() {
        // Masquer/afficher les éléments selon le scroll
        let lastScrollTop = 0;
        let ticking = false;

        function updateVisibility() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollingDown = scrollTop > lastScrollTop;
            const scrolledEnough = scrollTop > 100;

            // Gestion de l'indicateur de chapitre
            if (chapterIndicator) {
                if (scrolledEnough && !scrollingDown) {
                    chapterIndicator.style.opacity = '0.8';
                    chapterIndicator.style.transform = 'translateY(0)';
                } else if (scrollingDown && scrolledEnough) {
                    chapterIndicator.style.opacity = '0.3';
                    chapterIndicator.style.transform = 'translateY(-10px)';
                }
            }

            lastScrollTop = scrollTop;
            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateVisibility);
                ticking = true;
            }
        });
    }

    function init() {
        // Attendre que le DOM soit chargé
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        // Créer les éléments
        createProgressBar();
        createChapterIndicator();
        
        // Améliorer la navigation existante
        enhanceNavigation();
        
        // Ajouter les fonctionnalités
        addKeyboardShortcuts();
        addScrollToTop();
        handleVisibilityChanges();

        // Mise à jour de la barre de progression
        let scrollTicking = false;
        function requestProgressUpdate() {
            if (!scrollTicking) {
                requestAnimationFrame(() => {
                    updateProgressBar();
                    scrollTicking = false;
                });
                scrollTicking = true;
            }
        }

        window.addEventListener('scroll', requestProgressUpdate);
        window.addEventListener('resize', requestProgressUpdate);
        
        // Mise à jour initiale
        setTimeout(updateProgressBar, 100);
    }

    // Initialiser
    init();

    // Exposer certaines fonctions globalement pour debug
    window.navigationUtils = {
        updateProgressBar,
        getPathToRoot
    };
})();