# Bierjp Tutorial

ヒューメイアにようこそ！ このリポジトリは、新人向けに Web の基礎を学ぶチュートリアルとして用意されています。HTML、CSS、JavaScript を使って、シンプルなビール紹介ページを作成してみましょう。

## 1. ファイルを準備する

1. Git を使ってリポジトリをクローンするか、ZIP をダウンロードしてください。

   ```bash
   git clone https://github.com/yourname/Bierjp_tutorial.git
   cd Bierjp_tutorial
   ```

2. VS Code を利用してフォルダを開きます。ターミナル上で次を実行してください。

   ```bash
   code .
   ```

   *もし VS Code コマンドが使えない場合は、アプリケーションからフォルダを手動で開いてください。*

3. `tutorial` フォルダ内に `index.html`、`styles.css`、`script.js` の 3 つのファイルを作成します。

## 2. HTML を書く

`index.html` には次の内容をコピーしてください。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>ビール紹介</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>おすすめのビール</h1>
  <p id="intro">ビールの情報はボタンをクリックして表示します。</p>
  <button id="showInfo">ビール情報を表示</button>
  <div id="beer-info" style="display:none;">
    <h2>ベルギービール</h2>
    <p>香り高く深い味わいが特徴です。</p>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

## 3. CSS を書く

`styles.css` には次を入力します。

```css
body {
  font-family: sans-serif;
  padding: 20px;
  background: #f8f8f8;
}

h1 {
  color: #5a2d0c;
}

#beer-info {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  background: #fff;
}
```

## 4. JavaScript を書く

`script.js` には次のコードを保存します。

```javascript
document.getElementById("showInfo").addEventListener("click", function () {
  const info = document.getElementById("beer-info");
  info.style.display = info.style.display === "none" ? "block" : "none";
});
```

## 5. ローカルでプレビューしてみよう

ターミナルで `tutorial` フォルダを開き、以下を実行します。

```bash
python3 -m http.server
```

ブラウザで `http://localhost:8000` を開くと、作成したページを確認できます。

VS Code を使う場合は [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 拡張機能をインストールし、`index.html` を右クリックして **Open with Live Server** を選ぶと、変更を保存するたびに自動でブラウザ更新が行われて便利です。

## 6. GitHub 上でプレビューする

作成したページをリモートでも確認したい場合は、[GitHub Pages](https://docs.github.com/ja/pages/getting-started-with-github-pages) を利用します。

1. GitHub リポジトリの **Settings** → **Pages** から **Source** を `main` ブランチ（または公開したいブランチ）の `/` に設定します。
2. 数分後、`https://YOURNAME.github.io/Bierjp_tutorial/tutorial/` で `index.html` をプレビューできます。

`YOURNAME` にはあなたの GitHub ユーザー名を入れてください。これでブラウザからも完成したページを確認できるようになります。

---

このチュートリアルでは、基本的な HTML/CSS/JavaScript の構造と、ローカルおよび GitHub 上でのプレビュー方法を学びました。まずはコードを手で入力してみて、動作を確かめることから始めましょう。
