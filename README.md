# Gulpを使用して、サイト制作する場合のテンプレート

---

---

![イメージ画像](readme_image.png)

---

---

## **プロジェクト概要**
### **内容**
静的なコーディングをする際のテンプレート。
開発環境と、ハンバーガーメニューなどの各部品も含む。
### **目的**
* 静的なコーディングの効率化。
* クオリティの均一化。
* 共通化により、仕様把握を用意にする。

---

---

## **仕様**
新しい部品や効率的な書き方など、随時追記していく。
### **ファイル構成**
```
┣ [ source ] ┳ [ ejs ] ┳ [ module ] ┳ _footer.ejs
┃            ┃         ┃            ┣ _head.ejs
┃            ┃         ┃            ︙
┃            ┃         ┣ index.ejs
┃            ┃         ┃
┃            ┃         ┗ pages.json
┃            ┃
┃            ┃ [ js ] ━ common.js
┃            ┃
┃            ┗ [ scss ] ┳ [ layout ] ━ _layout.scss
┃                       ┣ [ module ] ┳ _footer.scss
┃                       ┃            ┣ _header.scss
┃                       ┃            ︙
┃                       ┣ _base.scss
┃                       ┣ _mixin.scss
┃                       ┣ _sanitize.scss
┃                       ┣ _setting.scss
┃                       ┗ style.scss
┃
┣ [ static ] ┳ [ css ] ┳ style.css
┃            ┃         ┣ slick.min.css
┃            ┃         ︙
┃            ┃
┃            ┣ [ img ] ┳ header_logo_01.png
┃            ┃         ┣ header_img_01.jpg
┃            ┃         ︙
┃            ┃
┃            ┣ [ js ]    ┳ common.js
┃            ┃           ┣ slick.min.js
┃            ┃           ︙
┃            ┃
┃            ┗ index.html
┃
┣ gulpfile.js
┣ package-lock.json
┣ package.json
┣ [ node_modules ]
┃
┣ .gitignore
┣ readme_image.png
┗ README.md
```
### **機能 / 制作物**
#### **Gulp**
* browser-sync
* ejs / js / scss のコンパイル

### **解説**
#### **Gulp**
* source内の .scss / .ejs / .js ファイルを保存すると、自動的にブラウザをリロードする。
* source/ejs/pages.jsonに記載されていて、かつsource/ejs内にそのejsファイルがあれば、ejsからhtmlにコンパイルし、static内に書き出す。
* source/js内の先頭にアンダースコアがつかないファイルを、scssからcssにコンパイルし、static/css/内に書き出す。
* source/js内の先頭にアンダースコアがつかないファイルを、一つにまとめてstatic/js/common.jsとして書き出す。

---

---

## **開発環境**
* テスト環境：--  
* 本番環境：--  

1. フォルダを作成しておいて、そこにpullかダウンロードでプロジェクトを作成する。

2. win：コマンドプロンプト、mac：ターミナルで（エディターに付随するものを推奨）  
`cd [プロジェクトがあるフォルダ]`  
で、該当フォルダへ移動。

3. `$ npm install`  
で、必要なパッケージをインストールする。

4. `$ gulp`  
で、.scss/.ejsファイルのコンパイルや、ブラウザの自動読み込みが行われる。

5. その後、.scss/.ejsファイルが更新される（ctrl + s）たび、ブラウザの自動再読み込みが行われる。

6. 終了する場合、  
`$ [ctrl + c]`


### **使用ツール**
* Node.js
* Gulp

Node/gulpをインストールしていない場合は、下記URLを参考にグローバルインストールしておいてください。  

* https://docs.google.com/spreadsheets/d/1MMuW4NP_efFy7wiOouYzxlPaIe9ho2Pd1IZjiR8K3kI/edit?pli=1#gid=1814540919
* windows
	* https://mseeeen.msen.jp/windows-nodejs-gulpjs-install/

* mac
	* http://qiita.com/kazukichi/items/884a1379eea5918689ed



### **ファイル管理方法**
下記のファイル・フォルダはアップロード（または納品）しないこと！！
```
.git
.gitignore
readme_image.png
README.md
```

---

---

## **公開方法 / 納品形式**
--

---

---

## **資料**
* Reforma番号：--
* PJ資料：--
* Dropbox上のパス：--

---

---

## **体制**
* director：--
* designer：--
* engineer：--

---

---

## **その他**

---

---

