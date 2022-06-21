
<h3 align="right">
<a href="https://github.com/kwangsing3/Cisco_Data_Service.git">Github page</a> |
<a href="https://www.npmjs.com/package/Cisco_Data_Service-ts">npm page</a>  
</h3>


# Cisco_Data_Service-ts  
<h3>
<p align="center">
<a href="README.md"> English </a>|
<a href="/docs/README_ja.md"> 日本語 </a>|
<a href="/docs/README_zh-tw.md"> 繁體中文 </a>|
<a href="/docs/README_zh-ch.md"> 简体中文 </a>
</p>
</h3>
<br/>

# [Cisco_Data_Service](https://github.com/kwangsing3/cisco_data_service)とは何ですか ?

```Cisco_Data_Service``` は,cisco APIをラップし,ドキュメントから,さまざまなプログラム言語で実装するのラッパーコレクションです。

開発者が情報やメタデータについて映画やテレビ番組をリクエストするのに役立ちます。<br/>

Typescriptに作て, npmで公開されるリポジトリです,<br/>
続きを [見る](https://github.com/kwangsing3/cisco_data_service).
___
## どのようなプロジェクトがこのツールを使用しますか ?

- cisco公式サイトに取り替えたい場合でも。 (( www
- ...

___
## Useage

### Install:

```bash
$npm install Cisco_Data_Service-ts@latest
```

このツールを使用する前に, [api_key](https://developers.themoviedb.org/3/getting-started/authentication) がすでにあることを確認してください.
<br/>

``` Typescript
import * as Cisco_Data_Service from 'Cisco_Data_Service-ts'; // import as a namespace

Cisco_Data_Service.Init('YOUR api_key');        //最初にTOKEN_keyを設定する。 
Cisco_Data_Service.SetHeader({                  //ヘッダーの設定（オプションですが推奨）
    'User-Agent': 'npm package-dev',
    Referer: 'Cisco_Data_Service-ts',
  });

```
___

## これらのAPIをどのように認識しますか ?



# 開発に参加する ?
```bash
$git clone https://github.com/kwangsing3/Cisco_Data_Service.git &&

npm install ||

touch src/index.ts 
```

___
## その他

*** 星を残して, このツールがあなたに大きな助けになることを願っています. ***

ありがとうございます :)

どんなリクエストでも大歓迎です。