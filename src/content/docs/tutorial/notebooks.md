---
title: チュートリアルノートブック
description: Colab で開いてそのまま実行できるハンズオンノートブック。
sidebar:
  order: 3
---

Colab で開いてそのまま実行できる。GEE を使うノートは、最初のセルで自分の GEE プロジェクトID（`ee-yourproject` の部分）に書き換えてほしい。
手順は [環境構築手順](/tutorial/setup/) を参照。

| # | タイトル | 内容 | 開く |
| --- | --- | --- | --- |
| 00 | GEE からのデータ読み込みと可視化 | GEE 認証・Sentinel-2 の読み込み・NDVI 計算・地図表示 | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/astrocamp-2026-siaPpts/astrocamp-sat-gis/blob/main/public/notebooks/tutorials/00_example_gee.ipynb) |
| 01 | JAXA Earth API で学ぶ衛星データ | JAXA Earth API で衛星データを検索・取得・可視化する | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/astrocamp-2026-siaPpts/astrocamp-sat-gis/blob/main/public/notebooks/tutorials/jaxa_intro.ipynb) |
| — | 生成AIでGISコードを書く | AIをコーディングパートナーに使い、GEE・JAXA Earth API のコードを生成・検証・デバッグする | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/astrocamp-2026-siaPpts/astrocamp-sat-gis/blob/main/public/notebooks/tutorials/00_ai_assisted_gis.ipynb) |
| 02 | 公共データの取得と前処理（S2/S1 + e-Stat） | 相馬・南相馬の ROI 設定、サンプル農地ポリゴン、NDVI/VH 時系列、耕地面積統計でのクロスチェック | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/astrocamp-2026-siaPpts/astrocamp-sat-gis/blob/main/public/notebooks/tutorials/02_public_data_gee.ipynb) |
| 03 | 機械学習で作付／休耕を判別 | 疑似ラベル × RandomForest、KMeans、IsolationForest、精度評価、時空間リーク、誤分類の物理診断 | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/astrocamp-2026-siaPpts/astrocamp-sat-gis/blob/main/public/notebooks/tutorials/03_machine_learning.ipynb) |
| 04 | 一筆解析パイプラインを組み立てる | 筆ポリゴンごとに S2/S1 の月別平均を集計し、波形特徴量を計算して保存する | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/astrocamp-2026-siaPpts/astrocamp-sat-gis/blob/main/public/notebooks/tutorials/04_field_pipeline.ipynb) |
| 05 | 結果を地図に落とす | 判別マップ・確信度マップ・要確認リスト・GeoPackage 出力・再現性ヘッダ | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/astrocamp-2026-siaPpts/astrocamp-sat-gis/blob/main/public/notebooks/tutorials/05_result_map.ipynb) |

## 共通モジュール

Colab で使うときは、ノートと同じランタイム（`/content`）へ「ファイル → アップロード」で追加する。

| ファイル | 内容 |
| --- | --- |
| [`env.py`](/notebooks/tutorials/env.py) | Colab / ローカル両対応のヘルパー。`gee_setup()` で GEE の認証・初期化 |
| [`satellite_utils.py`](/notebooks/tutorials/satellite_utils.py) | 前処理の「物理ガード」関数集（dB の二重変換、NDVI のバンド誤用、軌道方向・CRS の不一致を検出） |
| [`fukushima_polygons.geojson`](/notebooks/tutorials/data/fukushima_polygons.geojson) | 動作確認用のサンプル筆ポリゴン（12筆） |

## 再現性のための規約

1. ノートは番号順に実行できる構成にする
2. 解析前提（期間・AOI・コレクション・軌道方向・偏波・雲閾値・閾値・乱数 seed）はノート冒頭の「再現性ヘッダ設定ブロック」に1か所でまとめる
3. 中間成果物はファイルに保存して次工程に渡す（例：`field_features.csv` → 05）
4. 乱数には固定 seed を使う
