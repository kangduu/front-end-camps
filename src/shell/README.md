---
title: Shell
icon: fas fa-terminal
---

## 学习资源

### 文档

- [Bash 阮一峰](https://wangdoc.com/bash/)
- [Bash 官方文档](https://www.gnu.org/software/bash/)
- [Linux Command Line](https://linuxcommand.org/)
- `man` 命令查看帮助：如 `man ls`。

### 练习平台

- [LeetCode Shell 题库](https://leetcode.cn/problemset/shell/)
- [Codecademy 的 Shell 教程](https://www.codecademy.com/catalog/language/bash)

## 什么是 Shell

Shell 是用户与操作系统交互的桥梁，它接受用户输入的命令并执行。

> 常见的 Shell 有 Bash、Zsh、Fish 等，其中 Bash（Bourne Again Shell）是最常用的。

## Shell 的作用

1. 执行命令：如文件管理、进程管理、网络配置等。
2. 编写脚本：自动化完成重复性任务。

## 基本命令

### 文件与目录操作

- ls：列出当前目录内容。
- cd：切换目录。
- pwd：显示当前路径。
- mkdir：创建目录。
- rm：删除文件或目录。
- cp 和 mv：复制和移动文件。

### 文件内容操作

- cat：查看文件内容。
- echo：打印内容。
- grep：搜索文本内容。
- head 和 tail：查看文件的开头或结尾部分。

### 系统相关

- whoami：查看当前用户。
- top 或 htop：查看系统进程。
- df 和 du：检查磁盘空间。

### 权限管理

- chmod：修改文件权限。
- chown：更改文件所有者。

## 编写 Shell 脚本

### 基本语法

- 脚本文件通常以 `.sh` 结尾。
- 使用 `#!/bin/bash` 作为脚本的第一行（Shebang）。
- 使用 `chmod +x your_script.sh` 赋予可执行权限。

### 变量

- 定义：`var_name=value`（不能有空格）
- 使用：`$var_name`

### 条件判断

```bash
if [ condition ]; then
    commands
fi
```

### 循环

- for 循环

```bash
for i in {1..5}; do
    echo "Number $i"
done
```

- while 循环

```bash
while [ condition ]; do
    commands
done
```

### 函数

```bash
function_name() {
    commands
}
function_name  # 调用函数
```

## 进阶技能

### 管道和重定向

- 管道：`|`，将一个命令的输出作为另一个命令的输入。
- 重定向：`>`（覆盖）和 `>>`（追加）将输出保存到文件。

### 脚本调试

- 使用 `bash -x your_script.sh` 查看执行过程。
- 在脚本中添加 `set -x` 启用调试模式，`set +x` 关闭。

### 处理参数

- `$1`, `$2`, `...` ：脚本接收的参数。
- `$#` ：参数个数。
- `$@` 和 `$*` ：所有参数。

### 定时任务

使用 `cron` 设置周期性任务。
使用 `at` 运行一次性任务。
