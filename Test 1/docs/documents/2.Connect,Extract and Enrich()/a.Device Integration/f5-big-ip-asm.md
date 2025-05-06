---
title: "F5 BIG-IP ASM"
date: 2025-01-17
type: "epkb_post_type_1"
---

F5 BIG-IP Application Security Manager (ASM) is a flexible web application firewall that secures web applications in traditional, virtual, and private cloud environments. BIG-IP ASM helps secure applications against unknown vulnerabilities, and enables compliance for key regulatory mandates.

###### **Integrate F5 Networks BIG IP Logs with DNIF**

The following configurations should be done to forwardTo forward F5 Networks Big IP logs to DNIF Adapter:

- Log in to the F5 Networks BIG-IP ASM appliance user interface and navigate to select **Application Security > Options**, click **Logging Profiles** and then click **Create**.

- From the Configuration list, select **Advanced**.

- Enter a descriptive name for the Profile Name property.

- Optional: Enter a Profile Description.

- If you do not want data logged both locally and remotely, clear the LocalStorage check box.

- Select the **Remote Storage** check box.

- From the Type list, select the following option:
    - Select ArcSight. Log messages are in Common Event Format (CEF).

- From the Protocol list, select **UDP**.

- In the IP Address field, type the IP address of the DNIF Adapter and in the Port field, type a port value of 514.

- Select the **Guarantee Logging** check box.  
    

- Enabling the Guarantee Logging option ensures the system log requests continue for the web application when the logging utility is competing for system resources.

- Enabling the Guarantee Logging option can slow access to the associated web application.

- Select the **Report Detected Anomalies** check box to allow the system to log details.

- Click **Create**

F5 Networks Big IP logs are now streamed to DNIF.

For official documentation visit : [F5 ASM](https://techdocs.f5.com/kb/en-us/products/big-ip_asm/manuals/product/asm-implementations-11-5-0/12.html)
