---
title: "January 29, 2025 - Content update"
date: 2025-01-28
type: "epkb_post_type_1"
---

We are committed to continuously strengthening security operations for our customers through our innovative **DARC Vault** fortnightly releases. Just like Microsoft's Patch Tuesday, the DARC Vault serves as a reliable source for enhanced security content, enabling our users to stay ahead of evolving threats.

Each fortnight, we deliver the latest Out-Of-The-Box (OOTB) content that not only introduces brand-new capabilities but also enhances existing detections. This fortnight, we are excited to announce a significant update focused on AWS S3, VPC and RBI Compliance.

Below is a summary of the new additions and improvements:

## **Summary of Fortnightly Improvements**

| **Content Type** | **Actions** | **Count** |
| --- | --- | --- |
| **Detections** | New | 17 |
| Enhanced | 29 |
| **Dashboards** | New | 4 |
| **Reports** | New | 12 |

### **New Detections**

| **#** | **Name** | **Description** | **Run Type** | **Active / Inactive** |
| --- | --- | --- | --- | --- |
| 1 | AWS S3 Bucket Encryption Modified | Detected modification of bucket encryption. An attacker could modify the encryption of existing buckets, potentially leading to denial of service (DoS) attacks. | Standard | Active |
| 2 | AWS S3 Houdini Iniduoh njRAT User-Agent | User-Agent strings used by Houdini/Iniduoh/njRAT malware. | Standard | Active |
| 3 | AWS S3 Bucket Versioning Disabled | Identifies when object versioning is suspended for an Amazon S3 bucket. Object versioning allows for multiple versions of an object to exist in the same bucket, aiding in easy recovery of deleted or overwritten objects. Suspending versioning could signal an attempt by an adversary to inhibit system recovery following malicious activity. Additionally, suspension enables the possibility of bucket deletion. | Standard | Active |
| 4 | AWS Exfiltration via DataSync Task | This detection identifies the creation of an AWS DataSync task, potentially indicating data exfiltration. The detection uses AWS CloudTrail logs to pinpoint theCreateTaskevent from the DataSync service. This activity is significant as attackers could exploit DataSync to transfer sensitive data from a private AWS location to a public one, leading to data breaches and compliance violations. | Standard | Active |
| 5 | AWS S3 Bucket Server Access Logging Disabled | Identifies when server access logging is disabled for an Amazon S3 bucket. Server access logs provide a detailed record of requests made to an S3 bucket. When server access logging is disabled for a bucket, it could indicate an adversary’s attempt to impair defenses by disabling logs that contain evidence of malicious activity. | Standard | Active |
| 6 | AWS S3 Insecure Access | Checks for S3 access attempts where the requester is not an authenticated AWS user. | Standard | Active |
| 7 | AWS S3 Bucket Policy Added to Share with External Account | Identifies an AWS S3 bucket policy change to share permissions with an external account. Adversaries may attempt to backdoor an S3 bucket by sharing it with an external account. This can be used to exfiltrate data or provide access to other adversaries. | Standard | Active |
| 8 | AWS S3 Bucket Public Access Modified | Detects when GetPublicAccessBlock returns NoSuchPublicAccessBlockConfiguration, indicating that the public access block has all values set to false or the feature is disabled. | Standard | Active |
| 9 | AWS S3 Exfiltration via Bucket Replication | This use case detects API calls enabling S3 bucket replication services through AWS CloudTrail logs. It focuses on identifyingPutBucketReplicationevents and analyzing fields such asbucketName,ReplicationConfiguration.Rule.Destination.Bucket, and user details. Such activities may indicate unauthorized replication attempts, potentially leading to data breaches or compliance violations. | Standard | Active |
| 10 | AWS S3 Object Encryption Using External KMS Key | Identifies CopyObject events within an S3 bucket using an AWS KMS key from an external account for encryption. Adversaries with access to a misconfigured S3 bucket and the proper permissions may encrypt objects with an external KMS key to deny their victims access to their own data. | Standard | Active |
| 11 | SMB Traffic over multiple Ports | SMB (Server Message Block) traffic is used for file sharing, printer sharing, and other network services in Windows environments. It can occur over various ports, including137(UDP),138(UDP),139(TCP), and445(TCP). Port 445 is commonly used for modern SMB communication, while the others are associated with NetBIOS, primarily supporting legacy SMB configurations. Monitoring and analyzing traffic on these ports can help detect unauthorized or suspicious SMB activity, particularly in Amazon VPC environments. | Standard | Active |
| 12 | Anomalous Short Connections | In the context of AWS VPC, a high volume of short connections refers to a large number of brief network connections established and terminated rapidly, which can challenge the VPC’s scalability and performance, particularly in services like load balancers or EC2 instances. Proper architecture and scaling strategies are required to manage such traffic efficiently. | Standard | Active |
| 13 | Outbound Traffic over IRC Ports | Detects Outbound traffic over IRC ports (6660-6669, 7000, 194 TCP) in AWS VPC flow logs indicates communication with IRC servers. This could be legitimate usage for IRC chat services or indicative of malicious botnet activity. Continuous monitoring of this traffic is crucial for identifying potential security threats. | Standard | Active |
| 14 | Large Outbound ICMP Packets | Large outbound ICMP packets in AWS VPC flow logs suggest a significant volume of data being transmitted via ICMP, which is typically used for network diagnostics (e.g., ping). This could indicate network issues, potential data exfiltration, or malicious activity such as DDoS attacks. Monitoring this traffic is crucial for identifying abnormal or suspicious behavior that may be indicative of an ongoing attack. | Standard | Active |
| 15 | Internal Horizontal Port Scan | This detection focuses on identifying internal horizontal port scans within an Amazon VPC (Virtual Private Cloud). A horizontal port scan occurs when a source IP attempts to connect to multiple destination IPs, often to identify open services or vulnerabilities. Monitoring such activity can help detect malicious behavior, such as reconnaissance by an attacker or misconfigured systems generating excessive traffic. | Standard | Active |
| 16 | Excessive Reject Requests | Excessive reject requests in AWS VPC flow logs often indicate misconfigurations in security groups, NACLs, or potential malicious activities such as unauthorized access attempts or attacks. Monitoring these logs allows organizations to identify potential security risks or network misconfigurations that may lead to denied network traffic. | Standard | Active |
| 17 | Anomalous Traffic by SrcIP | This detection identifies anomalous traffic originating from public IPs associated with the "AMAZON-VPC" source. It leverages statistical outlier detection to highlight source IPs generating unusually high volumes of traffic towards private destinations within a one-day period. | Standard | Active |

### **New Dashboards**

| **Name** |
| --- |
| AWS - S3 - Monitoring Insights |
| AWS - S3 - Security Insights |
| AWS - VPC - Monitoring Insights |
| AWS - VPC - Security Insights |

### **New Reports**

| **Name** |
| --- |
| AWS - S3 - Monitoring Insights |
| AWS - S3 - Security Insights |
| AWS - VPC - Monitoring Insights |
| AWS - VPC - Security Insights |
| Advance Monitoring Report |
| Audit Trail Monitoring Report |
| Data and Endpoint Security Report |
| Quaterly Threat Summary Report |
| Security Event and Threat Summary Report |
| Threat Feed Correlation Report |
| Threat Monitoring Report |
| Threat Reponse Time Report |

### **Enhanced Detections**

| **#** | **Name** | **Run Type** | **Active / Inactive** |
| --- | --- | --- | --- |
| 1 | Chafer Malware URL Pattern | off | Active |
| 2 | Dump LSASS via comsvcs DLL | auto-scheduled | Active |
| 3 | VNC from the Internet | streamed | Active |
| 4 | TCP Port 8000 Activity to the Internet | off | Active |
| 5 | Telnet Port Activity | off | Active |
| 6 | Tor Activity to the Internet | streamed | Active |
| 7 | AWS Lambda Function Created or Invoked | off | Active |
| 8 | AWS Config Disabling Channel Recorder | off | Active |
| 9 | AWS S3 Data Management Tampering | off | Active |
| 10 | AWS EKS Cluster Created or Deleted | off | Active |
| 11 | AWS ElastiCache Security Group Modified or Deleted | off | Active |
| 12 | Restore Public AWS RDS Instance | off | Active |
| 13 | AWS EC2 Download Userdata | off | Active |
| 14 | AWS Snapshot Backup Exfiltration | off | Active |
| 15 | AWS CloudTrail Important Change | off | Active |
| 16 | Changes to internet facing AWS RDS Database instances | off | Active |
| 17 | AWS EC2 Disable EBS Encryption | off | Active |
| 18 | AWS GuardDuty Important Change | off | Active |
| 19 | AWS EFS Fileshare Mount Modified or Deleted | off | Active |
| 20 | AWS Suspicious SAML Activity | off | Active |
| 21 | AWS RDS Master Password Change | off | Active |
| 22 | AWS EC2 VM Export Failure | off | Active |
| 23 | AWS EC2 Startup Shell Script Change | off | Active |
| 24 | AWS SecurityHub Findings Evasion | off | Active |
| 25 | AWS EFS Fileshare Modified or Deleted | off | Active |
| 26 | AWS Macie Evasion | off | Active |
| 27 | Changes made to AWS CloudTrail logs | off | Active |
| 28 | Multiple Failed API Requests From Same Source IP | off | Active |
| 29 | AWS Glue Development Endpoint Activity | off | Active |
