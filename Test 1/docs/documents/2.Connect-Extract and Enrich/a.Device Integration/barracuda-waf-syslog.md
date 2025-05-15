---
title: "Barracuda WAF Syslog"
date: 2025-01-20
type: "epkb_post_type_1"
---

This article describes the steps to configure Barracuda WAF Syslog with DNIF.

The following properties are specific to the Barracuda Networks WAF:

- Collection method: Syslog

- Format: Regex

- Functionality: Web Application Firewall

###### **Prerequisites**

Before you connect Barracuda Networks WAF, obtain the IP address of the Remote Server and verify that firewalls between the Barracuda appliance and Remote Server allow UDP traffic on port 514.

###### **References**

- [https://campus.barracuda.com/product/webapplicationfirewall/doc/4259935/how-to-export-logs-from-the-barracuda-web-application-firewall/](https://campus.barracuda.com/product/webapplicationfirewall/doc/4259935/how-to-export-logs-from-the-barracuda-web-application-firewall/)

- [https://campus.barracuda.com/product/webapplicationfirewall/doc/92767342/adding-a-syslog-server/](https://campus.barracuda.com/product/webapplicationfirewall/doc/92767342/adding-a-syslog-server/)

- [https://campus.barracuda.com/product/webapplicationfirewall/doc/92767349/exporting-log-formats/](https://campus.barracuda.com/product/webapplicationfirewall/doc/92767349/exporting-log-formats/)

###### **Configuring the Barracuda Networks WAF connection:**

| Option | Description |
| --- | --- |
| Web Firewall Logs Facility | Select a syslog facility between Local0 and Local7. |
| Access Logs Facility | Select a syslog facility between Local0 and Local7. |
| Audit Logs Facility | Select a syslog facility between Local0 and Local7. |
| System Logs Facility | Select a syslog facility between Local0 and Local7. |

8. Click **Add Export Log** **Server** in the Export Logs section. The Add Export Log Server window opens.

10. Specify values for the following:

| **Option** | **Description** |
| --- | --- |
| Name | The name of the Remote Console or Event Collector |
| Syslog Server | The IP address of your Remote Server or Event Collector. |
| Port | The port that is associated with the IP address of your Remote Server or Event Collector.   If syslog messages are sent by UDP, use the default port, 514. |
| Connection Type | The connection type transmits the logs from the Barracuda Web Application Firewall to the Remote Server or Event Collector. UDP is the default protocol for syslog communication. |
| Validate Server Certificate | No |

10. Select **Yes** from the **Log Unit Name** option.

12. Select the default format from the list box for the following log types in the Log Formats pane:
    - Web Firewall Logs Format
    
    - Access Logs Format
    
    - Audit Logs Format
    
    - Network Firewall Logs Format
    
    - System Logs Format

14. Click **Save Changes**.

16. Go to **Menu > Basic > Administration**.

18. Click **Restart** from the System/Reload/Shutdown pane.

20. **Configuring Syslog Connector in DNIF:**

**NOTE:** By Default, a Syslog Connector is already configured and present in the Data Source with listener port on 514, but if it is not present then only proceed with the below steps to configure a new syslog connector. 

1. Go to **System > Data Sources**.

3. Click ‘**+**’ icon in the top right corner to add a new data source.

5. Select **Syslog** and then click **Next**.

7. Provide a suitable name for the Syslog Connector.

9. Provide the Listener port value as ‘**514**’.

11. Click **Next**.
