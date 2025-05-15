---
title: "Office 365"
date: 2025-01-21
type: "epkb_post_type_1"
---

The Office 365 Management Activity API provides information about various user, admin, system, and policy actions and events from Office 365 and Azure Active Directory activity logs. Microsoft Office 365 connector uses the pull method by subscribing to the Office 365 Management Activity API content types.

###### **Prerequisites**

1. Office 365 management API credentials
    1. Tenant id
    
    3. Client key
    
    5. Secret key
    
    7. Tenant domain

3. How to find Tenant Id?
    1. Login to the **Azure Management Portal** with the credentials of the tenant, subscribed to Microsoft Office 365.
    
    3. In the navigation menu, select **Azure Active Directory**.
    
    5. In **Manage**, select **Properties**.
    
    7. Copy the **Tenant Id**, Use this value for the Tenant Id.

5. How to find Tenant Domain?
    1. Log in to your [Office 365 Admin Center](https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000006-0000-0ff1-ce00-000000000000&response_mode=form_post&response_type=code%20id_token&scope=openid%20profile&state=OpenIdConnect.AuthenticationProperties%3DGllqc-oCDIDL9T7VZg5AqGREHr04Wc6wg-GHeLj11DoH3cpUk2r-LoaDVyumVLZX9uSM0PAdMQppvKJ4wb_g8mdJeiQ39_qxMxItJVyfz13dt5PvL1MAj0jwvC-PeGYVypIvDfl2L1P8_mjo9Io4KQ&nonce=637534722015210560.M2M1NWVhZGEtOTczOS00OTYyLWI2MjEtNzI2NTIzZjQ4OWQzN2ZjOTk0OTgtY2E2Zi00NDVlLTg1OTEtNDRlMjVhYTkzNGNk&redirect_uri=https%3A%2F%2Fportal.office.com%2Flanding&ui_locales=en-GB&mkt=en-GB&client-request-id=588ddcf0-19c1-4e51-85fd-f08fe6056912&x-client-SKU=ID_NET45&x-client-ver=6.6.0.0) as an Administrator.
    
    3. Click **Show All**
    
    5. Got to **Settings** click **Domains** (or click [here](https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000006-0000-0ff1-ce00-000000000000&response_mode=form_post&response_type=code%20id_token&scope=openid%20profile&state=OpenIdConnect.AuthenticationProperties%3DLE1O9WhCS6ZX1-9JtUwIK7fa26EirsBqu7XZfaqEZA4A9S7NDeVMIEnq4oCoKXO_tc26bovkGT1ysvql-dU6okhNztyG48E73qX3hBCgK8BzQfZcuzdLuXr0MsuKzFDaoq3T7pblwknFOu9nSAWrsvKjR3hprj2lYYFybZJuMIA&nonce=637534722619945290.ZTBkYmY0ZDgtMDM5NS00Yzk0LTk0ZTYtNWVhMWE5MWE0NDJhNzMwYWY2NjgtY2JlNi00ZDFhLWJjZmMtYWUwZTdiMWEzNjM0&redirect_uri=https%3A%2F%2Fportal.office.com%2Flanding&ui_locales=en-GB&mkt=en-GB&client-request-id=588ddcf0-19c1-4e51-85fd-f08fe6056912&x-client-SKU=ID_NET45&x-client-ver=6.6.0.0)).
    
    7. Find a domain that ends with .onmicrosoft.com. This is your **Office 365 tenant name**.

7. Register your application in Azure AD
    1. Login to the **[Azure Management Portal](https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?client_id=c44b4083-3bb0-49c1-b47d-974e53cbdf3c&response_type=code%20id_token&scope=https%3A%2F%2Fmanagement.core.windows.net%2F%2Fuser_impersonation%20openid%20email%20profile&state=OpenIdConnect.AuthenticationProperties%3DRIG_-eJbX5ZlmaZ76Cv5oU5PPAPmskll8pMwM0zNCJdwG9Y5LsAOflWglNRW0fNkmy1Qnw3J4hq9b9vtCyCTCyOEWtX49rBl53CvEtM5a_G_va5BAmjvUlRa10kghJBlbjA60xum_Zu_9-d8SNvXbLpzKBr0rPmEe1qOcstOl0LsfSAKfwkZHfk5C7q6r8JKfwPRkLxjFxj0VN3_0GMkchSlDtaHeSB7ZGgfBqp9RfmgVVO1eZXxYMdm3F4Fo0x7O_h5czAgn6hyvOfVYOyDhq03WnKW9MrOXBrZmTp-JPaBPNLpVITV6v9_MI42CF_T&response_mode=form_post&nonce=637535601312092800.MzQ1ZGM3YjUtMzcyNS00MjZlLWE3YzAtNjI0NDhlNDljMjI4N2MzMjJmYWYtMzUxOS00YWMyLWE1ODMtZDY0OWFiODYyZGJj&redirect_uri=https%3A%2F%2Fportal.azure.com%2Fsignin%2Findex%2F&site_id=501430&client-request-id=d5318f7a-4a0b-4a15-befa-9b7641d70dd1&x-client-SKU=ID_NET45&x-client-ver=5.3.0.0)** with the credentials of the tenant that is subscribed to Microsoft Office 365.
    
    3. In the navigation menu, select **Azure Active Directory**.
    
    5. In the **Manage** section, select **App Registration** and click **New Registration**.
    
    7. Enter the **Display Name** for the application.
    
    9. In the **Supported account types** section, select the type of account to use the application or to access the API.
    
    11. Click **Register**.
    
    13. Copy and store the **Application (client) ID** value. Use this value for the Client Key.

9. Generate a Client secret for the application
    1. Navigate to the Application you registered in Step 4
    
    3. From the **Manage** pane, select **Certificates & secrets** **\>** **Add New client secret**.
    
    5. Enter a **Description** and select **Expiry Date** for the Client Secret and click **Add**.
    
    7. Copy and store your **client secret key value** because it can't be retrieved later.

11. Specify the permissions to access **Microsoft Office 365 Management APIs**.
    1. Navigate to the Application you registered in Step 4.
    
    3. Click **API Permissions > Add a permission > choose Office 365 Management APIs > Delegated permissions**, and then select the following options and click **Add permissions**.
        1. **Activity Feed**
            1.  ActivityFeed.Read
            
            3. ActivityFeed.ReadDlp
        
        3. **ServiceHealth**
            1. ServiceHealth.Read
    
    5. Click **Application permissions**, and then select the following options and click **Add permissions**.
        1. \* **Activity Feed**
            1.  ActivityFeed.Read
            
            3. ActivityFeed.ReadDlp
        
        3. **ServiceHealth**
            1. ServiceHealth.Read
    
    7. In the **API permissions** window, click \*_Grant admin consent for dnifhq_
    
    9. Click **Yes** to confirm.

13. Use the compliance center to turn on audit log search:
    1. Go to the [compliance center](https://login.microsoftonline.com/common/oauth2/authorize?client_id=80ccca67-54bd-44ab-8625-4b79c4dc7775&response_mode=form_post&response_type=code+id_token&scope=openid+profile&state=OpenIdConnect.AuthenticationProperties%3dnw-77Uh5xOdBKEOSgfZ-42RF9dkSGEe2L7Zpfx7ca5fV-cd_Mw0vHtDglGVB1Zc1SHm16mGt7vOalESfWVtOWoRVAs5p-sX7ymndf4K0-oVGqHz6yugAD7pG-jce3M8u38vR1UQw3u7ZrxnAWtLeBQ&nonce=637535608337171334.YWE5YTEzODUtNDEzNi00NWY0LWE0YWItMDJkZThkMDQ4OWVmN2IwNGQ5ZTctMWUwYi00NDkyLTllMjgtOGIwMmZkYmRiNzFh&redirect_uri=https%3a%2f%2fprotection.office.com%2f) and sign in ([https://protection.office.com/homepage](https://login.microsoftonline.com/common/oauth2/authorize?client_id=80ccca67-54bd-44ab-8625-4b79c4dc7775&response_mode=form_post&response_type=code+id_token&scope=openid+profile&state=OpenIdConnect.AuthenticationProperties%3dlLfrVm7zokSsf4QUF-53588yFEhu2jp-8wziP-2XLnxB4nXS-Fy-RjTcsKQfniPDi34hWeNepQTbG72NS1WCbtRTxQlkGNszJakmrLOiVTTtGR_54JZ-DLNz5WCOLFEwmvPxdJCEYOyYkoczsQXCSw&nonce=637535608671224789.MjM0YjQxMzMtNGQ0Yy00NTA0LWIxODEtZTliZWRmNzM3OGZkMTUyYjI4YmQtN2RiYS00Y2JlLTk1MjktYmE0N2VmMWE1ODll&redirect_uri=https%3a%2f%2fprotection.office.com%2f)).
    
    3. In the compliance center, go to **Search** > **Audit log search**.
    
    5. Click **Turn on auditing**.

15. Create a subscription in Azure Portal
    1. Sign in to the [Azure portal](https://portal.azure.com/#home).
    
    3. Search for Subscriptions.  
          
          
        ![image 1-Nov-16-2023-09-39-29-6823-AM](./images-Office%20365/Office%20365-1.webp)  
          
        
    
    5. Select Add.  
          
        ![image 2-Nov-16-2023-09-40-06-0514-AM](./images-Office%20365/Office%20365-2.webp)  
          
        
    
    7. If you have access to multiple billing accounts, select the billing account for which you want to create the subscription.
    
    9. Fill the form and click Create. The tables below list the fields on the form for each type of billing account.

17. Check your subscriptions
    1. Visit this Microsoft Office website, click on the Sign-in button, and sign-in using the email address that you used to purchase your Office 365 subscription.  
          
        ![image 3-Nov-16-2023-09-42-15-8656-AM](./images-Office%20365/Office%20365-3.webp)  
          
        
    
    3. Once you sign in to your Office account, you will see the following page  
          
        ![image 4-Nov-16-2023-09-41-36-3471-AM](./images-Office%20365/Office%20365-4.webp)  
          
        
    
    5. The page displays the details of your Microsoft Office 365 subscription.

###### **Configuration**

The following are the configurations to forward **Office 365 Connector** logs to DNIF.‌

![image 5-4](./images-Office%20365/Office%20365-5.webp)

| **Field**  | **Description** |
| --- | --- |
| Connector Name | Enter a name for the connector |
| Connector Type | Enter O365 Connector |
| Tenant Id | Tenant Id or Directory Id of the Azure AD subscription |
| Tenant Domain | Tenant domain for Office 365 (example.onmicrosoft.com) |
| Client Key | Application ID of the created client application |
| Secret Key | Secret key for the created application |
| Publisher Id | Id of the publisher for the created application. This is mainly used for webhooks. The value would be **None**​ in case of this implementation |

- Click **Save** after entering all the required details and click **Test Connection**, to test the configuration.

- A **Connection successful** message will be displayed on screen along with the time stamp.

- If the connection is not successful an error message will be displayed. Refer [Troubleshooting Connector Validations](https://dnif.it/kb/troubleshooting-and-debugging/troubleshooting-connector-validations/) for more details on the error message.

Once the connector is configured, validate if the connector is listed under **[Collection Status](https://dnif.it/kb/operations/collection-status/)** screen with status as **Active**. This signifies the connector is configured successfully and data is ready to ingest.
