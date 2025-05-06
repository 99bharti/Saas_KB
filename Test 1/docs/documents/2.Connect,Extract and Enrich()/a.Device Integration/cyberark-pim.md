---
title: "CyberArk PIM"
date: 2025-01-17
type: "epkb_post_type_1"
---

This article describes the steps to configure log forwarding for CyberArk Privileged Identity Management (CEF)

1. On the **PTA** machine, open the default **systemparm.properties** file using the **DEFAULTPARM** command.
2. Copy the line containing the **syslog\_outbound** property, and exit the file.
3. Open the local **systemparm.properties** file using the **LOCALPARM** command.
4. Press **i** to edit the file.
5. Paste the line you copied, uncomment the **syslog\_outbound** property and edit the parameters. Use the following table as a guide.

| **Parameter** | **Description** |
| --- | --- |
| siem | Enter the DNIF system |
| format | The format used to transfer the syslog records to the server where your SIEM solution is installed. Enter: CEF |
| host | The Host/IP address of the server where your SIEM solution is installed. |
| port | The port number through which the syslog records will be sent to the server where your SIEM solution is installed. |
| protocol | The protocol used to transfer the syslog records to the server where your SIEM solution is installed. |

Example:

```
syslog\_outbound=\[{"siem": "DNIF", "format": "CEF", "host": "DNIF\_IP\_ADDRESS", "port": 514, "protocol": "TCP/UDP"}\]
```

1. Save the configuration file and close it.
2. Restart **PTA**.

[Official Documentation](https://docs.cyberark.com/Product-Doc/OnlineHelp/PAS/Latest/en/Content/PTA/Outbound-Sending-%20PTA-syslog-Records-to-SIEM.htm?tocpath=Administration%7CComponents%7CPrivileged%20Threat%20Analytics%7CConfigure%20Privileged%20Threat%20Analytics%7CSend%20PTA%20Data%7CSend%20PTA%20syslog%20Records%20to%20SIEM%7C_____0)
