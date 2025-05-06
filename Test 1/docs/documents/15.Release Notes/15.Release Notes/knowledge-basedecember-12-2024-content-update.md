---
title: "December 12, 2024 - Content Update"
date: 2025-01-15
type: "epkb_post_type_1"
---

We are committed to continuously strengthening security operations for our customers through our innovative **DARC Vault** fortnightly releases. Just like Microsoft's Patch Tuesday, the DARC Vault serves as a reliable source for enhanced security content, enabling our users to stay ahead of evolving threats.

Each fortnight, we deliver the latest Out-Of-The-Box (OOTB) content that not only introduces brand-new capabilities but also enhances existing detections. This fortnight, we are excited to announce a significant update focused on AWS Network Firewall and Windows Process Monitoring.

Below is a summary of the new additions and improvements:

## **Summary of Fortnightly Improvements**

| **Content-Type** | **Actions** | **Count** |
| --- | --- | --- |
| **Detections** | New | 24 |
| Enhanced | 38 |
| **Dashboard** | New | 2 |
| **Reports** | New | 2 |

### **New Detections**

| **#** | **Name** | **Description** |
| --- | --- | --- |
| 1 | Blank SNI over HTTPS Traffic | This detection identifies public source IP addresses initiating HTTPS connections without specifying a Server Name Indication (SNI). The SNI is an essential part of the TLS handshake that specifies the hostname the client is trying to reach. Traffic without an SNI or with unusual placeholders (like''or'-') can indicate potential misuse, such as encrypted malware communications, evasion techniques, or misconfigured clients. |
| 2 | Distributed SMB Traffic | This use case identifies distributed SMB traffic, which involves multiple connections originating from a single source IP to various destination IPs on SMB-related ports. Excessive activity on these ports can indicate lateral movement, reconnaissance, or a potential ransomware attack. |
| 3 | Excessive Packet Drops to Public IP | This detection identifies excessive packet drops targeting public IPs in the network, which could indicate misconfigurations, excessive retries by an application, or potential malicious activity such as scanning or probing attempts from an internal source. |
| 4 | Outbound IRC Traffic | This detection identifies outbound Internet Relay Chat (IRC) traffic from private IP addresses to public IP addresses. IRC is an older communication protocol often used for legitimate purposes, but it is also commonly abused by malware for command-and-control (C2) communications. Monitoring and detecting such traffic can help identify potential malware infections or unauthorized activities in the network. |
| 5 | High Traffic on Internal IP | This use case detects unusually high traffic volume from a source IP to a private (internal) destination IP address. A high volume of traffic might indicate data exfiltration, network scanning, or potential abuse of internal resources. |
| 6 | Inbound RDP Traffic | This detection identifies inbound RDP traffic from public IPs, which could indicate potential unauthorized access attempts or legitimate remote management activities. Monitoring such traffic is essential for securing access to critical systems. |
| 7 | EC2 Firewall Deletion | AFirewall Deletion Anomaly Alertis triggered when there is an unauthorized or unusual attempt to delete or modify firewall rules or configurations. This could indicate a potential attempt to disable or bypass security controls, or a misconfiguration that weakens network defenses. Monitoring these anomalies is crucial to prevent possible breaches. |
| 8 | Attempt to Create Wrapped Object | This use case identifies potential attempts to create wrapped objects in Oracle databases. Wrapped objects, often associated with obfuscation techniques, can hide malicious code or protect proprietary code from inspection. Monitoring for such activities helps to detect evasion tactics that may indicate an attack or unauthorized activity. |
| 9 | PL-SQL Code Tampering | This use case identifies potential tampering or unauthorized modifications of PL/SQL code in Oracle databases. PL/SQL code tampering can involve creating, altering, or dropping database objects such as procedures, functions, triggers, or packages, as well as executing dynamic SQL commands. Detecting such activities helps safeguard database integrity and identify unauthorized changes. |
| 10 | Use of Restricted Commands - DROP or TRUNCATE | This use case identifies unauthorized or potentially harmful execution of restricted database commands such asDROPorTRUNCATE. These commands can lead to data loss or modifications in database structures, which may indicate malicious intent or accidental misuse. Monitoring their use is critical for protecting database integrity. |
| 11 | Potential Oracle SQL Protocol Policy Change | This use case identifies potential changes to critical Oracle SQL protocol policies. Alterations to SQL\*Net, listener configurations, or other protocol-related parameters may indicate an attempt to modify database communication settings, potentially as part of an attack to bypass security controls or improve the attacker's chances of success. |
| 12 | DNS RCE CVE-2020-1350 | This use case identifies potential exploitation attempts targeting the DNS Remote Code Execution vulnerability,CVE-2020-1350. This critical vulnerability, also known asSigRed, allows attackers to execute remote code on vulnerable DNS servers by crafting malicious DNS queries. |
| 13 | SQL Query Injection in UserAgent OR URL | This detection identifies potential SQL injection attempts based on suspicious patterns in HTTP URLs and user agents. SQL injection is a common attack vector used to manipulate or access database systems through vulnerable web applications. |
| 14 | Twig Sort Filter Exploitation Attempt | This use case identifies potential exploitation attempts involving the Twig template engine'ssortfilter. Attackers may try to inject commands using thesortfilter to execute malicious functions such aseval,system, and others. These types of injection attacks typically target web applications using Twig templates. |
| 15 | Potential Malicious Batch File Creation or Download Activities | This detection identifies activities related to the creation or download of malicious batch files (.bat). These activities could be indicative of attackers leveraging batch files to execute commands, deliver payloads, or establish persistence on the system. |
| 16 | Potential Malicious Batch File Execution | This detection identifies potential malicious batch (.bat) file executions within the Windows environment. Attackers often use batch files to automate and execute commands that facilitate lateral movement, privilege escalation, or persistence. Detecting suspicious batch file execution is critical in identifying and mitigating potential threats early. |
| 17 | Potential Msiexec Abuse for Malicious File Execution - Win-Audit | This use case identifies potential abuse ofmsiexec.exeto execute malicious MSI files. Attackers often usemsiexecwith specific command-line arguments to silently download and execute malware. |
| 18 | Potential Msiexec Abuse for Malicious File Execution - EP-PROCESS | This use case detects potential abuse ofmsiexec.exeto execute malicious MSI files. Attackers often exploitmsiexecwith specific command-line arguments to silently download and execute malware. |
| 19 | Registry Modification Activity Detected via Command Line Tools | This use case detects potential registry modification activities via command line tools such ascmd.exeandpowershell.exe. Attackers or unauthorized users may modify registry keys to alter system behavior, persist malware, or evade detection. Monitoring these activities is critical for detecting potentially malicious or suspicious modifications. |
| 20 | Remote Command Execution via Service Utilities | This detection identifies potential remote command execution activities via service utilities commonly used by attackers to execute commands on remote systems. Tools like \`sc.exe\`, \`psexec.exe\`, \`remcom.exe\`, \`kitty.exe\`, and \`kscp.exe\` are often leveraged in remote exploitation scenarios, where attackers aim to remotely run commands or deploy malicious payloads. |
| 21 | Potential Registry Manipulation: AlwaysInstallElevated | This use case detects potential registry manipulation related to theAlwaysInstallElevatedregistry key, which is a known persistence mechanism used by attackers to run installers with elevated privileges automatically. Attackers often manipulate this registry setting to bypass User Account Control (UAC) and escalate privileges. |
| 22 | Tamper with the Windows Defender ATP | This use case detects potential tampering activities targeting the Windows Defender Advanced Threat Protection (ATP) system. Windows Defender ATP is a critical endpoint protection solution for detecting, investigating, and responding to security incidents. Attackers may attempt to disable or manipulate Windows Defender ATP to evade detection and maintain persistence on compromised systems. This detection identifies suspicious command-line activities associated with disabling or reconfiguring Windows Defender through various means, such as stopping services, modifying registry keys, or altering scheduled tasks. |
| 23 | ZOHO Dctask64 Process Injection | This use case identifies potential process injection activities involving theZOHO Dctask64executable. Process injection is a technique often used by adversaries to execute malicious code within the address space of another process, bypassing security controls and achieving stealthy execution. |
| 24 | System Information Discovery - Windows | This use case detects system information discovery activities by monitoring process creation events that involve commands typically used to gather details about the system's configuration, network settings, or environment. Adversaries often perform such discovery to gain situational awareness and identify further targets or vulnerabilities. |

### **New Dashboards**

| **Name** |
| --- |
| AWS - Network Firewall - Monitoring Insights |
| AWS - Network Firewall - Security Monitoring |

### **New Reports**

| **Name** |
| --- |
| AWS - Network Firewall - Monitoring Insights |
| AWS - Network Firewall - Security Insights |
