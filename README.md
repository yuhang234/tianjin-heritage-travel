# 「津门华章」· 天津古建与历史文旅宣传门户平台
### Tianjin Ancient Architecture & Cultural Tourism Portal (`tianjin-heritage-travel`)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![ECharts](https://img.shields.io/badge/ECharts_5-AA344D?style=flat&logo=apacheecharts&logoColor=white)](https://echarts.apache.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)

> **一眼千年，寻脉津沽。**  
> 本项目是以天津历史文化建筑与运河民俗旅游为主题的高品质前端宣传与研学交互门户。以东方美学与现代响应式界面为核心，展现辽代木构、元明运河海神庙宇、明代卫城城防与清代北方巨商大院的营造智慧与厚重历史。

---

## 📌 项目重构与升级概述 (V2.0)

本项目已完成从初版（`tjgj`）到全面美学升级与功能扩充的 **「津门华章」全新 2.0 版本**：

1. **🎨 视觉审美重构 (Visual Refinement)**：
   - **东方国风新美学**：告别单调暗沉色调，采用**玄青墨蓝（#111E2E）、朱红（#B83B26）、古铜金（#C5A059）与宣纸暖白（#FBF9F5）**的传统雅致色彩体系。
   - **大片级全景实景摄影**：引入独乐寺、天后宫、天津鼓楼、石家大院、玉皇阁与海河之眼的高清实景人文摄影大图，彻底告别单调占位图。
   - **视觉层次与微动效**：毛玻璃质感导航栏、平滑横向渐变大幕轮播、传统纹样时间轴与卡片悬浮呼吸光影。

2. **🚀 功能与内容扩充 (Content & Feature Enrichment)**：
   - **全量古迹档案（告别“开发中”空壳）**：为**天津鼓楼 (`gulou.html`)** 与 **玉皇阁 (`yuhuangge.html`)** 建立全套独立深度档案页面，配合已有的**独乐寺 (`dulesi.html`)**、**天后宫 (`tianhougong.html`)** 与 **石家大院 (`shijiadayuan.html`)**，实现五大名胜全面贯通。
   - **分类检索矩阵**：首页支持按【辽代木构】、【运河民俗】、【明清城防】、【北方民居】、【道教高阁】即时动态筛选。
   - **精选研学旅游路线**：新增三大主题研学专线（【辽韵探幽】一日游、【老城寻味】一日游、【津商雅风】两日游），含详细时刻表、必看亮点、交通指南与地道美食。
   - **津味非遗与风味走廊**：涵盖杨柳青木版年画、泥人张彩塑、风筝魏、茶馆相声与煎饼馃子等非物质文化遗产。
   - **智慧出行行囊**：涵盖京津城际高铁（30分钟直达）、市内地铁换乘、门票预约须知与古建防火防闪光保护守则。
   - **互动行程心愿单 (Wishlist)**：支持游客在卡片上一键“加入心愿单”，右侧悬浮抽屉即时计算游玩时长，并支持**一键复制生成旅行清单**。
   - **国风轻柔雅音伴奏**：采用 **Web Audio API** 纯本地合成中国传统五声音阶（宫商角徵羽）古琴清雅环境音，零外部资源依赖，随时静音/开启。
   - **知识问答挑战升级 (`quiz.html`)**：涵盖全部五大古迹的 15 道精选选择题，配备即时答题解析、动态进度条以及可分享的**「津门古建研学学者」电子证书**。

3. **📦 仓库规范与重命名 (Repository Renaming)**：
   - 官方代号由拼音缩写 `tjgj` 升级为具有国际化与文旅辨识度的 **`tianjin-heritage-travel`**（津门华章）。
   - 规范引入 `package.json` 工程配置文件与标准预览脚本。

---

## 🏛️ 五大核心古建名胜专栏

| 古迹名称 | 始建年代 | 建筑规制与亮点 | 保护级别 | 专属页面 |
| :--- | :--- | :--- | :--- | :--- |
| **蓟县独乐寺** | 辽统和二年 (984年) | 中国现存最古老高层木构楼阁，23米观音阁经28次强震不倒，庑殿顶山门，16米泥塑观音 | 全国重点文保第77号 | [`dulesi.html`](file:///dulesi.html) |
| **天津天后宫** | 元泰定三年 (1326年) | 华北最古老妈祖祖庙，“先有天后宫后有天津卫”，单檐庑殿正殿，国家级非遗“皇会” | 全国重点文物保护单位 | [`tianhougong.html`](file:///tianhougong.html) |
| **天津鼓楼** | 明永乐二年 (1404年) | 天津建卫设防中心原点，“镇东/安西/定南/拱北”四门贯通，二层悬挂3吨明代铁铸巨钟 | 老城厢文旅核心地标 | [`gulou.html`](file:///gulou.html) |
| **杨柳青石家大院** | 清光绪元年 (1875年) | “华北第一宅”，津门八大家尊美堂故居，北方民间最大室内木构大戏楼，绝伦津派砖雕 | 全国重点文物保护单位 | [`shijiadayuan.html`](file:///shijiadayuan.html) |
| **敕建玉皇阁** | 明洪武初年 (1370s) | 天津市区现存最古老道教木构建筑群遗构，清虚阁重檐九脊歇山顶临三岔河口水运要冲 | 天津市重点文物保护单位 | [`yuhuangge.html`](file:///yuhuangge.html) |

---

## 📂 项目目录结构

```text
tjgj/ (建议重命名为 tianjin-heritage-travel/)
│
├── index.html              # 门户总览主页 (视觉盛宴轮播/名胜展厅/研学路线/心愿单)
├── dulesi.html             # 蓟县独乐寺专属深度档案 (ECharts 斗栱解析/营造三绝)
├── tianhougong.html        # 天后宫专属深度档案 (海神祖庙/皇会民俗/山门正殿)
├── gulou.html              # 天津鼓楼专属深度档案 (明成设卫/古钟大炮/老城博物馆)
├── shijiadayuan.html       # 石家大院专属深度档案 (华北第一宅/民间大戏楼/砖雕)
├── yuhuangge.html          # 玉皇阁专属深度档案 (三岔河口/清虚阁道教营造)
├── quiz.html               # 互动古建知识研学挑战 (15道精选题/即时解析/电子证书)
│
├── main.js                 # 核心交互逻辑 (轮播控制器/分类筛选/心愿单本地存储/雅音合成)
├── package.json            # 项目工程元数据与命令脚本
├── README.md               # 项目全方位说明文档
│
└── resources/              # 媒体与高清摄影资源目录
    ├── hero_tianjin_eye.jpg    # 海河之眼与津沽夜景高清图
    ├── hero_guwenhuajie.jpg    # 古文化街牌楼实景
    ├── dulesi_real.jpg         # 独乐寺观音阁辽构高清实景
    ├── gulou_real.jpg          # 天津鼓楼宏伟城台实景
    ├── shijiadayuan_real.jpg   # 石家大院大门实景
    ├── shijiadayuan_detail.jpg # 石家大院内部建筑细节
    ├── tianhougong_real.jpg    # 天后宫与古文化街实景
    ├── yuhuangge_real.jpg      # 玉皇阁清虚阁实景
    ├── yangliuqing_nianhua.png # 杨柳青经典年画艺术
    └── ... (各古迹山门、戏楼、砖雕原图及插图)
```

---

## 🛠️ 快速本地运行与预览

本项目采用原生前端技术栈（纯静态 HTML5 + Modern CSS + Vanilla JS + CDN），无需复杂的构建编译流程：

### 方法一：使用 Python 快速本地服务（推荐）
```bash
# 启动本地服务
python -m http.server 3000

# 打开浏览器访问
http://localhost:3000
```

### 方法二：使用 Node.js / npx serve
```bash
npx serve -l 3000
```

### 方法三：VSCode 插件直启
安装 **Live Server** 扩展，在项目根目录右键 `index.html` 选择 **“Open with Live Server”** 即可。

---

## 🏷️ 关于代码仓库重命名指南

为了让项目更具专业度与文旅传播度，建议将代码仓库统一更名为 **`tianjin-heritage-travel`**：

1. **修改 GitHub 远程仓库名称**：
   - 登录 GitHub 进入仓库页面：`https://github.com/Johnwatson1234/tjgj`
   - 点击 **Settings** -> **General** -> **Repository name**
   - 将 `tjgj` 修改为 `tianjin-heritage-travel`，点击 **Rename**。

2. **更新本地 Git 远程跟踪地址**：
   ```bash
   git remote set-url origin https://github.com/Johnwatson1234/tianjin-heritage-travel.git
   git remote -v
   ```

3. **本地文件夹重命名（可选）**：
   ```powershell
   # 在上级目录执行：
   Rename-Item -Path "D:\AData\dev\study\tjgj" -NewName "tianjin-heritage-travel"
   ```

---

## 📜 鸣谢与版权声明

- **文化顾问与史料支持**：梁思成先生《蓟县独乐寺观音阁山门考》、天津市文物局老城厢史料。
- **开源摄影许可**：Wikimedia Commons（署名 CC-BY-SA 共享协议摄影师作品）。
- **开源许可证**：本项目采用 [MIT License](LICENSE) 开源，欢迎用于古建筑文化研学、文旅教学与公益交流展示。