---
title: "GCP PUB/SUB"
date: 2025-01-21
type: "epkb_post_type_1"
---

Google Cloud Platform is the basis for creating, enabling, and using all Google Cloud services including managing APIs, enabling billing, adding and removing collaborators, and managing permissions for Google Cloud resources.

###### **Prerequisite**

- Create a google account

- Set up a Cloud Console project

###### **Create a Project**

1. Go to the **Manage resources** page in the Cloud Console.

3. On the **Select organization** drop-down list at the top of the page, select the organization in which you want to create a project. If you are a free trial user, skip this step, as this list does not appear.

5. Click **Create Project**.

7. In the **New Project** window that appears, enter a project name and select a billing account as applicable. A project name can contain only letters, numbers, single quotes, hyphens, spaces, or exclamation points, and must be between 4 and 30 characters.

9. Enter the parent organization or folder in the **Location** box. That resource will be the hierarchical parent of the new project.

11. When you're finished entering new project details, click **Create**.

###### **Create a topic**

1. Go to the Pub/Sub topics page in the Cloud Console.

3. Click **Create a topic**.  
    In the **Topic ID** field, provide a unique topic name, for example, MyTopic.

5. Click **Save**.

That's it—you've just created a Pub/Sub topic!

Create a subscription on the previously created topic. [Here](https://cloud.google.com/pubsub/docs/quickstart-console?hl=en#add_a_subscription)

###### **Add a subscription**

To add a subscription to the topic you just created:

1. Display the menu for the topic you just created, and click **New subscription**.  
      
      
    ![image 1-Nov-16-2023-09-51-03-5791-AM](./IMAGES-GCP%20PUBSUB/GCP-PUBSUB-1.webp)  
      
      
    

3. Type a name for the subscription, such as _MySub_.  
      
      
    ![image 2-Nov-16-2023-09-51-44-9065-AM](./IMAGES-GCP%20PUBSUB/GCP-PUBSUB-2.webp)  
      
    

5. Leave the delivery type as **Pull**.

7. Click Create

###### **Publish a message to the topic**

To publish a message to the topic:

1. Go to the **Topic details** page for the topic you just created.

3. Click the **Messages** tab near the bottom of the page, then click **Publish Message**.

5. Enter a message in the **Message** field.

7. Click **Publish**.

###### **Create key from service account**

1. In the Cloud Console, go to the Service Accounts page.

3. Select a project.

5. Click the email address of the service account that you want to create a key for.

7. Click the Keys tab.

9. Click the Add key drop-down menu, then select Create new key.

11. Select JSON as the Key type and click Create.

Clicking Create downloads a service account key file. After you download the key file, you cannot download it again.

The downloaded key has the following format, where private-key is the private portion of the public/private key pair:

###### **Pull message from subscriptionOR Use Connector**

**Pull message**

1. In the Cloud Console, go to the Pub/Sub subscriptions page.

3. Click the subscription ID.

5. In the **Subscription details** page, click **View messages**.

7. Click **Pull**.

###### **Connector**

The following are the configurations to forward GCP PUB/SUB logs to DNIF.‌

![image 3-Nov-16-2023-09-53-09-2443-AM](./IMAGES-GCP%20PUBSUB/GCP-PUBSUB-3.webp)

| **Configuration** | **Description** |
| --- | --- |
| Connector Name | Enter a name for the connector |
| Connector Type | Enter a type for the connector |
| Project Id | Enter the project name |
| Subscription Id: | Enter the Subscription Id of the topic you created |
| Credentials File | Enter the details from credentials.json file, downloaded while creating the project |
| Number of Processes | Total number of processes that can be run at a time |

- Click **Save** after entering all the required details and click **Test Connection**, to test the configuration.

- A **Connection successful** message will be displayed on screen along with the time stamp.

- If the connection is not successful an error message will be displayed. Refer [Troubleshooting Connector Validations](https://dnif.it/kb/troubleshooting-and-debugging/troubleshooting-connector-validations/) for more details on the error message.

Once the connector is configured, validate if the connector is listed under **[Collection Status](https://dnif.it/kb/operations/collection-status/)** screen with status as **Active**. This signifies the connector is configured successfully and data is ready to ingest.
