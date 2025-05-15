---
title: "Indusface"
date: 2025-01-21
type: "epkb_post_type_1"
---

Indusface connector retrieves various types of attack details on all enlisted websites in the AppTrana portal.

###### **Prerequisites**

- API ID

- Secret Key

###### **How to Create API ID and Secret Key**

- Log in to your **Indusface AppTrana** portal

- Click the **User Profile** drop-down and click the **Manage API Key** option

![Image 1](./images-Indusface/Indusface-1.webp)

- Enter a connector name of your choice and note the auto-generated API ID and Secret Key. Also, you need to enter the Adapter/Pico IP in the **Allowed IPs** section for whitelisting purposes.

- The users with SIEM service enabled on Indusface will have an API Key. If you cannot find it then contact **Indusface Support**. Once they enable it, **Re-login** to view the Manage API option.

![image 2](./images-Indusface/Indusface-2.webp)

- Click **Save** button

###### **Configurations**

The following are the configurations to forward Indusface Connector logs to DNIF.‌

![image 3](./images-Indusface/Indusface-3.webp)

| **Field**  | **Description** |
| --- | --- |
| Connector Name | Enter a name for the connector |
| Connector Type  | Enter Indusface Connector |
| API ID | Enter Indusface API id |
| Secret Key | Enter Indusface secret key |

- Click **Save** after entering all the required details and click **Test Connection**, to test the configuration.

- A **Connection successful** message will be displayed on screen along with the time stamp.

- If the connection is not successful an error message will be displayed. Refer [Troubleshooting Connector Validations](https://dnif.it/kb/troubleshooting-and-debugging/troubleshooting-connector-validations/) for more details on the error message.

Once the connector is configured, validate if the connector is listed under **[Collection Status](https://dnif.it/kb/operations/collection-status/)** screen with status as **Active**. This signifies the connector is configured successfully and data is ready to ingest.
