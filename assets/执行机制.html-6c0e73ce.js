const n=JSON.parse(`{"key":"v-414e5706","path":"/posts/javascript/%E6%89%A7%E8%A1%8C%E6%9C%BA%E5%88%B6.html","title":"Javascript执行机制 Loop","lang":"zh-CN","frontmatter":{"title":"Javascript执行机制 Loop","category":"javascript","description":"下面代码输出结果 setTimeout(() =&gt; { console.log('stt-1'); }); new Promise((resolve,reject)=&gt;{ console.log('pms-1'); resolve(); }).then(()=&gt;{ console.log('then-1'); }) console.log('glo-1'); // 解析 // setTimeout进入队列——宏任务 // new Promise（）立即执行 // promise.then 进入队列——微任务 // log 立即执行 // 所以结果： pms-1 glo-1 then-1 stt-1","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/javascript/%E6%89%A7%E8%A1%8C%E6%9C%BA%E5%88%B6.html"}],["meta",{"property":"og:site_name","content":"前端集训营"}],["meta",{"property":"og:title","content":"Javascript执行机制 Loop"}],["meta",{"property":"og:description","content":"下面代码输出结果 setTimeout(() =&gt; { console.log('stt-1'); }); new Promise((resolve,reject)=&gt;{ console.log('pms-1'); resolve(); }).then(()=&gt;{ console.log('then-1'); }) console.log('glo-1'); // 解析 // setTimeout进入队列——宏任务 // new Promise（）立即执行 // promise.then 进入队列——微任务 // log 立即执行 // 所以结果： pms-1 glo-1 then-1 stt-1"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-08T08:25:45.000Z"}],["meta",{"property":"article:author","content":"kangduu"}],["meta",{"property":"article:modified_time","content":"2023-09-08T08:25:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Javascript执行机制 Loop\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-08T08:25:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"kangduu\\",\\"url\\":\\"https://github.com/kangduu\\"}]}"]]},"headers":[{"level":3,"title":"下面代码输出结果","slug":"下面代码输出结果","link":"#下面代码输出结果","children":[]},{"level":3,"title":"你应该知道的一些知识点","slug":"你应该知道的一些知识点","link":"#你应该知道的一些知识点","children":[]},{"level":3,"title":"setTimeout","slug":"settimeout","link":"#settimeout","children":[]},{"level":3,"title":"setTimeout(fn,0)","slug":"settimeout-fn-0","link":"#settimeout-fn-0","children":[]},{"level":3,"title":"setInterval","slug":"setinterval","link":"#setinterval","children":[]},{"level":3,"title":"setImmediate","slug":"setimmediate","link":"#setimmediate","children":[]},{"level":3,"title":"拓展阅读","slug":"拓展阅读","link":"#拓展阅读","children":[]}],"git":{"createdTime":1694161545000,"updatedTime":1694161545000,"contributors":[{"name":"dukang","email":"dk@nosugartech.com","commits":1}]},"readingTime":{"minutes":7.83,"words":2350},"filePathRelative":"posts/javascript/执行机制.md","localizedDate":"2023年9月8日","excerpt":"<h3> 下面代码输出结果</h3>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token function\\">setTimeout</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'stt-1'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Promise</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">resolve<span class=\\"token punctuation\\">,</span>reject</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">=&gt;</span><span class=\\"token punctuation\\">{</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'pms-1'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token function\\">resolve</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">then</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">=&gt;</span><span class=\\"token punctuation\\">{</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'then-1'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'glo-1'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// 解析</span>\\n<span class=\\"token comment\\">// setTimeout进入队列——宏任务</span>\\n<span class=\\"token comment\\">// new Promise（）立即执行</span>\\n<span class=\\"token comment\\">// promise.then 进入队列——微任务</span>\\n<span class=\\"token comment\\">// log 立即执行</span>\\n\\n<span class=\\"token comment\\">// 所以结果： pms-1 glo-1 then-1 stt-1</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
