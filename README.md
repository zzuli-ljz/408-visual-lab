# README

# 408 Visual Lab / 408 可视化实验室

> **用「一步一步点出来」的动画，讲透考研 408 计算机学科专业基础综合的重难点题目。**
> **Step-by-step animated explanations for the hard problems of China's postgraduate CS 408 exam.**

[中文](#中文说明) · [English](#english)

> 🏠 **站点首页 / Site Home**：https://zzuli-ljz.github.io/408-visual-lab/ —— 卡片式导航，按四科分组，每张卡带配色缩略图与一句话说明，支持搜索和科目筛选，中英双语。
> Card-based navigation grouped by the four subjects, with a color-coded thumbnail and one-line description per demo; searchable, bilingual.

---

## 中文说明

### 这是什么

这是一个**交互式动画演示合集**：每道重难点题目都被做成一个网页，用环形图、指针箭头、实时公式验算和「下一步」分步讲解，把抽象的文字答案变成看得见的动画。所有演示默认中文，可一键切换英文（右上角 中文 / EN），语言选择会被记住。

覆盖科目 / Subjects：数据结构、操作系统、计算机网络、计算机组成原理。

**站点首页** `index.html` 提供卡片式导航：按四科分组、每卡一张按科目主色渲染的缩略图，支持关键词搜索与科目筛选。首页完全由 `DEMOS` 数组驱动，新增演示只需往数组里加一条，卡片、计数与筛选会自动更新。

### 演示列表 / Demo List

| 题目 | 科目 | 在线预览 |
| --- | --- | --- |
| 2014 年 · 单选第 3 题：双端循环队列的队空与队满条件（答案 A） | 数据结构 | [打开](https://zzuli-ljz.github.io/408-visual-lab/data-structure/2014-q3-circular-deque.html) |
| 知识点 · 排序算法可视化：直接/折半插入、希尔、冒泡、快速、简单选择、堆、归并（2/3/4 路）、基数，共 9 种。支持自定义序列、随机生成、参数配置，附复杂度与稳定性对比表 | 数据结构 | [打开](https://zzuli-ljz.github.io/408-visual-lab/data-structure/sorting-algorithms.html) |
| 知识点 · 堆的构建与删除：大根堆/小根堆自底向上建堆（O(n)），删除堆顶或任意关键字后自动判断上滤/下滤，树形 + 数组双视图，逐步统计比较与交换次数 | 数据结构 | [打开](https://zzuli-ljz.github.io/408-visual-lab/data-structure/heap-operations.html) |
| 知识点 · 图算法四合一：Dijkstra 单源最短路、Floyd 全对最短路（矩阵逐轮演化）、Prim 与 Kruskal 最小生成树（并查集判环、连通分量染色），同一张图切换对比，支持自定义/随机/教材经典图，有向无向可切 | 数据结构 | [打开](https://zzuli-ljz.github.io/408-visual-lab/data-structure/graph-algorithms.html) |
| 知识点 · TCP 三次握手 / 四次挥手 / 状态机：时序图逐段发报文 + 双侧 FSM 同步点亮，可模拟第 3 个 ACK 丢失后的超时重传，含 11 个状态速查表与 408 考点 | 计算机网络 | [打开](https://zzuli-ljz.github.io/408-visual-lab/computer-networks/tcp-handshake.html) |
| 知识点 · 存储层次地址翻译：虚拟地址 → TLB → 页表 → 物理地址 → Cache → 主存全链路逐步追踪；VA/PA 位域按页式与 Cache 双视角拆解，可配置地址位数、页大小、一/二级页表、TLB 与 Cache 的容量/相联度/替换策略，含缺页调页、块装入与 AMAT 平均访问时间计算 | 计算机组成原理 | [打开](https://zzuli-ljz.github.io/408-visual-lab/computer-organization/memory-hierarchy.html) |
| 知识点 · 磁盘调度六算法：FCFS、SSTF、SCAN（电梯）、C-SCAN、LOOK、C-LOOK 同一组请求横向对比；磁道分布带 + 按服务顺序绘制的寻道折线逐步追踪，可配置请求队列、起始磁头、磁道上限与初始方向，自动统计总磁道数与平均寻道长度，并演示空程 / 返程是否计入 | 操作系统 | [打开](https://zzuli-ljz.github.io/408-visual-lab/operating-system/disk-scheduling.html) |
| 知识点 · PV 操作同步：记录型信号量逐语句模拟 P / V（值变化、阻塞队列、唤醒、死锁检测）；覆盖生产者-消费者、读者-写者、哲学家进餐、前驱同步（司机与售票员）四个经典问题，可配置缓冲区容量、循环轮数与三种调度方式，还能故意颠倒两个 P 的顺序或限制就餐人数来复现 / 破解死锁；含伪代码高亮、事件日志与九条考点速记 | 操作系统 | [打开](https://zzuli-ljz.github.io/408-visual-lab/operating-system/pv-semaphore.html) |
| 知识点 · ARP / DHCP / DNS 全过程时序图：把「主机接入 → 自动配置 → 地址解析 → 域名解析 → 访问网页」串成完整链路，也可单独细看 ARP、DHCP、DNS 三个时序；逐条报文标注广播 / 单播与端口，同步记录 ARP 高速缓存、DHCP 租约（T1 / T2 续租）、DNS 缓存与 TTL；可切换跨网段走网关、缓存命中、双 DHCP 服务器等条件，含三协议速查表与九条考点速记 | 计算机网络 | [打开](https://zzuli-ljz.github.io/408-visual-lab/computer-networks/arp-dhcp-dns.html) |

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

（已配置 GitHub Actions：每次 push 到 `main` 会自动部署全站，无需手动操作。）

### 宽屏一屏式布局 / Wide-screen Dashboard

在平板横屏与桌面浏览器（宽度 ≥ 1024px、高度 ≥ 600px）打开时，演示页会自动变成**三栏仪表盘**：左侧配置与参数、中间动画与播放控制、右侧结果与考点，所有板块同屏可见，整页不再上下滚动；内容较长的板块在卡片内部独立滚动，标题吸顶。手机和窄屏（< 1024px）保持原来的单列长页，方便纵向滑动。

这套布局只由每个 HTML `<style>` 末尾的一段 `@media (min-width:1024px) and (min-height:600px)` CSS Grid 规则实现，HTML 结构、文案与动画逻辑均未改动。新增演示时用 `.wrap > .card:nth-of-type(n)` 指定卡片所在行列即可复用。

### 目录结构 / Directory Structure

```
408-visual-lab/
├── index.html                # 站点首页（数据驱动卡片导航）
├── data-structure/          # 数据结构 Data Structures
├── operating-system/         # 操作系统 Operating Systems
├── computer-organization/    # 计算机组成原理 Computer Organization
├── computer-networks/        # 计算机网络 Computer Networks
├── README.md
└── LICENSE
```

演示文件命名规范：`年份-题号-主题.html`，例如 `2015-q4-binary-tree.html`。
File naming: `year-qN-topic.html`.

### 四科配色规范 / Subject Color Scheme

为让访问者一眼分辨科目，四个科目目录的演示各用一套主色，版式与交互保持一致：

| 科目 Subject | 主色 Primary | 色值 Hex | 辅助色 Accents |
| --- | --- | --- | --- |
| 数据结构 Data Structures | 靛蓝 Indigo | `#4f46e5` | 紫 `#7c3aed`（枢轴/当前结点） |
| 操作系统 Operating Systems | 翠绿 Emerald | `#059669` | 青绿 `#0d9488`（进程/帧） |
| 计算机组成原理 Computer Organization | 琥珀 Amber | `#d97706` | 橙红 `#ea580c`（数据通路/总线） |
| 计算机网络 Computer Networks | 天青 Sky | `#0284c7` | 青 `#0891b2`；客户端蓝 / 服务端紫 `#7c3aed` |

### 如何添加新演示 / Adding a New Demo

1. 在对应科目目录下新建 `年份-题号-主题.html`；
2. 保持**单文件、零外部依赖**（CSS / JS 全部内联），保证离线可用；
3. 页面默认中文，并提供中英切换（参考现有演示的 `data-i18n` 写法）；
4. 在 `index.html` 的 `DEMOS` 数组末尾加一条（字段照抄已有条目即可），首页卡片、分组计数、搜索与筛选会自动更新；
5. 把新演示补进上面的中英文演示表，然后提交 Pull Request，或直接 push 到 `main`。

### 致谢 / Acknowledgements

题目来源：全国硕士研究生招生考试计算机学科专业基础综合（408）历年真题。
Problems are from the official CS 408 postgraduate entrance exam papers.

---

## English

### What is this

A collection of **interactive animated demos**: each hard problem becomes a single web page that walks you through the solution with ring diagrams, pointer arrows, live formula checking and a "Next" button — turning abstract textual answers into visible animations. All demos default to Chinese with a one-click English toggle (top-right 中文 / EN), and your language choice is remembered.

Subjects: Data Structures, Operating Systems, Computer Networks, Computer Organization.

The **site home page** `index.html` is a card-based navigation: demos grouped by subject, each with a subject-colored thumbnail and a one-line description, plus keyword search and subject filters. It is fully driven by the `DEMOS` array — append one object and the cards, counts and filters update themselves.

### Demo List

| Problem | Subject | Live Demo |
| --- | --- | --- |
| 2014 · Multiple Choice Q3: Empty vs. full conditions of a double-ended circular queue (Answer: A) | Data Structures | [Open](https://zzuli-ljz.github.io/408-visual-lab/data-structure/2014-q3-circular-deque.html) |
| Topic · Sorting Algorithms Visualized: straight/binary insertion, Shell, bubble, quick, selection, heap, merge (2/3/4-way), radix — 9 in total. Custom sequences, random generation, configurable parameters, plus a complexity & stability table | Data Structures | [Open](https://zzuli-ljz.github.io/408-visual-lab/data-structure/sorting-algorithms.html) |
| Topic · Heap Build & Deletion: bottom-up build (O(n)) for max/min-heaps, delete the root or any key with automatic sift-up/sift-down; tree + array views with per-step comparison & swap counts | Data Structures | [Open](https://zzuli-ljz.github.io/408-visual-lab/data-structure/heap-operations.html) |
| Topic · Graph Algorithms Combined: Dijkstra (single-source), Floyd (all-pairs, evolving matrix), Prim & Kruskal (MST with union-find cycle detection and component coloring) — switch algorithms on the same graph; custom / random / textbook presets, directed or undirected | Data Structures | [Open](https://zzuli-ljz.github.io/408-visual-lab/data-structure/graph-algorithms.html) |
| Topic · TCP 3-way Handshake / 4-way Close / State Machine: sequence diagram + live dual FSM, with a lost-3rd-ACK retransmission scenario, an 11-state cheat sheet and exam notes | Computer Networks | [Open](https://zzuli-ljz.github.io/408-visual-lab/computer-networks/tcp-handshake.html) |
| Topic · Memory Hierarchy Address Translation: VA → TLB → page table → PA → cache → main memory, step by step; paging-view and cache-view bit-field breakdown, configurable VA/PA widths, page size, 1/2-level page tables, TLB & cache size / associativity / replacement, page faults, block fills and AMAT | Computer Organization | [Open](https://zzuli-ljz.github.io/408-visual-lab/computer-organization/memory-hierarchy.html) |
| Topic · Six Disk Scheduling Algorithms: FCFS, SSTF, SCAN (elevator), C-SCAN, LOOK and C-LOOK compared on the same request queue. A track-distribution strip plus a seek trajectory drawn in service order; configurable queue, initial head, max track and direction, with total cylinders and average seek length computed automatically — including when empty return travel counts | Operating Systems | [Open](https://zzuli-ljz.github.io/408-visual-lab/operating-system/disk-scheduling.html) |
| Topic · PV Synchronization: a statement-by-statement record-semaphore simulator (value changes, wait queues, wakeups, deadlock detection). Four classic problems — producer–consumer, reader–writer, dining philosophers and precedence (driver/conductor) — with configurable buffer size, rounds and three scheduling policies; deliberately reverse the P order or cap the diners to reproduce or break deadlock. Includes highlighted pseudocode, an event log and nine exam notes | Operating Systems | [Open](https://zzuli-ljz.github.io/408-visual-lab/operating-system/pv-semaphore.html) |
| Topic · ARP / DHCP / DNS Packet Sequences: one full chain from joining the network to loading a page, plus three standalone timelines. Each packet is labeled with broadcast/unicast and ports while live tables track the ARP cache, DHCP lease (T1 / T2 renewal) and DNS cache with TTL. Toggles for cross-subnet gateway resolution, cache hits and dual DHCP servers; includes a protocol cheat sheet and nine exam notes | Computer Networks | [Open](https://zzuli-ljz.github.io/408-visual-lab/computer-networks/arp-dhcp-dns.html) |

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

Demos are available online, e.g.:
`https://zzuli-ljz.github.io/408-visual-lab/data-structure/2014-q3-circular-deque.html`

(GitHub Actions is configured: every push to `main` deploys the whole site automatically.)

### Wide-screen Dashboard

On tablets in landscape and desktop browsers (width >= 1024px, height >= 600px), every demo switches to a **three-column dashboard**: settings on the left, animation and playback controls in the middle, results and exam notes on the right. All panels stay within one screen — the page itself never scrolls; longer panels scroll independently inside their own card with a sticky heading. Phones and narrow viewports (< 1024px) keep the original single-column layout for comfortable vertical scrolling.

This is pure CSS: one `@media (min-width:1024px) and (min-height:600px)` Grid block at the end of each page's `<style>`. No HTML, copy or JavaScript was changed. For new demos, place cards with `.wrap > .card:nth-of-type(n)` in the same block.

### Directory Structure

See the tree above. `index.html` is the site home page (data-driven card navigation). English folder names, bilingual README, Chinese-first content.

### Adding a New Demo

1. Create `year-qN-topic.html` under the subject folder;
2. Keep it a **single file with zero external dependencies** so it works offline;
3. Default to Chinese, with a Chinese/English toggle (follow the `data-i18n` pattern of the existing demo);
4. Append one object to the `DEMOS` array in `index.html` (copy the fields from an existing entry) — cards, counts, search and filters update automatically;
5. Add a row to the bilingual demo tables above, then open a Pull Request or push directly to `main`.

### License

MIT License. See [LICENSE](LICENSE).
