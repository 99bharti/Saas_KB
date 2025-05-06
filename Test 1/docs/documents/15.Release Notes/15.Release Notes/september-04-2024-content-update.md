---
title: "September 04, 2024 - Content Update"
date: 2025-01-20
type: "epkb_post_type_1"
---

We are excited to announce a content update for DNIF HYPERCLOUD. We are introducing new and updated dashboards for enhanced security monitoring across platforms including Office 365, Active Directory, Azure, CrowdStrike, NetSkope, and Trend Micro. In addition, new Sysmon workbooks are designed to improve monitoring and threat detection for Windows systems, helping administrators secure IT infrastructures with actionable insights.   
Also, the tactics, techniques, and sub-techniques in the MITRE Dashboard have been updated to align with the latest MITRE ATT&CK framework.

## **O365**

1. Dashboard name:  MS-O365 Insight Dashboard  
    Overview:  
    The MS-O365 Insight Dashboard provides a comprehensive view of security and user activity across Microsoft Office 365. It is designed to help administrators monitor potential threats, user actions, and authentication patterns to ensure the security and integrity of the organization’s Office 365 environment.

3. Dashboard name: MS-O365 Document and Email Activity  
    Overview:  
    The MS-O365 Document and Email Activity dashboard focuses on monitoring and analyzing document and email activities within Office 365. It provides key metrics and trends related to document access and email transactions, supporting administrators in managing data security and communication flows

## **Active Directory**

1. Dashboard name:  Active Directory Weekly Security Overview  
    Overview:  
    The Active Directory Weekly Security Overview dashboard provides insights into security-related activities within the Active Directory environment. It helps administrators monitor various aspects of user authentication, access, and configuration changes to ensure the security and integrity of the Active Directory infrastructure.

## **Azure**

1. Dashboard name: Azure Insights  
    Overview:  
    Azure Insights dashboard to provide you with better visibility and monitoring capabilities within your Azure environment. This release focuses on improving your experience in tracking Azure activities and security-related events.

## **CrowdStrike**

1. Dashboard name: CrowdStrike Insights  
    Overview:  
    The CrowdStrike Insights dashboard provides a comprehensive view of login activities and API client operations within the CrowdStrike environment. It aids in monitoring and analyzing login attempts, successful logins, and API operations to enhance security and operational awareness.

## **Netskope**

1.  Dashboard name:  NetSkope Insights  
    Overview:  
    The NetSkope Insights dashboard provides a detailed view of various security-related metrics and insights within the NetSkope environment. It focuses on threat detection, the severity of alerts, and the geographic distribution of detected threats, offering a comprehensive security overview.

## **Trend Micro Email Security**

1. Dashboard name: Trend Micro Email Security Insights  
    Overview:  
    The Trend Micro Email Security Insights dashboard provides comprehensive insights into email security metrics. It highlights various aspects of email processing, including threat detection, quarantine activities, bounce rates, and login activities. This dashboard helps in monitoring and improving email security posture by providing actionable data and trends.

## **Sysmon**

### **Workbooks**:

1. Name: Correlate with process events for windows  
    Overview:  
    This workbook focuses on identifying and correlating process events in Windows systems. It leverages detection techniques to track the execution and impact of files dropped by processes, ensuring comprehensive monitoring and threat detection.  
    

3. Name: Dropped File from Process Initiating Network Connection  
    Overview:  
    This workbook aims to detect when a dropped file from a process initiates a network connection. By monitoring network events and correlating them with dropped files, it helps identify potentially malicious activities that involve network communications.  
    

5. Name: Dropped File Process Access  
    Overview:  
    The "Dropped File Process Access" workbook monitors processes that interact with files dropped on the system, helping to detect potentially malicious activities and process injections.  
    

7. Name: Identify file creation events in Windows  
    Overview:  
    The "Identify File Creation Events in Windows" workbook helps in tracking and analyzing file creation events on Windows systems. This allows administrators to monitor and investigate potentially suspicious file creation activities.  
    

9. Name: Tracking DLL and Executables loaded from a dropped file  
    Overview:  
    This workbook tracks DLLs and executables that are loaded from dropped files. By analyzing image load events and correlating them with previously identified dropped files, it helps detect potentially malicious activity involving the execution of untrusted code.

## The following tactics and techniques have been added to the MITRE dashboard:

### **Tactic: Reconnaissance**

- ### **Techniques:**
    - Active Scanning
    
    - Gather Victim Host Information
    
    - Gather Victim Identity Information
    
    - Gather Victim Network Information
    
    - Gather Victim Org Information
    
    - Phishing for Information
    
    - Search Closed Sources
    
    - Search Open Technical Databases
    
    - Search Open Websites/Domains
    
    - Search Victim-Owned Websites

### **Tactic: Resource Development**

- ### **Techniques:**
    - Acquire Access
    
    - Acquire Infrastructure
    
    - Compromise Accounts
    
    - Compromise Infrastructure
    
    - Develop Capabilities
    
    - Establish Accounts
    
    - Obtain Capabilities
    
    - Stage Capabilities

## The following technique has been added to the existing tactic:

### **Tactic: Command and Control**

- Technique: Hide Infrastructure

## The name of the following technique has changed:

### **Tactic: Persistence**

- Technique: Compromise Host Software Binary
