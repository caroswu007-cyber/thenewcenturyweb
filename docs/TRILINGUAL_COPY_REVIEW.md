# ASra 网站文案三语对照与图片替换说明

本文档供您核对 **English（英语）/ Español（西班牙语）/ 中文（简体）** 的译文。核对无误后，可将修改意见发回以更新代码。

**全站逐条导出（Excel）：** 运行 `npm run export:site-copy` 生成 **`docs/full_site_copy_review.csv`**（UTF-8 BOM）。表中包含全部路由对应的 `i18n` 词条、`siteContent` / `achievements2025Content` / `founderStory2026Content` / `spiritMedicineData` 等文案，以及已在脚本中登记的 **组件内写死英文**。列：`route`、`source_file`、`content_id`、`kind`、`English`、`Español`、`中文`、`notes`。仅界面 i18n 时也可用 `npm run export:i18n-csv` 生成精简表 `docs/i18n_trilingual_review.csv`。

---

## 一、界面字符串（i18n）——已全部接入语言切换

所有通过 `t('...')` 显示的导航、首页板块标签、关于页标题、页脚等，三语文本分别位于：

| 语言 | 文件路径 |
|------|-----------|
| 英语（基准） | `src/i18n/messages/en.ts` |
| 西班牙语（覆盖键） | `src/i18n/messages/es.ts` |
| 中文（简体，覆盖键） | `src/i18n/messages/zh.ts` |

**如何对照：** 在编辑器中分三列或分屏打开上述三个文件，按相同的 **键名**（如 `'nav.home'`）横向对照即可。键名完全一致，顺序在三个文件中大体一致。

**说明：** `translate.ts` 对 `es` 与 `zh` 使用 `{ ...messagesEn, ...messagesXX }`，因此若某键仅在 `en.ts` 中出现，西语/中文会回退显示英文；当前 `zh.ts`/`es.ts` 已覆盖与 `en.ts` 相同的全部界面键。

---

## 二、长文案与数据（目前主要为英文源码）

以下版块的大量正文**仍写在内容模块里**，不随导航上的语言切换自动变化（除非另行做国际化改造）。若要对这些段落做三语版本，通常需要扩展 `getAboutContent` 或按语言拆分 `siteContent` / `achievements2025Content` 等。

| 版块 | 主要源码位置 | 备注 |
|------|----------------|------|
| 关于页正文（组织介绍、创始人段落、使命全文等） | `src/content/siteContent.ts` → `aboutContent` | 页面标题等多处已用 i18n；长段落目前为英文 |
| 创始故事 | `src/content/founderStory2026Content.ts` | 英文块状文案 |
| 2025 成果页 | `src/content/achievements2025Content.ts` | 指标、小标题、案例等多为英文（与 i18n 中 `achievementsPage.*` 不一定一一绑定到页面） |
| 灵魂档案分集 | `src/content/siteContent.ts` → `recordOfSoul.timeline` | 每集 `title` / `abstract` / `keyFeatures` 等为英文 |
| 灵体医学 / 宇宙矩阵 | `src/content/siteContent.ts`、`spiritMedicineData.ts` 等 | 英文为主 |

### 2.1 关于页 `aboutContent` 三语对照（节选：标题与概要）

以下表格方便您核对 **组织名、标语、概述、ASra/SMSC 简介、伙伴关系、创始人、两项使命**。西语列为建议稿，可与 `es` 文风统一后定稿。

#### 组织名与标语

| 键 / 字段 | English | Español（建议） | 中文（建议） |
|-----------|---------|-----------------|--------------|
| `orgName` | Umma New Century Organization | Organización Umma New Century | 乌玛新世纪组织 |
| `orgSubtitle` | New Century of UMMa | Nuevo siglo de UMMa | 乌玛的新世纪 |
| `tagline` | A Dual-Domain Organization Spanning the Spirit Realm and the Physical World | Organización de doble dominio que abarca el Reino Espiritual y el mundo físico | 横跨灵界与物质世界的双域组织 |

#### 概述段落 `overview`（完整一段）

| English | Español（建议） | 中文（建议） |
|---------|-----------------|--------------|
| The Umma New Century Organization (New Century of UMMa) is a dual-domain organization spanning both the Spirit Realm and the physical world.<br><br>In the physical world, the Umma New Century Organization oversees the Association of Spirit Realm's Ambassador (ASra). Spirit Realm Ambassadors are human beings living in the physical world. Tens of thousands of members will be distributed across all nations, ethnicities, and cultural communities worldwide.<br><br>In the Spirit Realm, the Umma New Century Organization oversees the Society of Master Spirit Controllers (SMSC). The SMSC comprises tens of thousands of Master Spirit members. A Master Spirit is an administrator in the Spirit Realm who governs ordinary spirits (ghosts) and human beings. | La Organización Umma New Century (Nuevo siglo de UMMa) es una organización de doble dominio que abarca el Reino Espiritual y el mundo físico.<br><br>En el mundo físico, la Organización Umma New Century supervisa la Asociación del Embajador del Reino Espiritual (ASra). Los embajadores del reino espiritual son seres humanos en el mundo físico. Decenas de miles de miembros estarán presentes en todas las naciones, etnias y comunidades culturales.<br><br>En el Reino Espiritual, la Organización Umma New Century supervisa la Sociedad de Controladores Maestros Espirituales (SMSC). El SMSC agrupa decenas de miles de Maestros Espirituales. Un Maestro Espiritual es un administrador en el Reino Espiritual que gobierna espíritus ordinarios (fantasmas) y seres humanos. | 乌玛新世纪组织（乌玛的新世纪）是一个横跨灵界与物质世界的双域组织。<br><br>在物质世界中，乌玛新世纪组织统领「灵界大使协会」（ASra）。灵界大使是生活在物质世界的人类，数以万计的成员将分布于世界各国、各族群与各文化社群。<br><br>在灵界，乌玛新世纪组织统领「高级灵体统御者协会」（SMSC）。SMSC 由数以万计的高级灵体组成；高级灵体是灵界的管理者，治理普通灵体（鬼）与人类。 |

#### `asra` / `smsc` 卡片

| 字段 | English | Español（建议） | 中文（建议） |
|------|---------|-----------------|--------------|
| ASRA `name` | Association of Spirit Realm's Ambassador | Asociación del Embajador del Reino Espiritual | 灵界大使协会 |
| ASRA `description` | Spirit Realm Ambassadors are human beings living in the physical world. Tens of thousands of members will be distributed across all nations, ethnicities, and cultural communities worldwide. | Los embajadores del reino espiritual son humanos en el mundo físico. Decenas de miles de miembros estarán distribuidos en todas las naciones, etnias y comunidades culturales. | 灵界大使是生活在物质世界的人类，数以万计的成员将分布于世界各国、各族群与各文化社群。 |
| SMSC `name` | Society of Master Spirit Controllers | Sociedad de Controladores Maestros Espirituales | 高级灵体统御者协会 |
| SMSC `description` | The SMSC comprises tens of thousands of Master Spirit members. A Master Spirit is an administrator in the Spirit Realm who governs ordinary spirits (ghosts) and human beings. | El SMSC reúne decenas de miles de Miembros Maestros Espirituales. Un Maestro Espiritual es un administrador en el Reino Espiritual que gobierna espíritus ordinarios (fantasmas) y seres humanos. | SMSC 由数以万计的高级灵体成员组成。高级灵体是灵界的管理者，治理普通灵体（鬼）与人类。 |

#### `partnership`（一段）

| English | Español（建议） | 中文（建议） |
|---------|-----------------|--------------|
| The SMSC was established specifically to support ASra. The Master Spirits of the SMSC will assist each ASra human member on a 1:1 or 2:1 basis — enabling human members to acquire the special ability to govern attached spirits, improve human health, and simultaneously serve as ambassadors who spread the truth about the Spirit Realm and spirit life entities. | El SMSC se creó específicamente para apoyar a ASra. Los Maestros Espirituales del SMSC asistirán a cada miembro humano de ASra en proporción 1:1 o 2:1, permitiéndoles adquirir la capacidad especial de gobernar espíritus adheridos, mejorar la salud humana y, al mismo tiempo, actuar como embajadores que difunden la verdad del Reino Espiritual y de las entidades de vida espiritual. | SMSC 的设立旨在支持 ASra。SMSC 的高级灵体将以 1:1 或 2:1 的方式协助每一位 ASra 人类会员，使人类会员获得治理附体灵、改善人类健康的能力，同时作为大使传播关于灵界与灵命实体的真相。 |

#### `founders`

| 字段 | English | Español（建议） | 中文（建议） |
|------|---------|-----------------|--------------|
| `title` | The Woos Father and Son | Padre e hijo Woo / familia Woo | 伍斯父子 |
| `subtitle` | Founders & Chief Ambassadors of ASra | Fundadores y embajadores jefes de ASra | ASra 创始人兼首席大使 |
| `description` | The Woo family — father John Long Woo and his sons — founded ASra and serve as chief ambassadors. They coordinate between ASra (physical world) and SMSC (Spirit Realm), screening candidates for membership until Master Spirit selection is complete. | La familia Woo — el padre John Long Woo y sus hijos — fundó ASra y actúa como embajadores jefes. Coordinan entre ASra (mundo físico) y SMSC (Reino Espiritual), evaluando candidatos hasta completar la selección por los Maestros Espirituales. | 伍斯家族——父亲 John Long Woo 与其子——创立 ASra 并任首席大使。他们在 ASra（物质世界）与 SMSC（灵界）之间协调，筛选入会候选直至高级灵体遴选完成。 |
| `storyTeaser` | Full chronology: first door-openers to the Spirit Realm, Phase A field work through Phase B TikTok North America — truths, timeline, and staged narrative in one place (English). | Cronología completa: primeros aperturistas al Reino Espiritual, trabajo de campo Fase A hasta Fase B TikTok Norteamérica — verdades, línea temporal y narrativa por etapas en un solo lugar (inglés). | 完整年表：从叩开灵界之门、A 阶段田野到 B 阶段北美 TikTok——真相、时间线与分阶段叙事汇总（目前正文为英文）。 |

#### `missions` 两项使命

**Mission I**

| English | Español（建议） | 中文（建议） |
|---------|-----------------|--------------|
| **Title:** Spirit Governance & Human Health | Gobierno espiritual y salud humana | 灵体治理与人类健康 |
| **Description:** Based on the content of the Woos Spirit Archive and Woos Spirit Medicine, members acquire special Class-C special abilities to govern attached spirits and improve human health. Members independently operate in the physical world and receive corresponding compensation. | Según el Archivo Espiritual Woo y la Medicina Espiritual Woo, los miembros adquieren habilidades especiales Clase C para gobernar espíritus adheridos y mejorar la salud humana. Operan de forma independiente en el mundo físico y reciben la compensación correspondiente. | 依据《伍斯灵体档案》与《伍斯灵体医学》的内容，会员获得 C 级特殊能力，以治理附体灵并改善人类健康。会员在物质世界独立开展事务并获得相应回报。 |
| **Tag:** Class-C Ability | Habilidad Clase C | C 级能力 |

**Mission II**

| English | Español（建议） | 中文（建议） |
|---------|-----------------|--------------|
| **Title:** Spread the Truth — Lead Humanity to the New Century | Difundir la verdad — guiar a la humanidad al Nuevo Siglo | 传播真相——引领人类进入新世纪 |
| **Description:** The emergence of AI will inevitably lead to universal unemployment across all of humanity; the deployment of military AI will inevitably lead to humanity's extinction. Humanity stands at the edge of the destruction of the old century.<br><br>Based on the three documentary series — the Woos Spirit Archive, Woos Spirit Medicine, and the Universal Matrix of Meta Awareness — members are obligated to spread to the 8 billion people of humanity the truth of Spirit and Its Governor, which has been concealed for thousands of years, and to lead humanity toward the Umma New Century. | La emergencia de la IA conducirá inevitablemente al desempleo universal en toda la humanidad; el despliegue de IA militar conducirá inevitablemente a la extinción humana. La humanidad está al borde de la destrucción del viejo siglo.<br><br>Con base en las tres series documentales — el Archivo espiritual Woo, la Medicina espiritual Woo y la Matriz universal de meta-conciencia — los miembros están obligados a difundir entre los ocho mil millones de personas la verdad del Espíritu y de Su Gobernador, oculta durante milenios, y a guiar a la humanidad hacia el Umma New Century. | 人工智能的出现必将导致全人类范围的普遍失业；军事人工智能的部署必将导致人类灭绝。人类正站在旧世纪毁灭的边缘。<br><br>基于三部纪录片系列——《伍斯灵魂档案》《伍斯灵体医学》与《元觉知宇宙矩阵》——会员负有义务向全球八十亿人传播被掩盖数千年的「灵及其主宰」的真相，并引领人类迈向乌玛新世纪。 |
| **Tag:** Global Mission | Misión global | 全球使命 |

> **灵魂档案 11 集** 每集的 `title` / `abstract` / `keyFeatures` 字数较多，若需要同样格式的三语表，可另开附件按 `FILE` 编号逐条导出。

---

## 三、如何替换网页中的图片

项目里图片主要有三类：**公共静态资源**、**源码中的 Unsplash URL**、**内容/数据文件里的 URL**。

### 3.1 放在 `public/` 下的静态图

1. 将你的文件（如 `hero-banner.jpg`）复制到 **`public/`**（或子文件夹，如 `public/images/hero-banner.jpg`）。
2. 在组件里引用时使用**站点根路径**：`src="/images/hero-banner.jpg"`（Vite 会原样输出到 `dist/`）。
3. 构建后访问路径为：`https://你的域名/images/hero-banner.jpg`。

### 3.2 全站氛围图 / 首页与成就区（`visualTheme.ts`）

文件：**`src/content/visualTheme.ts`**

其中 `warmImagery` 对象（如 `bodyBackdrop`、`homeAtmosphere`、`achievementsHero` 等）的值是 Unsplash 链接。  
**替换方法：** 把某一属性的字符串改成你的图片 URL（可继续用外链，或改成 `https://你的域名/...` 指向 `public/` 里的文件）。

### 3.3 各页面组件里写死的 `backgroundImage` / `<img src=...>`

搜索项目中的 **`images.unsplash.com`** 或 **`backgroundImage:`**、**`<img src=`**，例如：

- `src/views/HomeView.tsx` — 使用 `warmImagery.homeAtmosphere`
- `src/views/AboutView.tsx` — 几处 `style={{ backgroundImage: 'url(...)' }}`
- `src/components/spiritMedicine/SpiritMedicineHero.tsx`、`universalMatrix/UniversalMatrixHero.tsx` 等

**替换方法：** 将 `url(...)` 内的地址换成新图 URL；若用本地图，使用 **`import img from './assets/photo.png'`** 后在 React 里写 `src={img}`，或 `/images/xxx.jpg` 指向 `public/`。

### 3.4 纪录片/系列页的横幅与背景

- **`src/content/siteContent.ts`**：`recordOfSoul.backgroundImage`、`spiritMedicine.bannerImages`、`universalMatrix.bannerImages` 等数组或字符串 — 直接改 URL。
- **`src/components/record/RecordOfSoulHero.tsx`** 等若引用 `siteContent`，改 content 即可生效。

### 3.5 成就页轮播与图库

- **`src/content/achievements2025Content.ts`**：幻灯片、回放背景等图片 URL 多在此文件或相关导出中；**`ReplayGalleryBackdrop.tsx`**、**`LivestreamCarousel.tsx`** 读取这些数据。
- 替换该 content 中的 `src` 字段或图片数组即可（注意保持与现有 TypeScript 类型一致）。

### 3.6 性能提示

- 大图尽量压缩（WebP/JPEG 合理尺寸）。
- 若仍使用 Unsplash，可继续用项目里已有的 **`compressUnsplash(url, width, quality)`**（见 `achievements2025Content.ts`）限制宽度与质量。

---

## 四、反馈给维护者时的建议格式

1. 说明修改的是 **i18n 键**（如 `home.intro.title`）还是 **某文件某字段**（如 `siteContent.ts` → `aboutContent.overview`）。
2. 贴上 **最终英文 / 西班牙文 / 中文** 定稿（可直接贴在本 MD 的副本中）。
3. 图片请提供 **新文件路径或完整 URL**，并说明要替换的是哪一页、哪一块（例如「关于页首屏背景」）。

---

© 对照表与说明文档仅供Spirit Ambassador Association / ASra 项目维护使用。
