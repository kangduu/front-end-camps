import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,a as n,b as s,d as t,f as l}from"./app-6ac0b3cf.js";const i={},u=n("h3",{id:"导读",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#导读","aria-hidden":"true"},"#"),s(" 导读")],-1),r={href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/AJAX",target:"_blank",rel:"noopener noreferrer"},d=n("h6",{id:"feature",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#feature","aria-hidden":"true"},"#"),s(" feature")],-1),k=n("ol",null,[n("li",null,"可以在不重新加载整个网页的情况下，对网页的某部分进行更新。【局部】"),n("li",null,"通过在后台与服务器进行少量数据交换，Ajax 可以使网页实现异步更新。【异步】")],-1),v={href:"http://dukangblog.top/2020/03/21/xml-json/",target:"_blank",rel:"noopener noreferrer"},m=l(`<h3 id="xmlhttprequest实例化对象的主要属性" tabindex="-1"><a class="header-anchor" href="#xmlhttprequest实例化对象的主要属性" aria-hidden="true">#</a> XMLHttpRequest实例化对象的主要属性</h3><p><code>xhr.readyState</code> : XMLHttpRequest对象的状态</p><table><thead><tr><th>状态</th><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>0</td><td>Uninitialized</td><td>初始化状态。XMLHttpRequest 对象已创建或已被 abort() 方法重置。</td></tr><tr><td>1</td><td>Open</td><td>open() 方法已调用，但是 send() 方法未调用。请求还没有被发送。</td></tr><tr><td>2</td><td>Sent</td><td>Send() 方法已调用，HTTP 请求已发送到 Web 服务器。未接收到响应。</td></tr><tr><td>3</td><td>Receiving</td><td>所有响应头部都已经接收到。响应体开始接收但未完成。</td></tr><tr><td>4</td><td>Loaded</td><td>HTTP 响应已经完全接收。</td></tr></tbody></table><p><code>xhr.status </code>: 服务器返回的状态码，等于200表示一切正常。</p><p><code>xhr.responseText </code>: 服务器返回的文本数据</p><p><code>xhr.responseXML</code>: 服务器返回的XML格式的数据</p><p><code>xhr.statusText</code> : 服务器返回的状态文本。</p><h3 id="老版本xmlhttprequest对象-的缺点" tabindex="-1"><a class="header-anchor" href="#老版本xmlhttprequest对象-的缺点" aria-hidden="true">#</a> 老版本XMLHttpRequest对象 的缺点</h3><ul><li>只支持文本数据的传送，无法用来读取和上传二进制文件。</li><li>传送和接收数据时，没有进度信息，只能提示有没有完成。</li><li>受到&quot;同域限制&quot;（Same Origin Policy），只能向同一域名的服务器请求数据。</li></ul><h3 id="新版本xmlhttprequest对象的功能" tabindex="-1"><a class="header-anchor" href="#新版本xmlhttprequest对象的功能" aria-hidden="true">#</a> 新版本XMLHttpRequest对象的功能</h3><blockquote><p>可以设置HTTP请求的<code>时限</code>（timeout）。</p><p>可以使用<code>FormData对象</code>管理表单数据（new FormData() ）。</p><p>可以<code>上传文件</code>。</p><p>可以请求不同域名下的数据（<code>跨域请求</code>）。</p><p>可以获取服务器端的<code>二进制数据</code>。</p><p>可以获得数据<code>传输的进度</code>信息（onprogress ）。</p></blockquote><h3 id="封装一个原生的ajax请求方法" tabindex="-1"><a class="header-anchor" href="#封装一个原生的ajax请求方法" aria-hidden="true">#</a> 封装一个原生的Ajax请求方法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">requestAjax</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> method <span class="token operator">=</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> async <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> xhr<span class="token punctuation">;</span>
  <span class="token comment">//new 一个 xml 对象 （兼容）</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>XMLHttpRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ActiveXObject</span><span class="token punctuation">(</span><span class="token string">&quot;Microsoft.XMLHTTP&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//xhr打开通道url</span>
    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> url<span class="token punctuation">,</span> async<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// xhr.setRequestHeader()</span>

    <span class="token comment">//监听</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">==</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>info<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    xhr<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span>   <span class="token comment">// 只可在异步请求下设置超时时间</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">ontimeout</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;请求超时&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// do something</span>
      <span class="token comment">// requestAjax(url, method, async)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//发送请求</span>
    xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&#39;The XHR instance could not be created&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue中使用axios并封装" tabindex="-1"><a class="header-anchor" href="#vue中使用axios并封装" aria-hidden="true">#</a> vue中使用axios并封装</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// add hostDomain</span>
<span class="token keyword">const</span> hostDomain <span class="token operator">=</span> <span class="token string">&#39;http://localhost:8888/api&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">AUTH_TOKEN</span> <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// \`baseURL\` 将自动加在 \`url\` 前面，除非 \`url\` 是一个绝对 URL。</span>
  <span class="token comment">// 它可以通过设置一个 \`baseURL\` 便于为 axios 实例的方法传递相对 URL</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> hostDomain<span class="token punctuation">,</span>
  <span class="token comment">//timeout: 3000</span>
  <span class="token comment">//headers: {&#39;X-Custom-Header&#39;: &#39;foobar&#39;}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
instance<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>post<span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;application/x-www-form-urlencoded&#39;</span><span class="token punctuation">;</span>
instance<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>common<span class="token punctuation">[</span><span class="token string">&#39;Authorization&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;Bearer &#39;</span> <span class="token operator">+</span> <span class="token constant">AUTH_TOKEN</span><span class="token punctuation">;</span>

<span class="token comment">//在请求或响应被 then 或 catch 处理前拦截它们。</span>
<span class="token comment">// 请求拦截</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// do somethingb</span>
  <span class="token keyword">return</span> config
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 响应拦截</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something</span>
  <span class="token keyword">return</span> config
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Ajax</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> _data <span class="token operator">=</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>_data<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> _data<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 与后端协商的成功处理</span>
          <span class="token comment">// 判断code ，做一些响应处理，如 提示</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span>_data<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// 不符合业务规则的处理逻辑</span>
          <span class="token function">reject</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">static</span> <span class="token function">Post</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> _data <span class="token operator">=</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>_data<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> _data<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 与后端协商的成功处理</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span>_data<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// 不符合业务规则的处理逻辑</span>
          <span class="token function">reject</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Ajax
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token keyword">import</span> Ajax <span class="token keyword">from</span> <span class="token string">&#39;./axios/index&#39;</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>ajax <span class="token operator">=</span> Ajax
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-cli3-x使用反向代理模式实现跨域" tabindex="-1"><a class="header-anchor" href="#vue-cli3-x使用反向代理模式实现跨域" aria-hidden="true">#</a> vue-cli3.x使用反向代理模式实现跨域</h3><p><strong>vue.config.js</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;/api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://server:3000&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 需要跨域的目标url</span>
                <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 将基于名称的虚拟托管网址的选项，不配置请求会报错</span>
                <span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//代理websockets</span>
                <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 重写路径，去掉/api</span>
                    <span class="token string-property property">&quot;^/api&quot;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),b={id:"jquery中的ajax",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#jquery中的ajax","aria-hidden":"true"},"#",-1),f={href:"https://www.jquery123.com/category/ajax/",target:"_blank",rel:"noopener noreferrer"},x=n("h3",{id:"参考",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),s(" 参考")],-1),y={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest",target:"_blank",rel:"noopener noreferrer"},g={href:"https://blog.csdn.net/s1070/article/details/52088590",target:"_blank",rel:"noopener noreferrer"},w={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Microsoft_Extensions/ActiveXObject",target:"_blank",rel:"noopener noreferrer"},_={href:"http://www.axios-js.com/zh-cn/docs/",target:"_blank",rel:"noopener noreferrer"};function j(q,L){const a=p("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[n("a",r,[s("Ajax"),t(a)]),s("（Asynchronous Javascript And XML，异步 JavaScript 和 XML），是指一种创建交互式、快速动态网页应用的网页开发技术。")]),d,k,n("blockquote",null,[n("p",null,[n("a",v,[s("JSON和XML"),t(a)]),s("都被用于在Ajax模型中打包信息【数据交换】。")])]),m,n("h3",b,[h,s(" jQuery中的"),n("a",f,[s("ajax"),t(a)])]),x,n("ul",null,[n("li",null,[n("a",y,[s("XMLHttpRequest"),t(a)])]),n("li",null,[n("a",g,[s("XMLHTTP"),t(a)])]),n("li",null,[n("a",w,[s("ActiveXObject"),t(a)])]),n("li",null,[n("a",_,[s("axios"),t(a)])])])])}const T=e(i,[["render",j],["__file","ajax.html.vue"]]);export{T as default};
