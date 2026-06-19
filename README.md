# Ryui's Apps — アプリ追加ガイド

開発したアプリを1件追加するだけで、サイトのカードが自動的に増えます。
**触るファイルは `apps.js` の1ファイルだけです。**

---

## アプリの追加手順

### ステップ 1：`apps.js` を開く

```
apps-showcase/
  ├── index.html    ← 触らない
  ├── style.css     ← 触らない
  ├── apps.js       ← ここだけ編集する
  └── README.md     ← このファイル
```

### ステップ 2：APPS 配列の末尾にエントリを追記する

`apps.js` を開くと、下記のような配列が見つかります。

```js
const APPS = [
  {
    name: "Quick Calendar",
    ...
  },
  // ← ここに追記する（上のエントリの最後の } の後にカンマを付けて追加）
];
```

追記例：

```js
const APPS = [
  {
    name: "Quick Calendar",
    tagline: "選択してワンクリックでカレンダー登録",
    description: "...",
    tags: ["Chrome拡張機能", "macアプリ"],
    status: "公開中",
    icon: "calendar",
    links: [
      { label: "紹介ページ", url: "https://example.com", primary: true },
      { label: "GitHub", url: "https://github.com/RYUIYAMADA/xxx" }
    ]
  },
  // ↓ カンマに続けてここに追加
  {
    name: "新しいツール名",
    tagline: "一言キャッチコピー",
    description: "説明文を2〜3行で書きます。どんな課題を解決するか、使い方を簡単に。",
    tags: ["Winアプリ", "生産性"],
    status: "開発中",
    icon: "windows",
    links: [
      { label: "GitHub", url: "https://github.com/RYUIYAMADA/new-tool" }
    ]
  }
];
```

---

## 各フィールドの説明

| フィールド | 必須 | 説明 |
|---|---|---|
| `name` | 必須 | アプリ名（カードのタイトルになります） |
| `tagline` | 推奨 | 一言キャッチコピー（20文字以内が目安） |
| `description` | 推奨 | 説明文（50〜100文字が目安） |
| `tags` | 推奨 | カテゴリタグの配列。絞り込みフィルターに使われます |
| `status` | 必須 | `"公開中"` または `"開発中"` |
| `icon` | 推奨 | アイコンの種類（下記リストから選択） |
| `image` | 任意 | スクショ画像パス（例: `"assets/my-tool.png"`）。**16:9 横長推奨**。省略するとプレースホルダ表示 |
| `links` | 推奨 | リンクボタンの配列 |

> **スクショの追加方法**: `assets/` フォルダに横長画像を置き、`image` フィールドにパスを書く。全カード共通で 16:9 の同一サイズで表示される。

### icon の選択肢

| キー | 見た目のイメージ |
|---|---|
| `calendar` | カレンダー |
| `chrome` | ブラウザ/Chrome系 |
| `apple` | macOS/Appleアプリ |
| `windows` | Windowsアプリ |
| `globe` | Webサービス・LP |
| `code` | コードエディタ・開発ツール |
| `image` | 画像・スクリーンショット系 |
| `terminal` | CLI・ターミナルツール |
| `default` | どれにも当てはまらない場合 |

### links の書き方

```js
links: [
  { label: "紹介ページ", url: "https://example.com", primary: true },  // 青ボタン
  { label: "GitHub", url: "https://github.com/RYUIYAMADA/xxx" }         // 枠ボタン
]
```

- `primary: true` を付けると青い塗りボタンになります
- `primary` を省略または `false` にすると枠だけのボタンになります

### tags の書き方

```js
tags: ["Chrome拡張機能", "macアプリ", "生産性"]
```

自由に決められます。同じタグ名のアプリが増えると絞り込みフィルターが自動的に追加されます。

---

## よくある追加パターン

### Chrome拡張機能を追加する場合

```js
{
  name: "ツール名",
  tagline: "ひとことで説明",
  description: "詳細な説明。",
  tags: ["Chrome拡張機能"],
  status: "公開中",
  icon: "chrome",
  links: [
    { label: "Chrome ウェブストア", url: "https://chrome.google.com/webstore/...", primary: true },
    { label: "GitHub", url: "https://github.com/RYUIYAMADA/..." }
  ]
}
```

### 開発中のWindowsアプリを追加する場合

```js
{
  name: "ツール名",
  tagline: "ひとことで説明",
  description: "詳細な説明。",
  tags: ["Winアプリ"],
  status: "開発中",
  icon: "windows",
  links: [
    { label: "GitHub", url: "https://github.com/RYUIYAMADA/..." }
  ]
}
```

---

## 確認方法

`index.html` をブラウザで開くだけで確認できます。
サーバーなどは不要です。

```
ファイルをダブルクリック → ブラウザで開く → カードを確認
```

---

## ファイル構成（参考）

```
apps-showcase/
  ├── index.html      HTMLの骨格（ナビ・ヒーロー・フィルター・フッター）
  ├── style.css       スタイル（色・カード・ボタン・レスポンシブ）
  ├── apps.js         アプリデータ + カード描画ロジック ← 追加はここだけ
  └── README.md       このファイル
```
