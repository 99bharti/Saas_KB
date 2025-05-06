---
title: "GCP (Troubleshooting Procedure)"
date: 2025-01-17
type: "epkb_post_type_1"
---

This document includes troubleshooting recommendations and procedures that can help you solve problems arising from the configuration and usage of connectors.

Perform the following checks:

1. Ensure the following prerequisites are met.
    - Verify the Service Account and ownership access configured. [https://cloud.google.com/docs/authentication/getting-started#cloud-console](https://cloud.google.com/docs/authentication/getting-started#cloud-console)
    
    - Verify the keys created to access GCP APIs. [https://cloud.google.com/iam/docs/creating-managing-service-account-keys#iam-service-account-keys-create-console](https://cloud.google.com/iam/docs/creating-managing-service-account-keys#iam-service-account-keys-create-console)
    
    - Verify if data access logs are enabled [https://cloud.google.com/logging/docs/audit/configure-data-access](https://cloud.google.com/logging/docs/audit/configure-data-access)

3. Check if the API/ Endpoint hosts are reachable from Adapter.

5. Verify if a firewall or network is preventing inbound traffic to any GCP service.

7. Verify the **Credentials File** and **Project Id** details entered while configuring the connector.
