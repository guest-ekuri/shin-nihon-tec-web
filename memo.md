### ブランチ命名規則

| プレフィックス | 役割・使うタイミング | ブランチ名の例 |
| --- | --- | --- |
| **`add/`** | 新しい機能の追加、新しいページの作成、ファイルの新規追加 | `add/about-page`<br>

<br>`add/contact-form` |
| **`fix/`** | バグや表示崩れの修正、エラーの解消 | `fix/header-layout`<br>

<br>`fix/typo-in-footer` |
| **`update/`** | 既存のデザイン変更、テキストの差し替え、仕様の更新 | `update/button-color`<br>

<br>`update/profile-text` |
| **`refactor/`** | 見た目や機能は変えずに、コードを整理・改善する（分割など） | `refactor/split-sections`<br>

<br>`refactor/clean-up-css` |

#### 💡 ブランチ名をつけるときのちょっとしたコツ

* **すべて小文字**で書く（例：`Add/Page` ではなく `add/page`）
* 単語の区切りには**ハイフン（ `-` ）**を使う（例：`add/about_page` ではなく `add/about-page`）
* 日本語ではなく**簡単な英語**を使う（後々ターミナルで打ちやすいため）

