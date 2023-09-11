const n=JSON.parse('{"key":"v-49f14303","path":"/posts/html-css/%E5%B8%B8%E7%94%A8%E5%B8%83%E5%B1%80%E5%AE%9E%E7%8E%B0.html","title":"常用布局实现","lang":"zh-CN","frontmatter":{"title":"常用布局实现","category":"html-css","description":"四列等宽布局，间距10px（考虑浏览器兼容性） 浮动+清除浮动 margin负值作用（Bootstrap3栅格容器.container样式实现） &lt;style&gt; body,html{width:100%;overflow:hidden} .container{margin-right:-10px} /* 关键 */ .row{background:#000;line-height:2em;float:left;width:25%; padding-right:10px; /* 关键 */ box-sizing:border-box;color:azure;background-clip:content-box;user-select:none} .container:after,.container:before{display:table;content:\\"\\";clear:both} &lt;/style&gt; &lt;div class=\\"container\\"&gt; &lt;div class=\\"row\\"&gt;第一列&lt;/div&gt; &lt;div class=\\"row\\"&gt;第二列&lt;/div&gt; &lt;div class=\\"row\\"&gt;第三列&lt;/div&gt; &lt;div class=\\"row\\"&gt;第四列&lt;/div&gt; &lt;/div&gt;","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/html-css/%E5%B8%B8%E7%94%A8%E5%B8%83%E5%B1%80%E5%AE%9E%E7%8E%B0.html"}],["meta",{"property":"og:site_name","content":"前端集训营"}],["meta",{"property":"og:title","content":"常用布局实现"}],["meta",{"property":"og:description","content":"四列等宽布局，间距10px（考虑浏览器兼容性） 浮动+清除浮动 margin负值作用（Bootstrap3栅格容器.container样式实现） &lt;style&gt; body,html{width:100%;overflow:hidden} .container{margin-right:-10px} /* 关键 */ .row{background:#000;line-height:2em;float:left;width:25%; padding-right:10px; /* 关键 */ box-sizing:border-box;color:azure;background-clip:content-box;user-select:none} .container:after,.container:before{display:table;content:\\"\\";clear:both} &lt;/style&gt; &lt;div class=\\"container\\"&gt; &lt;div class=\\"row\\"&gt;第一列&lt;/div&gt; &lt;div class=\\"row\\"&gt;第二列&lt;/div&gt; &lt;div class=\\"row\\"&gt;第三列&lt;/div&gt; &lt;div class=\\"row\\"&gt;第四列&lt;/div&gt; &lt;/div&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-08T08:25:45.000Z"}],["meta",{"property":"article:author","content":"kangduu"}],["meta",{"property":"article:modified_time","content":"2023-09-08T08:25:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常用布局实现\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-08T08:25:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"kangduu\\",\\"url\\":\\"https://github.com/kangduu\\"}]}"]]},"headers":[{"level":3,"title":"四列等宽布局，间距10px（考虑浏览器兼容性）","slug":"四列等宽布局-间距10px-考虑浏览器兼容性","link":"#四列等宽布局-间距10px-考虑浏览器兼容性","children":[]},{"level":3,"title":"三栏布局（左右两侧固定宽度，中间自适应宽度）","slug":"三栏布局-左右两侧固定宽度-中间自适应宽度","link":"#三栏布局-左右两侧固定宽度-中间自适应宽度","children":[]},{"level":3,"title":"双飞翼布局","slug":"双飞翼布局","link":"#双飞翼布局","children":[]},{"level":3,"title":"上下两行布局（下行高度固定，上行自适应）","slug":"上下两行布局-下行高度固定-上行自适应","link":"#上下两行布局-下行高度固定-上行自适应","children":[]},{"level":3,"title":"流式图片","slug":"流式图片","link":"#流式图片","children":[]}],"git":{"createdTime":1694161545000,"updatedTime":1694161545000,"contributors":[{"name":"dukang","email":"dk@nosugartech.com","commits":1}]},"readingTime":{"minutes":2.72,"words":817},"filePathRelative":"posts/html-css/常用布局实现.md","localizedDate":"2023年9月8日","excerpt":"<h3> 四列等宽布局，间距10px（考虑浏览器兼容性）</h3>\\n<ul>\\n<li>浮动+清除浮动</li>\\n<li>margin负值作用（Bootstrap3栅格容器.container样式实现）</li>\\n</ul>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>style</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token style\\"><span class=\\"token language-css\\">\\n  <span class=\\"token selector\\">body,html</span><span class=\\"token punctuation\\">{</span><span class=\\"token property\\">width</span><span class=\\"token punctuation\\">:</span>100%<span class=\\"token punctuation\\">;</span><span class=\\"token property\\">overflow</span><span class=\\"token punctuation\\">:</span>hidden<span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token selector\\">.container</span><span class=\\"token punctuation\\">{</span><span class=\\"token property\\">margin-right</span><span class=\\"token punctuation\\">:</span>-10px<span class=\\"token punctuation\\">}</span> <span class=\\"token comment\\">/* 关键 */</span>\\n  <span class=\\"token selector\\">.row</span><span class=\\"token punctuation\\">{</span><span class=\\"token property\\">background</span><span class=\\"token punctuation\\">:</span>#000<span class=\\"token punctuation\\">;</span><span class=\\"token property\\">line-height</span><span class=\\"token punctuation\\">:</span>2em<span class=\\"token punctuation\\">;</span><span class=\\"token property\\">float</span><span class=\\"token punctuation\\">:</span>left<span class=\\"token punctuation\\">;</span><span class=\\"token property\\">width</span><span class=\\"token punctuation\\">:</span>25%<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">padding-right</span><span class=\\"token punctuation\\">:</span>10px<span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">/* 关键 */</span>\\n    <span class=\\"token property\\">box-sizing</span><span class=\\"token punctuation\\">:</span>border-box<span class=\\"token punctuation\\">;</span><span class=\\"token property\\">color</span><span class=\\"token punctuation\\">:</span>azure<span class=\\"token punctuation\\">;</span><span class=\\"token property\\">background-clip</span><span class=\\"token punctuation\\">:</span>content-box<span class=\\"token punctuation\\">;</span><span class=\\"token property\\">user-select</span><span class=\\"token punctuation\\">:</span>none<span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token selector\\">.container:after,.container:before</span><span class=\\"token punctuation\\">{</span><span class=\\"token property\\">display</span><span class=\\"token punctuation\\">:</span>table<span class=\\"token punctuation\\">;</span><span class=\\"token property\\">content</span><span class=\\"token punctuation\\">:</span><span class=\\"token string\\">\\"\\"</span><span class=\\"token punctuation\\">;</span><span class=\\"token property\\">clear</span><span class=\\"token punctuation\\">:</span>both<span class=\\"token punctuation\\">}</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>style</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>container<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>row<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>第一列<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>row<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>第二列<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>row<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>第三列<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>row<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>第四列<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
