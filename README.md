# Bierjp Tutorial

ヒューメイアにようこそ！ このリポジトリは、新人向けに Web の基礎を学ぶチュートリアルとして用意されています。HTML、CSS、JavaScript を使って、シンプルなビール紹介ページを作成してみましょう。

## 1. ファイルを準備する

1. Git を使ってリポジトリをクローンします。

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
  <div class="beer-card">
    <img class="beer-image" src="https://bier.jp/images/beeroriginal/nx-002.jpg" alt="ヴァイエンシュテファン ヘフェヴァイスビア" />
    <div id="beer-info" class="beer-details">
      <h2>Weihenstephaner Hefe Weißbier (500ml)</h2>
      <p>【※バラ売り】ヴァイエンシュテファン ヘフェヴァイスビア [500ml]</p>
      <p>バナナとクローブのフルーティーさとモルトの風味が融合し、軽やかでクリーミーな一杯に仕上がっています。その自然な濁りと淡い琥珀色は、視覚からも楽しむことができます。豊かな白い泡が立ち上る際に放つ魅力的な香りが特徴です。</p>
    </div>
    <button id="showInfo" class="info-button">詳細を見る</button>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

## 3. CSS を書く

`styles.css` には次を入力します。

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  padding: 40px 20px;
  background: #f4f4f4;
  color: #333;
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
}

.beer-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.beer-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.beer-details {
  display: none;
  text-align: left;
  margin-top: 15px;
  line-height: 1.6;
}

.info-button {
  margin-top: 15px;
  padding: 10px 20px;
  background: #2c3e50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.info-button:hover {
  background: #1a242f;
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

また、VS Code を使う場合は [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 拡張機能をインストールし、`index.html` を右クリックして **Open with Live Server** を選ぶと、変更を保存するたびに自動でブラウザ更新が行われて便利です。

## 6. GitHub 上でプレビューする

GitHub でこのリポジトリを開いたときに HTML を閲覧するには、[GitHub Pages](https://docs.github.com/ja/pages/getting-started-with-github-pages) を利用するのが簡単です。

1. リポジトリの **Settings** > **Pages** から、**Branch** を `main`（または公開したいブランチ）に設定します。
2. 数分後、`https://YOURNAME.github.io/Bierjp_tutorial/tutorial/` で `index.html` をプレビューできます。

`YOURNAME` にはあなたの GitHub ユーザー名を入れてください。これでブラウザからも完成したページを確認できるようになります。

---

このチュートリアルでは、基本的な HTML/CSS/JavaScript の構造と、簡単なプレビュー方法を学びました。まずはコードを手で入力してみて、動作を確かめることから始めましょう。
