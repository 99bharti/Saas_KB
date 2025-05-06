---
title: "GSuite"
date: 2025-01-17
type: "epkb_post_type_1"
---

This document includes troubleshooting recommendations and procedures that can help you solve problems arising from the configuration and usage of connectors.

Perform the following checks:

1\. Ensure the following prerequisites are met.  
    \* The minimum ownership role for collecting logs.  
    \* Validate the service account created. Also, verify if the Key type selected is in the form of JSON.  
    \* The Admin SDK API is enabled.  
    \* The role access is read-only for the Admin audit reports.  
    \* Verify if “Enable API access”  is enabled from the Admin Console Page.  
    \* Check if the “Domain Admin User Id” and “Credentials File” fields configured are valid.   
    \* The Domain Admin User Id should be the Super administrator account’s User ID that is configured while spawning the GSuite connector.  
2\. Verify if a firewall or network is preventing inbound traffic to any  
 GSuite cloud service.  
3\. Verify if the API/ endpoints host are reachable from Adapter.
