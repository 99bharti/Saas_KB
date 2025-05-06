---
title: "Beats (Troubleshooting Procedure)"
date: 2025-01-17
type: "epkb_post_type_1"
---

This document includes troubleshooting recommendations and procedures that can help you solve problems arising from the configuration and usage of connectors.

Perform the following checks:

1. The credentials (Beats Token, User, Port) entered while configuring Beats.

3. The IP Address and Port mentioned while configuring the LogSources.

5. Ports are open between log source and Adapter i.e, **Listener port :: From LogSource to Adapter server**

7. The port is in listening mode. Verify using the following command:

```
netstat  -auntp | grep &lt;port&gt;
```

1. Checks for Auditbeat:
    - The version installed is as per the [configuration](https://dnif.it/kb/connectors/supported-connectors/beats/) document.
    
    - The contents of the auditbeat.yml file
    
    - Username and password
    
    - Verify if audit beat service is enabled

3. Checks for Winlogbeat:
    - Verify the .zip file downloaded is placed under C:\\Program path.
    
    - Check if winlogbeat is renamed to Winlogbeat.
    
    - Verify if winbeat service is enabled.

5. Checks for Filebeat:
    - The version installed is as per the [configuration](https://dnif.it/kb/connectors/supported-connectors/beats/) document.
    
    - Verify the configuration set in filebeat.yml file.
    
    - Check if the Filebeat inputs is set to True
    
    - Check the status of the filebeat service.

7. Checks for Metricbeat:
    - The version installed is as per the [configuration](https://dnif.it/kb/connectors/supported-connectors/beats/) document.
    
    - The configuration of metricbeat.yml file
    
    - The status of the metricbeat service

**Proceed with the following steps, only if all the above checks are met.**

1. Logs are received on tcpdump of Adapter.

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

- Login to the log source command line and test the server with ping utility using the following syntax:

```
ping -c 4 &lt;Adapter_Server_IP_addr&gt;
```

- Verify if logs are being received on DNIF Console.
