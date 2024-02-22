import { sidebar } from 'vuepress-theme-hope';

export default sidebar({
	'/': [
		'',
		// {
		// 	text: '面试·八股文',
		// 	icon: 'users',
		// 	prefix: 'interview/',
		// 	// link: 'interview/',
		// 	children: 'structure',
		// },
		{
			text: '博文·随笔',
			icon: 'book',
			prefix: 'posts/',
			children: 'structure',
		},
		'intro',
	],
});
