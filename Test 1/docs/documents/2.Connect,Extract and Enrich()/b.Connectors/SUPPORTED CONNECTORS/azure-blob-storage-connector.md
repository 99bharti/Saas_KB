---
title: "Azure Blob Storage Connector"
date: 2025-01-21
type: "epkb_post_type_1"
---

Azure Blob Storage is Microsoft's cloud-based object storage solution for storing large amounts of unstructured data such as text, images, videos, backups, and log files. Within Azure Blob Storage, a container acts as a logical grouping of blobs (binary large objects). DNIF supports the configuration of an Azure Blob Storage Connector to pull log data directly from your Azure Storage container, allowing you to write detections and perform investigations on the processed data.

###### **Pre-requisites**

- Tenant ID

- Client ID

- Client Secret

- Storage Account Name

- Queue Name

###### **Steps to derive prerequisites:-**

To create an Azure Blob Storage log source, you must first ensure that within your Azure subscription settings, **Microsoft.EventGrid** and **Microsoft.Storage** are registered resource providers. Verify this by following these steps:

1. In your Azure Console, navigate to **Subscriptions**.

3. Select the subscription you will be creating your Azure resources in.

5. Within the subscription settings, click **Resource providers**.  
      
      
    ![](./image-Azure%20Blob%20Storage%20Connector/Azure-Blob-Storage-Connector-1.png)  
      
    

7. In the Filter by name field, search for and locate **Microsoft.EventGrid** and **Microsoft.Storage**. 

9. For each of these providers, ensure the Status column has a value of **Registered**.

###### **Create the required infrastructure in the Azure Console:**

On the **Infrastructure & Configuration** page, you'll create required Azure infrastructure and provide configuration values required for configuration.

**Step 1: Create resource group and storage account**

1. In your Azure Console, navigate to **Subscriptions**.

3. Select the subscription you will be creating your Azure resources in.

5. Click **Resource groups**.  
    **\- Click + Create.**  
      
      
    ![](./image-Azure%20Blob%20Storage%20Connector/Azure-Blob-Storage-Connector-2.png)  
      
      
    \- Provide values for **Name** and **Region**. 
    
    - Copy down or remember the value you provide for **Name**, as you'll need it later in this process.
    
      
    
    - Click **Review** **and** **create**.
    
    \- Click **Create**.

7. Click the name of your newly created resource group.

9. Click **Create**.

11. In the search bar, enter "storage account" and within the **Storage account** tile that returns, click **Create**.  
      
      
    ![](./image-Azure%20Blob%20Storage%20Connector/Azure-Blob-Storage-Connector-3.png)  
      
    

13. On the **Create a storage** account page, in the **Instance details** section, enter values for **Storage account name** and **Region**.  
    \- Click **Review**.  
      
      
    ![](./image-Azure%20Blob%20Storage%20Connector/Azure-Blob-Storage-Connector-4.png)  
      
      
    \- Click **Create**.

###### **Step 2: Add app registration and client secret**

1. In the top search bar, search for "Microsoft Entra ID" and click on **Microsoft Entra ID**.

3. **Click +Add,** and in the dropdown menu that populates, **App registration.  
      
    **
    - Enter a **Name**.
    
    - Click **Register**.
    
    - Securely copy and store the **Application (client) ID** value, as you'll need it later in this process.

5. Click on your newly registered app.

7. On the right hand side, click **Add a certificate or secret**.  
      
      
    ![](./image-Azure%20Blob%20Storage%20Connector/Azure-Blob-Storage-Connector-5.png)  
      
    

9. Click **+New client secret**.
    - Provide a **Description**.
    
    - Click **Add**. 
    
    - Securely copy and store the **Client Secret value**, as you'll need it later in this process.

###### **Step 3: Create queue and add permission**

1. Navigate to your newly created storage account.

3. In the left-hand navigation bar, select **Queues**.
    1. Click **+Queue** to create a new queue.  
          
          
        ![](./image-Azure%20Blob%20Storage%20Connector/Azure-Blob-Storage-Connector-6.png)  
          
        
    
    3. Enter a **Name** for the queue.
    
    5. Copy down or remember the value you provide for **Name**, as you'll need it later in this process.
    
    7. Click **Ok**.

5. Click on your newly created queue, then in the left-hand navigation bar, click **Access Control (IAM)**.
    - Click **+Add**, then **Add Role Assignment**.
    
    - Search for "Storage Queue Data Message Processor" and select the matching role that populates.
    
    - Click on the **Members** tab.
    
    - Click **+Select Members**.
    
    - Search for the name of your registered app created in Step 2, and click **Select**.

###### **Step 4: Create system topic and event subscription**

1. In the top search bar, search for "Event Grid System Topics" and click on the matching page that populates.  
    \- Click **+Create**.  
    \- On the **Create Event Grid System Topic** page, fill in the following fields:
    - **Topic Types**: Select **Storage Accounts (Blob & GPv2)**.
    
    - **Subscription**: Select the subscription you created your resource group in during Step 1.
    
    - **Resource Group**: Select the resource group you created in Step 1.
    
    - **Resource**: Select the storage account you created in Step 1.
    
    - **Name**: Enter a descriptive topic name.  
          
          
        ![](./image-Azure%20Blob%20Storage%20Connector/Azure-Blob-Storage-Connector-7.png)  
          
        
    
    - Click **Review+create**.
    
    - Click Create

3. Navigate back to your storage account.

5. In the left-hand navigation bar, click Events then **+Event Subscription**. 

7. On the **Create Event Subscription** page, provide values for the following fields:
    - In the **Event Subscription Details** section, enter a **Name**.
    
    - In the **Event Types** section, for the **Filter to Event Types** field, select **Blob Created**.
    
    - In the **Endpoint Details** section, make the following selections:
    
    - **Endpoint Type**: Select **Storage Queue**.
    
    - **Endpoint**: Select the queue you created in Step 3. 
          
          
        ![](./image-Azure%20Blob%20Storage%20Connector/Azure-Blob-Storage-Connector-8.png)  
          
        
    
    - Click **Create**.

###### **Step 5: Create container and add permission**

If you already have a container created, you only need to grant read permissions to the application you created in Step 2. In the instructions set below, start with Step 3.

Note that you will not need to provide information about this container to Connector Configuration, as all logs written to any container in your created storage account will be ingested.

1. Navigate to your newly created storage account.

3. In the left-hand navigation bar, select **Containers**.  - Click **+Container** to create a new container.  
      
      
    ![](./image-Azure%20Blob%20Storage%20Connector/Azure-Blob-Storage-Connector-9.png)  
      
      
    \- Enter a **Name** for the container.
    
    - Copy down or remember the value you provide for **Name**, as you'll need it later in this process.
    
    \- Click **Create**.

5. Click on your newly created container, then in the left-hand navigation bar, click **Access Control (IAM)**.
    1. Click **+Add**.  
          
          
        ![](./image-Azure%20Blob%20Storage%20Connector/Azure-Blob-Storage-Connector-10.png)  
          
        
    
    3. Click **Add Role Assignment**.
    
    5. Search for "Storage Blob Data Reader" and select the matching role that populates.  
          
          
        <!-- TODO: Fix broken image link below. Original path: ./image-Azure%20Blob%20Storage%20Connector/Azure-Blob-Storage-Connector-11.png -->
        <!-- ![](./image-Azure%20Blob%20Storage%20Connector/Azure-Blob-Storage-Connector-11.png) -->
          
        

7. Click on the **Members** tab.

9. Click **+Select Members**.

11. Search for the name of the registered app you created in Step 2, and click **Select**.

13. Click **Review+Assign.**

###### **Step 6: Copy Azure configuration values back into the Connector Configuration**

1. Go to the **DataSource** **Configuration** page in your DNIF Console.

3. In the Provide Azure configuration section, copy in values for the following fields:
    - **Tenant ID**: This value can be found on your Azure Console's Microsoft Entra ID home page.
    
    - **Client ID**: The application (client) ID generated in Step 2.
    
    - **Storage Account Name**: The name you gave your storage account in Step 1.
    
    - **Storage Queue Name**: The name you gave your queue in Step 3.
    
    - **Client Secret**: The client secret value generated in Step 2.

5. Click **Next**, then **Done**.

###### **Configurations**

The following are the configurations to forward Azure Blob Storage Connector logs to DNIF.‌

<!-- TODO: Fix broken image link below. Original path: ./image-Azure%20Blob%20Storage%20Connector/Azure-Blob-Storage-Connector-12.png -->
<!-- ![](./image-Azure%20Blob%20Storage%20Connector/Azure-Blob-Storage-Connector-12.png) -->

| **Field Name**  | **Description** |
| --- | --- |
| Connector Name | Enter a name for the connector |
| Tenant ID | Enter Azure Tenant ID |
| Client ID | Enter the Azure Client ID |
| Client Secret | Enter the Azure Client Secret |
| Storage Account Name | Enter the Azure Storage Account Name |
| Queue Name | Enter the Azure Queue Name |
| Prefix (Optional) | Enter the Prefix path from which you want to pull data from the container |
| Delete Unmatched Prefix | Choose True or False to delete Unmatched Prefix messages from the Azure queue |

- Click **Save** after entering all the required details and click **Test Connection**, to test the configuration.

- A **Connection successful** message will be displayed on screen along with the time stamp.

- If the connection is not successful an error message will be displayed. Refer [Troubleshooting Connector Validations](https://dnif.it/kb/troubleshooting-and-debugging/troubleshooting-connector-validations/) for more details on the error message.

Once the connector is configured, validate if the connector is listed under **[Collection Status](https://dnif.it/kb/operations/collection-status/)** screen with status as **Active**. This signifies the connector is configured successfully and data is ready to ingest.
