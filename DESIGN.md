---
project: apps-showcase（Ryui's Apps）
version: 1.0.0
inherits: ryuiyamada-design-system（グローバルDS）
updated: 2026-06-18
---

# DESIGN.md — apps-showcase（Ryui's Apps）

> このファイルは Claude Code / Codex が UI を作るとき**毎回最初に読む**設計契約。
> グローバルDS（`~/Desktop/ryui-workspace/projects/tools/ryuiyamada-design-system/`）を継承し、
> **このプロジェクト固有の差分だけ**ここに書く。global と矛盾する時はこのファイルが優先。

## 1. このプロダクトは何か
- 何をするものか: 龍偉が自作したツール（Chrome拡張・Mac/Winアプリ）を1枚に集約して紹介し、各ツールの紹介ページ/GitHubへ誘導する個人ショーケースLP。
- 主な利用者: 龍偉のツールに関心を持つ訪問者（同僚・知人・採用関係者など）。本人が運用も兼ねる。
- 利用デバイス/環境: PC中心、スマホ閲覧も想定（700px でレスポンシブ切替）。
- トーン: 落ち着いた・誠実・プロダクト感。Navy基調で信頼を出し、Orangeは最小限のアクセントに留める。

## 2. デザイン原則（迷ったらここで判断）
1. **Navy基調・Orange最小限** — 主役はNavy（見出し・ロゴ・ボタン・リンク・アイコン線・活性チップ）。Orangeは「ここぞ」の1〜2箇所だけ。色を散らすと安っぽくなるため。
2. **カードは中身が主役** — 影は淡く（`--shadow-sm`基準）、hoverで軽く持ち上げる程度。borderで囲い込まず余白と影で区切る。
3. **スクショは"アプリ画面"として見せる** — 通常カードはウィンドウ風トップバー（信号機3ドット）＋淡色ステージで浮かせる。全面モック画像は `imageFull:true` でベゼルごと全面表示。16:9に統一。
4. **運用しやすさが正義** — UIの追加・更新は `apps.js` のデータ配列で完結させ、見た目ロジックは触らせない。

## 3. トークン（`style.css` の `:root` 実値・必ず変数参照）
素の値ハードコード禁止。下記は実装済みの正本。
```css
/* Color */
--color-bg:        #ffffff;  /* 背景・白マスト */
--color-surface:   #f2f2f2;  /* カード背景・catalog地 */
--color-surface2:  #ede8e4;  /* 強調面・淡バッジ地・アイコン箱（Beige） */
--color-border:    #e2ddd7;  /* 区切り線 */
--color-text:      #333333;  /* 本文 */
--color-text-sub:  #858585;  /* 補足 */
--color-navy:      #073365;  /* 基調：見出し・ロゴ・ボタン・リンク・SVG線・活性チップ */
--color-navy-hv:   #052748;  /* Navyホバー */
--color-orange:    #f7581d;  /* アクセント：最小限のみ */
--color-success:   #1e8e3e;  /* 公開中バッジ文字 */
--color-success-bg:#dcfce7;  /* 公開中バッジ地 */
--color-white:     #ffffff;
/* Radius */ --radius: 8px; --radius-lg: 14px;
/* Shadow */ --shadow-sm: 0 1px 4px rgba(0,0,0,.08); --shadow-md: 0 4px 20px rgba(0,0,0,.10); --shadow-lg: 0 8px 32px rgba(0,0,0,.13);
/* Font */ --font: 'Noto Sans JP', system-ui, -apple-system, 'Helvetica Neue', sans-serif;
/* Layout */ --max-width: 980px;
```
※ `--radius-sm/md/lg`・`--space-*`・`--text-*` の細分トークンは未定義（このLPは上記で完結）。新規追加するなら `:root` に足してから使う（素の値で書かない）。

## 4. コンポーネント規約
- **Button（card-link）**: `primary` = Navy塗り（紹介ページ等の主要導線・1カードに1つ目安）。`secondary` = 枠だけ（GitHub・導入手順等の副導線）。hoverは primary=濃Navy / secondary=枠と文字がNavy化。
- **Filter chip**: 既定は白地・枠・グレー文字。`active` でNavy塗り＋白文字。件数を `(n)` で併記。自作セクションのみに作用（おすすめには効かない）。
- **Status badge**: `公開中`=success（緑地・チェック）／`開発中`=wip（グレー地・時計）。
- **Card（app-card）**: 角丸 `--radius-lg`・影 `--shadow-sm`、hoverで `--shadow-md` ＋ `translateY(-2px)`。画像→本文の縦積み。
- **Tag / category badge**: Beige地（`--color-surface2`）・Navy文字（タグ）／グレー文字（おすすめカテゴリ）の小ピル。

## 5. レイアウト規約
- ブレークポイント: **700px**（これ以下で1カラム・チップ縮小・ナビのGitHubラベル非表示）。
- 最大幅: `--max-width`（980px）。`.container` で左右24pxパディング。
- グリッド: 自作 `minmax(300px,1fr)` / おすすめ `minmax(280px,1fr)` の auto-fill。
- 情報密度: ゆったり（カード間 20〜24px）。1枚1ツールを読みやすく見せる。

## 6. 禁止ルール（anti-pattern・最重要）
- 色・余白・角丸・影を**変数でなく素の値**で書く → 禁止（`var(--color-*)`等を使う）。
- **Orangeの使用箇所を増やす** → 禁止。許容は2箇所のみ：①ヒーロー `h1 em` の強調語 ②おすすめセクションの `section-label`。
- グラデーション / glassmorphism / カードborderでの囲い込み / `font-weight 300以下` / 絵文字をUIラベルに使う / 多色・塗りつぶしアイコン → 全て禁止。
- アイコンを線アイコン以外で追加する → 禁止（全SVG `fill:none / stroke:currentColor / stroke-width 1.8`）。
- スクショに本文テキストを焼き込む → 禁止（文字はHTML側に持つ）。

## 7. アクセシビリティ（必須ライン）
- コントラスト WCAG AA（本文4.5:1）。Navy `#073365` on 白は十分。グレー文字 `#858585` は補足用途に限る（本文主役にしない）。
- 外部リンクは `target="_blank" rel="noopener noreferrer"` ＋ `aria-label`（新しいタブで開く明示）。実装済み。
- 画像 `alt` 必須（`${app.name} のスクリーンショット`）。装飾SVGは `aria-hidden`。
- 日本語は禁則・文節改行（`overflow-wrap:anywhere` / `font-feature-settings:"palt"` 設定済み）。

## 8. Do / Don't
| ✅ Do | ❌ Don't |
|---|---|
| アプリ追加は `apps.js` の `APPS` に1ブロック足す | `index.html`/`style.css` を追加のために編集 |
| 色は `var(--color-navy)` で参照 | `#073365` を素で書く |
| 強調は限定的にOrangeを1箇所 | あちこちOrangeを足す |
| 16:9スクショを `assets/` に置き相対参照 | base64インライン埋め込み |
| 新アイコンは線アイコンで `ICONS` に追加 | 塗り・多色アイコンを足す |

## 9. AI（Claude/Codex）への指示
- UI実装前に必ずこのファイルと global DS、`CLAUDE.md` を読む。
- トークンは変数参照（素の値禁止）。§6違反は自己修正。
- 「読む負担を感じさせない、みてわかるレイアウト」を全画面のデフォルト前提にする。
- データ追加で済むことを、わざわざ描画ロジック改変でやらない（§2-4の原則）。
- 迷ったら §2 デザイン原則で判断。それでも決まらなければ実装を止めてPMに質問。

## 📜 更新履歴
- 2026-06-18 — 初版。実装済み `style.css` / `apps.js` の実値からトークン・規約・禁止ルールを起こした。
