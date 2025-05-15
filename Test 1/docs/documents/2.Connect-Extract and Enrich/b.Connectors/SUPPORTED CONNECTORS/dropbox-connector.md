---
title: "Dropbox Connector"
date: 2025-01-21
type: "epkb_post_type_1"
---

Dropbox connector utilizes the pull method to retrieve Dropbox Logs through the Dropbox Business API.

###### **Prerequisites**  

- Dropbox Business Account.

- Client ID

- Client Secret

- Authorization Code(By granting access via link)

###### **How to derive the prerequisites?**

- Login to [Dropbox App Console](https://www.dropbox.com/developers/apps)  
      
      
    ![image 1-Apr-11-2024-05-28-31-9003-AM](./images-Dropbox%20Connector/Dropbox-Connector-1.webp)  
      
    

- Click **Create app.**  
    

![image 2-Apr-11-2024-05-31-36-9322-AM](./images-Dropbox%20Connector/Dropbox-Connector-2.webp)

- On the **Create a new app on the DBX Platform** page, fill out the fields:
    - **Choose an API: Select Scoped Access**  
          
        

![image 3-Apr-11-2024-05-33-24-9041-AM](./images-Dropbox%20Connector/Dropbox-Connector-3.webp)

- Choose the type of access you need: Select **Full Dropbox**  
    

![image 4-Apr-11-2024-05-39-12-1070-AM](./images-Dropbox%20Connector/Dropbox-Connector-4.webp)

- - Name your app: Enter a descriptive name for your application and the click **Create app.**
    
      
    ![image 5-Apr-11-2024-05-41-43-7572-AM](./images-Dropbox%20Connector/Dropbox-Connector-5.webp)  
      
    

- When you are redirected to the app Settings panel, navigate to the Permissions tab at the top of the page.  
      
    

![image 6-Apr-11-2024-05-46-00-4308-AM](./images-Dropbox%20Connector/Dropbox-Connector-6.webp)

- Under the **Team Scopes** section, check the boxes next to t**eam\_data.member** and **events.read**  
      
    

![image 7-Apr-11-2024-05-47-39-3175-AM](./images-Dropbox%20Connector/Dropbox-Connector-7.webp)

![image 9-Apr-11-2024-05-50-14-5531-AM](./images-Dropbox%20Connector/Dropbox-Connector-8.webp)

- Click Submit in the bar at the bottom of the page.  
      
      
    ![image 10-2](./images-Dropbox%20Connector/Dropbox-Connector-9.webp)  
      
    

- Navigate back to the Settings tab at the top of the page.  
      
    

![image 11-1](./images-Dropbox%20Connector/Dropbox-Connector-10.webp)

- On the Settings tab, copy the **App Key** and **App Secret** values and store them in a secure location. You will need these in the next steps.

![image 12](./images-Dropbox%20Connector/Dropbox-Connector-11.webp)

###### **Configurations**

- The following are the configurations to forward Dropbox Connector logs to DNIF.‌  
      
    

![image 13-1](./images-Dropbox%20Connector/Dropbox-Connector-12.webp)  
  

| Field | Description |
| --- | --- |
| Connector Name | Enter a name for the connector |
| Client ID | Enter the App Key copied earlier |
| Client Secret | Enter the App Secret copied earlier |
| Authorization Code | To get this code, follow the steps shown below |

Get Authorization Code:

- Enter the **Client ID** and **Client Secret** in the DNIF connector form, now the **Click to get Code** would be enabled, click this link.

![image 14-1](./images-Dropbox%20Connector/Dropbox-Connector-13.webp)

- After clicking the **Click to get Code** you will be redirected to Dropbox permission page, click **Continue.**

![image 15](./images-Dropbox%20Connector/Dropbox-Connector-14.webp)

- Allow the app to be able to pull logs from Dropbox on your behalf.

![image 16](./images-Dropbox%20Connector/Dropbox-Connector-15.webp)

- After you have allowed the required permissions, you will get an Authorization Code.

![image 17](./images-Dropbox%20Connector/Dropbox-Connector-16.webp)

- Copy the **Authorization Code** and paste it into DNIF connector form.

![image 18](./images-Dropbox%20Connector/Dropbox-Connector-17.webp)

The following optional configurations can be done based on requirements.

| Field | Description |
| --- | --- |
| Log Level | Set the loglevel   0: DEBUG   1: INFO   4: WARNING   5: ERROR   6: CRITICAL |
| Number of Threads | Number of threads to publish logs |
| Size limit  | Size limit for creating bunching of logs to be sent |
| Wait Time | Max time to wait for log bunching in seconds |
