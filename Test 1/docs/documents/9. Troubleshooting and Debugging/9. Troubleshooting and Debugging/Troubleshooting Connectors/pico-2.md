---
title: "PICO"
date: 2025-01-24
type: "epkb_post_type_1"
---

This document includes troubleshooting recommendations and procedures that can help you solve problems arising from the configuration and usage of connectors.

Perform the following checks:

1. Verify if **7426 TCP** port for PICO is reachable and is in listening mode.

2. Check if the required ports are open between Log Source and Adapter i.e.,  
   **7426 TCP**: By default, PICO Connector is configured and running on port 7426 TCP when Adapter component is onboarded into DNIF Cluster.

3. Verify if port is open and is in listening mode.  
   `netstat -auntp | grep &lt;port&gt;`

4. Check if **Adapter** is reachable from PICO using the following command:

   ```bash
   ping -c 4 &lt;Adapter_Server_IP_addr&gt;
