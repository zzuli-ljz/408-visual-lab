# README

# 408 Visual Lab / 408 可视化实验室

> **用「一步一步点出来」的动画，讲透考研 408 计算机学科专业基础综合的重难点题目。**
> **Step-by-step animated explanations for the hard problems of China's postgraduate CS 408 exam.**

[中文](#中文说明) · [English](#english)

---

## 中文说明

### 这是什么

这是一个**交互式动画演示合集**：每道重难点题目都被做成一个网页，用环形图、指针箭头、实时公式验算和「下一步」分步讲解，把抽象的文字答案变成看得见的动画。所有演示默认中文，可一键切换英文（右上角 中文 / EN），语言选择会被记住。

覆盖科目 / Subjects：数据结构、操作系统、计算机网络、计算机组成原理。

### 演示列表 / Demo List

| 题目 | 科目 | 在线预览 |
| --- | --- | --- |
| 2014 年 · 单选第 3 题：双端循环队列的队空与队满条件（答案 A） | 数据结构 | [打开](https://zzuli-ljz.github.io/408-visual-lab/data-structure/2014-q3-circular-deque.html) |
| 知识点 · 排序算法可视化：直接/折半插入、希尔、冒泡、快速、简单选择、堆、归并（2/3/4 路）、基数，共 9 种。支持自定义序列、随机生成、参数配置，附复杂度与稳定性对比表 | 数据结构 | [打开](https://zzuli-ljz.github.io/408-visual-lab/data-structure/sorting-algorithms.html) |

更多演示持续添加中（每周更新）。More demos are added regularly.

### 使用方法 / How to Use

**方式一：直接打开（推荐，最简单）**
每个演示都是**单个 HTML 文件**，不依赖网络、不依赖任何库。下载或克隆仓库后，用浏览器（Chrome / Edge / Safari 均可）直接打开对应 `.html` 文件即可。

```bash
git clone https://github.com/zzuli-ljz/408-visual-lab.git
cd 408-visual-lab
# 然后双击 data-structure/2014-q3-circular-deque.html
```

**方式二：GitHub Pages 在线访问**

开启 Pages 后可直接访问，例如：
`https://zzuli-ljz.github.io/408-visual-lab/data-structure/2014-q3-circular-deque.html`

（首次开启：仓库 Settings → Pages → Source 选择 `main` 分支根目录。）

### 目录结构 / Directory Structure

```
408-visual-lab/
├── data-structure/          # 数据结构 Data Structures
├── operating-system/         # 操作系统 Operating Systems
├── computer-organization/    # 计算机组成原理 Computer Organization
├── computer-networks/        # 计算机网络 Computer Networks
├── README.md
└── LICENSE
```

演示文件命名规范：`年份-题号-主题.html`，例如 `2015-q4-binary-tree.html`。
File naming: `year-qN-topic.html`.

### 如何添加新演示 / Adding a New Demo

1. 在对应科目目录下新建 `年份-题号-主题.html`；
2. 保持**单文件、零外部依赖**（CSS / JS 全部内联），保证离线可用；
3. 页面默认中文，并提供中英切换（参考现有演示的 `data-i18n` 写法）；
4. 提交并发起 Pull Request，或直接 push 到 `main`。

### 致谢 / Acknowledgements

题目来源：全国硕士研究生招生考试计算机学科专业基础综合（408）历年真题。
Problems are from the official CS 408 postgraduate entrance exam papers.

---

## English

### What is this

A collection of **interactive animated demos**: each hard problem becomes a single web page that walks you through the solution with ring diagrams, pointer arrows, live formula checking and a "Next" button — turning abstract textual answers into visible animations. All demos default to Chinese with a one-click English toggle (top-right 中文 / EN), and your language choice is remembered.

Subjects: Data Structures, Operating Systems, Computer Networks, Computer Organization.

### Demo List

| Problem | Subject | Live Demo |
| --- | --- | --- |
| 2014 · Multiple Choice Q3: Empty vs. full conditions of a double-ended circular queue (Answer: A) | Data Structures | [Open](https://zzuli-ljz.github.io/408-visual-lab/data-structure/2014-q3-circular-deque.html) |
| Topic · Sorting Algorithms Visualized: straight/binary insertion, Shell, bubble, quick, selection, heap, merge (2/3/4-way), radix — 9 in total. Custom sequences, random generation, configurable parameters, plus a complexity & stability table | Data Structures | [Open](https://zzuli-ljz.github.io/408-visual-lab/data-structure/sorting-algorithms.html) |

More demos are added regularly.

### How to Use

**Option 1: Open locally (recommended)**

Every demo is a **single self-contained HTML file** with no network or library dependencies. Clone the repo and open the `.html` file in any modern browser.

```bash
git clone https://github.com/zzuli-ljz/408-visual-lab.git
cd 408-visual-lab
# then open data-structure/2014-q3-circular-deque.html
```

**Option 2: GitHub Pages**

Once Pages is enabled, demos are available online, e.g.:
`https://zzuli-ljz.github.io/408-visual-lab/data-structure/2014-q3-circular-deque.html`

(To enable: repo Settings → Pages → Source: `main` branch, root.)

### Directory Structure

See the tree above. English folder names, bilingual README, Chinese-first content.

### Adding a New Demo

1. Create `year-qN-topic.html` under the subject folder;
2. Keep it a **single file with zero external dependencies** so it works offline;
3. Default to Chinese, with a Chinese/English toggle (follow the `data-i18n` pattern of the existing demo);
4. Open a Pull Request, or push directly to `main`.

### License

MIT License. See [LICENSE](LICENSE).
