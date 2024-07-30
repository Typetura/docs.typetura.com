import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Typetura Docs',
			social: {
				github: 'https://github.com/typetura/typetura',
				instagram: 'https://instagram.com/typeturadesign',
				mastodon: 'https://typetura.social/@typetura',
				twitter: 'https://twitter.com/typetura',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Hello world!', slug: 'guides/hello-world' },
						{ label: 'Root text', slug: 'guides/root-text' },
						{ label: 'Headings', slug: 'guides/headings' },
						{ label: 'Type Scale', slug: 'guides/type-scale' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Overview', slug: 'reference' },
						{ label: 'Containers', slug: 'reference/containers' },
						{ label: 'Elements', slug: 'reference/elements' },
						{ label: 'Styles', slug: 'reference/styles' },
						{ label: 'Accessibility', slug: 'reference/accessibility' },
					],
				},
				{
					label: 'Company and Legal',
					autogenerate: { directory: 'company-legal' },
				},
			],
		}),
	],
});
