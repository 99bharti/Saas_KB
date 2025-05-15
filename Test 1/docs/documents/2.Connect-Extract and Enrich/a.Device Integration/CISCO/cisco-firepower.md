---
title: "Cisco FirePOWER"
date: 2025-01-17
type: "epkb_post_type_1"
---

This article describes the steps to configure log forwarding for Cisco FirePOWER

1. Log into the web user interface of your **Sourcefire Management Center**.

3. Navigate to **Policies > Intrusion > Intrusion Policy**.

5. Click **Edit** next to the policy you want to apply.

7. Click **Advanced Settings**.

9. Locate **Syslog Alerting** in the list and set it to **Enabled**.  
      
    ![](./images-Cisco%20FirePOWER/Cisco-FirePOWER-1.webp)
      
      
    

11. Click **Policy Information** near the top left of this screen.

13. Click **Commit Changes**.

15. Reapply your **Intrusion Policy**.  
      
    ![](./images-Cisco%20FirePOWER/Cisco-FirePOWER-2.webp)
    

9. Click **Edit** next to the right of Syslog Alerting.

11. Type the **IP address of EventTracker** on the Logging Hosts field.

13. Choose an appropriate Facility and Severity from the drop-down menu. These can be left at the default values unless a Syslog server is configured to accept alerts for a certain facility or severity.

15. Click **Policy Information** near the top left of this screen.

17. Click **Commit Changes**.

19. Reapply your **Intrusion Policy**.

Official Documentation: [Click here](https://www.netsurion.com/Corporate/media/Corporate/Files/Support-Docs/Integration-Guide-Cisco-SourceFire.pdf)
