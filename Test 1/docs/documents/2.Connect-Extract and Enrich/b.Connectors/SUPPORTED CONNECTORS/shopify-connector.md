---
title: "Shopify Connector"
date: 2025-01-21
type: "epkb_post_type_1"
---

Shopify connector reads logs/events that have occurred in your Shopify account. Please read what kind of events can be captured by the connector [here](https://shopify.dev/api/admin-rest/2022-10/resources/event). 

###### **Pre-requisites**

- Your Shopify URL

- Shopify Access Token with the required permissions

###### **Creating Shopify Access Token with the required permissions**

- Sign in to the Shopify Store and click Apps.

- Create a new App  
      
      
    ![](./images-Shopify%20Connector/Shopify-Connector-1.webp)  
      
    

- Name your app and assign an app developer and click **Create an app**.

- Now on the app overview screen, Click **Configure Admin API scopes**.  
      
      
    ![](./images-Shopify%20Connector/Shopify-Connector-2.webp)  
      
    

- Select the read permissions of all the necessary scopes to get your audit events for products, orders, customers, inventory, etc. Click **Save**.  
      
      
    ![](./images-Shopify%20Connector/Shopify-Connector-3.webp)  
      
    

- Go to the API credentials tab and click **Install** app. After the installation, you should now see your Admin API access token on the screen.

###### **Configurations**

The following are the configurations to forward Shopify Connector logs to DNIF.‌  

![](./images-Shopify%20Connector/Shopify-Connector-4.webp)

| **Field Name**  | **Description** |
| --- | --- |
| Connector Name | Enter a name for the connector |
| Connector Type | Enter Shopify Connector |
| Shopify URL | Enter the URL of your Shopify Store |
| Access Token | Enter the token generated above |

- Click **Save**, to forward Shopify Connector logs to DNIF.‌
