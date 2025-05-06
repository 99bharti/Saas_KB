---
title: "Zscaler"
date: 2025-01-20
type: "epkb_post_type_1"
---

For organizations that need to transfer their Zscaler logs to their enterprise SIEM, Zscaler provides Nanolog Streaming Service (NSS).

To collect logs for Zscaler, perform these steps, detailed in the following sections:

1. Configure DNIF Installed Connector and Syslog Source.

3. Configure Zscaler NSS.

5. Connect the Zscaler NSS feed to DNIF.

![](./images-Zcaler/Zcaler-1.webp)

######   
  
**Configure DNIF Installed Connector and Syslog Source**

To collect logs for Zscaler DNS, Zscaler Firewall and Zscaler Web Secuity, do the following in DNIF

1. Configure an [Installed Connector](https://dnif.it/kb/connectors/supported-connectors/tcp/).

3. Use [TCP Connector](https://dnif.it/kb/connectors/supported-connectors/tcp/)

The Port number, as you will need this to configure Zscaler NSS. Also, when you configure the Syslog Source, we recommend that you use the Source Category security\_zscaler.

###### **Configure Zscaler NSS**

Zscaler offers a virtual appliance, called Nanolog Streaming Service (NSS) to stream web logs to external SIEM via syslog. NSS is maintained and distributed by Zscaler as an Open Virtual Application (OVA).

To stream logs to DNIF, perform steps that is provided in [NSS Configuration Guide](https://help.zscaler.com/zia/about-nss-feeds)

###### **Connect the Zscaler NSS Feed to DNIF**

Once you have configured the Zscaler NSS, now add a feed to send logs to DNIF syslog endpoint using the following steps.

1. Log into your Zscaler NSS system.

3. Go to **Administration** > **Settings** > **Nanolog Streaming Service**.

5. From the NSS Feeds tab, click **Add**.

7. In the Add **NSS Feed** dialog:

![](./images-Zcaler/Zcaler-2.webp)

  
\* **Feed Name.** Enter a name for your NSS feed.  
\* **NSS Server.** Select None.  
\* **SIEM IP Address.** Enter the DNIF Installed Connector IP address.  
\* **Log Type.** Select Web Log.  
\* **Feed Output Type.** QRadar LEEF is the default.  
\* **NSS Type.** NSS for Web is the default.  
\* **Status.** Select Enabled.  
\* **SIEM TCP Port.** Enter the DNIF Syslog Source TCP port number.  
\* **Feed Escape Character.** Leave this field blank.  
\* **Feed Output Format.** The LEEF format is displayed.  
\* **User Obfuscation.** Select Disabled.  
\* **Duplicate Logs.** Disabled by default.  
\* **Timezone.** Set to GMT by default.

5\. Click **Save**
