---
title: "Azure Eventhub"
date: 2025-01-21
type: "epkb_post_type_1"
---

This document includes troubleshooting recommendations and procedures that can help you solve problems arising from the configuration and usage of connectors.

Perform the following checks:

1. Ensure the following prerequisites are met.
    - Verify the storage account configured. [Create a storage account](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create?tabs=azure-portal)
    
    - Check if Blob public access is enabled. [Enable Blob public access](https://docs.microsoft.com/en-us/azure/storage/blobs/anonymous-read-access-configure?tabs=portal)
    
    - Check if the container is generated. [Create a container in Azure portal](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal)
    
    - Check if eventhub is generated. [EventHub - Creation](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-create)
    
    - Verify the owner access roles assigned to storage accounts and eventhubs.
    
    - Verify the storage connection string, [Creating storage connection string](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal)

3. Verify if firewall or network is blocking the traffic to Azure.

5. Check the credentials entered while configuring Azure Eventhub Connector.
