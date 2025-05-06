---
title: "Auth0 Connector"
date: 2025-01-20
type: "epkb_post_type_1"
---

Select the **Settings** ta

Auth0 connector utilizes the pull method to retrieve Auth0 Logs through the Auth0 Management API.

###### **Prerequisites**  

- Auth0 Account

- Domain

- Client ID

- Client Secret

- API Identifier(API Audience)

###### **How to derive the prerequisites?**

- Login to [Auth0 Dashboard](https://auth0.com/api/auth/login?redirectTo=dashboard)

![image 1-Apr-10-2024-12-04-35-9355-PM](./images-Auth0%20Connector/Auth0-Connector-1.webp)

- In the sidebar, click **Applications** under **Applications**  
    

![image 2-Apr-10-2024-12-06-23-1886-PM](./images-Auth0%20Connector/Auth0-Connector-2.webp)

- Click **Create Application**  
    

<!-- TODO: Fix broken image link below. Original path: ./images-Auth0%20Connector/Auth0-Connector-3.webp -->
<!-- ![image 3-Apr-10-2024-12-08-43-9288-PM](./images-Auth0%20Connector/Auth0-Connector-3.webp) -->

- Fill out the application form, enter the **Application Name**

![image 4-Apr-10-2024-12-10-45-1352-PM](./images-Auth0%20Connector/Auth0-Connector-4.webp)

- Choose the Application type as **Machine To Machine** and select **Auth0 Management API** as the API of the application.  
      
    ![image 5-Apr-10-2024-12-12-37-0763-PM](./images-Auth0%20Connector/Auth0-Connector-5.webp)  
      
    

- After selecting the API, below in the permissions section enable **read:logs** and **read:logs_users** permissions and then click **Continue.**  
    

![image 6-Apr-10-2024-12-14-19-8884-PM](./images-Auth0%20Connector/Auth0-Connector-6.webp)

- Select the **Settings** tab  
      
    ![image 7-Apr-10-2024-12-17-41-2170-PM](./images-Auth0%20Connector/Auth0-Connector-7.webp)

- Scroll down to see the credentials, copy the **Domain**, **Client ID**, **Client Secret** and store them securely.  
      
    ![image 8-Apr-10-2024-12-19-05-9395-PM](./images-Auth0%20Connector/Auth0-Connector-8.webp)

###### **Configurations**  
  

The following are the configurations to forward Auth0 Connector logs to DNIF.‌

![image 9-Apr-10-2024-12-35-39-9341-PM](./images-Auth0%20Connector/Auth0-Connector-9.webp)

| **Field**  | **Description** |
| --- | --- |
| Connector Name | Enter a name for the connector |
| Domain | Enter your Auth0 organization Domain |
| Client ID | Enter your Auth0 application Client ID |
| Client Secret | Enter your Auth0 application Client Secret |
| API Identifier | Enter Auth0 API Identifier token |

The following optional configurations can be done based on requirement.

| **Field** | **Description** |
| --- | --- |
| Log Level | Set the loglevel   0: DEBUG   1: INFO   4: WARNING   5: ERROR   6: CRITICAL |
| Number of Threads  | Number of threads to publish logs |
| Size limit  | Size limit for creating bunching of logs to be sent |
| Wait Time | Max time to wait for log bunching in seconds |
