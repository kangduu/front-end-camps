const e=JSON.parse('{"key":"v-b9d1f5e8","path":"/posts/vue/Vue2-%E7%BB%84%E4%BB%B6%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C.html","title":"Vue组件注册","lang":"zh-CN","frontmatter":{"title":"Vue组件注册","category":"Vue","description":"Summary ​\\tVue.component是vue为我们提供的全局注册组件API，只有它还不能满足我们的需求，还需要使用到webpack的require.context功能，首先将所有的公共组件（基础组件）整理在components文件夹下，使用require.context获取到所有组件，解析组件名（name，驼峰命名）和组件选项（options，默认为default），最后使用Vue.component()实现全局注册。 require.context - webpack管理依赖 Vue.component() Vue.use()","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/vue/Vue2-%E7%BB%84%E4%BB%B6%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C.html"}],["meta",{"property":"og:site_name","content":"前端集训营"}],["meta",{"property":"og:title","content":"Vue组件注册"}],["meta",{"property":"og:description","content":"Summary ​\\tVue.component是vue为我们提供的全局注册组件API，只有它还不能满足我们的需求，还需要使用到webpack的require.context功能，首先将所有的公共组件（基础组件）整理在components文件夹下，使用require.context获取到所有组件，解析组件名（name，驼峰命名）和组件选项（options，默认为default），最后使用Vue.component()实现全局注册。 require.context - webpack管理依赖 Vue.component() Vue.use()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-08T08:25:45.000Z"}],["meta",{"property":"article:author","content":"kangduu"}],["meta",{"property":"article:modified_time","content":"2023-09-08T08:25:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue组件注册\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-08T08:25:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"kangduu\\",\\"url\\":\\"https://github.com/kangduu\\"}]}"]]},"headers":[{"level":3,"title":"Summary","slug":"summary","link":"#summary","children":[]},{"level":3,"title":"default","slug":"default","link":"#default","children":[]},{"level":3,"title":"全局组件注册","slug":"全局组件注册","link":"#全局组件注册","children":[]}],"git":{"createdTime":1694161545000,"updatedTime":1694161545000,"contributors":[{"name":"dukang","email":"dk@nosugartech.com","commits":1}]},"readingTime":{"minutes":2.3,"words":691},"filePathRelative":"posts/vue/Vue2-组件全局注册.md","localizedDate":"2023年9月8日","excerpt":"<h3> Summary</h3>\\n<p>​\\tVue.component是vue为我们提供的全局注册组件API，只有它还不能满足我们的需求，还需要使用到webpack的<code>require.context</code>功能，首先将所有的公共组件（基础组件）整理在components文件夹下，使用<code>require.context</code>获取到所有组件，解析组件名（name，驼峰命名）和组件选项（options，默认为default），最后使用Vue.component()实现全局注册。</p>\\n<ul>\\n<li><a href=\\"https://webpack.docschina.org/guides/dependency-management/#require-context\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">require.context</a> - webpack管理依赖</li>\\n<li><a href=\\"https://vuejs.bootcss.com/api/#Vue-component\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Vue.component()</a></li>\\n<li><a href=\\"https://vuejs.bootcss.com/api/#Vue-use\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Vue.use()</a></li>\\n</ul>","autoDesc":true}');export{e as data};
