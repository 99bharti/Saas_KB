---
title: "TLS ( Troubleshooting Procedure)"
date: 2025-01-17
type: "epkb_post_type_1"
---

This document includes troubleshooting recommendations and procedures that can help you solve problems arising from the configuration and usage of connectors.

Perform the following checks:

1. TLS Connector operates in two modes, check for the method that has been chosen to configure the TLS connector as per the environment.
    - **Mode 1:** If Client Authentication Enable is set to True, proceed from **Step 2**.
    
    - **Mode 2:** If Client Authentication Enable is set to False, follow the steps below:
        - Validate if the certificate and key is placed in the following path:
            - **"/DNIF/AD/connectors/tls_connector/org-x.crt"**
            
            - **"/DNIF/AD/connectors/tls_connector/org-x.key"**
        
        - Check the validity of the certificate from the time of generation

3. Ports are open between log source and Adapter i.e, **Listener port :: From LogSource to Adapter server**

5. Logs are received on tcpdump of Adapter.

```
tcpdump -nnnAvi &lt;interface&gt; host &lt;HOST_IP&gt; and port &lt;Listener_port&gt;
```

- Verify the outgoing packets from LogSource to Adapter.

```
tcpdump -nnnAvi &lt;interface&gt; dst &lt;Dst-IP&gt; and port &lt;Listener_port&gt;
```

- If IP address and port information is correct and still traffic is not seen on tcpdump, a firewall or the network could be preventing inbound traffic over the specified port. Verify using the following command or Contact your Network Administrator to proceed with the troubleshooting steps.

```
 iptables -n -v -L | grep &lt;Event_Source_IP_addr&gt;
```

- If logs are displayed on tcpdump of Adapter but not on Console, then check if route has been configured. To check list of routes currently configured use the following command:

```
route -n
```

- Login to the log source command line and test the server with ping utility using the following syntax:

```
ping -c 4 &lt;Adapter_Server_IP_addr&gt;
```

- Verify if logs are being received on DNIF Console.
