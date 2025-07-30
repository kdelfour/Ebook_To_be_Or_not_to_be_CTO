// Table des matières flottante pour chaque chapitre
(function() {
    'use strict';

    let pageToc = null;
    let pageTocToggle = null;
    let tocItems = [];
    let isCollapsed = localStorage.getItem('page-toc-collapsed') === 'true';

    function createPageToc() {
        // Créer le conteneur principal
        pageToc = document.createElement('div');
        pageToc.className = 'page-toc';
        pageToc.id = 'page-toc';

        // Créer le bouton toggle
        pageTocToggle = document.createElement('button');
        pageTocToggle.className = 'page-toc-toggle';
        pageTocToggle.innerHTML = '📑';
        pageTocToggle.setAttribute('aria-label', 'Afficher/masquer la table des matières');
        pageTocToggle.setAttribute('title', 'Table des matières du chapitre');

        // Créer le titre
        const title = document.createElement('h3');
        title.className = 'page-toc-title';
        title.textContent = 'Dans ce chapitre';

        // Créer la liste
        const list = document.createElement('ul');
        list.className = 'page-toc-list';

        pageToc.appendChild(title);
        pageToc.appendChild(list);

        // Ajouter au DOM
        document.body.appendChild(pageToc);
        document.body.appendChild(pageTocToggle);

        // État initial
        if (isCollapsed) {
            pageToc.classList.add('collapsed');
        }

        // Événements
        pageTocToggle.addEventListener('click', toggleToc);
        
        return list;
    }

    function toggleToc() {
        isCollapsed = !isCollapsed;
        pageToc.classList.toggle('collapsed', isCollapsed);
        localStorage.setItem('page-toc-collapsed', isCollapsed);
    }

    function generateTocItems() {
        const content = document.querySelector('#content main');
        if (!content) return [];

        const headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
        const items = [];

        headings.forEach((heading, index) => {
            // Créer un ID unique si nécessaire
            if (!heading.id) {
                const text = heading.textContent.trim();
                const id = text
                    .toLowerCase()
                    .replace(/[^\w\s-]/g, '')
                    .replace(/\s+/g, '-')
                    .substring(0, 50);
                heading.id = id + '-' + index;
            }

            // Ignorer le titre principal (h1) pour éviter la redondance
            if (heading.tagName === 'H1') return;

            items.push({
                id: heading.id,
                text: heading.textContent.trim(),
                level: heading.tagName.toLowerCase(),
                element: heading
            });
        });

        return items;
    }

    function renderTocItems(tocList, items) {
        tocList.innerHTML = '';

        items.forEach(item => {
            const li = document.createElement('li');
            li.className = `page-toc-item level-${item.level}`;

            const a = document.createElement('a');
            a.href = `#${item.id}`;
            a.textContent = item.text;
            a.dataset.target = item.id;

            // Événement de clic pour smooth scroll et mise à jour active
            a.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.getElementById(item.id);
                if (target) {
                    target.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                    updateActiveItem(item.id);
                }
            });

            li.appendChild(a);
            tocList.appendChild(li);
        });

        tocItems = items;
    }

    function updateActiveItem(activeId) {
        const links = document.querySelectorAll('.page-toc-item a');
        links.forEach(link => {
            const li = link.parentElement;
            if (link.dataset.target === activeId) {
                li.classList.add('active');
            } else {
                li.classList.remove('active');
            }
        });
    }

    function handleScrollSpy() {
        if (tocItems.length === 0) return;

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Si on est en bas de page, activer le dernier élément
        if (scrollTop + windowHeight >= documentHeight - 100) {
            const lastItem = tocItems[tocItems.length - 1];
            updateActiveItem(lastItem.id);
            return;
        }

        // Trouver l'élément actuellement visible
        let activeId = null;
        let closestDistance = Infinity;

        tocItems.forEach(item => {
            const element = item.element;
            const rect = element.getBoundingClientRect();
            const distance = Math.abs(rect.top - 100); // Offset pour la barre de menu

            if (rect.top <= 150 && distance < closestDistance) {
                closestDistance = distance;
                activeId = item.id;
            }
        });

        if (activeId) {
            updateActiveItem(activeId);
        }
    }

    function shouldShowToc() {
        // Ne pas afficher sur la page d'accueil, préface, etc.
        const content = document.querySelector('#content main');
        if (!content) return false;

        const headings = content.querySelectorAll('h2, h3, h4, h5, h6');
        return headings.length >= 2; // Au moins 2 titres pour justifier une TOC
    }

    function init() {
        // Attendre que le DOM soit chargé
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        if (!shouldShowToc()) {
            return;
        }

        const tocList = createPageToc();
        const items = generateTocItems();
        
        if (items.length > 0) {
            renderTocItems(tocList, items);
            
            // Scroll spy avec throttling
            let ticking = false;
            function requestTick() {
                if (!ticking) {
                    requestAnimationFrame(() => {
                        handleScrollSpy();
                        ticking = false;
                    });
                    ticking = true;
                }
            }
            
            window.addEventListener('scroll', requestTick);
            
            // Initial scroll spy
            setTimeout(handleScrollSpy, 100);
        } else {
            // Pas assez de contenu, supprimer la TOC
            if (pageToc) pageToc.remove();
            if (pageTocToggle) pageTocToggle.remove();
        }
    }

    // Initialiser
    init();
})();