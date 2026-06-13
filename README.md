# cisco_service_api_wrapper

[![npm](https://img.shields.io/npm/v/cisco_service_api_wrapper)](https://www.npmjs.com/package/cisco_service_api_wrapper)

**Cisco Support APIs** 的 TypeScript/Node.js 封裝套件，讓開發者無需處理底層 HTTP 細節即可查詢 Cisco 設備與服務資料。

## 支援的 API 模組

| 命名空間 | 說明 |
|----------|------|
| `CiscoSupportAPI.Bug` | 查詢已知 Bug 與修復資訊 |
| `CiscoSupportAPI.Case` | 查詢 TAC 服務案例狀態 |
| `CiscoSupportAPI.Eox` | 查詢設備 End-of-Life / End-of-Sale 狀態 |
| `CiscoSupportAPI.ProductInformation` | 查詢產品型號與描述 |
| `CiscoSupportAPI.SerialNumberToInformation` | 序號轉換設備詳細資訊與保固狀態 |
| `CiscoSupportAPI.ServiceOrderReturn` | 查詢 RMA 服務訂單 |
| `CiscoSupportAPI.SoftwareSuggestion` | 查詢建議的軟體版本 |
| `CiscoSupportAPI.AutomatedSoftwareDistribution` | 軟體下載與合規協議 |

## 安裝

```bash
npm install cisco_service_api_wrapper
```

## 使用方式

### 初始化

呼叫任何 API 前必須先執行 `Init`，以 Client ID 與 Client Secret 換取 OAuth2 token。

```typescript
import * as cds from 'cisco_service_api_wrapper';

await cds.Init({
  client_id: 'YOUR_CLIENT_ID',
  client_serect: 'YOUR_CLIENT_SECRET',
});
```

### 選用：設定請求 Header

```typescript
cds.SetHeader({
  'User-Agent': 'my-app',
  Referer: 'my-app',
});
```

### API 呼叫範例

```typescript
const { CiscoSupportAPI } = cds;

// Bug：查詢指定 Bug ID 的詳細資訊
const bug = await CiscoSupportAPI.Bug.getBugDetailsById('CSCvz12345');

// Bug：依關鍵字搜尋，附加選用篩選條件
const bugs = await CiscoSupportAPI.Bug.searchBugsByKeyword('memory leak', {
  status: 'O',
  severity: '1',
});

// Case：查詢案例摘要
const cases = await CiscoSupportAPI.Case.getCaseSummary('123456789,987654321');

// EoX：查詢 End-of-Life 狀態
const eox = await CiscoSupportAPI.Eox.getEoxByProductIds('WS-C2960X-48FPS-L');

// EoX：依序號查詢
const eoxBySn = await CiscoSupportAPI.Eox.getEoxBySerialNumbers('FOC1234X5YZ');

// 產品資訊：依序號查詢
const product = await CiscoSupportAPI.ProductInformation.getInfoBySerialNumbers('FOC1234X5YZ');

// 保固狀態：依序號查詢覆蓋摘要
const coverage = await CiscoSupportAPI.SerialNumberToInformation.getCoverageSummaryBySerialNumbers('FOC1234X5YZ');

// RMA：查詢指定 RMA 號碼詳細資訊
const rma = await CiscoSupportAPI.ServiceOrderReturn.getRmaDetailsByRmaNumber(800123456);

// 軟體建議：依 Product ID 查詢建議版本
const suggestion = await CiscoSupportAPI.SoftwareSuggestion.getSuggestedReleasesByProductIds('WS-C2960X-48FPS-L');
```

## 取得 Cisco API 憑證

前往 [Cisco DevNet](https://developer.cisco.com/site/support-apis/) 註冊並申請 Support API 的 Client ID 與 Client Secret。

## 專案結構

```
src/
  api/
    endpoints.ts      ← 所有 Cisco API endpoint URL 定義
  modules/            ← 各 API 模組的實作（plain functions）
    bug.ts
    case.ts
    eox.ts
    product-information.ts
    serial-number.ts
    service-order-return.ts
    software-suggestion.ts
    automated-software-distribution.ts
  utility/
    httpmethod.ts     ← HTTP GET / POST 封裝
    query.ts          ← Query string 組裝工具
  common.ts           ← Token 與 Header 狀態管理
  cds.ts              ← 對外 namespace 與 Init 入口
```

## 本地開發

```bash
git clone https://github.com/kwangsing3/cisco_service_api_wrapper.git
npm install
npm run build
```

## 授權

MIT
