
<h3 align="right">
<a href="https://github.com/kwangsing3/Cisco_Data_Service.git">Github page</a> |
<a href="https://www.npmjs.com/package/cisco_data_service">npm page</a>  
</h3>


# Cisco_Data_Service
<h3>
<p align="center">
<a href="README.md"> English </a>|
<a href="/docs/README_ja.md"> 日本語 </a>|
<a href="/docs/README_zh-tw.md"> 繁體中文 </a>|
<a href="/docs/README_zh-cn.md"> 简体中文 </a>
</p>
</h3>
<br/>

# What is [cisco_data_service](https://github.com/kwangsing3/cisco_data_service) ?

```cisco_data_service``` is a wrapper  for wrapping Cisco API from their doc and implementing in different program languages.

It helps developer to request Movies or TV shows for infomation and metadata.<br/>

This repo written by Typescript and publich in npm,<br/>
see more  [here](https://github.com/kwangsing3/cisco_data_service).
___
## What kinds of projects are appropriated using with?

___
## Useage

### Install:

```bash
$npm install cisco_data_service@latest
```

Before use this tool, make sure already have your [api_key](https://developers.themoviedb.org/3/getting-started/authentication).
<br/>

``` Typescript
import * as cds from 'cds'; // import as a namespace

cds.Init('YOUR api_key');        //Always init your TOKEN_key first.
cds.SetHeader({                  //Set header (optional but recommand)
    'User-Agent': 'npm package-dev',
    Referer: 'cisco_data_service',
  });


```
___

## How do I recognize these APIs ?




# Join Development ?
```bash
$git clone https://github.com/kwangsing3/Cisco_Data_Service.git &&

npm install ||

touch src/index.ts 
```

___
## Others

*** leave a star,  hope this tool would give you a big help. ***

THANK YOU :)

Any request are welcome.