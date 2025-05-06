---
title: "Microsoft Teams Channel"
date: 2025-01-30
type: "epkb_post_type_1"
---

Microsoft Teams is a collaborative workspace within Microsoft 365/Office 365 that is used for workplace conversations.  

## **Configuration**

- In the **[Configuration](https://dnif.it/kb/uncategorized/configuring-automation/) Box**, enter the **Configuration Name** to uniquely identify this configuration.

- [Create a webhook](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?tabs=newteams%2Cdotnet) for a Microsoft Teams channel in your account.

- [Identify the content of headers and payload](https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/connectors-using) that you need to provide in the Configuration Box.  
      
    Below is an example on how you can leverage this integration to send alerts to your Microsoft Teams Channel. 
    
    **Payload**
    ```json
    {  
    "text":"Alert from DNIF - Found Suspicious Remote Desktop Activity on host $DstIP"
    }
    ```
      
    ![image 1-Dec-22-2023-11-30-31-6550-AM](./Microsoft-team-img/microsoft-team-1.jpg)  
      
    MS Team, delivers text mentioned in the **Payload** to your MS Teams channel.  
      
    ![image 2-Dec-22-2023-11-30-55-7246-AM](./Microsoft-team-img/microsoft-team-2.jpg)  
      
    In the above figure, a workbook named **Suspicious Remote Desktop Network Activity** is executed which contains the following blocks:  
      
    
    - **SQL Block:** Displays two suspicious Destination IPs on execution of the workbook
    
      
    
    - **Signal Block:** This will raise a signal on detecting the suspicious IPs.
    
      
    
    - **DQL block with \_trigger query:** Using **Webhook integration for Microsoft Teams Channel**, an alert will be raised to the teams channel with the message mentioned in payload as displayed below:
    
      
    ![image 3-Dec-22-2023-11-31-07-8345-AM](./Microsoft-team-img/microsoft-team-3.jpg)
