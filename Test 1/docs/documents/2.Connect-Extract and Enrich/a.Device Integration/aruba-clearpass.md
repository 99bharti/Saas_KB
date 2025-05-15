---
title: "Aruba ClearPass"
date: 2025-02-04
type: "epkb_post_type_1"
---

Aruba Networks' ClearPass Policy Manager is a robust NAC solution offering authentication, policy enforcement, and device management for wired and wireless networks. The following steps below have been tested on ClearPass version **6.10.8** and are applicable to versions **6.7.2** or later for forwarding audit event and system event to DNIF.

###### **Adding DNIF as a Syslog Target**

To integrate ClearPass with DNIF, you need to configure DNIF as a Syslog target. Follow these steps:

1. Log in to the ClearPass administrative interface.

3. Navigate to **Administration → External Servers → Syslog Targets**.

5. Add a new Syslog target instance and configure the following parameters:
    - **Host Address**: Enter the IP address of the DNIF Receiver.
    
    - **Protocol and Server Port**: While these values can be customized, it is recommended to use the default combination of **UDP** as the protocol and **514** as the port.

**Here**: Host Address can be the DNIF Receiver's IP Address.

![](./images-Aruba%20ClearPass/Aruba-ClearPass-1.png)

| **Add Syslog Target** |  |
| --- | --- |
| Configuration Attribute | Description |
| Host Address: | Syslog server hostname or IP address (IPv4) |
| Description: | Short description of the Syslog server |
| Server Port: | The default port number is 514; change if necessary.    |

**Note:** In order to receive log over the DNIF Platform, need to configure [Syslog Connector](https://dnif.it/kb/connectors/supported-connectors/syslog/) on DNIF Console.

Once the syslog connector is configured, you’re all set to start receiving logs.  
After completing the configuration, save the settings and verify that the logs are appearing in the DNIF Console.  
To confirm successful integration:

1. Check if the ClearPass IP address is listed under the **Collection Status** section in the DNIF Console.

3. Optionally, execute a **DQL query** to validate log ingestion.

###### **DQL-QUERY:**

**stream=\* where devsrcip='Aruba\_ClearPass\_IP' | duration 1h**

![](./images-Aruba%20ClearPass/Aruba-ClearPass-2.png)

These steps ensure that ClearPass is properly integrated with DNIF and logs are being forwarded as expected.
