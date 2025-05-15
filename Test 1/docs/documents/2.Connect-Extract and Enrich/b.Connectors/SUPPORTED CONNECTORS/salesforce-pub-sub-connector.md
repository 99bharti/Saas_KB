---
title: "Salesforce Pub/Sub Connector"
date: 2025-01-21
type: "epkb_post_type_1"
---

Salesforce is a customer relationship management solution that brings companies and customers together.

Salesforce connector pulls the event monitoring data that contains information useful for assessing organization usage trends and user behavior.

###### **Prerequisites**  

- Connectivity with salesforce API using valid credentials.

- Required credentials:
    - Username
    
    - Password
    
    - Consumer key
    
    - Consumer secret
    
    - Security token
    
    - Instance URL

**Steps to setting up salesforce account**

**CREATE A CONNECTED APP**

Follow below steps to create a connected app.

- Login to the Salesforce Administrator account.

![image 1-Apr-12-2024-06-55-27-6473-AM](./images-Salesforce%20PubSub%20Connector/Salesforce-PubSub-Connector-1.webp)

- Click on the setup icon on the navigation bar.

- Navigate to the Platform Tools tab on the left panel.

- Navigate to Apps > App Manager.

![image 2-Apr-12-2024-06-58-41-0414-AM](./images-Salesforce%20PubSub%20Connector/Salesforce-PubSub-Connector-2.webp)

- Click New Connected App.

- Fill out the necessary fields and select the Enable OAUTH settings checkbox.

- Enter a value for callback url.

- Select Manage user data via APIs (api) and Perform requests at any time (refresh\_token, offline\_access) in the Selected OAuth Scopes column.  
      
    

![image 3-Apr-12-2024-07-01-06-9191-AM](./images-Salesforce%20PubSub%20Connector/Salesforce-PubSub-Connector-3.webp)

- Uncheck the Require Secret for Refresh Token Flow checkbox.  
      
    

![image 4-Apr-12-2024-07-02-47-9260-AM](./images-Salesforce%20PubSub%20Connector/Salesforce-PubSub-Connector-4.webp)

- Click Save.

- Navigate to Platform Tools > Apps > App Manager.

- Navigate to your created connected app and click on the arrow on the right side.  
      
      
      
    ![image 5-Apr-12-2024-07-05-30-8020-AM](./images-Salesforce%20PubSub%20Connector/Salesforce-PubSub-Connector-5.webp)  
      
    

- Select **View** option from the menu.

- Navigate to API (Enable OAuth Settings) section, click on Manage Consumer Details button.  
      
    

![image 6-Apr-12-2024-07-07-11-3497-AM](./images-Salesforce%20PubSub%20Connector/Salesforce-PubSub-Connector-6.webp)

- Copy the values of the consumer key and consumer secret and keep it.  
      
      
    ![image 7-Apr-12-2024-07-09-03-5200-AM](./images-Salesforce%20PubSub%20Connector/Salesforce-PubSub-Connector-7.webp)  
      
    

**CREATE USER PROFILES**

User profiles define the user's access to objects, data, and tasks allowed to the user within the application.

Follow the steps below to create a user profile in Salesforce: 

- Login to the Salesforce administrator account.

- Click on the setup icon on the navigation bar.  
    

![image 8-Apr-12-2024-07-10-47-2375-AM](./images-Salesforce%20PubSub%20Connector/Salesforce-PubSub-Connector-8.webp)

- Navigate to the **ADMINISTRATION** tab on left panel

- Navigate to **Users > Profiles** section

- Click on the new profile button.  
      
    

![image 9-Apr-12-2024-07-18-05-8947-AM](./images-Salesforce%20PubSub%20Connector/Salesforce-PubSub-Connector-9.webp)

- Select the existing profile as a standard user and Clone it.

- Specify a name for the profile.

![image 11-2](./images-Salesforce%20PubSub%20Connector/Salesforce-PubSub-Connector-10.webp)

- Click Save

- Now click on the edit button.

- Navigate to Connected App Access, select the connected apps you want to access using this profile.  
      
    

![image 12-1](./images-Salesforce%20PubSub%20Connector/Salesforce-PubSub-Connector-11.webp)

- Navigate to **Administrative Permissions**, select **API Enabled** and **Manage Users** checkbox.  
      
    

![image 13-2](./images-Salesforce%20PubSub%20Connector/Salesforce-PubSub-Connector-12.webp)

- Navigate to **General User Permissions**, and select **View Event Log Files** checkbox.  
      
    

![image 14-2](./images-Salesforce%20PubSub%20Connector/Salesforce-PubSub-Connector-13.webp)

- Click Save.

**CREATE A USER IN SALESFORCE**

Follow the below steps to create a user in Salesforce:

- Login to the Salesforce administrator account.

- Click on the setup icon on the navigation bar.

- Navigate to the **ADMINISTRATION** tab on the left panel.

- Navigate to **Users > Users**.

- Click on the New User  
      
    

![image 14-2](./images-Salesforce%20PubSub%20Connector/Salesforce-PubSub-Connector-14.webp)

- Fill out the necessary fields, select the user license as Salesforce, and select the profile we created in the previous step.  
    

![image 16-1](./images-Salesforce%20PubSub%20Connector/Salesforce-PubSub-Connector-15.webp)

- To obtain a user password, select the "Generate new password and notify the user immediately" checkbox.

- Click on save.  
      
    

![image 17-1](./images-Salesforce%20PubSub%20Connector/Salesforce-PubSub-Connector-16.webp)

**ENABLE OAUTH PERMISSION IN SALESFORCE**

Follow the below steps to enable oauth permission in Salesforce:

- Login to the Salesforce administrator account.

- Click on the setup icon on the navigation bar.

- Navigate to the **SETTINGS > Identity** tab on the left panel.

- Navigate to **OAuth and OpenID Connect Settings**.

- Enable **Allow OAuth Username-Password Flows.**  
      
    

![image 18-1](./images-Salesforce%20PubSub%20Connector/Salesforce-PubSub-Connector-17.webp)

**GET SECURITY TOKEN**

Follow the steps to get a security token.

- Login to Salesforce using the Salesforce account to be used by the connector.

- Click the view profile section located in the upper right corner, then click Settings.  
      
    

![image 19-1](./images-Salesforce%20PubSub%20Connector/Salesforce-PubSub-Connector-18.webp)

- In the right panel of the page, navigate to **My Personal Information > Reset My Security Token**.  
      
    

![image 20](./images-Salesforce%20PubSub%20Connector/Salesforce-PubSub-Connector-19.webp)

- Click **Reset Security Token**.

- The token will be sent to you via email.

**Enable the streaming events which you want to forward the log to DNIF**

Follow the steps to enable the events.

- Login to the Salesforce administrator account.

- Click on the setup icon on the navigation bar.

- Navigate to the **PLATFORM TOOLS** tab on the left panel.

- Navigate to the **Events > Event Manager.**

- Click on the arrow on the right side.

- Click on the **Enable Streaming.**  
      
    

![image 21-1](./images-Salesforce%20PubSub%20Connector/Salesforce-PubSub-Connector-20.webp)

###### **Configurations**

- The following are the configurations to forward Salesforce Pub/Sub Connector logs to DNIF.‌  
      
    ![image 22](./images-Salesforce%20PubSub%20Connector/Salesforce-PubSub-Connector-21.webp)  
      
    

| **Field** | **Description**  |
| --- | --- |
| Connector Name | Enter a name for the connector. |
| Salesforce PubSub User | Enter the salesforce username. |
| Salesforce PubSub User Password | Enter the salesforce user password. |
| Subscription channels | Select the subscription channel from which you want to fetch the log |
| Consumer key | Enter the salesforce Consumer key. |
| Consumer secret | Enter the salesforce Consumer secret. |
| Security Token | Enter the salesforce Security Token. |

- Click **Save** after entering all the required details and click **Test Connection**, to test the configuration.

- A **Connection successful** message and the time stamp will be displayed on a screen.

- If the connection is not successful an error message will be displayed.   
    Refer to [Troubleshooting Connector Validations](https://dnif.it/kb/troubleshooting-and-debugging/troubleshooting-connector-validations/) for more details on the error message.

Once the connector is configured, validate if the connector is listed under **[Collection Status](https://dnif.it/kb/operations/collection-status/)** screen with status as **Active**. This signifies the connector is configured successfully and data is ready to ingest.
