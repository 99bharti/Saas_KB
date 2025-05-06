---
title: "Box"
date: 2025-01-20
type: "epkb_post_type_1"
---

The Box connector API provides information about various events of the entire enterprise from the given Box account. Box connector uses the box-sdk to pull box enterprise event logs into DNIF.

###### **Pre-requisites**

- Create a Box application

###### **Steps to create a Box Application**

- Use [https://app.box.com/developers/console/](https://account.box.com/login?redirect_url=%2Fdevelopers%2Fconsole%2F) link to create a new application.

![image 1-Nov-16-2023-09-55-53-6336-AM](./images-Box/Box-1.webp)

- Select **Custom App** and then select **Server Authentication (with jwt)**.

- Enter the **App Name** and click **Create App**

- In the **Configuration** tab, your **Client ID** and **Client Secret** will be displayed.

![image 2-Nov-16-2023-09-56-18-8720-AM](./images-Box/Box-2.webp)

- Change the App access level to **App Access + Enterprise Access** in the configuration.

![image 3-Nov-16-2023-09-56-40-2257-AM](./images-Box/Box-3.webp)

- Under **Application Scopes** in the configuration tab, select the following options (preferably all) based on the data you want to pull from your Box account.
    - Read all files and folders stored in the box
    
    - Write all files and folders stored in the box
    
    - Manage users
    
    - Manage groups
    
    - Manage enterprise properties

- Under **Add and Manage Public Keys** in the configuration tab, click **Generate public/private key pair** after which it will automatically download a **json file**.

- Ensure to save this downloaded **json** file.

- Save all changes and click on **review** and **submit** button in the **Authorization** tab.

Re-submit the app if any changes are made after submission.

- Use [https://app.box.com/master](https://account.box.com/login?redirect_url=%2Fmaster) link to review and authorise apps **Apps > Custom Apps**.

###### **Configurations**

The following configurations should be completed to forward Box Connector logs to DNIF.

![image 4-Nov-16-2023-09-57-04-3556-AM](./images-Box/Box-4.webp)

| **Field** | **Description** |
| --- | --- |
| Connector Name | Enter a name for the connector |
| Connector Type | Enter Box Connector |
| Config File | Copy and paste the content from **xxxx\_config.json** file, downloaded while creating box connector account. |

- Click **Save** after entering all the required details and click **Test Connection**, to test the configuration.

- A **Connection successful** message will be displayed on screen along with the time stamp.

- If the connection is not successful an error message will be displayed. Refer [Troubleshooting Connector Validations](https://dnif.it/kb/troubleshooting-and-debugging/troubleshooting-connector-validations/) for more details on the error message.

Once the connector is configured, validate if the connector is listed under **[Collection Status](https://dnif.it/kb/operations/collection-status/)** screen with status as **Active**. This signifies the connector is configured successfully and data is ready to ingest.
