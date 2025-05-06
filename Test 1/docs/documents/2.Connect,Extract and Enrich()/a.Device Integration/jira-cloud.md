---
title: "JIRA CLOUD"
date: 2025-01-20
type: "epkb_post_type_1"
---

Jira Cloud Integration enables you to create Jira issues directly in the Jira Cloud Platform using the JIRA REST API via webhooks. The following guide demonstrates how to create an issue ticket in Jira based on detections made in the DNIF console. These detections can include raised signals or any fields identified in log events. 

To create an issue in Jira using the JIRA REST API via webhooks, you need to ensure the following prerequisites are met.

###### **Webhook Configuration :**

The webhook configuration requires the following fields:

- **Name of the Configuration:** The name of the configuration you want to assign.

- **HTTP Request Method:** According to the Jira documentation, the "POST" method is used to create an issue.

- **URL:** The endpoint for the Jira REST API.

- **Headers:** Necessary headers for the HTTP request.

- **Payload:** The data to be sent with the request.

Here's a detailed explanation of each field:

- **Name of the Configuration:**This field specifies the name you want to give to the webhook configuration.  
      
    ![](./images-JIRA%20CLOUD/JIRA-CLOUD-1.png)

- **Request Method ( Http Request Method ) :** The HTTP method used to create an issue in Jira. As per Jira's documentation, the "POST" method is required for this purpose.  
      
    ![](./images-JIRA%20CLOUD/JIRA-CLOUD-2.png)  
      
    

- **URL :** The Jira Cloud REST API endpoint to which the request is sent.  
      
    ![](./images-JIRA%20CLOUD/JIRA-CLOUD-3.png)  
      
    

- **Headers :** The headers needed for the HTTP request, usually including authorization tokens and content type.  
      
    ![](./images-JIRA%20CLOUD/JIRA-CLOUD-4.png)  
      
    

- **Payload :** The JSON payload containing the issue details.  
     An example payload might look like:  
      
    ![](./images-JIRA%20CLOUD/JIRA-CLOUD-5.webp)  
      
    

- **Using Variable in Payload to Create Jira Issues**
    - The payload field allows you to define the contents of the issue raised in Jira. You can populate fields from search results or signal details using the "Variable" feature available in the DNIF console. This feature enables you to use specific field names as variables in your payload.
    
    - To use a particular field as a variable, prefix the field name with a "$" symbol. For example, **$detectionseverity**. You can use this variable in place of the value in a "key":"value" pair.  
        

![](./images-JIRA%20CLOUD/JIRA-CLOUD-6.webp)

- **Explanation of Payload Fields :**

- **Custom Fields :**  
    **`customfield_<id>`:**Custom fields created by the Jira admin

- **Using Variables :**

- To utilize the variables, replace **&lt;id&gt;** in **`customfield_<id>`** with the actual custom field ID created by the Jira admin.

- For instance, if the custom field ID for detection severity is **10010**, you would use **`customfield_10010`**: "**$detectionseverity**".

- By leveraging these variables in your payload, you can dynamically populate issue fields with relevant data from DNIF detections, making issue creation in Jira more efficient and tailored to your needs.

- Below screenshots illustrate how query results for signals raised in DNIF will be displayed in the Jira tickets.  
    

###### **Screenshot Examples:**

1. **Query Result Display:**
    Shows how the query results are populated into the Jira ticket.  
      
    ![](./images-JIRA%20CLOUD/JIRA-CLOUD-7.png)  
      
    

3. **Signal Details Display:**  
    Displays signal details in query results integrated into the Jira ticket fields.  
      
    ![](./images-JIRA%20CLOUD/JIRA-CLOUD-8.png)  
    

Please find the Reference Documentation below: [create issue](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-post) 

By following the above documentation, you can integrate DNIF with Jira Cloud, automatically creating detailed and relevant issues based on detected signals and search results.
