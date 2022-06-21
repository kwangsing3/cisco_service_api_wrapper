
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

# [Cisco_Data_Service](https://github.com/kwangsing3/cisco_data_service) 是什么?

```Cisco_Data_Service``` 是一个包装器集合，并且从cisco的文档中包装  API 以不同的程序语言实现。
它可以帮助开发者向cisco请求电影或电视节目的信息和元数据。<br/>

这个库由 Typescript 编写并在 npm 中发布,<br/>
查看[更多](https://github.com/kwangsing3/cisco_data_service).
___
## 什么样的项目适合使用？

- 甚至你想制作一个程序取代cisco的官方网站。 ((笑
- ...

___
## 使用方式

### Install:

```bash
$npm install Cisco_Data_Service-ts@latest
```

在使用此工具之前，请确保您已经拥有 [api_key](https://developers.themoviedb.org/3/getting-started/authentication).
<br/>

``` Typescript
import * as Cisco_Data_Service from 'Cisco_Data_Service-ts'; // 作为命名空间导入

Cisco_Data_Service.Init('YOUR api_key');        //开始前先初始化你的TOKEN_key。
Cisco_Data_Service.SetHeader({                  //设置标头（可选但推荐）
    'User-Agent': 'npm package-dev',
    Referer: 'Cisco_Data_Service-ts',
  });


```
___

## 我该如何识别这些 API ?


# 加入开发 ?
```bash
$git clone https://github.com/kwangsing3/Cisco_Data_Service.git &&

npm install ||

touch src/index.ts 
```

___
## 其他

*** 留个星星吧，希望这个工具能给你很大的帮助。 ***

THANK YOU :)

欢迎任何要求。