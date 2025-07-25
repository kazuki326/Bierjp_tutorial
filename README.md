# Bierjp Tutorial

ヒューメイアへようこそ！このリポジトリは、新人向けに **Web の基礎（HTML / CSS / JavaScript）** と **Git / GitHub の基本操作** を体験しながら学ぶためのチュートリアルです。  
既存コード（`tutorial/` 配下の `sample.html`, `sample.css`, `sample.js`）をローカルで動かし、編集し、GitHub へプッシュし、**プルリクエスト（PR）を作成する** ところまでをゴールにします。

---

## 0. ゴール（このチュートリアルでできること）

- Git でリポジトリをクローンできる  
- VS Code で HTML/CSS/JS を表示＆動作確認できる（Live Server など）  
- コードを独自ファイル名で修正・保存できる  
- 変更をコミットし、GitHub にプッシュできる  
- プルリクエストを作成し、レビュー依頼ができる  

---

## 1. 事前準備（Prerequisites）

- **Git** インストール済み  
- **VS Code** インストール済み  
  - 推奨拡張機能：`Live Server`（または Microsoft 製 `Live Preview`）  
- （任意）**Python 3** か **Node.js**：簡易HTTPサーバ起動用  
- **GitHub アカウント**

> ユーザー名・メール未設定時は：
> ```
> git config --global user.name "Your Name"
> git config --global user.email "you@example.com"
> ```

---

## 2. リポジトリをクローンする

```
# 1) 任意の作業ディレクトリへ移動
cd ~/work   # 例

# 2) リポジトリをクローン
git clone https://github.com/YOUR_ORG/Bierjp_tutorial.git
cd Bierjp_tutorial
```

> `YOUR_ORG` や URL は実際のものに置き換えてください。

---

## 3. VS Code で開く

### コマンドで開く
```
code .
```

### GUI で開く
1. VS Code を起動  
2. 「ファイル」→「フォルダーを開く」で `Bierjp_tutorial` を選択

---

## 4. ローカルでページを表示する

対象：`tutorial/` フォルダ内の `sample.html`, `sample.css`, `sample.js`

### 4-1. Live Server（推奨）
1. `sample.html` を開く  
2. 右下の **“Go Live”** をクリック  
   - ない場合：右クリック→「Open with Live Server」や `Ctrl+Shift+P` → “Live Server: Open with Live Server”  
3. 保存すると自動リロードされます

### 4-2. 簡易HTTPサーバで開く

**Python 3:**
```
cd tutorial
python -m http.server 8000
# → http://localhost:8000/sample.html
```

**Node.js (http-server):**
```
cd tutorial
npx http-server .
# → http://localhost:8080/sample.html など
```

### 4-3. 直接ブラウザで開く
`sample.html` をダブルクリックでも閲覧可。ただし `fetch()` など一部機能が制限されるため、基本はサーバ方式推奨。

---

## 5. コードを読んでみよう

- **sample.html**：ページ構造（HTML）  
- **sample.css**：見た目（CSS）  
- **sample.js** ：動作（JavaScript）

**簡単な改造例**：
- タイトル文言変更  
- 画像サイズや角丸・中央寄せ調整  
- 詳細テキストの追加・変更  
- 複数ビールカードを並べる など

---

## 6. 課題（Hands-on）

1. **クローンしてローカルで動作確認**（手順 2〜4）  
2. **独自ファイル名でコピー**  
   - 例：`yourname.html`, `yourname.css`, `yourname.js`  
3. **コードを少し改造**  
   - 例：画像を中央＆小さめに、ボタン色変更、アニメーション追加…  
4. **Git でブランチを切り、コミット & プッシュ**  
5. **GitHub でプルリクエスト作成**  

---

## 7. ブランチを切って変更をコミットする

### 7-1. ブランチ作成
```
git checkout -b feature/your-name-update
```

### 7-2. ファイル作成・編集
```
cp tutorial/sample.html tutorial/yourname.html
cp tutorial/sample.css  tutorial/yourname.css
cp tutorial/sample.js   tutorial/yourname.js
# 中身を編集
```

### 7-3. 変更確認
```
git status
```

### 7-4. ステージング & コミット
```
git add tutorial/yourname.*
git commit -m "Add my customized beer page (yourname.*)"
```

### 7-5. リモートへプッシュ
```
git push -u origin feature/your-name-update
```

---

## 8. プルリクエスト（PR）を作成する

1. GitHub のリポジトリページへ  
2. 「Compare & pull request」ボタン（または Pull requests タブ→New pull request）  
3. **Base**: `main` / **Compare**: `feature/your-name-update` を指定  
4. タイトル・説明（変更内容/意図/確認方法）を書いて **Create pull request**  
5. レビュワーを指定（Assignees / Reviewers / Labels など）

**PR の書き方ヒント**  
- 変更点（Before / After）  
- 動作確認手順（どのURL/ファイルを開けば良いか）  
- スクショ or GIF で視覚的に説明  

---

## 9. Git / GitHub 便利コマンド集

```
# 変更点の確認
git diff

# 直近のコミット履歴
git log --oneline --graph --decorate --all

# 直前のコミットを修正（メッセージ含む）
git commit --amend

# 直前の push を修正した場合（慎重に）
git push --force-with-lease

# リモート更新の取得・不要ブランチ掃除
git fetch --all --prune
```

---

## 10. よくあるトラブルと対処

| 症状 | 原因 / 対処 |
|------|--------------|
| `fatal: repository not found` | URL ミス / 権限不足。URL・権限を確認。 |
| `error: File xxx is 241.34 MB` | GitHub は 100MB 超ファイル拒否。動画等は `.gitignore`、もしくは Git LFS 検討。 |
| `Go Live が出ない` | Live Server 未導入 / HTML を開いていない。コマンドパレットからも実行可。 |
| 日本語文字化け | `<meta charset="UTF-8">` と VS Code の保存エンコーディングを確認。 |
| `git config` エラー | 権限問題。管理者権限や `.gitconfig` の書込権限を確認。 |

---
