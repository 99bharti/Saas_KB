# April 17th, 2025 - Content Update 

## Overview

We are committed to continuously strengthening security operations for our customers through our innovative **DARC Vault** fortnightly releases. Just like Microsoft's Patch Tuesday, the DARC Vault serves as a reliable source for enhanced security content, enabling our users to stay ahead of evolving threats.

Each fortnight, we deliver the latest Out-Of-The-Box (OOTB) content that not only introduces brand-new capabilities but also enhances existing detections. This fortnight, we are excited to announce a significant update focused on Azure, AWS SNS and Okta.

## Summary of Fortnightly Improvements

| Actions | Count |
|---------|-------|
| **Detections** | |
| New | 54 |
| Enhanced | – |
| **Dashboards** | |
| New | 4 |
| **Reports** | |
| New | 4 |

## New Dashboards

- OKTA – Monitoring Insights
- OKTA – Security Insights
- AZURE – Monitoring Insights
- AZURE – Security Monitoring

## New Reports

- OKTA – Monitoring Insights
- OKTA – Security Insights
- AZURE – Monitoring Insights
- AZURE – Security Monitoring

## New Detections

| # | Name | Description |
|---|------|-------------|
| 1 | SNS Topic Created by Rare User | This detection identifies when an AWS SNS (Simple Notification Service) topic is created by a user who rarely or never performs this activity. While SNS topics are used to enable distributed messaging for applications and services, adversaries may abuse them to exfiltrate data, conduct phishing, or establish communication channels for further compromise. A rare user creating an SNS topic can be indicative of compromised credentials or abuse of excessive permissions. |
| 18 | Attempted Bypass of Okta MFA | Detects attempts to bypass Okta multi-factor authentication (MFA). An adversary may attempt to bypass the Okta MFA policies configured for an organization in order to obtain unauthorized access to an application. |
| 19 | Okta Suspicious Activity Reported by End-user | Triggered when an end-user reports suspicious activity in Okta, such as unauthorized login attempts, unexpected MFA prompts, or unusual device access. This may indicate account compromise, phishing attacks, MFA fatigue, or adversary-in-the-middle (AiTM) attacks. Analysts should investigate the reported activity, review recent authentication logs, check for unauthorized session takeovers, and correlate with other security events. |
| 23 | Azure Automation Account Created | This detection identifies the creation of a new Azure Automation Account, which is used for running automation scripts, process automation, configuration management, and security automation. While legitimate users create automation accounts for operational efficiency, an attacker may create one to establish persistence, execute malicious scripts, or move laterally within the environment. Analysts should verify if the creation was authorized, review the associated user or service principal, and check for signs of privilege escalation or suspicious automation runbooks. |
| 25 | Multi-Factor Authentication Disabled for an Azure User | Identifies when multi-factor authentication (MFA) is disabled for an Azure user account. Disabling MFA weakens authentication security and can indicate potential unauthorized access. Adversaries may attempt to disable MFA to maintain persistence or escalate privileges within the environment. |
| 26 | Azure Service Principal Addition | This detection identifies when a new Service Principal is added in Azure Active Directory. Service Principals represent applications or services that can access resources in the Azure tenant. An adversary may create a new Service Principal to maintain persistent access to Azure resources, even if compromised user credentials are reset. |
| 34 | Azure Application Credential Modification | This detection identifies when an application credential is modified in Azure Active Directory. Application credentials provide authentication for non-interactive sign-in by applications or services. An adversary may modify application credentials to maintain access to Azure resources, perform privilege escalation, or engage in malicious activities while evading detection. |
| 36 | Azure Firewall Policy Deletion | This detection identifies the successful deletion of an Azure Firewall Policy. Firewall policies define security rules for traffic filtering and are critical for maintaining network security. Unauthorized deletions may indicate an attempt to weaken security controls, bypass network restrictions, or prepare for further attacks. Analysts should verify if the deletion was authorized, review the associated user or service principal, and check for signs of privilege escalation or unauthorized access attempts. |
| 39 | Azure Automation Runbook Deleted | This detection identifies the successful deletion of an Azure Automation Runbook. Runbooks are used to automate operational and security tasks within an Azure environment. Unauthorized deletions may indicate an attempt to disrupt automated security responses, hide malicious activity, or disable critical workflows. Analysts should verify if the deletion was expected, review the associated user or service principal, and check for privilege escalation or unauthorized access attempts. |
| 40 | Azure Event Hub Authorization Rule Created or Updated | This detection identifies when an Event Hub Authorization Rule is created or updated in Azure. Authorization rules define access rights and carry cryptographic keys, making them critical for security. Unauthorized modifications could allow an attacker to gain control over Event Hub data, escalate privileges, or disrupt logging. Analysts should verify if the change was authorized, review the associated user or service principal, and check for signs of privilege escalation or unauthorized access. |
| 41 | Azure Resource Group Deletion | This detection identifies the successful deletion of an Azure Resource Group. Resource Groups contain related Azure resources that share the same lifecycle, so their deletion can have widespread impact on services and data. Unauthorized deletions may indicate an attempt to disrupt operations, hide malicious activity, or destroy evidence. Analysts should verify if the deletion was authorized, review the associated user or service principal, and check for signs of privilege escalation or unauthorized access. |
| 50 | Azure Automation Webhook Created | This detection identifies when a webhook is created for an Azure Automation runbook. Webhooks allow external systems to trigger automation runbooks via HTTPS without requiring Azure authentication. While webhooks serve legitimate automation purposes, an adversary may create one to establish persistence, execute malicious code, or create backdoors in the environment. Analysts should verify if the webhook creation was authorized and investigate the runbook it's associated with. |
| 54 | Azure Event Hub Deletion | This detection identifies the successful deletion of an Azure Event Hub, which is used for real-time data ingestion and streaming. Unauthorized deletions may indicate an attempt to disrupt logging, hide malicious activity, or disable security monitoring. Analysts should verify if the deletion was authorized, review the associated user or service principal, and check for signs of privilege escalation or unauthorized access. |

*Note: This list includes selected detections from the full set of 54 new detections released in this update.*

---

