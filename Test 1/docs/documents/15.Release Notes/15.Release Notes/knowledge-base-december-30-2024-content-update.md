---
title: "December 30, 2024 - Content Update"
date: 2025-01-15
type: "epkb_post_type_1"
---

We are committed to continuously strengthening security operations for our customers through our innovative **DARC Vault** fortnightly releases. Just like Microsoft's Patch Tuesday, the DARC Vault serves as a reliable source for enhanced security content, enabling our users to stay ahead of evolving threats.

Each fortnight, we deliver the latest Out-Of-The-Box (OOTB) content that not only introduces brand-new capabilities but also enhances existing detections. This fortnight, we are excited to announce a significant update focused on Cloudflare and VMWare Esxi.

Below is a summary of the new additions and improvements:

## **Summary of Fortnightly Improvements**

| **Content Type** | **Actions** | **Count** |
| --- | --- | --- |
| **Detections** | New | 27 |
| Enhanced | 26 |
| **Dashboards** | New | 4 |
| **Reports** | New | 4 |

### **New Detections**

| **#** | **Name** | **Description** |
| --- | --- | --- |
| 1 | Repetitive Cloudflare Protocol Violation | This detection identifies repetitive violations of Cloudflare's application-layer protocol rules, such as repeated invalid HTTP methods or malformed requests. |
| 2 | Server-Side Code Injection in URL | Detects malicious attempts to inject server-side code (e.g., SQL, JavaScript) via the URL to execute unauthorized actions or exfiltrate data. |
| 3 | HTTP Response Error Spike | This detection identifies spikes in HTTP error responses (e.g., 4xx or 5xx codes) that could indicate application-layer attacks, misconfigurations, or system issues. |
| 4 | Executable File Downloaded without Hostname or Referer | Detects instances where executable files (e.g., \`.exe\`, \`.dll\`) are downloaded without accompanying \`Host\` or \`Referer\` headers. This could indicate attempts to bypass detection mechanisms or direct malicious file downloads. |
| 5 | Empty User Agent | This detection identifies HTTP requests with an empty \`UserAgent\` field, which could indicate the use of non-standard clients, malicious scripts, or unauthorized tools attempting to bypass detection. |
| 6 | Hexadecimal User Agent | This detection identifies HTTP requests where the \`UserAgent\` contains hexadecimal patterns, which may indicate automated tools or malicious scripts attempting to obfuscate their identity. |
| 7 | Custom Cloudflare HTTP Request User Enumeration | This detection identifies attempts to enumerate user accounts or endpoints via HTTP requests with patterns such as predictable usernames, sequential IDs, or common paths. |
| 8 | Excessive Firewall Blocks | This detection identifies source IPs that trigger an unusually high number of firewall blocks within a short period. This could indicate malicious activity such as brute-force attempts, network reconnaissance, or a misconfigured system generating excessive requests. |
| 9 | Houdini Iniduoh njRAT User Agent | Detects HTTP requests with known malicious UserAgent strings associated with Houdini or njRAT, which are Remote Access Trojans (RATs) used for data exfiltration and command-and-control activities. |
| 10 | Cloudflare Bot High Volume | This detection identifies an unusually high volume of HTTP requests from known or suspected bots. While some bot activity is legitimate, excessive requests can strain resources or indicate abuse. |
| 11 | Github Raw URL Resource Request | Detects HTTP requests targeting resources hosted on GitHub's \`raw.githubusercontent.com\`, which could indicate attempts to download malicious scripts or payloads. |
| 12 | Microsoft CHM File Observed | This detection identifies HTTP requests where a \`.chm\` (Compiled HTML Help) file is accessed or downloaded. These files can be exploited for malicious purposes, such as delivering malware or exploiting vulnerabilities in the help system. |
| 13 | Multiple User Agents in a Short Time Period | This use case detects instances where a single source IP sends HTTP requests using multiple distinct User-Agent headers within a short time period. This behavior could indicate malicious activity such as botnets, automated scripts, or reconnaissance attempts to bypass security measures by emulating different browsers or devices. |
| 14 | Directory Traversal | This detection identifies HTTP requests attempting directory traversal (e.g., \`../\`) to access unauthorized files or directories on the server. |
| 15 | Cloudflare L7 DDoS | This detection identifies Layer 7 Distributed Denial of Service (DDoS) attacks targeting application-layer endpoints via HTTP/S requests. Such attacks aim to overwhelm server resources and disrupt services by sending a high volume of legitimate-looking traffic. |
| 16 | ESXi Discovery via Grep | Detects instances where processes likegrep,egrep, orpgrepare executed on a Linux system with arguments referencing VM-related file formats (e.g.,vmdk,vmx,vmsd). This may indicate potential malicious activity, such as reconnaissance or manipulation of virtual machine files. |
| 17 | Forced VIB Installation on ESXi Host | CVE-2023-34048 is a vulnerability in VMware ESXi that allows attackers to bypass protections against malicious VIB (vSphere Installation Bundle) installations by using theforcevalue. This makes it essential to detect any use of this flag, as it may indicate unauthorized or malicious activity. |
| 18 | NTP Time Manipulation for Timestomping | NTPClock Change (Timestomping) refers to an attack technique where an attacker alters the system's NTP (Network Time Protocol) clock to create a significant time difference, typically greater than 48 hours. This manipulation is done to hide or obscure the timeline of malicious activities, such as unauthorized access or data tampering, making it more difficult for defenders to investigate or detect the incident. |
| 19 | Multiple User Deletion | Detects a high volume of user deletions in VMware environments, which may indicate malicious intent or attempts to disrupt system access. This detection focuses on identifying signs ofImpacttactics where attackers may delete user accounts to cause disruption, disable security tools, or cover their tracks. |
| 20 | Multiple VM Deletions by User | Detects abnormal user activity involving the deletion of virtual machines in a VMware environment. This activity may indicate potential malicious intent, system misconfigurations, or operational disruptions if the number of deletions exceeds a specified threshold. |
| 21 | Deprecated EAP Browser Plugin | The Enhanced Authentication Plug-in (EAP) for VMware vSphere is deprecated and contains known security vulnerabilities. Monitoring system logs for entries indicating that the EAP plugin is still active is critical to ensure it is properly disabled and to mitigate potential security risks. |
| 22 | Timestomping using Touch Command | Timestomping using thetouchcommand involves an attacker modifying file timestamps (such as creation, access, and modification times) to align them with legitimate or non-suspicious activity. This technique is commonly used to obfuscate malicious behavior and evade detection during forensic investigations. |
| 23 | Mass Lookup ESXi Files | Mass lookup of files in VMware ESXi involves querying and retrieving large numbers of files from datastores or VMFS for analysis or management, often using ESXi shell commands or PowerCLI scripts. |
| 24 | Suspicious Termination of ESXI Process | The unexpected or abnormal shutdown of critical ESXi hypervisor processes could indicate potential security breaches, unauthorized access, or system errors. Monitoring and investigating such events is crucial to maintaining the integrity and security of the environment. |
| 25 | Tampering with ESXi index HTML File | Renaming of the ESXiindex.htmlFilerefers to an attacker modifying or renaming the defaultindex.htmlfile on a VMware ESXi host. This file typically serves the ESXi host's management interface page. Altering it may indicate an attempt to: |
| 26 | ESXi Discovery via Find | Detects outbound IRC traffic originating from Linux systems, specifically when thefindcommand is used with arguments targeting VMware-related paths such as/etc/vmware/,/usr/lib/vmware/, or/vmfs/\*. This activity may indicate a threat actor attempting to enumerate or manipulate VMware virtualization software files and configurations. |
| 27 | Log File Deletion | VMware ESXi log file deletion involves the removal of system and virtual machine log files from an ESXi host, typically to free up storage space or adhere to maintenance policies. These logs include system logs, VM logs, and diagnostic files. This activity may be performed manually or via automated scripts, and unauthorized deletion could indicate malicious intent. |

### **New Dashboards**

| **Name** |
| --- |
| CLOUDFLARE - Monitoring Insights |
| CLOUDFLARE - Security Insights |
| VMWARE - ESXi - Monitoring Insights |
| VMWARE - ESXi - Security Insights |

### **New Reports**

| **Name** |
| --- |
| CLOUDFLARE - Monitoring Insights |
| CLOUDFLARE - Security Insights |
| VMWARE - ESXi - Monitoring Insights |
| VMWARE - ESXi - Security Insights |
