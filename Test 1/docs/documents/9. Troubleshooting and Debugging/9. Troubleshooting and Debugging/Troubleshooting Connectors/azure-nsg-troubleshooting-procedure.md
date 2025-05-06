---
title: "Azure NSG ( Troubleshooting Procedure)"
date: 2025-01-17
type: "epkb_post_type_1"
---

This document includes troubleshooting recommendations and procedures that can help you solve problems arising from the configuration and usage of connectors.

Perform the following checks:

1. Ensure the following prerequisites are met.
    - Verify the storage account configured. [Create a storage account](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create?tabs=azure-portal)
    
    - Check if Blob public access is enabled. [Enable Blob public access](https://docs.microsoft.com/en-us/azure/storage/blobs/anonymous-read-access-configure?tabs=portal)
    
    - Check if the container is created. [Create a container in Azure portal](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal)
    
    - Verify if the NSG Flow logs are enabled in the Azure Console. [Enable NSG Flow Logs](https://docs.microsoft.com/en-us/azure/network-watcher/network-watcher-nsg-flow-logging-portal#enable-nsg-flow-log)
    
    - Verify the ownership access roles assigned to storage accounts.
    
    - Verify the storage connection string, [Creating storage connection string](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal)

3. Verify if firewall or network is blocking the traffic to Azure.

5. Check the credentials entered while configuring Azure NSG Connector.
