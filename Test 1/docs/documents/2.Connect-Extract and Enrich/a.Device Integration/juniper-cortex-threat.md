---
title: "Juniper Cortex Threat"
date: 2025-01-17
type: "epkb_post_type_1"
---

###### **Integration of Juniper Advanced Threat Prevention with DNIF**

- Log in to Juniper Advanced Threat Prevention using the web interface and Navigate to the **Config > Notifications page**.

- Select **SIEM Settings** from the left panel menu.

- Click **Add New SIEM Connector** to set up a new Events, System Audit or System Health log notification in CEF format.

- Select from the available options and modify the configurations.  
    

![](./images-Juniper%20Cortex%20Threat/Juniper-Cortex-Threat-1.webp)

######   
**Alert notification configuration options**

Alert notifications for events or system audits are available only if Outgoing Mail Settings are configured from the **Config>System Settings** menu.

Descriptions of Events alert settings are provided in the following tables.

| **Type** | **Select the** **type of notification to be configured: Event** |
| --- | --- |
| Format | Select CEF or Syslog as the notification output format |
| Malware Severity | To filter the log notification by malware severity results, choose either:   1\. All Malware   2\. Critical, High or Med   3\. Critical or High |
| Generate On | Select Trigger or By Schedule to set the method by which an Events log is generated. |
| Host Name | Enter the host name of the Syslog server. |
| Port Number | Enter the port number of the Syslog server. |

###### **System Audit Events Settings**  
  

| **Type** | **Select the type of notification to be configured: Event** |
| --- | --- |
| Format | Select CEF or Syslog as the notification output format |
| Event Type | Select the event type(s) to include in the alert notification:   1\. Login/Logout   2\. Failed logins   3\. Add/Update Users   4\. System Settings   5\. Restarts |
| Generate On | Select Trigger or By Schedule to set the method by which an Events log is generated. |

[Official Documentation](https://www.juniper.net/documentation/en_US/release-independent/jatp/information-products/topic-collections/jatp-cef-leef-siem-user-guide.pdf)
