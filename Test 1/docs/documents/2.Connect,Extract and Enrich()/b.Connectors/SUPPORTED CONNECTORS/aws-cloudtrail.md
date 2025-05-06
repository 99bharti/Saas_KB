---
title: "AWS CloudTrail"
date: 2025-02-04
type: "epkb_post_type_1"
---

AWS CloudTrail is a service that provides governance, compliance and operational and risk auditing for your AWS account. Events include actions taken in the AWS Management Console, AWS Command Line Interface, and AWS SDKs and APIs.

###### **Prerequisites**

- AWS Access key

- AWS Secret key

- AWS Region

###### **How to Derive the Prerequisites**

- Log in to the AWS Management Console
    - Navigate to [AWS Management Console](https://aws.amazon.com/console/).

- Go to the IAM Dashboard - In the search bar, type IAM and select the IAM service.  
      
    ![](./images-AWS%20CloudTrail/AWS-CloudTrail-1.png)  
      
      
    

- Create a New User
    - Under Access management, click on Users. 
    
    - Click on Add users. 
    
    - Provide a User name (e.g., cloudtrail-dnif-user).  
          
        ![](./images-AWS%20CloudTrail/AWS-CloudTrail-2.png)  
          
          
        ![](./images-AWS%20CloudTrail/AWS-CloudTrail-3.png)  
          
        

- Assign Permissions - Choose one of the following options
    - Attach policies directly : Select policy CloudTrailReadOnlyAccess, which is depending on the required access.
    
    - Copy permissions from existing user : Use an existing user with the desired permissions.  
          
        ![](./images-AWS%20CloudTrail/AWS-CloudTrail-4.png)  
          
        

- Review and Create - Review the configurations and click **Create user.**  
      
    ![](./images-AWS%20CloudTrail/AWS-CloudTrail-5.png)  
      
    

- Download the Access Key - After the user is created, you'll see the Access key ID and Secret access key. - Click Download .csv to save these credentials securely.

- **Note:** You won't be able to view the Secret Access Key again, so ensure you download or copy it securely.

###### **Configurations**

![](./images-AWS%20CloudTrail/AWS-CloudTrail-6.png)

  
Use the following fields to configure the AWS CloudTrail Connector in DNIF:  

| Field | Description |
| --- | --- |
| Connector Name | Provide a name for the connector. |
| AWS Access Key | Enter the Access Key for the respective being used for signing in. |
| AWS Secret Key | Enter the Secret Key generated for the selected user. |
| AWS Region | Enter the specific AWS region for which you want to fetch the logs |

- Click Save after entering all the required details and click Test Connection, to test the configuration.

- A Connection successful message will be displayed on screen along with the time stamp.

- If the connection is not successful, an error message will be displayed. Refer [Troubleshooting Connector Validations](https://dnif.it/kb/troubleshooting-and-debugging/troubleshooting-connector-validations/) for more details on the error message.
