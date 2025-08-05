# Bierjp Tutorial

ヒューメイアへようこそ！このリポジトリは、新人向けに **Web の基礎（HTML / CSS / JavaScript）** と **Git / GitHub の基本操作** を体験しながら学ぶためのチュートリアルです。  
既存コード（`tutorial/` 配下の `index.html`）をローカルで動かし、編集し、GitHub へプッシュし、**プルリクエスト（PR）を作成する** ところまでをゴールにします。

---

## 0. ゴール（このチュートリアルでできること）

- Git でリポジトリをクローンできる  
- VS Code で HTML/CSS/JS を表示＆動作確認できる（Live Server など）  
- コードを独自ファイル名で修正・保存できる  
- 変更をコミットし、GitHub にプッシュできる  
- プルリクエストを作成し、**レビュー依頼**ができる  

---

## 1. 事前準備（Prerequisites）

- **Git** インストール済み  
- **VS Code** インストール済み  
  - 推奨拡張機能：`Live Server`（または Microsoft 製 `Live Preview`）  
- **GitHub アカウント**

> ユーザー名・メール未設定時は：
> ```
> git config --global user.name "Your Name"
> git config --global user.email "you@example.com"
> ```
>をターミナルに打ち込む

---

## 2. リポジトリをクローンする

```
1. VS Code を起動  

2. 「ファイル」→「フォルダーを開く」で任意の作業ディレクトリへ移動（好きなフォルダを作成してそこからコマンドを打ちます）

3. リポジトリをクローン
git clone https://github.com/kazuki326/Bierjp_tutorial.git

これでリモートからフォルダがDLされます。（Bierjp_tutorialフォルダ）
```


---

## 3. ローカルでページを表示する

対象：`tutorial/` フォルダ内の `index.html`

### 3-1. Live Server（推奨）
1. `index.html` を開く  
2. 右上の **“プレビューの表示”** をクリック  
   - ない場合：右クリック→「Open with Live Server」や `Ctrl+Shift+P` → “Live Server: Open with Live Server”
  <img width="44" height="37" alt="image" src="https://github.com/user-attachments/assets/fa730fab-40ce-40bf-bb82-7e995864fd36" />
  こんな感じのアイコン。

---

<img width="1919" height="1126" alt="image" src="https://github.com/user-attachments/assets/30223144-7915-4ac7-8e49-8375a1611310" />

このように、右側にWebページが表示されます。


3. 保存すると自動リロードされます

### 3-2. 直接ブラウザで開く
https://codepen.io/
というWebサイトにHTML, CSS, JavaScriptを打ち込むと作成したページを可視化できる！

---

## 4. コードを読んでみよう(index.html)

**index.html**
このファイルにすべてまとめていますが、各ファイルに分けることもできます。

>例
>- **sample.html**：ページ構造（HTML）  
>- **sample.css**：見た目（CSS）  
>- **sample.js** ：動作（JavaScript）

### 4-1. 元のコードから自分なりに中身を修正してみましょう。

**簡単な修正例**：
- タイトル文言変更  
- 画像サイズや角丸・中央寄せ調整  
- 詳細テキストの追加・変更  
- 複数ビールカードを並べる など

---

## 5. 課題

1. **クローンしてローカルで動作確認**（手順 2〜4）  
2. **独自ファイル名でコピー**  
   - 例：`yourname.html`
3. **コードを少し改造**  
   - 例：画像を中央＆小さめに、ボタン色変更、アニメーション追加…  
4. **Git でブランチを切り、コミット & プッシュ**  
5. **GitHub でプルリクエスト作成**  

---

## 5-4. ブランチを切って変更をコミットする
index.htmlをコピーして名前を変更してみましょう。
それをpushする手順を紹介します。

### 5-4-1. ブランチ作成
```
git checkout -b feature/your-name-update
```
GitGraphから右クリックでもできます！
<img width="912" height="863" alt="image" src="https://github.com/user-attachments/assets/818711ef-f63e-4d4d-bead-c1df86b65ed4" />

### 5-4-2. ステージング & コミット
```
git add tutorial/yourname.*
git commit -m "Add my customized beer page (yourname.*)"
```
「＋」ボタンを押すと変更をステージングできます！（リモートにプッシュするファイルを選択）
<img width="305" height="232" alt="image" src="https://github.com/user-attachments/assets/3af1646e-b7e3-49c5-a287-6f8923775712" />

### 5-4-3. リモートへプッシュ
```
git push -u origin feature/your-name-update
```
「コミット」ボタンを押すとそれでもいけます！
---

## 7. プルリクエスト（PR）を作成する

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

## 8. Git / GitHub 便利コマンド集

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

## 9. よくあるトラブルと対処

| 症状 | 原因 / 対処 |
|------|--------------|
| `fatal: repository not found` | URL ミス / 権限不足。URL・権限を確認。 |
| `error: File xxx is 241.34 MB` | GitHub は 100MB 超ファイル拒否。動画等は `.gitignore`、もしくは Git LFS 検討。 |
| `Go Live が出ない` | Live Server 未導入 / HTML を開いていない。コマンドパレットからも実行可。 |
| 日本語文字化け | `<meta charset="UTF-8">` と VS Code の保存エンコーディングを確認。 |
| `git config` エラー | 権限問題。管理者権限や `.gitconfig` の書込権限を確認。 |

---
