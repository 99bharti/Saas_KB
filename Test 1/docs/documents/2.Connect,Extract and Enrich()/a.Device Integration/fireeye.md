---
title: "FireEye"
date: 2025-01-17
type: "epkb_post_type_1"
---

The FireEye appliance detects stealthy web, file, or email-based malware that uses malicious techniques to exploit client browsers, operating systems, emails and applications.

###### **Configure to send logs in CEF format:**

Log into the FireEye appliance with an administrator account

- Click Settings > Notifications > rsyslog
- Check the “Event type” check box
- Ensure Rsyslog settings are as follows:
    - Default format: CEF
    - Default delivery: Per event
    - Default send as: Alert
- Next to the Add Rsyslog Server button, enter **DNIF** and then click **Add Rsyslog Server**
- Enter the IP address of the DNIF Adapter in the **IP Address** field and click **Update**.
- From the drop-down list, select UDP to connect to the DNIF Adapter server.  
    ![](./images-FireEye/FireEye-1.webp)

Now you can test the sending and receiving of notifications on the same FireEye Notifications page by clicking the **Test-Fire** button at the bottom. Flip back over to the DNIF console and check out the raw event data.
