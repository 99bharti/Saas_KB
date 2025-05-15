---
title: "Symantec AV"
date: 2025-01-20
type: "epkb_post_type_1"
---

  
Symantec Endpoint Protection, developed by Symantec, is a security software suite, which consists of anti-malware, intrusion prevention and firewall features for servers and desktops.

###### **Integration of Symantec AV with DNIF**

  
To forward Symantec AV logs to DNIF Adapter make the following configuration.

- Log in to Symantec AV using web interface, on the console, click **Admin** **\> Servers**

- Click the local site or remote site that you want to export log data from.

- Click **Configure External Logging**.

- On the General tab, in the **Update Frequency** list box, select how often to send the log data.

- In the **Master Logging Server** list box, select the management server to send the logs to.

- If you use SQL Server and connect multiple management servers to the database, specify only one server as the Master Logging Server.

- Check **Enable Transmission** of Logs.

- Provide the following information:

| **Field** | **Description** |
| --- | --- |
| Syslog Server | Type the IP address of the DNIF Adapter |
| Destination Port | Select the protocol to use, and type the destination port that the Syslog server uses to listen for Syslog messages. |
| Log Facility | Type the number of the log facility that you want to use, or use the default 7. Valid values range from 0 to 23 |

- On the **Log Filter** tab, check which logs to export and click **OK**.

Symantec AV logs are now streamed to DNIF.
