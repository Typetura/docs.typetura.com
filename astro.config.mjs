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
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Company and Legal',
					autogenerate: { directory: 'company-legal' },
				},
			],
		}),
	],
});
