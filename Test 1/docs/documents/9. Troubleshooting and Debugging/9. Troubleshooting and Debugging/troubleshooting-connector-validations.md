---
title: "Troubleshooting Connector Validations"
date: 2025-01-17
type: "epkb_post_type_1"
---

| **Validation Messages** | **Stages** | **Troubleshooting Instructions** |
| --- | --- | --- |
| Configuration Error | Configuration | Re-check the configurations |
| Request Failed | Authentication | Check connectivityCheck Proxy |
| Request Failed / Unable to connect | Fetch Logs | Check ConnectivityCheck ProxyCheck permissions / whitelisting pre-requisites |
| Request Failed - response code: `{res.status_code}`, reason: `{res.reason}` | Multiple Stages | Check credentials,Check according to the response code and reason |
| File Type not supported | Fetch Logs | Check filetypes on respective cloud storage, allowed filetypes are (.json.gz, .log.gz, .txt.gz, .gz, .json, .txt, .log) |
| Request Timeout | Validation | Internal config validation timeoutRetry after sometime |
| Unknown Error | Validation | Contact support with log snapshots of components. |
| Unable to connect | Configuration | Check for valid port within valid port range |
| Unable to connect | Authentication | Check ConnectivityCheck proxyCheck permissions / whitelisting pre-requisites |
| Credentials error | Configuration | Check if credentials used in configurations are valid and in correct format |
| Log reading error | Fetch Logs | Data not readable |
| Log listing error | Fetch Logs | Check connectivityCheck proxyCheck permissions / whitelisting pre-requisites |
