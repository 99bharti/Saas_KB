---
title: "AWS S3 (Optimized)"
date: 2025-01-20
type: "epkb_post_type_1"
---

AWS S3 Optimized connector is a scalable variant of the S3 Connector that reads logs from a configured S3 Bucket by leveraging S3 event notifications pushed to an “AWS SQS Queue”.

###### **Pre-requisites**

- Connectivity with AWS S3 bucket and Amazon SQS Queue using valid credentials

- Required credentials:
    - AWS\_SECRET\_ACCESS\_KEY
    
    - AWS\_ACCESS\_KEY\_ID
    
    - AWS account id
    
    - AWS Bucket name
    
    - AWS SQS Queue name
    
    - Region

- AWS S3 bucket and SQS Queue must be in the same region

- Required Permissions related to AWS S3 bucket and SQS Queue

###### **Creating IAM user with programmatic access**

You can create one or more IAM users in your AWS account. You might create an IAM user when someone joins your team, or when you create a new application that needs to make API calls to AWS.

For official documentation [Click here](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html)

- Sign in to the AWS S3 Management Console and open the IAM console at [https://console.aws.amazon.com/iam/](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fiam%2F%3Fstate%3DhashArgs%2523%26isauthcode%3Dtrue&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fiam&forceMobileApp=0&code_challenge=EGqQriHoUlLe6OR38jl__a6MnqZ3B8GFJZic2Djbytg&code_challenge_method=SHA-256).

- You will need one of the following details to login to IAM Console.
    - The account alias OR 12-digit AWS account ID.
    
    - The user name for your IAM user.
    
    - The password for your IAM user.

- If you are a root user or IAM administrator and need to provide the AWS account ID or AWS account alias to an IAM user, view Your AWS account ID and its alias.

- If you are an IAM user, you can log in using either a sign-in URL or the main sign-in page.

- In the navigation pane, choose **Users** and then choose **Add user**.  
      
    ![image 1-Nov-16-2023-10-37-34-4639-AM](./images-AWS%20S3%20Optimized/AWS-S3-Optimized-1.webp)  
      
    

- Enter the user name for the new user. This is the sign-in name for AWS S3.

- On the same screen, under "**Select AWS access type**", check the checkbox to enable **AWS Management Console access**.  
      
      
    ![image 2-Nov-16-2023-10-38-00-4815-AM](./images-AWS%20S3%20Optimized/AWS-S3-Optimized-2.webp)  
      
    

- Select **programmatic access** as access type for this user.

- Choose **Next: Permissions**.

- On the **Set permissions** page, specify how you want to assign permissions to this set of new users. Choose **Attach existing policies directly &gt; Create Policy**  
      
    

![image 3-Nov-16-2023-10-38-18-3247-AM](./images-AWS%20S3%20Optimized/AWS-S3-Optimized-3.webp)

- Create policy using [json method](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create-console.html#access_policies_create-json-editor)

- Following is the required policy in json format

```
{    "Version": "2012-10-17",    "Statement": [        {            "Effect": "Allow",            "Action": [                "sqs:DeleteMessage",                "s3:GetObject",                "sqs:ListQueues",                "sqs:GetQueueUrl",                "sqs:ReceiveMessage",                "sqs:GetQueueAttributes",                "s3:ListBucket"            ],            "Resource": "*"        }    ]}
```

- You can find the newly created policy in **Attach existing policies directly**

- Apply the policy to the IAM user.

- Click **Next** : **Tags** button  
      
      
    ![image 4-Nov-16-2023-10-38-50-4897-AM](./images-AWS%20S3%20Optimized/AWS-S3-Optimized-4.webp)  
      
    

- Add user tags for identification purpose and click **Next:Review** button.  
      
      
    ![image 5-Nov-16-2023-10-39-13-0557-AM](./images-AWS%20S3%20Optimized/AWS-S3-Optimized-5.webp)  
      
    

- Review all the configurations and click **Create user** button.  
      
      
    ![image 6-Nov-16-2023-10-39-33-7921-AM](./images-AWS%20S3%20Optimized/AWS-S3-Optimized-6.webp)  
      
    

- Click **Download .csv**, to download the key pair or click **Show** link under the Secret access key and then copy/save both the Access key ID and Secret access key.  
    In case of an already existing IAM user, create access keys using the steps mentioned here: [AWS Account and Access Keys](https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html)

In case of ingesting multiple service logs, there should be a separate account for every S3 bucket.

The supported log types are .json.gz, .log.gz, .txt.gz, .gz, .json, .txt, .log 

###### **Creating an Amazon SQS Queue**

Follow the steps to create and subscribe to an Amazon Simple Queue Service (Amazon SQS) queue.

- Open the Amazon SQS console at [https://console.aws.amazon.com/sqs/](https://console.aws.amazon.com/sqs/).

- Choose **Create queue**.

- On the **Create queue** page, specify the correct region.(Please select the same region as AWS S3 Bucket region)

- The **Standard** queue type is selected by default.

You can't change the queue type after you create a queue.

- Enter a **Name** for your queue.

- Scroll to the bottom and choose **Create Queue**. Amazon SQS creates the queue and displays the queue's **Details** page.

Amazon SQS propagates information about the new queue across the system. Because Amazon SQS is a distributed system, you may experience a slight delay before the queue is displayed on the **Queues** page.

- Replace the access policy attached to the queue with the following policy.
    - In the Amazon SQS console, in the **Queues** list, choose the queue name.
    
    - On the **Access policy** tab, choose **Edit**.
    
    - Replace the access policy attached to the queue with the following policy, updating the **Amazon SQS ARN** , **source bucket name** , and **bucket owner account ID**.

```
{  "Version": "2012-10-17",  "Id": "example-ID",  "Statement": [{ "Sid": "example-statement-ID", "Effect": "Allow", "Principal": { "Service": "s3.amazonaws.com"}, "Action": [ "SQS:SendMessage"],"Resource": "SQS-queue-ARN","Condition": {    "ArnLike": { "aws:SourceArn":"arn:aws:s3:*:*:awsexamplebucket1" },   "StringEquals": { "aws:SourceAccount": "bucket-owner-account-id" }   }  } ]}
```

- Get Amazon SQS ARN
    - Navigate to the SQS Queue Page
    
    - Select the queue you created
    
    - On queue's **Details** page, get the value **ARN** column

- **Source bucket name:** name of the bucket created above

- **Bucket owner account ID:**
    - The account ID of the user who created the S3 Bucket
    
    - How to get Account ID?
        - In the navigation bar, choose **Support** , and then **Support Center**. Your currently signed-in 12-digit account number (ID) appears in the **Support Center** navigation panel.

- Choose **Save**.

- Note the queue ARN
    - The SQS queue you created is another resource in your AWS account, and it has a unique Amazon Resource Name (ARN). You will need this ARN in the next step. The ARN will be of the following format:  
        arn:aws:sqs:\_aws-region\_:\_account-id\_:\_queue-name

For every bucket, there should be a separate SQS queue and the property of the bucket should be set accordingly. i.e. One connector will listen to only one bucket. In case data needs to be ingested from a different bucket, then a separate SQS Queue needs to be configured.

###### **Enabling and configuring event notifications using the Amazon S3 console**

To enable and configure event notifications for an S3 bucket

- Sign in to the AWS Management Console and open the Amazon S3 console at [https://console.aws.amazon.com/s3/](https://console.aws.amazon.com/s3/).

- In the **Buckets** list, choose the name of the bucket that you want to enable events for.

- Choose **Properties**.

- Navigate to the **Event Notifications** section and choose **Create event notification**.

- In the **General configuration** section, specify a descriptive event name for your event notification. Optionally, you can also specify a prefix and a suffix to limit the notifications to objects with keys ending in the specified characters.
    - Enter a description for the **Event name**.  
        If you don't enter a name, a globally unique identifier (GUID) is generated and used for the name.
    
    - To optionally filter event notifications by prefix, enter a **Prefix**.  
        For example, you can set up a prefix filter so that you receive notifications only when files are added to a specific folder (for example, images/).
    
    - To optionally filter event notifications by suffix, enter a **Suffix**.  
        For more information, see [Configuring event notifications using object key name filtering](https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-filtering.html).

- In the **Event types** section, select **All object create events** to receive notifications for all object creation event types.

- In the **Destination** section, choose the event notification destination.
    - Select the destination type: **SQS Queue**
    
    - After you choose your destination type, choose the queue from the list.

The list will show only the queues created in the same region as the S3 bucket.

- Choose **Save changes** , and Amazon S3 sends a test message to the event notification destination.

###### **Configurations**

The following are the configurations to forward AWS S3 Optimized Connector logs to DNIF.‌

![image 7-Nov-16-2023-10-40-12-7825-AM](./images-AWS%20S3%20Optimized/AWS-S3-Optimized-7.webp)

| **Field** | **Description** |
| --- | --- |
| Connector Name | Enter a name for the connector |
| Connector Type | Enter AWS S3 Optimized Connector |
| AWS Bucket Name | Enter the name of the AWS S3 Bucket |
| SQS Queue Name | Enter the name of Amazon SQS Queue |
| AWS Secret Access Key | Enter the AWS\_SECRET\_ACCESS\_KEY received from AWS S3 credentials |
| AWS Access Key ID | Enter the AWS\_SECRET\_ACCESS\_ID received from a AWS S3 credentials |
| Region | Select one region for the AWS S3 Bucket and SQS Queue   us-east-2   us-east-1   us-west-1   us-west-2   af-south-1   ap-east-1   ap-south-1   ap-northeast-3   ap-northeast-2   ap-southeast-1   ap-southeast-2   ap-northeast-1   ca-central-1   cn-north-1   cn-northwest-1   eu-central-1   eu-west-1   eu-west-2   eu-south-1   eu-west-3   eu-north-1   me-south-1   sa-east-1   us-gov-east-1   us-gov-west-1 |
| Number of Process (Optional) | Enter Number of processes, By default set to one |

- Click **Save**, to forward AWS S3 Optimized Connector logs to DNIF.‌

Once the connector is configured, validate if the connector is listed under **[Collection Status](https://dnif.it/kb/operations/collection-status/)** screen with status as **Active**. This signifies the connector is configured successfully and data is ready to ingest.
