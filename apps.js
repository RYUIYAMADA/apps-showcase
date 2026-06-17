/**
 * apps.js — Ryui's Apps Showcase
 * =====================================================
 * 【アプリを追加する方法】
 *
 *   1. 下の APPS 配列の末尾の } の後にカンマを付けて、
 *      新しい { ... } ブロックを追記するだけ。
 *
 *   2. 各フィールドの意味：
 *      name        → アプリ名（例: "tasks-manager"）
 *      tagline     → 一言キャッチコピー
 *      description → 説明文（2〜3行）
 *      tags        → タグ一覧（絞り込みに使われる）["Chrome拡張機能", "macアプリ"] など
 *      status      → "公開中" または "開発中"
 *      icon        → アイコンキー（下記 ICONS の中から選ぶ）
 *                    calendar / chrome / apple / windows / globe / code / image / terminal / default
 *      links       → リンクボタンの配列。primary:true が青ボタン、それ以外は枠だけボタン
 *
 *   3. 例：
 *      {
 *        name: "my-tool",
 *        tagline: "ツールのキャッチコピー",
 *        description: "説明文をここに書く。",
 *        tags: ["Winアプリ", "生産性"],
 *        status: "開発中",
 *        icon: "windows",
 *        links: [
 *          { label: "GitHub", url: "https://github.com/RYUIYAMADA/my-tool" }
 *        ]
 *      }
 * =====================================================
 */

const APPS = [
  // ── 実データ ──────────────────────────────────────
  {
    name: "予定追加ツール",
    tagline: "選択してワンクリックでカレンダー登録",
    description: "メール・Slack・LINEの文章を選ぶだけ。AIが日時・場所を自動解析し、Googleカレンダーに即登録。コピペも手打ちも不要。",
    tags: ["Chrome拡張機能", "macアプリ"],
    status: "公開中",
    icon: "calendar",
    links: [
      { label: "紹介ページ", url: "https://ryuiyamada.github.io/yotei-tsuika-lp/", primary: true },
      { label: "導入手順", url: "https://github.com/RYUIYAMADA/yotei-tsuika#readme" },
      { label: "GitHub", url: "https://github.com/RYUIYAMADA/yotei-tsuika" }
    ]
  },

  // ── 追加テンプレート（コメントアウト済み）──────────
  // 新しいアプリを追加するときは、下の例を参考にコピーして追記してください。
  //
  // {
  //   name: "スクリーンショット整理ツール",
  //   tagline: "撮ったらすぐに自動で整理・命名",
  //   description: "Windowsのスクリーンショットをフォルダに投げるだけで、日付・アプリ名で自動仕分け。探す手間がゼロになる。",
  //   tags: ["Winアプリ", "生産性"],
  //   status: "開発中",
  //   icon: "image",
  //   links: [
  //     { label: "GitHub", url: "https://github.com/RYUIYAMADA/screenshot-sorter" }
  //   ]
  // },
];

/* =====================================================
 * アイコン定義（SVG 文字列の辞書）
 * 全て 24×24 / fill:none / stroke:currentColor / stroke-width 1.8
 * ===================================================== */
const ICONS = {
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
    <line x1="8" y1="14" x2="8" y2="14" stroke-width="2.5"/>
    <line x1="12" y1="14" x2="12" y2="14" stroke-width="2.5"/>
    <line x1="16" y1="14" x2="16" y2="14" stroke-width="2.5"/>
    <line x1="8" y1="18" x2="8" y2="18" stroke-width="2.5"/>
    <line x1="12" y1="18" x2="12" y2="18" stroke-width="2.5"/>
  </svg>`,

  chrome: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="4"/>
    <line x1="21.17" y1="8" x2="12" y2="8"/>
    <line x1="3.95" y1="6.06" x2="8.54" y2="14"/>
    <line x1="10.88" y1="21.94" x2="15.46" y2="14"/>
  </svg>`,

  apple: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 4.5c1.2-1.5 3-2 4.5-1.5-.3 1.8-1.2 3.2-2.5 4C15.5 7.5 17 8.8 17 8.8c0 0-1 3.7-3.5 5.2C11 15.5 9 15 9 15c0 0-1.5.5-3 0C3.5 13.5 3 10 3 10S4 7 6 6.5c.5-.2 1-.2 1.5 0C8.5 5 10 4.5 12 4.5Z"/>
    <path d="M12 4.5C12 3 13 2 13 2"/>
  </svg>`,

  windows: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 5.5L10.5 4.5V11.5H3V5.5Z"/>
    <path d="M11.5 4.35L21 3V11.5H11.5V4.35Z"/>
    <path d="M3 12.5H10.5V19.5L3 18.5V12.5Z"/>
    <path d="M11.5 12.5H21V21L11.5 19.65V12.5Z"/>
  </svg>`,

  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>`,

  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>`,

  image: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <polyline points="21 15 16 10 5 21"/>
  </svg>`,

  terminal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="4 17 10 11 4 5"/>
    <line x1="12" y1="19" x2="20" y2="19"/>
  </svg>`,

  default: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1"/>
    <rect x="14" y="3" width="7" height="7" rx="1"/>
    <rect x="3" y="14" width="7" height="7" rx="1"/>
    <rect x="14" y="14" width="7" height="7" rx="1"/>
  </svg>`,
};

/* =====================================================
 * 描画ロジック
 * ===================================================== */

let currentTag = 'all';

/**
 * タグの重複排除集計
 * { tag: count } の形で返す
 */
function collectTags(apps) {
  const map = {};
  apps.forEach(app => {
    (app.tags || []).forEach(t => {
      map[t] = (map[t] || 0) + 1;
    });
  });
  return map;
}

/**
 * フィルタチップを生成して .filter-bar に挿入
 */
function buildFilterBar(apps) {
  const bar = document.getElementById('filterBar');
  if (!bar) return;

  const tagMap = collectTags(apps);

  // 「すべて」チップ
  const allChip = buildChip('すべて', apps.length, 'all');
  allChip.classList.add('active');
  bar.appendChild(allChip);

  // タグ別チップ（登場順に重複なし）
  Object.entries(tagMap)
    .sort((a, b) => b[1] - a[1])
    .forEach(([tag, count]) => {
      bar.appendChild(buildChip(tag, count, tag));
    });
}

function buildChip(label, count, tag) {
  const btn = document.createElement('button');
  btn.className = 'filter-chip';
  btn.dataset.tag = tag;
  btn.setAttribute('aria-pressed', tag === 'all' ? 'true' : 'false');

  const labelSpan = document.createElement('span');
  labelSpan.textContent = label;

  const countSpan = document.createElement('span');
  countSpan.className = 'chip-count';
  countSpan.textContent = `(${count})`;

  btn.appendChild(labelSpan);
  btn.appendChild(countSpan);

  btn.addEventListener('click', () => onChipClick(tag));
  return btn;
}

/**
 * チップクリック時の処理
 */
function onChipClick(tag) {
  currentTag = tag;

  // チップのactive切替
  document.querySelectorAll('.filter-chip').forEach(chip => {
    const active = chip.dataset.tag === tag;
    chip.classList.toggle('active', active);
    chip.setAttribute('aria-pressed', String(active));
  });

  // カード表示フィルタ
  renderCards(APPS);
}

/**
 * カードを描画（フィルタ適用済み）
 */
function renderCards(apps) {
  const grid = document.getElementById('cardsGrid');
  const empty = document.getElementById('emptyMessage');
  if (!grid || !empty) return;

  const filtered = currentTag === 'all'
    ? apps
    : apps.filter(app => (app.tags || []).includes(currentTag));

  // カードを再描画
  // 既存カードをフィルタ表示（再生成より軽量）
  const existing = grid.querySelectorAll('.app-card');
  if (existing.length === 0) {
    // 初回: 全カード生成
    apps.forEach(app => {
      grid.appendChild(buildCard(app));
    });
  }

  // 全カードに対して表示/非表示
  grid.querySelectorAll('.app-card').forEach(card => {
    const appName = card.dataset.appName;
    const app = apps.find(a => a.name === appName);
    if (!app) return;
    const match = currentTag === 'all' || (app.tags || []).includes(currentTag);
    card.style.display = match ? '' : 'none';
  });

  // 0件表示
  const visibleCount = filtered.length;
  empty.classList.toggle('visible', visibleCount === 0);
}

/**
 * 1枚のカードDOM生成
 */
function buildCard(app) {
  const card = document.createElement('article');
  card.className = 'app-card';
  card.dataset.appName = app.name;

  // ── ヘッダー（アイコン + ステータス）
  const header = document.createElement('div');
  header.className = 'card-header';

  const iconBox = document.createElement('div');
  iconBox.className = 'card-icon-box';
  iconBox.innerHTML = ICONS[app.icon] || ICONS.default;

  const badge = buildStatusBadge(app.status);

  header.appendChild(iconBox);
  header.appendChild(badge);
  card.appendChild(header);

  // ── アプリ名
  const name = document.createElement('h3');
  name.className = 'card-name';
  name.textContent = app.name;
  card.appendChild(name);

  // ── tagline
  const tagline = document.createElement('p');
  tagline.className = 'card-tagline';
  tagline.textContent = app.tagline || '';
  card.appendChild(tagline);

  // ── 説明文
  const desc = document.createElement('p');
  desc.className = 'card-description';
  desc.textContent = app.description || '';
  card.appendChild(desc);

  // ── タグバッジ
  if ((app.tags || []).length > 0) {
    const tagsDiv = document.createElement('div');
    tagsDiv.className = 'card-tags';
    app.tags.forEach(t => {
      const span = document.createElement('span');
      span.className = 'tag-badge';
      span.textContent = t;
      tagsDiv.appendChild(span);
    });
    card.appendChild(tagsDiv);
  }

  // ── リンクボタン
  if ((app.links || []).length > 0) {
    const linksDiv = document.createElement('div');
    linksDiv.className = 'card-links';
    app.links.forEach(link => {
      linksDiv.appendChild(buildLinkButton(link));
    });
    card.appendChild(linksDiv);
  }

  return card;
}

/**
 * ステータスバッジ生成
 */
function buildStatusBadge(status) {
  const badge = document.createElement('span');
  const isLive = status === '公開中';
  badge.className = `status-badge ${isLive ? 'live' : 'wip'}`;

  // 線アイコン付き
  if (isLive) {
    badge.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
  } else {
    badge.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
  }

  const text = document.createElement('span');
  text.textContent = status || '開発中';
  badge.appendChild(text);

  return badge;
}

/**
 * リンクボタン生成
 */
function buildLinkButton(link) {
  const a = document.createElement('a');
  a.className = `card-link ${link.primary ? 'primary' : 'secondary'}`;
  a.href = link.url || '#';
  a.target = '_blank';
  a.rel = 'noopener noreferrer';

  // ラベルに応じたアイコンを選択
  const iconSvg = getLinkIcon(link.label);
  a.innerHTML = iconSvg;

  const span = document.createElement('span');
  span.textContent = link.label;
  a.appendChild(span);

  return a;
}

/**
 * リンクラベルに応じた線アイコン返却
 */
function getLinkIcon(label) {
  const l = (label || '').toLowerCase();
  if (l.includes('github')) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>`;
  }
  // 紹介ページ・URLなど
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>`;
}

/* =====================================================
 * 初期化
 * ===================================================== */
document.addEventListener('DOMContentLoaded', () => {
  buildFilterBar(APPS);
  renderCards(APPS);
});
