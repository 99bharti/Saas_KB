---
title: "FortiWeb"
date: 2025-01-17
type: "epkb_post_type_1"
---

  
FortiWeb Web Application Firewall delivers multi-layered application threat protection. The following configurations should be done to forward FortiWeb WAF logs to DNIF Adapter.

1. Login to **FortiWeb WAF** using the web interface and navigate to **Log&Report > Log Policy > Syslog Policy**.

3. To access this part of the web UI, Administrator’s account access profile should have **Read and Write** permission to items in the **Log & Report** category, click **Create New**.

5. If the policy is new, in Policy Name, type the name of the policy as it will be referenced in the configuration.

7. Click **Create New**
    - In **IP Address**, enter the address of the DNIF Adapter.
    
    - In **Port**, enter the listening port number of the Syslog server, by default the value is 514.

9. Check **Enable CEF Format** checkbox to send log messages in CEF format.

11. Click **OK**.

13. Select the **Severity Level**.

15. Select the facility identifier that the FortiWeb appliance will use to identify itself when sending log messages to DNIF server.

FortiWeb WAF logs are now streamed to DNIF
