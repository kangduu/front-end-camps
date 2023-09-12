import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-8520f818.js";const e={},p=t(`<h1 id="高阶函数-higher-order-function" tabindex="-1"><a class="header-anchor" href="#高阶函数-higher-order-function" aria-hidden="true">#</a> 高阶函数（higher-order-function）</h1><p>“所谓高阶函数就是<strong>操作函数的函数</strong>，它接收一个或多个函数作为参数，并返回一个函数。”——JavaScript权威指南。注意两个概念：<code>操作函数</code> <code>参数或返回值</code></p><h3 id="作为参数" tabindex="-1"><a class="header-anchor" href="#作为参数" aria-hidden="true">#</a> 作为参数</h3><ul><li>回调函数（第一个能想到的） <ul><li>在ajax异步请求的过程中，回调函数使用的非常频繁</li><li>在不确定请求返回的时间时，将callback回调函数当成参数传入</li><li>待请求完成后执行callback函数</li></ul></li></ul><h3 id="作为返回值" tabindex="-1"><a class="header-anchor" href="#作为返回值" aria-hidden="true">#</a> 作为返回值</h3><ul><li>类型判断——<code>Object.prototype.toString.call(target)</code></li></ul><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>// 之前的写法
function checkType(target) {
  let typeStr = typeof (target),
      template = {
        &#39;[object Array]&#39;: &#39;array -&gt; Object&#39;,
        &#39;[object Object]&#39;: &#39;object -&gt; Object&#39;,
        &#39;[object Null]&#39;: &#39;null -&gt; Object&#39;
      };
  if (typeStr === &#39;function&#39;) return &#39;function&#39;
  if (typeStr !== &#39;object&#39;) return typeStr
  else return template[Object.prototype.toString.call(target)]
}
// ！注意
Object.prototype.toString.call(null) // [object Null]
// undefined null string number boolean Symbol BigInt Array function Object Date ......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>// 现在我要这样写
function checkType(type) {
  return function (target) {
    return Object.prototype.toString.call(target) === \`[object \${type}]\`
  }
}
const isString = checkType(&#39;String&#39;);
const isDate = checkType(&#39;Date&#39;);

console.log(isDate(new Date())); // true
console.log(isString(&#39;ddd&#39;)) //true

// 这样写更加强大，其原理也是使用Object.prototype.toString.call(target)
//偏函数——返回了一个包含预处理参数的新函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>预置函数——当目标条件满足才执行回调函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">preset</span><span class="token punctuation">(</span><span class="token parameter">condition<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>condition <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>condition<span class="token punctuation">)</span><span class="token punctuation">;</span>
      condition<span class="token operator">--</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;doing&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">preset</span><span class="token punctuation">(</span>count<span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
<span class="token function">result</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token function">result</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1 </span>
<span class="token function">result</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// doing</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>装饰者模式</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>name<span class="token punctuation">&#39;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>hint<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">//...</span>
      <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function">hint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token comment">// 原有业务</span>
          <span class="token comment">// do something</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">//装饰者模式</span>
    <span class="token keyword">function</span> <span class="token function">decorator</span><span class="token punctuation">(</span><span class="token parameter">input<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//事件源 element</span>
      <span class="token keyword">let</span> eventOrigin <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span>；
      <span class="token keyword">if</span><span class="token punctuation">(</span>eventOrigin<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 是否绑定事件</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> eventOrigin<span class="token punctuation">.</span>onclick <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">//保存原有事件</span>
          <span class="token keyword">const</span> oldClickFn <span class="token operator">=</span> eventOrigin<span class="token punctuation">.</span>onclick<span class="token punctuation">;</span>
          <span class="token comment">//添加新事件</span>
          eventOrigin<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 执行原事件</span>
            <span class="token function">oldClickFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token comment">// 执行新增事件</span>
              <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">//直接执行新增事件</span>
          eventOrigin<span class="token punctuation">.</span>onclick <span class="token operator">=</span> fn<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> clickName <span class="token operator">=</span> <span class="token function">decorator</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//新增业务，不改变原有业务</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    clickName <span class="token operator">&amp;&amp;</span> <span class="token function">clickName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>单列模式</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ! 单列模式——私有变量</span>
<span class="token keyword">const</span> singleModel <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> privateVariable <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token constant">MAX_NUM</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    <span class="token constant">MIN_NUM</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token constant">COUNT</span><span class="token operator">:</span> <span class="token number">10000</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> privateVariable<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">?</span> privateVariable<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token keyword">undefined</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">singleModel</span><span class="token punctuation">(</span><span class="token string">&#39;MAX_NUM&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//1000</span>
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>\`### 其它应用

<span class="token number">1.</span> <span class="token punctuation">[</span>函数柯里化<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">/</span>柯里化<span class="token punctuation">.</span>md<span class="token punctuation">)</span>
<span class="token number">2.</span> <span class="token punctuation">[</span>防抖<span class="token operator">/</span>节流<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">/</span>节流和防抖<span class="token punctuation">.</span>md<span class="token punctuation">)</span>
<span class="token number">3.</span> <span class="token punctuation">[</span>分时函数<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">/</span>分时函数<span class="token punctuation">.</span>md<span class="token punctuation">)</span>
<span class="token number">4.</span> <span class="token punctuation">[</span>惰性加载<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">/</span>惰性加载<span class="token punctuation">.</span>md<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","高阶函数.html.vue"]]);export{d as default};
