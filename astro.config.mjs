// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://astrocamp-sat-gis.pages.dev',
	integrations: [
		starlight({
			title: '衛星データ解析ゼミ',
			defaultLocale: 'root',
			locales: { root: { label: '日本語', lang: 'ja' } },
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/astrocamp-2026-siaPpts/astrocamp-sat-gis' },
			],
			sidebar: [
				{ label: '課題と対象エリア', items: [{ autogenerate: { directory: 'mission' } }] },
				{ label: 'チュートリアル', items: [{ autogenerate: { directory: 'tutorial' } }] },
				{ label: '演習', items: [{ autogenerate: { directory: 'exercises' } }] },
				{ label: 'スライド', items: [{ autogenerate: { directory: 'slides' } }] },
			],
		}),
	],
});
