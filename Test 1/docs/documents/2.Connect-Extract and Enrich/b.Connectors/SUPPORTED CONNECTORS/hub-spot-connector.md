---
title: "Hub Spot Connector"
date: 2025-01-21
type: "epkb_post_type_1"
---

HubSpot is a widely used CRM platform that includes marketing, sales, service, operations, and website-building software to help grow your business. The DNIF HubSpot connector utilizes the [CMS Content Audit API](https://developers.hubspot.com/docs/api/cms/content-audit?__hstc=3119151.0ad961abce813fdd9af1902c8762ee15.1736423936778.1737376690829.1737438937632.14&__hssc=3119151.44.1737438937632&__hsfp=3310115484) to collect, normalize, and monitor HubSpot audit logs of CMS changes in your HubSpot account. This helps you identify abnormal activity in real-time. Note that this endpoint is only available for accounts with a CMS Hub Enterprise subscription.

###### **Pre-requisites**

- **Access token**

**Steps to derive prerequisites:**

1. In your HubSpot account, click the **settings icon** in the main navigation bar.

3. In the left sidebar menu, navigate to **Integrations** \> **Private Apps**.

5. Click **Create Private App**.

7. On the Basic Info tab, configure the details of your app:
    1. Enter your app's **name**.
    
    3. Hover over the placeholder logo and click the **upload icon** to upload a square image that will serve as the logo for your app.
    
    5. Enter a **description** for your app.

9. Click the **Scopes** tab.

11. Use the Find a scope search bar to search for **content** scope. Select the **Read** or **Write** checkbox for the **content** scope your private app needs to access.

13. After you're done configuring your app, click **Create app** in the top right.

15. In the dialog box, review the info about your app's access token, then click **Continue creating**.

17. On the Access token card, click **Show token** to reveal your access token. Click **Copy** to copy the token to your clipboard.

**You can then paste the access token into your connector configuration. For more information about Token creation, [refer to this site](https://developers.hubspot.com/docs/api/private-apps?__hstc=3119151.0ad961abce813fdd9af1902c8762ee15.1736423936778.1737376690829.1737438937632.14&__hssc=3119151.44.1737438937632&__hsfp=3310115484).**

**NOTE:** You must be a super admin to access private apps in your HubSpot account.

###### **Configurations**

The following are the configurations to forward HubSpot Connector logs to DNIF.‌

![image1-Jul-12-2024-11-55-48-3828-AM](./images-Hub%20Spot%20Connector/Hub-Spot-Connector-1.webp)

|  **Field Name**  |  **Description** |
| --- | --- |
| Connector Name | Enter a name for the connector |
| Access Token | Enter HubSpot Access Token |

- Click **Save** after entering all the required details and click **Test Connection**, to test the configuration.

- A **Connection successful** message will be displayed on the screen along with the time stamp.

- If the connection is not successful an error message will be displayed. Refer [Troubleshooting Connector Validations](https://dnif.it/kb/troubleshooting-and-debugging/troubleshooting-connector-validations/) for more details on the error message.

Once the connector is configured, validate if the connector is listed under **[Collection Status](https://dnif.it/kb/operations/collection-status/)** screen with status as **Active**. This signifies the connector is configured successfully and data is ready to ingest.
