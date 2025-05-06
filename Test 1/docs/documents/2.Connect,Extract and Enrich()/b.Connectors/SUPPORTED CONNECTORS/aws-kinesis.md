---
title: "AWS Kinesis"
date: 2025-01-20
type: "epkb_post_type_1"
---

Amazon Kinesis Data Streams are used to collect and process large streams of data records in real time. AWS Kinesis Connector consumes data records from Kinesis Data Streams. For more information on AWS Kinesis [Click Here](https://docs.aws.amazon.com/streams/latest/dev/introduction.html).

###### **Prerequisites**

- Your own application that pushes data directly into a Kinesis data stream. The type of data pushed can include IT infrastructure log data, application logs, etc.

This application is to be made on your end please refer to this [link](https://docs.aws.amazon.com/kinesis/latest/APIReference/API_CreateStream.html) while creating it. Use of any given SDK in this link is recommended.

- Required credentials:
    - AWS\_SECRET\_ACCESS\_KEY
    
    - AWS\_ACCESS\_KEY\_ID

###### **Creating IAM users with programmatic access**  

- In the navigation pane, choose Users and then choose Add user.  
      
    ![image 1-Nov-16-2023-10-22-54-6987-AM](./images-AWS%20Kinesis/AWS-Kinesis-1.webp)  
      
    

- Enter the user name for the new user.

- On the same screen, under **Select AWS access type**, check the checkbox to enable **programmatic access**.

![image 2-Nov-16-2023-10-23-14-4133-AM](./images-AWS%20Kinesis/AWS-Kinesis-2.webp)

- Choose **Next: Permissions**.

- On the Set permissions page, specify how you want to assign permissions to this set of new users. Choose **Attach existing policies directly &gt; Create Policy**  
      
      
    ![image 3-Nov-16-2023-10-24-04-8310-AM](./images-AWS%20Kinesis/AWS-Kinesis-3.webp)  
      
    

- Create policy using [json method](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create-console.html#access_policies_create-json-editor)

- Following is the required policy in JSON format

```
{    "Version": "2012-10-17",    "Statement": [        {            "Effect": "Allow",            "Action": [                "kinesis:CreateStream",                "kinesis:DeleteStream",                "kinesis:Put*",                "kinesis:Get*",                "kinesis:DescribeStreamSummary",                "kinesis:DescribeStream"            ],            "Resource": [                "*"            ]        }    ]}
```

The Kinesis permissions for CreateStream, DeleteStream and Put\* are not needed by the AWS Kinesis connector but are necessary for the application that you may use to push data on the stream which is described in the prerequisites section above.

- You can find the newly created policy in Attach existing policies directly

- Apply the policy to the IAM user.

- Click Next: Tags button  
      
      
    ![image 4-Nov-16-2023-10-26-22-6713-AM](./images-AWS%20Kinesis/AWS-Kinesis-4.webp)  
      
    

- Add user tags for identification purposes and click on Next:Review button.

![image 5-Nov-16-2023-10-26-51-4616-AM](./images-AWS%20Kinesis/AWS-Kinesis-5.webp)

- Review all the configurations and click Create user button.  
    

![image 6-4](./images-AWS%20Kinesis/AWS-Kinesis-6.webp)

- Click on the Download .csv button to download the key pair or click on Show link under the Secret access key and then copy/save both the Access key ID and Secret access key.

In case of an already existing IAM user, create access keys using the steps mentioned here: [AWS Account and Access Keys](https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html)

###### **Configurations**

The following are the configurations to forward AWS Kinesis stream records to DNIF.‌

![image 7-3](./images-AWS%20Kinesis/AWS-Kinesis-7.webp)

| **Field**  | **Description** |
| --- | --- |
| Connector Name | Enter a name for the connector |
| Stream Name | Enter Kinesis data stream name to consume records |
| Region Name | Region Name in which the stream was created. |
| Records Limit | Number of records to pull per query (Max 10000) |
| AWS Secret Access Key | Enter the AWS\_SECRET\_ACCESS\_KEY received from AWS IAM account |
| AWS Access Key ID | Enter the AWS\_SECRET\_ACCESS\_ID received from AWS IAM account |

- Click **Save** after entering all the required details and click **Test Connection**, to test the configuration.

- A **Connection successful** message will be displayed on screen along with the time stamp.

- If the connection is not successful an error message will be displayed. Refer [Troubleshooting Connector Validations](https://dnif.it/kb/troubleshooting-and-debugging/troubleshooting-connector-validations/) for more details on the error message.

Once the connector is configured, validate if the connector is listed under **[Collection Status](https://dnif.it/kb/operations/collection-status/)** screen with status as **Active**. This signifies the connector is configured successfully and data is ready to ingest.
