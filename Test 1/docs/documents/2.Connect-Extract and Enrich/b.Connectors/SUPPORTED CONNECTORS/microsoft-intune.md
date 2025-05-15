---
title: "Microsoft Intune"
date: 2025-01-21
type: "epkb_post_type_1"
---

The Microsoft Intune connector gathers data about devices from Microsoft Intune. By facilitating the efficient collection and management of device-related information, it aids organizations in meeting regulatory requirements and ensuring adherence to compliance standards. This integration enhances not only operational efficiency but also contributes significantly to maintaining a secure and compliant IT environment.

###### **Pre-requisites**

- Microsoft account to access the Azure portal and register an application to use the Microsoft Graph API.

- Application (client) ID

- Client Secret

- Directory (tenant) ID

###### **Steps to derive prerequisites:**

1. Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/).

3. If you have access to multiple tenants, use the **Directories + subscriptions** filter  in the top menu to switch to the tenant in which you want to register the application.

5. Click App registrations

![image 1-2](./images-Microsoft%20Intune/Microsoft-Intune-1.webp)

4\. Create new registration

![image 2-2](./images-Microsoft%20Intune/Microsoft-Intune-2.webp)

5\. Enter name, select appropriate account type and click Register

![image 3-1](./images-Microsoft%20Intune/Microsoft-Intune-3.webp)

6\. Click API permissions

![image 4-1](./images-Microsoft%20Intune/Microsoft-Intune-4.webp)

7\. Click +Add a permission

![image 5-1](./images-Microsoft%20Intune/Microsoft-Intune-5.webp)

8\. Select Microsoft Graph

![image 6-1](./images-Microsoft%20Intune/Microsoft-Intune-6.webp)

9\. In the **Application Permissions** and **Delegated Permissions**:-

![image 7-1](./images-Microsoft%20Intune/Microsoft-Intune-7.webp)

- Select the following permissions under **DeviceManagementApps** - **_DeviceManagementManagedDevices.Read.All_**, **_DeviceManagementManagedDevices.ReadWrite.All_** and click Add permissions.  
    

![image 8-1](./images-Microsoft%20Intune/Microsoft-Intune-8.webp)

10\. Click Certificates & secrets in the menu on the left and Click +New client secret

![image 9-1](./images-Microsoft%20Intune/Microsoft-Intune-9.webp)

11\. Enter description and Click Add

![image 10](./images-Microsoft%20Intune/Microsoft-Intune-10.webp)

12\. Copy your newly created secret and Make a note of it

![image 11](./images-Microsoft%20Intune/Microsoft-Intune-11.webp)

13\. Click Overview in the menu on the left

![image 13](./images-Microsoft%20Intune/Microsoft-Intune-12.webp)

14\. Copy your newly created Application (client) ID and Directory (tenant) ID and Make a note of it.

###### **Configurations**

The following are the configurations to forward Microsoft Intune Connector logs to DNIF.‌

![image 14](./images-Microsoft%20Intune/Microsoft-Intune-13.webp)

| **Field Name**  | **Description** |
| --- | --- |
| Connector Name | Enter a name for the connector |
| Client ID | Enter the Application (client) ID |
| Client Secret | Enter the Client Secret |
| Tenant ID | Enter the Directory (tenant) ID |

- Click **Save** after entering all the required details and click **Test Connection**, to test the configuration.

- A **Connection successful** message will be displayed on screen along with the time stamp.

- If the connection is not successful an error message will be displayed. Refer [Troubleshooting Connector Validations](https://dnif.it/kb/troubleshooting-and-debugging/troubleshooting-connector-validations/) for more details on the error message.

Once the connector is configured, validate if the connector is listed under **[Collection Status](https://dnif.it/kb/operations/collection-status/)** screen with status as **Active**. This signifies the connector is configured successfully and data is ready to ingest.
