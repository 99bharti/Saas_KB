---
title: "Symantec ATP"
date: 2025-01-20
type: "epkb_post_type_1"
---

  
Symantec Advanced Threat Protection (ATP) performs the critical security tasks that detect, protect, and respond to threats to your network.

###### **Integration of Symantec ATP with DNIF**

To forward Symantec ATP logs to DNIF Adapter make the following configuration.

- Login into Symantec ATP manager.

- To configure the default syslog server connection for all appliances, click **Settings > Appliances**, then click **Edit Default Appliance** Settings.

- To configure a custom syslog server connection for a single device, click **Settings > Appliances**, select the device in the **Appliances** list. In the **Syslog** section, uncheck **Use default**, if it is checked.

- In the Syslog panel, click **+Add Syslog Server**.

- In the **Add Syslog Server** dialog box, in the **Host** field, enter the **IP address** of the DNIF Adapter server.

- In the **Protocol** field, select the appropriate protocol, either **UDP** or **TCP**.

- In the **Port** field, enter the port on the syslog server that accepts syslog messages. (Syslog usually uses port 514.)

- Click **Save.**

Symantec ATP logs are now streamed to DNIF.
