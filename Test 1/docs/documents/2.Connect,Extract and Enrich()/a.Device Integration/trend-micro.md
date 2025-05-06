---
title: "Trend Micro"
date: 2025-01-20
type: "epkb_post_type_1"
---

This article describes the steps to configure log forwarding for Trend Micro.

1. Navigate to **Administration > Settings > Syslog Settings**. The **Syslog Settings** screen is displayed.

3. Select the **Enable syslog forwarding** checkbox.

5. Configure the following settings for the server that receives the forwarded syslogs:
    - **Server address:** Syslog server IP address or host name
    
    - **Port:** Syslog server port number
    
    - **Protocol:** Select the transmission protocol

7. Select the log format:
    - **CEF:** Uses the standard Common Event Format (CEF) for log messages

9. Select the log type(s) to forward:
    - Select a log category from the Log type drop-down list
    
    - Select the checkbox(es) for the log(s) you want to forward.

11. Apex Central displays the total number of selected log types next to the Log type drop-down list.

13. Click **Test Connection** to test the server connection. The syslog server connection status appears at the top of the screen.

15. Click **Save**.

17. **Apex Central** starts forwarding logs to DNIF

Official Documentation: [Click here](https://docs.trendmicro.com/en-us/enterprise/trend-micro-apex-central-2019-online-help/detections/logs_001/syslog-forwarding.aspx) / [Supported Log Types and Formats](https://docs.trendmicro.com/en-us/enterprise/trend-micro-apex-central-2019-online-help/detections/logs_001/syslog-forwarding/syslog-log-types-for.aspx#GUID-1715386C-0F69-4D6E-B0F6-A95AF903FB7A)
