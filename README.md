# cisco_service_api_wrapper

Cisco Support APIs 的 MCP Server，讓 AI（Claude、GPT 等支援 MCP 的客戶端）可以直接查詢 Cisco 設備與服務資料。

API 文件：https://developer.cisco.com/docs/support-apis/

## 支援的 API 模組

| 模組 | 說明 |
|------|------|
| Bug | 查詢已知 Bug 與修復資訊 |
| Case | 查詢 TAC 服務案例狀態 |
| EoX | 查詢設備 End-of-Life / End-of-Sale 狀態 |
| Product Information | 查詢產品型號與描述 |
| Serial Number to Information | 序號轉換設備詳細資訊與保固狀態 |
| Service Order Return (RMA) | 查詢 RMA 服務訂單 |
| Software Suggestion | 查詢建議的軟體版本 |
| Automated Software Distribution | 軟體下載與合規協議 |

## 取得 Cisco API 憑證

前往 [Cisco DevNet](https://developer.cisco.com/site/support-apis/) 註冊並申請 Support API 的 Client ID 與 Client Secret。

## 安裝與建置

```bash
git clone https://github.com/kwangsing3/cisco_service_api_wrapper.git
cd cisco_service_api_wrapper
npm install
npm run build
```

## 加入 Claude Desktop

在 Claude Desktop 的 config 檔中加入以下設定：

- **Windows**：`%APPDATA%\Claude\claude_desktop_config.json`
- **macOS**：`~/Library/Application Support/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "cisco": {
      "command": "node",
      "args": ["C:/path/to/cisco_service_api_wrapper/build/src/mcp-server.js"],
      "env": {
        "CISCO_CLIENT_ID": "your_client_id",
        "CISCO_CLIENT_SECRET": "your_client_secret"
      }
    }
  }
}
```

重啟 Claude Desktop 後即可直接用自然語言查詢，例如：

```
查詢序號 SAL2014XXXX 的保固狀態與產品資訊
```

```
Catalyst 9300 在 IOS-XE 17.9.1 有哪些 Open 的 Bug，severity 1 到 3？
```

```
查詢產品 WS-C2960X-48FPS-L 的 End-of-Life 資訊
```

## 其他連線方式

除了 stdio（Claude Desktop 預設），也支援網路模式：

```bash
# SSE
MCP_TRANSPORT=sse npm start

# Streamable HTTP
MCP_TRANSPORT=http npm start
```

## 專案結構

```
src/
  api/
    endpoints.ts      ← 所有 Cisco API endpoint URL 定義
  modules/            ← 各 API 模組實作
    bug.ts
    case.ts
    eox.ts
    product-information.ts
    serial-number.ts
    service-order-return.ts
    software-suggestion.ts
    automated-software-distribution.ts
  utility/
    http.mod.ts       ← HTTP GET / POST 封裝
    query.ts          ← Query string 組裝工具
  common.ts           ← Token 與 Header 狀態管理
  cds.ts              ← OAuth2 初始化入口
  mcp-server.ts       ← MCP Server 主程式
```

## 授權

MIT
