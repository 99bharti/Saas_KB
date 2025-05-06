---
title: "AWS S3 Optimized Cross Account Connector"
date: 2025-01-20
type: "epkb_post_type_1"
---

AWS S3 Optimized Cross Account connector is a variant of the S3 Optimized Connector that reads logs from a configured S3 Bucket by leveraging S3 event notifications pushed to an "AWS SQS Queue". It varies in a way that we get limited access to your AWS account using an external role without you providing any credentials.

###### **Pre-requisites**

- Your DNIF Tenant ID (previously known as cluster id)

- AWS Role ARN with the required permissions

- AWS S3 bucket and SQS Queue must be in the same region

- Enabling and configuring event notifications using the Amazon S3 console

###### **Creating AWS Role ARN with the required permissions**

You can create one or more AWS Role to delegate access across AWS accounts using IAM roles  
For official documentation [Click here](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html)

1. Sign in to the AWS S3 Management Console and open the IAM console at [https://console.aws.amazon.com/iam/](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fiam%2F%3Fstate%3DhashArgs%2523%26isauthcode%3Dtrue&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fiam&forceMobileApp=0&code_challenge=EGqQriHoUlLe6OR38jl__a6MnqZ3B8GFJZic2Djbytg&code_challenge_method=SHA-256).

3. You will need the following details to log in to your IAM Console.
    1.  The account alias OR 12-digit AWS account ID.
    
    3. The user name for your IAM user.
    
    5. The password for your IAM user.  
        

5.  In the navigation pane, choose **Roles** and then choose **Create role**.

7. Choose **AWS account** as trusted entity type

9. For Account ID, type the following account ID (**DNIF PROD ACC ID**)

11. For an external ID please enter your DNIF tenant ID (previously known as cluster id) which can be seen in the URL of any page after you log in to your DNIF Console.  
      
    ![image 2](./images-AWS%20S3%20Optimized%20Cross%20Account%20Connector/AWS-S3-Optimized-Cross-Account-Connector-1.webp)  
      
    

13. Leave the rest of the options un-selected.  
      
      
      
    ![image 2-1](./images-AWS%20S3%20Optimized%20Cross%20Account%20Connector/AWS-S3-Optimized-Cross-Account-Connector-2.webp)  
      
    

15. Click on next to **add permissions** to this role

17. Create **a new policy** or attach **an existing policy** with the following permissions.  
      
    ```json {'
    {  
    "Version": "2012-10-17",  
    "Statement": \[  
    {  
    "Sid": "CT",  
    "Effect": "Allow",  
    "Action": \[  
    "cloudtrail:\*"  
    \],  
    "Resource": "\*"  
    },  
    {  
    "Sid": "readbucket",  
    "Effect": "Allow",  
    "Action": \[  
    "s3:GetObject"  
    \],  
    "Resource": "arn:aws:s3:::\*/\*"  
    },  
    {  
    "Sid": "VPC",  
    "Effect": "Allow",  
    "Action": \[  
    "ec2:DescribeVpcs",  
    "ec2:DescribeFlowLogs"  
    \],  
    "Resource": "\*"  
    },  
    {  
    "Sid": "S3",  
    "Effect": "Allow",  
    "Action": \[  
    "s3:ListBucket",  
    "s3:ListAllMyBuckets",  
    "s3:GetBucketLogging",  
    "s3:GetBucketNotification",  
    "s3:GetBucketLocation"  
    \],  
    "Resource": "arn:aws:s3:::\*"  
    },  
    {  
    "Sid": "SQS",  
    "Effect": "Allow",  
    "Action": \[  
    "sqs:DeleteMessage",  
    "sqs:ListQueues",  
    "sqs:GetQueueUrl",  
    "sqs:ReceiveMessage",  
    "sqs:GetQueueAttributes"  
    \],  
    "Resource": "arn:aws:sqs:\*:\*:\*"  
    }  
    \]  
    }'
    ```
      
      
    }![image 3](./images-AWS%20S3%20Optimized%20Cross%20Account%20Connector/AWS-S3-Optimized-Cross-Account-Connector-3.webp)  
      
      
    ![image 4](./images-AWS%20S3%20Optimized%20Cross%20Account%20Connector/AWS-S3-Optimized-Cross-Account-Connector-4.webp)  
      
      
    ![](./images-AWS%20S3%20Optimized%20Cross%20Account%20Connector/AWS-S3-Optimized-Cross-Account-Connector-5.webp)  
      
    

19. Attach this newly created policy to the role  
      
    ![image 6](./images-AWS%20S3%20Optimized%20Cross%20Account%20Connector/AWS-S3-Optimized-Cross-Account-Connector-6.webp)  
    

21. Name, review and finish creating this role.  
      
      
    ![image 7](./images-AWS%20S3%20Optimized%20Cross%20Account%20Connector/AWS-S3-Optimized-Cross-Account-Connector-7.webp)  
      
      
    

23. Name, review and finish creating this role.![image 8](./images-AWS%20S3%20Optimized%20Cross%20Account%20Connector/AWS-S3-Optimized-Cross-Account-Connector-8.webp)  
      
    

25. **Note the ARN** of this newly created role.

###### **Creating an Amazon SQS Queue**

Follow the steps to create and subscribe to an Amazon Simple Queue Service (Amazon SQS) queue.

1. Open the Amazon SQS console at [https://console.aws.amazon.com/sqs/](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fsqs%2Fv2%2Fhome%3Fstate%3DhashArgs%2523%26isauthcode%3Dtrue&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fsqs&forceMobileApp=0&code_challenge=xYP5Tn8-Y_uCaFBc6IfdLUAFEnzN2WKLAan8kOcT9gs&code_challenge_method=SHA-256).

3. Choose Create queue.

5. On the Create queue page, specify the correct region. (Please select the same region as AWS S3 Bucket region)

7. Choose the Standard queue type.

9. Enter a Name for your queue and choose Create Queue.

11. Find the newly created queue and replace the access policy attached to the queue with the following policy.
    1. Choose the queue name in the Amazon SQS console in the Queues list.
    
    3. On the Access policy tab, choose Edit.
    
    5. Replace the access policy attached to the queue with the following policy, updating the Amazon SQS ARN, source bucket name, and bucket owner account ID.

```
{ "Version": "2012-10-17", "Id": "example-ID", "Statement": [  {   "Sid": "example-statement-ID",   "Effect": "Allow",   "Principal": {    "Service": "s3.amazonaws.com"     },   "Action": [    "SQS:SendMessage"   ],   "Resource": "SQS-queue-ARN",   "Condition": {      "ArnLike": { "aws:SourceArn": "arn:aws:s3:*:*:awsexamplebucket1" },      "StringEquals": { "aws:SourceAccount": "bucket-owner-account-id" }   }  } ]}
```

###### **Enabling and configuring event notifications using the Amazon S3 console**

To enable and configure event notifications for the target S3 bucket

1. Sign in to the AWS Management Console and open the Amazon S3 console at [https://console.aws.amazon.com/s3/](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fus-east-1.console.aws.amazon.com%2Fs3%2F%3Fregion%3Dus-east-1%26state%3DhashArgs%2523%26isauthcode%3Dtrue&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fs3&forceMobileApp=0&code_challenge=zeckpQi9kn0dIyjalsIXjX3c5fAIv1MfrhaNmbJpDIU&code_challenge_method=SHA-256).

3. In the Buckets list, choose the name of the bucket you want to enable events for.

5. Choose Properties.

7. Navigate to the Event Notifications section and choose Create event notification.

9. In the General configuration section, specify a descriptive event name for your event notification. Optionally, you can specify a prefix and a suffix to limit the notifications to objects with keys ending in the specified characters.
    1. Enter a description for the Event name: If you don't enter a name, a globally unique identifier (GUID) is generated and used for the name.
    
    3. To optionally filter event notifications by prefix, enter a Prefix. For example, you can set up a prefix filter so that you receive notifications only when files are added to a specific folder (for example, images/).
    
    5. To optionally filter event notifications by suffix, enter a Suffix. For more information, see [Configuring event notifications using object key name filtering](https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-filtering.html).

11. In the Event types section, select All object create events to receive notifications for all object creation event types.

13. In the Destination section, choose the event notification destination.
    1. Select the destination type: SQS Queue
    
    3. After you choose your destination type, choose the queue from the list. **Note**: the list will show only the queues created in the same region as the S3 bucket.

15. Choose **Save** changes, and Amazon S3 sends a test message to the event notification destination.

###### **Configurations**

The following are the configurations to forward AWS S3 Optimized Cross Account Connector logs to DNIF.‌

![image 9](./images-AWS%20S3%20Optimized%20Cross%20Account%20Connector/AWS-S3-Optimized-Cross-Account-Connector-9.webp)

| **Field Name** | **Description** |
| --- | --- |
| Connector Name | Enter a name for the connector |
| Connector Type | Enter AWS S3 Optimized Cross Account Connector |
| AWS Role ARN | Enter the ARN of Amazon Role |
| SQS Queue Name | Enter the name of Amazon SQS Queue |
| Region | Select one region for the AWS S3 Bucket and SQS Queue   us-east-2   us-east-1   us-west-1   us-west-2   af-south-1   ap-east-1   ap-south-1   ap-northeast-3   ap-northeast-2   ap-southeast-1   ap-southeast-2   ap-northeast-1   ca-central-1   cn-north-1   cn-northwest-1   eu-central-1   eu-west-1   eu-west-2   eu-south-1   eu-west-3   eu-north-1   me-south-1   sa-east-1   us-gov-east-1   us-gov-west-1 |
| Number of Process (Optional) | Enter Number of processes. By default set to one |

- Click **Save**, to forward AWS S3 Optimized Cross Account Connector logs to DNIF.‌
