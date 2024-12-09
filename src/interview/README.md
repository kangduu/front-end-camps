---
title: 笔面试
index: false
icon: tabler:file-pencil
---

### GitHub Issues

<RedDiv>
    <ol>
        <li v-for="issue in issues" :key="issue.id">
            <a :href="issue.html_url" target="_blank">{{ issue.title }}</a>
        </li>
    </ol>
</RedDiv>

<script setup>
    import { h, ref, onMounted } from 'vue'

    const RedDiv = (_, ctx) =>
    h('div',{ class:'issues' },ctx.slots.default())

    const issues = ref([])

    const getIssues = async () => {
        try {
            const response = await fetch('https://api.github.com/repos/kangduu/camps/issues');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            
            issues.value = data;
        } catch (error) {
            console.error('Error fetching issues:', error);
        }
    };

    onMounted(() => {
        getIssues();
    });
</script>

### 分类整理

- [编程题](./%E7%BC%96%E7%A8%8B%E9%A2%98.md)
- [数据结构与算法](./Algorithm.md)
- [浏览器相关](./Browser.md)
- [DOM 操作](./Dom.md)
- [HTML-CSS](./HTML-CSS.md)
- [JavaScript 基础](./Javascript.md)
- [Webpack](./webpack.md)
- [Vue.js](./Vue.md)
- [JQuery](./jQuery.md)
