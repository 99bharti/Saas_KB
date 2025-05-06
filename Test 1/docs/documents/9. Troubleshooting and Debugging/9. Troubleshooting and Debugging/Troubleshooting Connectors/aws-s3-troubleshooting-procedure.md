---
title: "AWS S3 (Troubleshooting Procedure)"
date: 2025-01-17
type: "epkb_post_type_1"
---

This document includes troubleshooting recommendations and procedures that can help you solve problems arising from the configuration and usage of connectors.

Perform the following checks:

1. Ensure the following prerequisites are met.
    - Connectivity with AWS S3 bucket using valid credentials [Creating an IAM user in your AWS account](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html)
    
    - The policy created is in json key type while creating IAM User. [Access Policies- JSON Method](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create-console.html#access_policies_create-json-editor)
    
    - The users associated with the IAM user or role have the correct permissions to access Amazon S3. [How to restrict amazon-s3 bucket access to a specific IAM role?](https://aws.amazon.com/blogs/security/how-to-restrict-amazon-s3-bucket-access-to-a-specific-iam-role/)

3. Check connectivity between Client and Amazon S3 server, if duration remains idle for 20 seconds or longer, the connection is closed. [Connection-Timeout-Error](https://aws.amazon.com/premiumsupport/knowledge-center/cloudhsm-connection-invalid-errors/)

5. Check if AWS S3 Endpoint URL is reachable, if connection is unsuccessful, an error prompts displaying Could not connect to the endpoint URL. In such scenario,
    - Confirm that you are using the correct AWS Region and Amazon S3 endpoint.
    
    - Verify your network can connect to the Amazon S3 endpoints.
    
    - Verify your DNS can resolve the Amazon S3 endpoints issue.

7. Verify your network firewall allows traffic to Amazon S3 endpoints, the port that you are using for Amazon S3 traffic.

9. Check if a firewall or the network could be preventing inbound traffic to any AWS service.

11. Verify if the credentials entered are proper while configuring the AWS S3 bucket on the Console.
