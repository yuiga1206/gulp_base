# Gulpを使用して、サイト制作する場合のテンプレート


* 使用ツール
	* Node.js
	* gulp


* 「gulp」で.scss/.ejsファイルをコンパイルしています。

---
  
### Node/gulpをインストールしていない場合は、下記URLを参考にグローバルインストールしておいてください。  

* windows
	* https://mseeeen.msen.jp/windows-nodejs-gulpjs-install/

* mac
	* http://qiita.com/kazukichi/items/884a1379eea5918689ed


---
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
