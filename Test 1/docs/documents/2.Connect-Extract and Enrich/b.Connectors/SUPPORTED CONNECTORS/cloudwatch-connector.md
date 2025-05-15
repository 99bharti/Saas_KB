---
title: "CloudWatch Connector"
date: 2025-01-21
type: "epkb_post_type_1"
---

Amazon CloudWatch is a monitoring service that helps you track and monitor the health of your AWS applications and resources. DNIF supports the configuration of a CloudWatch Connector to pull log data directly from your CloudWatch, allowing you to write detections and perform investigations on the processed data.

###### **Pre-requisites**

- Log Group(s) names

- AWS Region

- AWS Access Key

- AWS Secret Key

###### **Steps to derive prerequisites:-**

To get your AWS Access Key and Secret Access Key, you need to create a set of credentials from the AWS Management Console. Follow these steps:

1. **Sign in to the AWS Management Console**
    1. Go to the AWS Management Console at: [https://aws.amazon.com/console/](https://aws.amazon.com/console/)
    
    3. Sign in with your root account or IAM user credentials.

3. **Navigate to the IAM (Identity and Access Management) Dashboard**
    1. Once logged in, from the top search bar, search for IAM and click on IAM to open the IAM dashboard.

5. **Create or Select an IAM User**
    1. If you already have an IAM user that needs an access key:
        1. Go to **Users** from the left-hand menu.
        
        3. Select the IAM user to which you want to assign access keys.
    
    3. If you need to create a new IAM user:
        1. Click on Users in the left-hand menu.
        
        3. Click Add User at the top.
        
        5. Enter a username for the new user.
        
        7. Under Access type, check Programmatic access to generate an access key and secret key.
        
        9. Click Next: Permissions to proceed.

7. **Attach Permissions to the User**
    1. If you're creating a new IAM user or editing an existing user:
        1. You need to assign permissions to the user.
    
    3. Create a least-privileged IAM policy that grants only the necessary permissions for the DNIF Connector (which pulls logs from CloudWatch Logs), you would only need permissions for:
        1. Reading logs from CloudWatch Logs.
        
        3. Optionally, listing log groups (if you want the user to be able to see available log groups).
        
        5. Describing log streams to navigate the logs within the log groups.
    
    5. Here is an example of a minimal IAM policy that covers these actions:Minimal IAM Policy for Accessing CloudWatch Logs  
          
        ![](./images-CloudWatch%20Connector/CloudWatch-Connector-1.webp)  
          
        
    
    7. **Explanation of the Policy:**
        
        - **logs:DescribeLogGroups**: Allows the user to list available CloudWatch log groups. This is optional and can be removed if you already know the log group names and don’t need the ability to list them.
        
        - **logs:DescribeLogStreams**: Allows the user to list the log streams within the specified log group.
        
        - **logs:FilterLogEvents**: Allows the user to query and filter the logs.
        
        - **Resource**: The policy is scoped to specific log groups and log streams.
            - Replace "your-log-group-name" with the name of the log group(s) you want to allow access to. You can add multiple log groups as needed.
            
            - If you want to allow access to all log groups, you can use a wildcard ("arn:aws:logs:\*:\*:log-group:\*").
        
        - Click Next: Review and complete the user creation.

9. **Generate the Access Key and Secret Access Key  
    **Once the user is created or if you are editing an existing user:
    - Go to the user's Security credentials tab.
    
    - Scroll down to the Access keys section.
    
    - Click on Create access key.

11. **Download or Save the Access Key**
    1. After you generate the access key, AWS will display both the AWS Access Key ID and the AWS Secret Access Key.
    
    3. Important: This is the only time the secret key will be shown. Make sure to download the .csv file with both the access key and secret key, or copy and save it securely.

###### **Configurations**

The following are the configurations to forward AWS CloudWatch Connector logs to DNIF.‌

![](./images-CloudWatch%20Connector/CloudWatch-Connector-2.webp)

| **Field Name**  | **Description** |
| --- | --- |
| Connector Name | Enter a name for the connector |
| Log Group(s) | Enter ClowdWatch Log Group(s) |
| AWS Region | Enter the CloudWatch AWS Region |
| AWS Access Key | Enter the AWS Access Key |
| AWS Secret Key | Enter the AWS Secret Key |
| Scan Interval | Enter the Scan Interval in mins |

- Click **Save** after entering all the required details and click **Test Connection**, to test the configuration.

- A **Connection successful** message will be displayed on screen along with the time stamp.

- If the connection is not successful an error message will be displayed. Refer [Troubleshooting Connector Validations](https://dnif.it/kb/troubleshooting-and-debugging/troubleshooting-connector-validations/) for more details on the error message.

Once the connector is configured, validate if the connector is listed under **[Collection Status](https://dnif.it/kb/operations/collection-status/)** screen with status as **Active**. This signifies the connector is configured successfully and data is ready to ingest.
