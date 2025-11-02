# ポートフォリオサイト

IT企業の就活用ポートフォリオサイトです。

## 特徴

- レスポンシブデザイン
- モダンで美しいUI/UX
- スムーズなアニメーション
- インタラクティブな要素

## ファイル構成

```
├── index.html      # メインのHTMLファイル
├── styles.css      # スタイルシート
├── script.js       # JavaScript
└── README.md       # このファイル
```

## カスタマイズ方法

### 1. 個人情報の更新

`index.html`の以下の部分を編集してください：

- **名前**: `あなたの名前` → 実際の名前
- **学校・専攻**: `○○専門学生○○学部○年生` → 実際の情報
- **連絡先**: メールアドレス、電話番号、GitHub、LinkedIn
- **プロフィール写真**: `https://via.placeholder.com/300x300/4F46E5/FFFFFF?text=Your+Photo` → 実際の写真URL

### 2. 自己紹介文の編集

`index.html`の「自己紹介」セクションを編集してください：

```html
<p>
    私は○○大学○○学部○年生の[あなたの名前]です。
    プログラミングに興味を持ち始めたのは○年前で、
    現在はWebアプリケーションの開発を中心に学習しています。
</p>
```

### 3. スキルの更新

`index.html`の「技術スキル」セクションで：

- 習得しているプログラミング言語を追加/削除
- 習熟度のパーセンテージを調整（`style="width: XX%"`）
- 新しいカテゴリを追加

### 4. プロジェクトの追加

`index.html`の「プロジェクト」セクションに新しいプロジェクトカードを追加：

```html
<div class="project-card">
    <div class="project-image">
        <img src="プロジェクト画像URL" alt="プロジェクト名">
    </div>
    <div class="project-content">
        <h3>プロジェクト名</h3>
        <p>プロジェクトの説明</p>
        <div class="project-tech">
            <span class="tech-tag">使用技術1</span>
            <span class="tech-tag">使用技術2</span>
        </div>
        <div class="project-links">
            <a href="GitHubURL" class="project-link">
                <i class="fab fa-github"></i> GitHub
            </a>
            <a href="デモURL" class="project-link">
                <i class="fas fa-external-link-alt"></i> Demo
            </a>
        </div>
    </div>
</div>
```

### 5. 統計情報の更新

`index.html`の統計情報を実際の値に更新：

```html
<div class="stat-item">
    <div class="stat-number">実際の年数+</div>
    <div class="stat-label">年の学習経験</div>
</div>
```

## デプロイ方法

### GitHub Pages

1. GitHubにリポジトリを作成
2. ファイルをアップロード
3. Settings > Pages でGitHub Pagesを有効化
4. 公開URLが生成されます

### Netlify

1. [Netlify](https://netlify.com)にアクセス
2. ドラッグ&ドロップでファイルをアップロード
3. 自動的に公開URLが生成されます

### Vercel

1. [Vercel](https://vercel.com)にアクセス
2. GitHubリポジトリを連携
3. 自動デプロイが設定されます

## カスタマイズのヒント

### 色の変更

`styles.css`の以下の変数を変更：

```css
/* メインカラー */
#8B4513  /* プライマリカラー（茶色） */
#D2B48C  /* アクセントカラー（ベージュ） */
```

### フォントの変更

Google Fontsから別のフォントを選択し、`index.html`の`<link>`タグを更新。

### アニメーションの調整

`script.js`でアニメーションの速度や効果を調整できます。

## 就活での活用方法

1. **ES（エントリーシート）に記載**: ポートフォリオサイトのURLを記載
2. **面接での説明**: 実際のサイトを見せながら説明
3. **技術力のアピール**: コードの品質やデザインセンスをアピール
4. **継続的な更新**: 新しいプロジェクトやスキルを随時追加

## 注意事項

- 個人情報の取り扱いに注意
- 実際のプロジェクトの画像やURLを使用
- 定期的に内容を更新
- モバイル表示も確認

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

