---
title: "Cisco ACS"
date: 2025-01-17
type: "epkb_post_type_1"
---

This article describes the steps to to configure external syslog server on ACS:

- Click **Remote Log target** under log configuration then click **Create** to define the external syslog server  
      
    ![](./images-Cisco%20ACS/Cisco-ACS-1.webp)  
      
    

- Define the **Name of external syslog server** as **DNIF** and the IP address of the same, you can also mention the port number.

By default the port number is 514.

![](./images-Cisco%20ACS/Cisco-ACS-2.webp)

- You will see that the external syslog server is created.  
      
    ![](./images-Cisco%20ACS/Cisco-ACS-3.webp)
      
    

- Now click **Global configuration** under System Administration  
      
    ![](./images-Cisco%20ACS/Cisco-ACS-4.webp)  
      
    

- Select the logging category for which you want to send logs to the external syslog server.  
    **For example**, if you want to send all the passed authentication logs to an external syslog server.  
      
      
    ![](./images-Cisco%20ACS/Cisco-ACS-5.webp)  
      
    

- Now select the **Remote Syslog Target** Tab.  
      
    ![](./images-Cisco%20ACS/Cisco-ACS-6.webp)  
      
    

- Move the configured syslog server to the selected target and then click **Submit**.

[Official Documentation](https://community.cisco.com/t5/security-knowledge-base/acs-5-x-configuring-the-external-syslog-server/ta-p/3143143)
