# Project: apps-showcase

> このファイルは Claude Code / Codex がこのPJで作業するとき毎回読む憲法。
> グローバル `~/.claude/CLAUDE.md` を継承し、**PJ固有の差分だけ**ここに書く。

## 概要
龍偉が自作したツール（Chrome拡張・Mac/Winアプリ等）を1枚に集約するショーケースLP「Ryui's Apps」（`https://github.com/RYUIYAMADA`）。**ビルド不要・素のHTML/CSS/JS**で動く静的サイト。アプリ追加は `apps.js` の配列に1ブロック足すだけ、という「非エンジニアが運用できる」設計が核。

## 技術スタック（実態）
- **バニラ HTML5 / CSS3 / Vanilla JavaScript（ES6）**。フレームワーク・ビルドツール・npm 依存は一切なし（`package.json` なし）。
- フォント: Google Fonts `Noto Sans JP`（外部CDN・既存。HTML資料ルールの外部依存禁止はこの既存LPには遡及適用しない）。
- アイコン: SVG文字列を `apps.js` の `ICONS` 辞書にインライン定義（全て `fill:none / stroke:currentColor / stroke-width 1.8` の線アイコン）。
- 確認方法: `index.html` をブラウザで開くだけ（サーバ不要）。`open -a "Google Chrome" --args --profile-directory="Profile 1" index.html`。

## ディレクトリ構成
```
apps-showcase/
├── index.html   骨格（ナビ/ヒーロー/フィルター/おすすめ/フッター）— 構造変更時のみ触る
├── style.css    全スタイル（CSS変数・カード・レスポンシブ）
├── apps.js      アプリデータ(APPS) + おすすめ(RECOMMENDED) + 描画ロジック
├── README.md    非エンジニア向け「アプリ追加ガイド」← apps.js追加手順の正本
├── VERSION       SemVer（現 1.0.0）
└── assets/       スクショ画像（16:9横長推奨）/ recommend/ におすすめツール用サムネ
```

## 命名・コーディング規則
- **データと描画の分離**: 追加・更新は原則 `apps.js` の `APPS` / `RECOMMENDED` 配列のみ。描画関数（`buildCard` 等）の改変は構造変更時に限る。
- **DOM生成は `document.createElement` ベース**（`textContent` で値を入れXSSを避ける）。SVGアイコンのみ `innerHTML` で固定文字列を挿入。
- 自作アプリのスキーマ: `{ name, tagline, description, tags[], status, icon, image?, imageFull?, links[] }`。`status` は `"公開中"` / `"開発中"` の2値。`icon` は `ICONS` のキー（calendar/chrome/apple/windows/globe/code/image/terminal/sidebar/clipboard/default）。
- おすすめのスキーマ: `{ name, category, description, image?, url }`。
- 画像は `assets/` に置き相対パスで参照。読み込み失敗時は `onerror` でプレースホルダにフォールバックする（既存挙動を壊さない）。
- CSS は**必ず `:root` のCSS変数を参照**（色・角丸・影・フォント。素の値ハードコード禁止）。詳細は `DESIGN.md`。
- コメントは日本語、コード識別子は英語。

## 禁止事項（PJ固有）
- ❌ ビルドツール・フレームワーク・npm依存の導入（このPJは「ダブルクリックで開く」を死守）。
- ❌ `index.html` / `style.css` / 描画ロジックを、単なるアプリ追加のために触ること（追加は `apps.js` 配列のみ）。
- ❌ CSS値（色・余白・角丸）の素のハードコード。`var(--color-*)` 等を使う。
- ❌ グラデーション / glassmorphism / 多色アイコン / 絵文字をUIに使う / `font-weight 300以下`（`style.css` 冒頭の宣言どおり）。
- ❌ Orange（`--color-orange`）の使用箇所を増やすこと。現状ヒーロー`em`とRECラベルの2箇所のみが許容（`DESIGN.md` §6）。
- ❌ 新規アイコンを塗りつぶし・多色で追加すること（線アイコンのテイスト統一）。

## グローバル設定の継承
`~/.claude/CLAUDE.md` の全ルールを継承する（plan起点開発・Codexレビュー必須/指摘ゼロまでループ・itshover線アイコン・CSS変数のみ・認知負荷最小・コードは綺麗でシンプルで高速・応答冒頭の起動モデル明記・委託チェーン明記 等）。本ファイルは**PJ固有の差分のみ**を記載。グローバルと矛盾する場合のみ本ファイルが優先。
```
