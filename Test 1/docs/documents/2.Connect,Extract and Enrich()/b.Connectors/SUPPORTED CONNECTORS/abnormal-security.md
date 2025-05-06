---
title: "Abnormal Security"
date: 2025-01-20
type: "epkb_post_type_1"
---

  
Abnormal Security is a behavioral AI-based email security platform that learns the behavior of every identity in a cloud email environment and analyzes the risk of every event to block the most sophisticated attacks. DNIF can collect, normalize, and monitor Abnormal Security threat logs to help you identify suspicious activity within your workspace in real time.

###### **Pre-requisites**

- Access Token

###### **Steps to derive prerequisites:**

1. Sign in to the [Abnormal Security](https://portal.abnormalsecurity.com/) platform.

3. In the **Manage** section, click on the **Settings** option.

In the **Settings** section, click on the **Integrations** option.

![image 1-Nov-29-2023-09-02-30-9339-AM](./images-Abnormal%20Security/Abnormal-Security-1.webp)

4\. Scroll down to the **Additional Integrations** section and click **\+ Connect** on the **Abnormal REST API** card to display an integration page for your organization.

![image 2-4](./images-Abnormal%20Security/Abnormal-Security-2.webp)

  
5\. In the **IP Safelist** field, enter the IP addresses for your deployment.  

![image 3-3](./images-Abnormal%20Security/Abnormal-Security-3.webp)

6\. Copy and save the **Access token**.

###### **Configurations**  

The following are the configurations to forward Abnormal Security Connector logs to DNIF.‌

![image 4-3](./images-Abnormal%20Security/Abnormal-Security-4.webp)

| **Field Name**  | **Description** |
| --- | --- |
|  Connector Name |  Enter a name for the connector |
|  API Key |  Enter the Access Token for Abnormal Security. |

- Click **Save** after entering all the required details and click **Test Connection**, to test the configuration.

- A **Connection successful** message will be displayed on screen along with the time stamp.

- If the connection is not successful an error message will be displayed. Refer [Troubleshooting Connector Validations](https://dnif.it/kb/troubleshooting-and-debugging/troubleshooting-connector-validations/) for more details on the error message.

Once the connector is configured, validate if the connector is listed under [**Collection Status**](https://dnif.it/kb/operations/collection-status/) screen with status as **Active**. This signifies the connector is configured successfully and data is ready to ingest.
