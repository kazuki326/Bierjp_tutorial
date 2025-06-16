# Bierjp Tutorial

このリポジトリは、新人向けに Web の基礎を学ぶチュートリアルとして用意されています。HTML、CSS、JavaScript を使って、シンプルなビール紹介ページを作成してみましょう。

## 1. ファイルを準備する

1. このリポジトリをクローンまたはダウンロードします。
2. `tutorial` フォルダ内に `index.html`、`styles.css`、`script.js` の 3 つのファイルを作成します。

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
  var info = document.getElementById("beer-info");
  info.style.display = info.style.display === "none" ? "block" : "none";
});
```

## 5. プレビューしてみよう

ターミナルで `tutorial` フォルダを開き、以下を実行します。

```bash
python3 -m http.server
```

ブラウザで `http://localhost:8000` を開くと、作成したページを確認できます。

---

このチュートリアルでは、基本的な HTML/CSS/JavaScript の構造と、簡単なプレビュー方法を学びました。まずはコードを手で入力してみて、動作を確かめることから始めましょう。
