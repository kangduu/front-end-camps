import { defineUserConfig } from 'vuepress';
import theme from './theme.js';

export default defineUserConfig({
	base: '/front-end-camps/',
	lang: 'zh-CN',
	title: '前端集训营',
	description: '新时代农民工的集训营',
	theme,
	// Enable it with pwa
	// shouldPrefetch: false,
});
