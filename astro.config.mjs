// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import catppuccin from "@catppuccin/starlight";
import starlightCoolerCredit from 'starlight-cooler-credit'
import starlightLinksValidator from 'starlight-links-validator';

import mermaid from 'astro-mermaid';
import icon from 'astro-icon';

export default defineConfig({
    site: 'https://kdelfour.github.io',
    base: '/Ebook_To_be_Or_not_to_be_CTO',
    output: 'static',

    integrations: [starlight({
        head: [
            {
                tag: 'meta',
                attrs: {
                    name: 'description',
                    content: 'Un guide pratique et inspirant écrit par des CTOs expérimentés pour partager leur expérience avec ceux qui aspirent à ce rôle.'
                }
            }
        ],
        editLink: {
            baseUrl: 'https://github.com/kdelfour/Ebook_To_be_Or_not_to_be_CTO/edit/main/',
        },
        plugins: [
            catppuccin({
                dark: { flavor: "macchiato", accent: "sky" },
                light: { flavor: "latte", accent: "sky" }
            }),
            starlightCoolerCredit(),
            starlightLinksValidator(),
        ],
        components: {
            Hero: './src/components/overrides/Hero.astro',
            TableOfContents: './src/components/overrides/TableOfContents.astro',
            Footer: './src/components/overrides/Footer.astro',
        },
        title: 'Etre ou ne pas être... un CTO',
        social: [
            { icon: 'github', label: 'GitHub', href: 'https://github.com/kdelfour/Ebook_To_be_Or_not_to_be_CTO' },
            { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/kevindelfour/' },
        ],
        sidebar: [
            {
                label: 'Le Livre',
                items: [
                    { label: 'Accueil', link: '/book/home/' },
                    { label: 'Préface', link: '/book/preface/' },
                    { label: 'Introduction', link: '/book/introduction/' },
                    {
                        label: 'Partie 1: Devenir CTO', items: [
                            { label: 'Le rôle de CTO démystifié', link: '/book/part1/chapter1/' },
                            { label: 'La transition technique → management', link: '/book/part1/chapter2/' },
                            { label: 'Se positionner dans l\'organisation', link: '/book/part1/chapter3/' },
                            { label: 'Construire sa vision tech', link: '/book/part1/chapter4/' },
                        ]
                    },
                    {
                        label: 'Partie 2: Management et Leadership', items: [
                            { label: 'Recruter et fidéliser son équipe', link: '/book/part2/chapter5/' },
                            { label: 'Développer et motiver les talents', link: '/book/part2/chapter6/' },
                            { label: 'Culture d\'équipe et méthodologies', link: '/book/part2/chapter7/' },
                            { label: 'Gérer les conflits et situations critiques', link: '/book/part2/chapter8/' },
                        ]
                    },
                    {
                        label: 'Partie 3: Stratégie et Technique', items: [
                            { label: 'Architecture et choix techniques', link: '/book/part3/chapter9/' },
                            { label: 'Innovation et veille technologique', link: '/book/part3/chapter10/' },
                            { label: 'Product et alignement business', link: '/book/part3/chapter11/' },
                        ]
                    },
                    {
                        label: 'Partie 4: Opérationnel et Croissance', items: [
                            { label: 'Budget et ressources', link: '/book/part4/chapter12/' },
                            { label: 'Processus et organisation', link: '/book/part4/chapter13/' },
                            { label: 'Scaling et croissance', link: '/book/part4/chapter14/' },
                        ]
                    },
                    {
                        label: 'Partie 5: Développement personnel et leadership', items: [
                            { label: 'Développement personnel et leadership', link: '/book/part5/chapter15/' },
                            { label: 'Communication et influence', link: '/book/part5/chapter16/' },
                        ]
                    },
                    { label: 'Conclusion', link: '/book/conclusion/' },
                    { label: 'Annexes', link: '/book/annexes/' },
                ],
            },
            {
                label: 'Communauté',
                items: [
                    { label: 'À propos du projet', link: '/community/about/' },
                    { label: 'Contribuer', link: '/community/contribution/' },
                    { label: 'Code de conduite', link: '/community/code-of-conduct/' },
                    { label: 'Licence', link: '/community/license/' },
                ],
            }
        ],
        customCss: ['./src/styles/global.css'],
    }),
    mermaid(),
    icon(),
    ],

    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
});