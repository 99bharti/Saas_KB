---
title: "Office 365 (Troubleshooting Procedure)"
date: 2025-01-17
type: "epkb_post_type_1"
---

This document includes troubleshooting recommendations and procedures that can help you solve problems arising from the configuration and usage of connectors.

Perform the following checks:

1. Ensure the following prerequisites are met.
    - Verify Office 365 management API credentials. The credentials include Tenant Id, Client key, Secret key, and Tenant domain.
    
    - Navigate through Azure Management Portal > Azure Active Directory > Manage > Properties, to find Tenant ID.
    
    - Verify if the Tenant domain name is valid. The domain resembling Office 365 tenant name will end with **.onmicrosoft.com**.
    
    - Check if application is registered on Azure Management Portal using the tenant credentials.
    
    - Verify the ownership roles assigned to access Microsoft Office 365 Management APIs.
    
    - In the API permissions window, check if **Grant admin consent for &lt;tenant name&gt;** is enabled.

    
    - Check if Client secret has been generated successfully.
    
    - Verify if **auditing** is enabled under the compliance center.

2. Verify if a firewall or network is blocking the traffic to O365.

3. Check the credentials entered while configuring O365 connector.
