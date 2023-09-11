const n=JSON.parse('{"key":"v-06a9fc31","path":"/interview/Algorithm.html","title":"Algorithm","lang":"zh-CN","frontmatter":{"title":"Algorithm","description":"手写冒泡排序 function bubbleSort(array) { if (!Array.isArray(array)) return array; let len = array.length; for (let i = 0; i &lt; len - 1; i++) { for (let j = 0; j &lt; len - i - 1; j++) { //len-1-i ,减去已经遍历了的(当前内循环找到的最大的数)，减少重复 if (array[j] &gt; array[j + 1]) { // es6 [array[j], array[j + 1]] = [array[j + 1], array[j]] // es5 // let temp = array[j]; // array[j] = array[j + 1]; // array[j + 1] = temp; } } } } // 外循环一次得到子数组的最大（最小）值，第一次为原数组； // 内循环：负责寻找极值，并修改数组。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/interview/Algorithm.html"}],["meta",{"property":"og:site_name","content":"前端集训营"}],["meta",{"property":"og:title","content":"Algorithm"}],["meta",{"property":"og:description","content":"手写冒泡排序 function bubbleSort(array) { if (!Array.isArray(array)) return array; let len = array.length; for (let i = 0; i &lt; len - 1; i++) { for (let j = 0; j &lt; len - i - 1; j++) { //len-1-i ,减去已经遍历了的(当前内循环找到的最大的数)，减少重复 if (array[j] &gt; array[j + 1]) { // es6 [array[j], array[j + 1]] = [array[j + 1], array[j]] // es5 // let temp = array[j]; // array[j] = array[j + 1]; // array[j + 1] = temp; } } } } // 外循环一次得到子数组的最大（最小）值，第一次为原数组； // 内循环：负责寻找极值，并修改数组。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-09T16:12:36.000Z"}],["meta",{"property":"article:author","content":"kangduu"}],["meta",{"property":"article:modified_time","content":"2023-09-09T16:12:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Algorithm\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-09T16:12:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"kangduu\\",\\"url\\":\\"https://github.com/kangduu\\"}]}"]]},"headers":[{"level":3,"title":"手写冒泡排序","slug":"手写冒泡排序","link":"#手写冒泡排序","children":[]}],"git":{"createdTime":1694275956000,"updatedTime":1694275956000,"contributors":[{"name":"kangduu","email":"dukang1127@163.com","commits":1}]},"readingTime":{"minutes":0.53,"words":160},"filePathRelative":"interview/Algorithm.md","localizedDate":"2023年9月9日","excerpt":"<h3> 手写冒泡排序</h3>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">bubbleSort</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">array</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span>Array<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">isArray</span><span class=\\"token punctuation\\">(</span>array<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span> array<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">let</span> len <span class=\\"token operator\\">=</span> array<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> len <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> j <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> j <span class=\\"token operator\\">&lt;</span> len <span class=\\"token operator\\">-</span> i <span class=\\"token operator\\">-</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span> j<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token comment\\">//len-1-i ,减去已经遍历了的(当前内循环找到的最大的数)，减少重复</span>\\n      <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>array<span class=\\"token punctuation\\">[</span>j<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">&gt;</span> array<span class=\\"token punctuation\\">[</span>j <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">// es6</span>\\n        <span class=\\"token punctuation\\">[</span>array<span class=\\"token punctuation\\">[</span>j<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> array<span class=\\"token punctuation\\">[</span>j <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span>array<span class=\\"token punctuation\\">[</span>j <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> array<span class=\\"token punctuation\\">[</span>j<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span>\\n\\n        <span class=\\"token comment\\">// es5</span>\\n        <span class=\\"token comment\\">// let temp = array[j];</span>\\n        <span class=\\"token comment\\">// array[j] = array[j + 1];</span>\\n        <span class=\\"token comment\\">// array[j + 1] = temp;</span>\\n      <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 外循环一次得到子数组的最大（最小）值，第一次为原数组；</span>\\n<span class=\\"token comment\\">// 内循环：负责寻找极值，并修改数组。</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
