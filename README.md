# shiren2-bot
シレン2のdiscordのbotを作ってみます。  
アイテムやモンスターの情報がわかる機能を作るよ。

## 動作環境
- Node.js

## サーバー
- Glitch(upgradeしていないので今は誰でもみれます。)
  - https://glitch.com/edit/#!/shiren2-bot
  - https://shiren2-bot.glitch.me
    - 追加して欲しい場合はあーるまでご連絡を。
- GAS
  - Glitchは5分したらSleep状態になるので、nodeでPOSTできる環境を作成して一定時間ごとにアクセスさせることでずっと起動させている。

## テスト環境
- Discordでテスト用のサーバーを作成
- サーバーにBotを追加するためのapplicationを作成する
  - 以下のサイト等を参考にする
    - https://discordpy.readthedocs.io/ja/latest/discord.html
    - https://discord.com/developers/applications

## 実行
- cloneしたアプリにディレクトリを移動する
- `npm update`コマンドでパッケージをインストールする
- `npm start`でbot起動
- テストを実行する場合は`npm test`
