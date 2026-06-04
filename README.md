# cisco_service_api_wrapper

[![npm](https://img.shields.io/npm/v/cisco_service_api_wrapper)](https://www.npmjs.com/package/cisco_service_api_wrapper)

**Cisco Support APIs** 的 TypeScript/Node.js 封裝套件，讓開發者無需處理底層 HTTP 細節即可查詢 Cisco 設備與服務資料。

多語言文件：[English](README.md) ｜ [日本語](docs/README_ja.md) ｜ [繁體中文](docs/README_zh-tw.md) ｜ [简体中文](docs/README_zh-cn.md)

## 支援的 Cisco API 模組

| 模組 | 說明 |
|------|------|
| `Bug` | 查詢 Cisco 設備已知 Bug 與修復資訊 |
| `Case` | 查詢 TAC 服務案例狀態 |
| `Eox` | 查詢設備 End-of-Life / End-of-Sale 狀態 |
| `ProductInformation` | 查詢產品資訊（型號、描述等）|
| `SerialNumberToInformation` | 序號轉換設備詳細資訊 |
| `ServiceOrderReturn` | 查詢 RMA 服務訂單狀態 |
| `SoftwareSuggestion` | 查詢建議的軟體版本 |
| `AutomatedSoftwareDistribution` | 自動化軟體下載 |

## 安裝

```bash
npm install cisco_service_api_wrapper@latest
```

## 使用方式

```typescript
import * as cds from 'cisco_service_api_wrapper';

// 初始化（必須先呼叫）
cds.Init('YOUR_CISCO_API_KEY');

// 設定請求 Header（選用但建議）
cds.SetHeader({
  'User-Agent': 'my-app',
  Referer: 'cisco_service_api_wrapper',
});

// 查詢序號對應的設備資訊
const info = await cds.SerialNumberToInformation.getDeviceBySerialNumber('ABC123456');

// 查詢 End-of-Life 狀態
const eox = await cds.Eox.getEoxBySerialNumber('WS-C2960X-48FPS-L');
```

## 取得 Cisco API Key

前往 [Cisco DevNet](https://developer.cisco.com/site/support-apis/) 註冊並申請 Support API 的 Client ID 與 Client Secret。

## 本地開發

```bash
git clone https://github.com/kwangsing3/cisco_service_api_wrapper.git
npm install
```

## 授權

MIT