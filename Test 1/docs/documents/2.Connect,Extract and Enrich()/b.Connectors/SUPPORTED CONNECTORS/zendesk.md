---
title: "Zendesk"
date: 2025-01-21
type: "epkb_post_type_1"
---

Zendesk is a cloud-based help desk management platform used by organizations to build customer service portals, knowledge bases, and online communities. DNIF can collect, normalize, and monitor Zendesk audit logs to help you identify abnormal activity in real-time.

###### **Pre-requisites**

- Zendesk Subdomain

- Zendesk Support admin Email

- Zendesk API Key

###### **Steps to derive prerequisites**

- Log in to your Zendesk Support account.

- Click the gear icon in the left sidebar, then select **Channels > Apps and Integrations> APIs > Zendesk API**.

- Click the Settings tab, and make sure **Token Access** is enabled.

- Click the + button to the right of **Active API Tokens**.

- Enter a name for the token, and click Create. The token is generated, and displayed in a pop-up window.

- **Copy the token**, and store it in a secure location. You will need it in the next steps.

- **Note**: Once this window is closed, the full token will never be displayed again.  
    Learn more about generating a Zendesk API token [here](https://support.zendesk.com/hc/en-us/articles/4408889192858).

###### **Configurations**

The following are the configurations to forward Zendesk Connector logs to DNIF.‌

![image1-Jun-23-2023-02-29-19-8689-PM](./images-Zendesk/Zendesk-1.webp)

| **Field Name** | **Description** |
| --- | --- |
| Connector Name | Enter a name for the connector |
| Zendesk Subdomain | Enter the Zendesk Subdomain. Your subdomain is in the account's URL: https://&lt;subdomain&gt;.zendesk.com |
| Zendesk Admin Email | Enter the Zendesk Support admin Email |
| API Key | Enter the Zendesk API Token |

- Click **Save** after entering all the required details and click **Test Connection**, to test the configuration.

- A **Connection successful** message will be displayed on screen along with the time stamp.

- If the connection is not successful an error message will be displayed. Refer [Troubleshooting Connector Validations](https://dnif.it/kb/troubleshooting-and-debugging/troubleshooting-connector-validations/) for more details on the error message.
