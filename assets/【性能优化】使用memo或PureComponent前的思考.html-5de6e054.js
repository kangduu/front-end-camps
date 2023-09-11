const n=JSON.parse('{"key":"v-9ea8bc26","path":"/posts/react/%E3%80%90%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E3%80%91%E4%BD%BF%E7%94%A8memo%E6%88%96PureComponent%E5%89%8D%E7%9A%84%E6%80%9D%E8%80%83.html","title":"使用memo或PureComponent前的思考","lang":"zh-CN","frontmatter":{"title":"使用memo或PureComponent前的思考","category":"React","description":"在我们编写 react 组件的时候，尽可能的拆分组件。而针对一些静态组件或没有 props 的组件，我们可以使用React.memo或者React.useMemo来避免不必要的更新。 ###　一个渲染缓慢的组件 import { useState } from \\"react\\"; function ExpensiveTree() { let now = performance.now(); while (performance.now() - now &lt; 100) { // Artificial delay -- do nothing for 100ms } return &lt;p&gt;I am a very slow component tree.&lt;/p&gt;; } const Demo = () =&gt; { let [color, setSolor] = useState(\\"red\\"); return ( &lt;&gt; &lt;input type=\\"color\\" value={color} onChange={(e) =&gt; setSolor(e.target.value)} style={{ display: \\"inline-block\\", marginLeft: 600 }} /&gt; &lt;p style={{ color }}&gt;Hello, world!&lt;/p&gt; &lt;ExpensiveTree /&gt; &lt;/&gt; ); }; export default Demo;","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/react/%E3%80%90%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E3%80%91%E4%BD%BF%E7%94%A8memo%E6%88%96PureComponent%E5%89%8D%E7%9A%84%E6%80%9D%E8%80%83.html"}],["meta",{"property":"og:site_name","content":"前端集训营"}],["meta",{"property":"og:title","content":"使用memo或PureComponent前的思考"}],["meta",{"property":"og:description","content":"在我们编写 react 组件的时候，尽可能的拆分组件。而针对一些静态组件或没有 props 的组件，我们可以使用React.memo或者React.useMemo来避免不必要的更新。 ###　一个渲染缓慢的组件 import { useState } from \\"react\\"; function ExpensiveTree() { let now = performance.now(); while (performance.now() - now &lt; 100) { // Artificial delay -- do nothing for 100ms } return &lt;p&gt;I am a very slow component tree.&lt;/p&gt;; } const Demo = () =&gt; { let [color, setSolor] = useState(\\"red\\"); return ( &lt;&gt; &lt;input type=\\"color\\" value={color} onChange={(e) =&gt; setSolor(e.target.value)} style={{ display: \\"inline-block\\", marginLeft: 600 }} /&gt; &lt;p style={{ color }}&gt;Hello, world!&lt;/p&gt; &lt;ExpensiveTree /&gt; &lt;/&gt; ); }; export default Demo;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-08T08:25:45.000Z"}],["meta",{"property":"article:author","content":"kangduu"}],["meta",{"property":"article:modified_time","content":"2023-09-08T08:25:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用memo或PureComponent前的思考\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-08T08:25:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"kangduu\\",\\"url\\":\\"https://github.com/kangduu\\"}]}"]]},"headers":[{"level":3,"title":"解法一：向下移动 state","slug":"解法一-向下移动-state","link":"#解法一-向下移动-state","children":[]},{"level":3,"title":"解法二：内容提升","slug":"解法二-内容提升","link":"#解法二-内容提升","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1694161545000,"updatedTime":1694161545000,"contributors":[{"name":"dukang","email":"dk@nosugartech.com","commits":1}]},"readingTime":{"minutes":2.43,"words":728},"filePathRelative":"posts/react/【性能优化】使用memo或PureComponent前的思考.md","localizedDate":"2023年9月8日","excerpt":"<p>在我们编写 react 组件的时候，尽可能的拆分组件。而针对一些静态组件或没有 props 的组件，我们可以使用<code>React.memo</code>或者<code>React.useMemo</code>来避免不必要的更新。</p>\\n<p>###　一个渲染缓慢的组件</p>\\n<div class=\\"language-jsx line-numbers-mode\\" data-ext=\\"jsx\\"><pre class=\\"language-jsx\\"><code><span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> useState <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"react\\"</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">ExpensiveTree</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">let</span> now <span class=\\"token operator\\">=</span> performance<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">now</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>performance<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">now</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">-</span> now <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">100</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// Artificial delay -- do nothing for 100ms</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>p</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token plain-text\\">I am a very slow component tree.</span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>p</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">Demo</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">let</span> <span class=\\"token punctuation\\">[</span>color<span class=\\"token punctuation\\">,</span> setSolor<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token function\\">useState</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"red\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">(</span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token plain-text\\">\\n      </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span>\\n        <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>color<span class=\\"token punctuation\\">\\"</span></span>\\n        <span class=\\"token attr-name\\">value</span><span class=\\"token script language-javascript\\"><span class=\\"token script-punctuation punctuation\\">=</span><span class=\\"token punctuation\\">{</span>color<span class=\\"token punctuation\\">}</span></span>\\n        <span class=\\"token attr-name\\">onChange</span><span class=\\"token script language-javascript\\"><span class=\\"token script-punctuation punctuation\\">=</span><span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">e</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token function\\">setSolor</span><span class=\\"token punctuation\\">(</span>e<span class=\\"token punctuation\\">.</span>target<span class=\\"token punctuation\\">.</span>value<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">}</span></span>\\n        <span class=\\"token attr-name\\">style</span><span class=\\"token script language-javascript\\"><span class=\\"token script-punctuation punctuation\\">=</span><span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">display</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"inline-block\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">marginLeft</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">600</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">}</span></span>\\n      <span class=\\"token punctuation\\">/&gt;</span></span><span class=\\"token plain-text\\">\\n      </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>p</span> <span class=\\"token attr-name\\">style</span><span class=\\"token script language-javascript\\"><span class=\\"token script-punctuation punctuation\\">=</span><span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">{</span> color <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">}</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token plain-text\\">Hello, world!</span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>p</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token plain-text\\">\\n      </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">ExpensiveTree</span></span> <span class=\\"token punctuation\\">/&gt;</span></span><span class=\\"token plain-text\\">\\n    </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">default</span> Demo<span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
