---
title: "Azure Event Hub"
date: 2025-01-20
type: "epkb_post_type_1"
---

Azure Connector pulls logs from Azure Event Hubs service.

###### **Prerequisites**

The following prerequisites are to be met:

- Create a resource group

- Create a storage account

- Create an Event Hubs namespace

- Create a container

- Create an Event Hub

- Storage Account Access Keys

- Connection String for Event Hub

###### **Create a resource group**

- Sign in to the Azure portal([login.microsoftonline.com/](https://login.microsoftonline.com/common/oauth2/authorize?client_id=4345a7b9-9a63-4910-a426-35363201d503&redirect_uri=https%3A%2F%2Fwww.office.com%2Flanding&response_type=code%20id_token&scope=openid%20profile&response_mode=form_post&nonce=637624495064040605.NjY1YTY3MjEtYjJiZi00ZGExLTg3NjktODkyMTQ2OGU3MGNlM2Y3ZWNkNTQtZGIzZi00YTllLWEzYTItNTdhNTAxYWVjYzJk&ui_locales=en-IN&mkt=en-IN&state=S8ZxirOMBWASWTjqK4xEaBU0ouBtg51b7OyYqmS8DCEs18DhXp-upeaZyfk8vX59UUGxPtj0SpO_SccqCW-Y679c2lUZOk702fPNFscyfmsdmYyi_OAMOAAlRh3U0eOny9XB9Lyz6XMJQjT4VOvsz0NFkk7pGMrQ63f0NrI4zdBrtBp62CzLbmO4wJGaLvtjTzIISuB_vsEoIeYye9DPEpae4fc1NhK4_kkgprhEO08Zd9ZznVf0r23c6gKv2kFvPXGai4VN_bhW1qqO7JRwCg&x-client-SKU=ID_NETSTANDARD2_0&x-client-ver=6.8.0.0#)).

- In the left navigation, select **Resource groups** and then select **Add**.

![image 1-Nov-16-2023-10-07-53-6000-AM](./images-Azure%20Event%20Hub/Azure-Event-Hub-1.webp)

- For Subscription, select the name of the Azure subscription in which you want to create the resource group.

- Enter a unique name for the resource group. The system immediately checks if the name is available in the currently selected Azure subscription.

- Select a **region** for the resource group.

- Click **Review + Create**.

![image 2-Nov-16-2023-10-08-53-0612-AM](./images-Azure%20Event%20Hub/Azure-Event-Hub-2.webp)

- On the **Review + Create** page, select **Create**.

###### **Create a Storage Account**

To create an Azure storage account with the Azure portal, follow these steps:

- From the left portal menu, select Storage accounts to display a list of your storage accounts.

- On the Storage accounts page, select **New**. The following image shows a standard configuration for a new storage account.

![image 3-Nov-16-2023-10-09-42-1313-AM](./images-Azure%20Event%20Hub/Azure-Event-Hub-3.webp)

- On the Basics tab, provide the essential information for your storage account.

- Select **Review + create** to accept the default options and proceed to validate and create the account.

- You can also choose to further customize your new storage account by setting options on the other tabs.

- For more information refer.[https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create?tabs=azure-portal](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create?tabs=azure-portal)

###### **Create an Event Hubs namespace**

- An Event Hubs namespace provides a unique scoping container, in which you create one or more event hubs.

To create a namespace in your resource group using the portal, do the following actions:

- In the Azure portal, select **Create a resource** at the top left of the screen.

- Select **All services** in the left menu, and select star (\*) next to Event Hubs in the **Analytics** category. Ensure **Event Hubs** is added to **FAVORITES** displayed in the left navigation menu.  
      
      
    ![image 4-Nov-16-2023-10-10-18-2649-AM](./images-Azure%20Event%20Hub/Azure-Event-Hub-4.webp)  
      
    

- Select **Event Hubs** under **FAVORITES** in the left navigation menu, then click **Add** displayed on the toolbar.  
      
      
    ![image 5-Nov-16-2023-10-10-39-2740-AM](./images-Azure%20Event%20Hub/Azure-Event-Hub-5.webp)  
      
    

- On the **Create namespace** page, follow the steps below:
    - Select the subscription in which you want to create the namespace.
    
    - Select the resource group you created in the previous step.
    
    - Enter a name for the namespace. The system immediately checks to see if the name is available.
    
    - Select a location for the namespace.
    
    - Choose Basic for the pricing tier. To learn about differences between tiers, see [Quotas and limits](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-quotas), [Event Hubs Premium](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-premium-overview), and [Event Hubs Dedicated](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-dedicated-overview) articles.
    
    - Leave the throughput units (for standard tier) or processing units (for premium tier) settings as it is. To learn about throughput units or processing units: [Event Hubs scalability](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-scalability).
    
    - Select **Review + Create** at the bottom of the page.  
          
        ![image 6-3](./images-Azure%20Event%20Hub/Azure-Event-Hub-6.webp)  
          
          
        

- On the **Review + Create** page, review the settings, and select Create. Wait for the deployment to complete  
      
    ![image 7-2](./images-Azure%20Event%20Hub/Azure-Event-Hub-7.webp)  
      
    

- On the Deployment page, select **Go to resource** to navigate to the page for your namespace.  
      
    ![image 8-2](./images-Azure%20Event%20Hub/Azure-Event-Hub-8.webp)  
      
    

- Ensure that you see the Event Hubs Namespace page similar to the following screen  
      
    ![image 9-1](./images-Azure%20Event%20Hub/Azure-Event-Hub-9.webp)

###### **Create a Container**

To create a container in the Azure portal, follow these steps:

- Navigate to your new storage account in the Azure portal.

- In the left menu for the storage account, scroll to the **Blob service** section, then select **Containers**.

- Select the **\+ Container** button.

- Type a name for your new container. The container name must be lowercase, must start with a letter or number, and can include only letters, numbers, and the dash (-) character. For more information about container and blob names, refer [Naming and referencing containers, blobs, and metadata](https://docs.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata).

- Set the level of public access to the container. The default level is Private (no anonymous access).

- Select **OK** to create the container.  
      
      
    ![image 10-1](./images-Azure%20Event%20Hub/Azure-Event-Hub-10.webp)  
      
    

- Please ensure to store the container name in a location where it can be accessed for use in the connector configuration.

For more information refer.[https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create?tabs=azure-portal](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create?tabs=azure-portal)

###### **Create an event hub**

To create an event hub within the namespace, do the following actions:

###### **Storage Account Access Keys**

Storage accounts should have owner access roles assigned.

On creating a storage account, Azure generates two 512-bit storage account access keys. These keys can be used to authorize access to data in your storage account via Shared Key authorization. Your storage account access keys are similar to a root password for your storage account.

You can view and copy your account access keys with the Azure portal, PowerShell, or Azure CLI. The Azure portal also provides a connection string for your storage account that you can copy.

To view and copy your storage account access keys or connection string from the Azure portal:

- Navigate to your storage account in the Azure portal.

- Under **Settings**, select **Access keys**. Your account access keys appear, as well as the complete connection string for each key.

- Locate the Key value under key1, and click the Copy button to copy the account key.

- Alternately, you can copy the entire connection string. Find the Connection string value under key1, and click the Copy button to copy the connection string.  
      
      
    ![image 18-1](./images-Azure%20Event%20Hub/Azure-Event-Hub-11.webp)

You can use either of the two keys to access Azure Storage, but in general it's a good practice to use the first key, and reserve the use of the second key for when you are rotating keys.

For more details on Storage connection string from the storage account refer:[https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal)

###### **Connection String for Event Hub**

- Sign in to [Azure portal](https://portal.azure.com/#home).

- Select **All services** on the left navigational menu.

- Select **Event Hubs** in the Analytics section.

- In the list of event hubs, select your event hub.

- On the **Event Hubs Namespace** page, select **Shared Access Policies** on the left menu.  
      
      
    ![image 19](./images-Azure%20Event%20Hub/Azure-Event-Hub-12.webp)  
      
    

- Select a shared access policy in the list of policies. The default one is named: RootManageSharedAccessPolicy. You can add a policy with appropriate permissions (read, write), and use that policy.  
      
      
    ![image 20](./images-Azure%20Event%20Hub/Azure-Event-Hub-13.webp)  
      
    

- Select the copy button next to the Connection string-primary key field.  
      
      
    ![image 21](./images-Azure%20Event%20Hub/Azure-Event-Hub-14.webp)  
      
    

For more details on Connection string for eventhub refer: [https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-get-connection-string](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-get-connection-string)

###### **Configurations**

The following are the configurations to forward **Azure Event Hub Connector** logs to DNIF.‌

![image 22](./images-Azure%20Event%20Hub/Azure-Event-Hub-15.webp)

| **Field Name**  | **Description** |
| --- | --- |
| Connector Name | Enter a connector name |
| Connector Type | Enter Azure EventHub connector |
| Azure Storage Connection String | Enter the Azure Storage Connection String got from Azure console |
| Azure Connection String | Enter the Azure connection String got from event hub on Azure console. |
| Event Hub Name | Enter the event hub name got from Azure console. |
| Container Name | Enter the container name where you want to store the bookmarking for eventhub partitions. |

Click **Save**, to forward **Azure Event Hub Connector** logs to DNIF.‌

Once the connector is configured, validate if the connector is listed under **[Collection Status](https://dnif.it/kb/operations/collection-status/)** screen with status as **Active**. This signifies the connector is configured successfully and data is ready to ingest.
