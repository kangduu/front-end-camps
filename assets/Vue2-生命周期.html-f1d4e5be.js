const e=JSON.parse('{"key":"v-35e28a7b","path":"/posts/vue/Vue2-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html","title":"Vue专栏之Vue2.x的生命周期钩子","lang":"zh-CN","frontmatter":{"title":"Vue专栏之Vue2.x的生命周期钩子","category":"Vue","description":"Hooks beforeCreate 可以 能获取$parent,$root 接收父组件传递的监听器 （$on），并作相应处理；【子组件beforeCreate在父组件beforeMount后】 不可 获取不到$children,$refs, $slots, $scopedSlots；","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/vue/Vue2-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"}],["meta",{"property":"og:site_name","content":"前端集训营"}],["meta",{"property":"og:title","content":"Vue专栏之Vue2.x的生命周期钩子"}],["meta",{"property":"og:description","content":"Hooks beforeCreate 可以 能获取$parent,$root 接收父组件传递的监听器 （$on），并作相应处理；【子组件beforeCreate在父组件beforeMount后】 不可 获取不到$children,$refs, $slots, $scopedSlots；"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-08T08:25:45.000Z"}],["meta",{"property":"article:author","content":"kangduu"}],["meta",{"property":"article:modified_time","content":"2023-09-08T08:25:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue专栏之Vue2.x的生命周期钩子\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-08T08:25:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"kangduu\\",\\"url\\":\\"https://github.com/kangduu\\"}]}"]]},"headers":[{"level":2,"title":"Hooks","slug":"hooks","link":"#hooks","children":[{"level":3,"title":"beforeCreate","slug":"beforecreate","link":"#beforecreate","children":[]},{"level":3,"title":"created","slug":"created","link":"#created","children":[]},{"level":3,"title":"beforeMount","slug":"beforemount","link":"#beforemount","children":[]},{"level":3,"title":"mounted","slug":"mounted","link":"#mounted","children":[]},{"level":3,"title":"beforeupdate","slug":"beforeupdate","link":"#beforeupdate","children":[]},{"level":3,"title":"updated","slug":"updated","link":"#updated","children":[]},{"level":3,"title":"activated","slug":"activated","link":"#activated","children":[]},{"level":3,"title":"deactivated","slug":"deactivated","link":"#deactivated","children":[]},{"level":3,"title":"beforeDestory","slug":"beforedestory","link":"#beforedestory","children":[]},{"level":3,"title":"destoryed","slug":"destoryed","link":"#destoryed","children":[]},{"level":3,"title":"errorCaptured","slug":"errorcaptured","link":"#errorcaptured","children":[]}]},{"level":2,"title":"Vue中组件生命周期调用顺序","slug":"vue中组件生命周期调用顺序","link":"#vue中组件生命周期调用顺序","children":[{"level":3,"title":"加载渲染过程","slug":"加载渲染过程","link":"#加载渲染过程","children":[]},{"level":3,"title":"子组件更新过程","slug":"子组件更新过程","link":"#子组件更新过程","children":[]},{"level":3,"title":"父组件更新过程","slug":"父组件更新过程","link":"#父组件更新过程","children":[]},{"level":3,"title":"销毁过程","slug":"销毁过程","link":"#销毁过程","children":[]}]},{"level":2,"title":"特别注意","slug":"特别注意","link":"#特别注意","children":[]},{"level":2,"title":"QA","slug":"qa","link":"#qa","children":[]}],"git":{"createdTime":1694161545000,"updatedTime":1694161545000,"contributors":[{"name":"dukang","email":"dk@nosugartech.com","commits":1}]},"readingTime":{"minutes":3.35,"words":1005},"filePathRelative":"posts/vue/Vue2-生命周期.md","localizedDate":"2023年9月8日","excerpt":"<h2> Hooks</h2>\\n<h3> beforeCreate</h3>\\n<ul>\\n<li>\\n<p><code>可以</code></p>\\n<ul>\\n<li>能获取<code>$parent</code>,<code>$root</code></li>\\n<li>接收父组件传递的<code>监听器</code> （$on），并作相应处理；【子组件beforeCreate在父组件beforeMount后】</li>\\n</ul>\\n</li>\\n<li>\\n<p><code>不可</code></p>\\n<ul>\\n<li>获取不到<code>$children</code>,<code>$refs</code>, <code>$slots</code>, <code>$scopedSlots</code>；</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};
