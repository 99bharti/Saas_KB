---
title: "March 25th, 2025- Content Update"
date: 2025-03-27
type: "epkb_post_type_1"
---

We are committed to continuously strengthening security operations for our customers through our innovative **DARC Vault** releases. Just like Microsoft's Patch Tuesday, the DARC Vault serves as a reliable source for enhanced security content, enabling our users to stay ahead of evolving threats.

We deliver the latest Out-Of-The-Box (OOTB) content that not only introduces brand-new capabilities but also enhances existing detections. This time, we are excited to announce a significant update focused on AWS Config, RDS and ELB.

Below is a summary of the new additions and improvements:

## **Summary of Improvements**

| **Content Type** | **Actions** | **Count** |
| --- | --- | --- |
| **Detections** | New | 12 |
| Enhanced | 72 |
| **Dashboards** | New | 5 |
| **Reports** | New | 7 |

### **New Detections**

| **#** | **Name** | **Description** | **Run Type** | **Active / Inactive** |
| --- | --- | --- | --- | --- |
| 1 | AWS Config Custom Resource Items Deletion Threshold | This detection monitors the deletion of resource configurations in AWS Config, specifically targeting custom resource types. Deleting resource configurations could indicate an attempt to manipulate or destroy important resource data, which may be a sign of malicious activity or mismanagement. | off | Active |
| 2 | AWS Config Stored Query Deletion Threshold | This detection monitors the deletion of stored queries in AWS Config. Deleting stored queries could indicate attempts to hide compliance status or misconfigurations related to security monitoring. It's essential to track such activities to prevent potential unauthorized actions. | off | Active |
| 3 | AWS Config External Evaluation Update Threshold | This detection monitors the use of the AWS Config API action "PutExternalEvaluation," which is used to report the results of external evaluations (such as from custom compliance checks). Multiple calls in a short time could indicate automation or suspicious activity, such as repeated evaluation attempts or unusual behavior. | off | Active |
| 4 | AWS ELB Invalid Header Dropping Disabled | This use case detects when the AWS Elastic Load Balancer (ELB) configuration is modified to disable the dropping of invalid HTTP headers. This setting, when set tofalse, allows malformed or potentially malicious HTTP requests to pass through, increasing the risk of security vulnerabilities such as header injection, request smuggling, and other web-based attacks. | off | Active |
| 5 | AWS ELB Security Group Modification | This use case detects modifications to security groups associated with AWS Elastic Load Balancers (ELBs). Unauthorized changes to load balancer security groups can expose critical services to unauthorized access or potential cyberattacks. Monitoring such modifications helps ensure that only authorized users update security configurations. | off | Active |
| 6 | AWS ELB Houdini Iniduoh njRAT User-Agent | User-Agent strings used by Houdini/Iniduoh/njRAT malware. | off | Active |
| 7 | AWS ELB HTTP Requests from Security Scanner | This detection focuses on identifying HTTP requests to AWS Elastic Load Balancers (ELB) that originate from known security scanners or suspicious user agents. These requests may indicate reconnaissance or scanning activities targeting your infrastructure. | off | Active |
| 8 | AWS RDS Security Group Modification | AWS RDS Security Group Modification involves changes to security groups, such as altering access rules or creating/deleting groups, which control network access to RDS instances. Monitoring these modifications ensures proper security. | off | Active |
| 9 | AWS RDS Instance Public Restoration | AWS RDS Instance Public Restoration refers to the process of restoring an RDS instance from a snapshot that is publicly accessible. This can potentially expose sensitive data to unauthorized users if not properly controlled. Monitoring this action helps ensure that data restoration does not unintentionally make an RDS instance publicly accessible. | off | Active |
| 10 | AWS RDS Credential Access Password Reset | AWS RDS Credential Access Password Reset is the process of changing the password for an RDS instance's master user or credentials, often for security or access recovery purposes. Monitoring this event helps detect unauthorized changes. | off | Active |
| 11 | AWS RDS Snapshot shared with another account | AWS RDS Snapshot Shared with Another Account refers to the process of making an RDS snapshot accessible to another AWS account. This action allows other users or accounts to restore the snapshot, potentially accessing sensitive data. Monitoring this activity ensures that snapshots are not shared unintentionally, which could pose security risks. | off | Active |
| 12 | AWS RDS Manual or Public Snapshot Created | Detection of AWS RDS Manual or Public Snapshot Created identifies when a user manually creates a snapshot or makes it publicly available, helping ensure security and compliance by monitoring potential data exposure. | off | Active |

### **New Dashboards**

| **Name** |
| --- |
| AWS - Config - Monitoring Insights |
| AWS - ELB - Monitoring Insights |
| AWS - ELB - Security Insights |
| AWS - RDS - Monitoring Insights |
| AWS - RDS - Security Insights |

### **New Reports**

| **Name** |
| --- |
| AWS - Config - Operations Monitoring |
| AWS - ELB - Monitoring Insights |
| AWS - ELB - Security Monitoring |
| AWS - RDS - Monitoring Insights |
| AWS - RDS - Security Insights |

### **Enhanced Detections**

| **#** | **Name** | **Run Type** | **Active / Inactive** |
| --- | --- | --- | --- |
| 1 | Timestomping using Touch Command | streamed | Active |
| 2 | System Log File Modification | streamed | Active |
| 3 | Sudoers File Modification | streamed | Active |
| 4 | Socat Process Activity | streamed | Active |
| 5 | Setgid Bit Set via chmod | streamed | Active |
| 6 | User Discovery via Whoami | streamed | Active |
| 7 | Base64 Encoding or Decoding Activity | streamed | Active |
| 8 | Virtual Machine Fingerprinting | streamed | Active |
| 9 | Potential DNS Tunneling via Iodine | streamed | Active |
| 10 | Connection to Internal Network via Telnet | streamed | Active |
| 11 | Setuid Bit Set via chmod | streamed | Active |
| 12 | RDP Hijacking Tool Detected | streamed | Active |
| 13 | Connection to External Network via Telnet | streamed | Active |
| 14 | Strace Process Activity | streamed | Active |
| 15 | Base16 Base32 and Base64 Encoding or Decoding Activity | streamed | Active |
| 16 | Suspicious Bitsadmin Job Via BitsAdmin Exe | off | Active |
| 17 | Netsh Program Allowed with Suspcious Location | off | Active |
| 18 | Suspicious Esentutl Use | off | Active |
| 19 | Stop Windows Service | off | Active |
| 20 | Ransomware Decryption Instructions Created | off | Active |
| 21 | Suspicious Eventlog Clear or Configuration Using Wevtutil | off | Active |
| 22 | Net exe Execution | streamed | Active |
| 23 | Lsass Process Connected to a Pipe | off | Active |
| 24 | PowerShell DownloadFile | off | Active |
| 25 | Tap Installer Execution | off | Active |
| 26 | New Service Creation | off | Active |
| 27 | Possible Modification of Boot Configuration | off | Active |
| 28 | System Information Discovery Detection | off | Active |
| 29 | Processes launching netsh | off | Active |
| 30 | Windows Mangement Instrumentation DLL Loaded Via Microsoft Word | off | Active |
| 31 | Windows Network Enumeration | off | Active |
| 32 | WMI Persistence - Command Line Event Consumer | off | Active |
| 33 | Possible Privilege Escalation via Weak Service Permissions | off | Active |
| 34 | WMI Modules Loaded | off | Active |
| 35 | WMI Backdoor Exchange Transport Agent | off | Active |
| 36 | Process Dump via Comsvcs DLL | off | Active |
| 37 | Ping Hex IP | off | Active |
| 38 | Remote Email collection detection via Powershell | off | Active |
| 39 | Windows Security Account Manager Stopped | streamed | Active |
| 40 | Trickbot Malware Recon Activity | off | Active |
| 41 | Possible Bitsadmin Download Detected | off | Active |
| 42 | XSL Script Processing | off | Active |
| 43 | PowerShell Encoded Character Syntax | off | Active |
| 44 | Network Sniffing Detected | off | Active |
| 45 | VBA DLL Loaded Via Microsoft Word | off | Active |
| 46 | Suspicious Commandline Escape | off | Active |
| 47 | Load of dbghelp or dbgcore DLL from Suspicious Process | off | Active |
| 48 | Possible App Whitelisting Bypass via WinDbg CDB as a Shellcode Runner | off | Active |
| 49 | Remote Access Software Usage with Powershell | off | Active |
| 50 | Suspicious Access to lsass Process | off | Active |
| 51 | Query Registry Detected | off | Active |
| 52 | USN Journal Deletion | streamed | Active |
| 53 | Sc exe Manipulating Windows Services | off | Active |
| 54 | Microsoft Office Product Spawning Windows Shell | off | Active |
| 55 | Renamed PowerShell | off | Active |
| 56 | Malicious PowerShell Process - Encoded Command | off | Active |
| 57 | Suspicious Double Extension | off | Active |
| 58 | Suspicious Csc exe Source File Folder | off | Active |
| 59 | Malicious PowerShell Process - Connect To Internet With Hidden Window | off | Active |
| 60 | Suspicious AdFind Execution | off | Active |
| 61 | Modification of Boot Configuration | off | Active |
| 62 | Process Execution via WMI | off | Active |
| 63 | Malicious Service Installed | off | Active |
| 64 | Reg exe Manipulating Windows Services Registry Keys | off | Active |
| 65 | RedMimicry Winnti Playbook Execute | off | Active |
| 66 | Reconnaissance Activity with Net Command | off | Active |
| 67 | Authentication Package Detected | off | Active |
| 68 | AppCert DLLs Detected | off | Active |
| 69 | Registry New RUN Key Pointing to Suspicious Folder Detected | off | Active |
| 70 | Registry Local Port Monitor | off | Active |
| 71 | Disabling Remote User Account Control | off | Active |
| 72 | Accessibility Features-Registry | off | Active |
