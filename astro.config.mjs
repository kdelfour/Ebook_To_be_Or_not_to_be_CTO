// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';
import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'https://kdelfour.github.io/Ebook_To_be_Or_not_to_be_CTO/',
    // base: '/Ebook_To_be_Or_not_to_be_CTO/',
    integrations: [starlight({
        title: 'Etre ou ne pas être... un CTO',
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/kdelfour/Ebook_To_be_Or_not_to_be_CTO' }],
        sidebar: [
            {
                label: 'Le Livre',
                items: [
                    { label: 'Accueil', slug: 'home' },
                    { label: 'Préface', slug: 'preface' },
                    { label: 'Introduction', slug: 'introduction' },
                    {
                        label: 'Partie 1: Devenir CTO', items: [
                            { label: 'Le rôle de CTO démystifié', slug: 'part1/chapter1' },
                            { label: 'La transition technique → management', slug: 'part1/chapter2' },
                            { label: 'Se positionner dans l\'organisation', slug: 'part1/chapter3' },
                            { label: 'Construire sa vision tech', slug: 'part1/chapter4' },
                        ]
                    },
                    {
                        label: 'Partie 2: Management et Leadership', items: [
                            { label: 'Recruter et fidéliser son équipe', slug: 'part2/chapter5' },
                            { label: 'Développer et motiver les talents', slug: 'part2/chapter6' },
                            { label: 'Culture d\'équipe et méthodologies', slug: 'part2/chapter7' },
                            { label: 'Gérer les conflits et situations critiques', slug: 'part2/chapter8' },
                        ]
                    },
                    {
                        label: 'Partie 3: Stratégie et Technique', items: [
                            { label: 'Architecture et choix techniques', slug: 'part3/chapter9' },
                            { label: 'Innovation et veille technologique', slug: 'part3/chapter10' },
                            { label: 'Product et alignement business', slug: 'part3/chapter11' },
                        ]
                    },
                    {
                        label: 'Partie 4: Opérationnel et Croissance', items: [
                            { label: 'Budget et ressources', slug: 'part4/chapter12' },
                            { label: 'Processus et organisation', slug: 'part4/chapter13' },
                            { label: 'Scaling et croissance', slug: 'part4/chapter14' },
                        ]
                    },
                    {
                        label: 'Partie 5: Développement personnel et leadership', items: [
                            { label: 'Développement personnel et leadership', slug: 'part5/chapter15' },
                            { label: 'Communication et influence', slug: 'part5/chapter16' },
                        ]
                    },
                    { label: 'Conclusion', slug: 'conclusion' },
                    { label: 'Annexes', slug: 'annexes' },
                ],
            }
        ],
        customCss: ['./src/styles/global.css'],
		}), mermaid(), icon()],

    vite: {
        plugins: [tailwindcss()],
    },
});