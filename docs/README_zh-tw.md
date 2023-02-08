<h3 align="right">
<a href="https://github.com/kwangsing3/cisco_service_api_wrapper.git">Github page</a> |
<a href="https://www.npmjs.com/package/cisco_service_api_wrapper-ts">npm page</a>  
</h3>


# cisco_service_api_wrapper-ts  
<h3>
<p align="center">
<a href="README.md"> English </a>|
<a href="/docs/README_ja.md"> 日本語 </a>|
<a href="/docs/README_zh-tw.md"> 繁體中文 </a>|
<a href="/docs/README_zh-ch.md"> 简体中文 </a>
</p>
</h3>
<br/>

# [cisco_service_api_wrapper](https://github.com/kwangsing3/cisco_service_api_wrapper) 是什麼?

```cisco_service_api_wrapper``` 是一個包裝器集合，從cisco的文檔中包裝  API 並以不同的程式語言實現。
它可以幫助開發者向cisco要求電影或電視節目的信息和元數據。 <br/>

這個庫由 Typescript 編寫並在 npm 中發佈,<br/>
查看[更多](https://github.com/kwangsing3/cisco_service_api_wrapper).
___
## 什麼樣的項目適合使用？

- 甚至你想製作一個前端以取代cisco的官方網站。 ((笑
- ...

___
## 使用方式

### Install:

```bash
$npm install cisco_service_api_wrapper-ts@latest
```

在使用此工具之前，請確保您已經擁有 [api_key](https://developers.themoviedb.org/3/getting-started/authentication).
<br/>

``` Typescript
import * as cisco_service_api_wrapper from 'cisco_service_api_wrapper-ts'; // 作為命名空間導入

cisco_service_api_wrapper.Init('YOUR api_key');        //開始前先初始化你的TOKEN_key。
cisco_service_api_wrapper.SetHeader({                  //設置標頭（可選但推薦）
    'User-Agent': 'npm package-dev',
    Referer: 'cisco_service_api_wrapper-ts',
  });

```
___

## 我該如何識別這些 API ?

### 運用你的直覺:



# 加入開發 ?
```bash
$git clone https://github.com/kwangsing3/cisco_service_api_wrapper.git &&

npm install ||

touch src/index.ts 
```

___
## 其他

*** 留個星星吧，希望這個工具能給你很大的幫助。 ***

THANK YOU :)

歡迎任何要求。