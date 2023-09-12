const n=JSON.parse('{"key":"v-6fc334bc","path":"/posts/javascript/%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B.html","title":"Javascript异步编程","lang":"zh-CN","frontmatter":{"title":"Javascript异步编程","category":"javascript","description":"异步操作的几种模式 事件监听 回调函数 Promise Generator async 函数 回调函数 所谓\\"回调函数\\"（callback），就是那些会被主线程挂起来的代码(异步任务）。异步任务必须指定回调函数，当主线程开始执行异步任务，就是执行对应的回调函数。 function f1(callback) { // ... \\t callback(); } function f2() {\\t // ... } f1(f2);","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/front-end-camps/posts/javascript/%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"前端集训营"}],["meta",{"property":"og:title","content":"Javascript异步编程"}],["meta",{"property":"og:description","content":"异步操作的几种模式 事件监听 回调函数 Promise Generator async 函数 回调函数 所谓\\"回调函数\\"（callback），就是那些会被主线程挂起来的代码(异步任务）。异步任务必须指定回调函数，当主线程开始执行异步任务，就是执行对应的回调函数。 function f1(callback) { // ... \\t callback(); } function f2() {\\t // ... } f1(f2);"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-08T08:25:45.000Z"}],["meta",{"property":"article:author","content":"kangduu"}],["meta",{"property":"article:modified_time","content":"2023-09-08T08:25:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Javascript异步编程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-08T08:25:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"kangduu\\",\\"url\\":\\"https://github.com/kangduu\\"}]}"]]},"headers":[{"level":3,"title":"回调函数","slug":"回调函数","link":"#回调函数","children":[]},{"level":3,"title":"事件监听","slug":"事件监听","link":"#事件监听","children":[]},{"level":3,"title":"Promise","slug":"promise","link":"#promise","children":[]},{"level":3,"title":"发布/订阅","slug":"发布-订阅","link":"#发布-订阅","children":[]},{"level":3,"title":"async/await","slug":"async-await","link":"#async-await","children":[]},{"level":3,"title":"generator函数及其异步应用","slug":"generator函数及其异步应用","link":"#generator函数及其异步应用","children":[]},{"level":3,"title":"串行执行(一个任务完成后，再执行另一个)","slug":"串行执行-一个任务完成后-再执行另一个","link":"#串行执行-一个任务完成后-再执行另一个","children":[]},{"level":3,"title":"并行执行(所有异步任务同时执行)","slug":"并行执行-所有异步任务同时执行","link":"#并行执行-所有异步任务同时执行","children":[]},{"level":3,"title":"串行和并行的结合","slug":"串行和并行的结合","link":"#串行和并行的结合","children":[]},{"level":3,"title":"线程（thread）和进程（process）","slug":"线程-thread-和进程-process","link":"#线程-thread-和进程-process","children":[]},{"level":3,"title":"单线程和多线程","slug":"单线程和多线程","link":"#单线程和多线程","children":[]},{"level":3,"title":"单进程和多进程","slug":"单进程和多进程","link":"#单进程和多进程","children":[]},{"level":3,"title":"阻塞（block）和非阻塞（unblock）","slug":"阻塞-block-和非阻塞-unblock","link":"#阻塞-block-和非阻塞-unblock","children":[]},{"level":3,"title":"同步（asynchronous）和异步（synchronious）","slug":"同步-asynchronous-和异步-synchronious","link":"#同步-asynchronous-和异步-synchronious","children":[]}],"git":{"createdTime":1694161545000,"updatedTime":1694161545000,"contributors":[{"name":"dukang","email":"dk@nosugartech.com","commits":1}]},"readingTime":{"minutes":8.5,"words":2550},"filePathRelative":"posts/javascript/异步编程.md","localizedDate":"2023年9月8日","excerpt":"<h1> 异步操作的几种模式</h1>\\n<ol>\\n<li>事件监听</li>\\n<li>回调函数</li>\\n<li>Promise</li>\\n<li>Generator</li>\\n<li>async 函数</li>\\n</ol>\\n<h3> 回调函数</h3>\\n<p>所谓\\"回调函数\\"（callback），就是那些会被主线程挂起来的代码(异步任务）。异步任务必须指定回调函数，当主线程开始执行异步任务，就是执行对应的回调函数。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">f1</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">callback</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span> \\n  <span class=\\"token comment\\">// ...  \\t</span>\\n  <span class=\\"token function\\">callback</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">f2</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\t\\n  <span class=\\"token comment\\">// ...</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token function\\">f1</span><span class=\\"token punctuation\\">(</span>f2<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
