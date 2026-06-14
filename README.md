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

### ⚠️ 補充：Windows Store（MSIX）版 Claude Desktop 的 config 路徑陷阱

如果你的 Claude Desktop 是從 **Microsoft Store** 安裝的（MSIX 封裝版），它跑在沙箱容器中並有**檔案系統虛擬化**，**不會**讀取上面標準的 `%APPDATA%\Claude\claude_desktop_config.json`。

症狀：改了 config 卻完全沒生效、重啟也不出現工具、且 `%APPDATA%\Claude` 下**不會生成 `logs` 資料夾**。

Store 版實際讀取的 config 在虛擬化路徑：

```
%LOCALAPPDATA%\Packages\Claude_<發行者雜湊>\LocalCache\Roaming\Claude\claude_desktop_config.json
```

例如：`C:\Users\<你>\AppData\Local\Packages\Claude_pzs8sxrjxfjjc\LocalCache\Roaming\Claude\claude_desktop_config.json`

確認你的封裝資料夾名稱（PowerShell）：

```powershell
# 找出 Claude Desktop 執行檔路徑，若在 WindowsApps 下即為 Store 版
(Get-Process claude | Select-Object -First 1).Path

# 列出實際的封裝 config 路徑
Get-ChildItem "$env:LOCALAPPDATA\Packages\Claude_*\LocalCache\Roaming\Claude\claude_desktop_config.json"
```

把 `mcpServers` 設定加進**這個**檔案，而非標準路徑。獨立安裝版（從 [claude.ai](https://claude.ai/download) 下載的 .exe）則使用標準的 `%APPDATA%\Claude\` 路徑，不受此影響。

修改後務必**完全結束 Claude Desktop 再重開**（它會縮到系統匣，關視窗不算）：右鍵系統匣圖示 → Quit，或執行 `Stop-Process -Name claude -Force`。

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
