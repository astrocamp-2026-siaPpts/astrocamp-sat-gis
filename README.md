# astrocamp-sat-gis

アストロキャンプ「衛星データ解析ゼミ」の公開教材サイト（[衛星開発ゼミ](https://astrocamp-sat-dev.pages.dev/) の衛星データ解析版）。[Astro Starlight](https://starlight.astro.build) で作り、Cloudflare Pages で公開する。

## 構成

```text
src/content/docs/
  index.mdx         トップページ
  mission/          課題の全体像・対象エリア・データの出典
  tutorial/         環境構築・生成AI・データ準備・OSM ガイドとノートブック一覧
  exercises/        週ごとの演習
  slides/           講義スライド（権利確認済みのみ）
public/notebooks/   ノートブックとコード（Colab バッジはこのパスを開く）
```

## ページを追加する

1. `src/content/docs/<セクション>/` に `.md` を置く。先頭に `title` を書く：
   ```md
   ---
   title: ページのタイトル
   sidebar:
     order: 3
   ---
   ```
2. ノートブックは `public/notebooks/` に置き、Colab バッジは
   `https://colab.research.google.com/github/astrocamp-2026-siaPpts/astrocamp-sat-gis/blob/main/public/notebooks/<パス>` を指す。
   **出力セルは消してからコミットする**（ローカルのパスや GEE プロジェクトIDが残るため）。

## 公開してよいもの

このリポジトリは**公開**。載せる前に確認する。

- 画像は Copernicus Sentinel・Landsat・JAXA・国土地理院など、自由に使えるデータから作ったものか、許諾を得たものだけ。クレジットを入れる
- 解答（`ex_solution`）、評価シート、参加者の氏名・提出物、メンター向け資料は載せない。これらは非公開リポジトリ `astrocamp-2026-sia` に置く

## コマンド

| コマンド | 内容 |
| --- | --- |
| `npm install` | 依存関係をインストール |
| `npm run dev` | ローカルで確認（http://localhost:4321） |
| `npm run build` | `./dist/` にビルド。push 前に通ることを確認する |
