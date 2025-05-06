---
title: "Orca"
date: 2025-01-21
type: "epkb_post_type_1"
---

Orca connector uses the pull method to fetch alert logs using Orca Security Platform REST APIs

###### **Prerequisites**

- Orca security platform account.

- Api Key

###### **How to generate an Api key?**

1. Sign in to your Orca security account using the following link [https://app.orcasecurity.io/login](https://app.orcasecurity.io/login)  
      
      
    ![image 1-Nov-16-2023-09-29-14-5402-AM](./images-Orca/Orca-1.webp)  
      
    

3. After logging in to the account, navigate to Settings ( icon) from the main menu on the left.

5. Select **Integrations** from the **Settings** submenu.

7. In the Orca API section, click **Generate Key** to create an API key.

![image 2-Nov-16-2023-09-30-11-7714-AM](./images-Orca/Orca-2.webp)

1. Use the **Copy** icon to copy the entire API key.

3. You can overwrite the existing API key with a new value by clicking on **Regenerate Key**, if required.  
      
    

![image 3-4](./images-Orca/Orca-3.webp)

###### **Configurations**

The following are the configurations to forward Orca Connector logs to DNIF.‌

![image 4-2](./images-Orca/Orca-4.webp)

| **Field Name**  | **Description** |
| --- | --- |
| Connector Name | Enter a name for the connector |
| Connector Type | Enter Orca Connector |
| API Token | Enter the API Token for Orca token |

- Click **Save** after entering all the required details and click **Test Connection**, to test the configuration.

- A **Connection successful** message will be displayed on screen along with the time stamp.

- If the connection is not successful an error message will be displayed. Refer [Troubleshooting Connector Validations](https://dnif.it/kb/troubleshooting-and-debugging/troubleshooting-connector-validations/) for more details on the error message.

Once the connector is configured, validate if the connector is listed under **[Collection Status](https://dnif.it/kb/operations/collection-status/)** screen with status as **Active**. This signifies the connector is configured successfully and data is ready to ingest.
