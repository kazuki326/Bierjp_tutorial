# Bierjp Tutorial

ヒューメイアにようこそ！ このリポジトリは、新人向けに **Web の基礎** を学ぶチュートリアルとして用意されています。HTML・CSS・JavaScript を用いて、シンプルなビール紹介ページを作りながら Git/GitHub の基本操作も体験しましょう。

---

## 1. ファイルを準備する

1. リポジトリをクローン（または ZIP ダウンロード）

   ```bash
   git clone https://github.com/yourname/Bierjp_tutorial.git
   cd Bierjp_tutorial
   ```

2. VS Code でフォルダを開く

   ```bash
   code .
   ```

   *VS Code コマンドが未設定なら、アプリから手動でフォルダを開いてください。*

3. `tutorial` フォルダを作り、次の 3 ファイルを用意します。

   ```text
   tutorial/
   ├─ index.html
   ├─ styles.css
   └─ script.js
   ```

---

## 2. HTML を書く

`index.html` に以下を貼り付けて保存します。

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
    <img
      class="beer-image"
      src="https://bier.jp/images/beeroriginal/nx-002.jpg"
      alt="ヴァイエンシュテファン ヘフェヴァイスビア"
    />
    <div id="beer-info" class="beer-details">
      <h2>Weihenstephaner Hefe Weißbier (500 ml)</h2>
      <p>【※バラ売り】ヴァイエンシュテファン ヘフェヴァイスビア [500 ml]</p>
      <p>バナナとクローブのフルーティーさとモルトの風味が融合し、軽やかでクリーミーな一杯に仕上がっています。その自然な濁りと淡い琥珀色は、視覚からも楽しむことができます。豊かな白い泡が立ち上る際に放つ魅力的な香りが特徴です。</p>
    </div>
    <button id="showInfo" class="info-button">詳細を見る</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

---

## 3. CSS を書く

`styles.css` に以下を記述します。

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.beer-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.beer-details {
  display: none;          /* デフォルトで非表示 */
  text-align: left;
  margin-top: 15px;
  line-height: 1.6;
  border-top: 1px solid #e0e0e0;
  padding-top: 10px;
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

---

## 4. JavaScript を書く

`script.js` に以下を保存します。

```javascript
// 詳細表示ボタンで情報の表示・非表示を切り替える

document.getElementById("showInfo").addEventListener("click", () => {
  const info = document.getElementById("beer-info");
  info.style.display = info.style.display === "none" || info.style.display === "" ? "block" : "none";
});
```

---

## 5. ローカルでプレビューしてみよう

ターミナルで `tutorial` フォルダを開き、簡易サーバーを起動します。

```bash
python3 -m http.server
```

ブラウザで `http://localhost:8000` を開くと、ページを確認できます。

> **VS Code ユーザー向け**：拡張機能 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) を使うと、保存と同時にブラウザがリロードされ便利です。

---

## 6. GitHub 上でプレビューする

1. GitHub リポジトリの **Settings → Pages** で **Source** を `main` ブランチに設定し、`/` ルートを選択。
2. 数分後、`https://YOURNAME.github.io/Bierjp_tutorial/tutorial/` で公開ページを閲覧できます。

`YOURNAME` をあなたの GitHub ユーザー名に置き換えてください。

---

## 7. Git 設定エラーが出たら

Git でコミット時にユーザー名／メール未設定エラーが表示された場合は、以下をターミナルで実行して再度コミットしてください。

```bash
# ユーザー名
git config --global user.name "male"

# メールアドレス
git config --global user.email "male@example.com"
```

![Git config error screenshot](https://github.com/user-attachments/assets/14b10788-a413-45a2-a0ac-ebda381c7983)

---

このチュートリアルでは、**HTML/CSS/JavaScript の基本構造** と **ローカル・GitHub 上でのプレビュー手順**、さらに **Git の基本設定** を学びました。まずは実際にコードを入力し、挙動を確かめてみましょう！
