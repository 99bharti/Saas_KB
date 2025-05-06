<!-- ---
title: "Syslog (Troubleshooting Procedure)"
date: 2025-01-17
type: "epkb_post_type_1"
---

This document includes troubleshooting recommendations and procedures that can help you solve problems arising from the configuration and usage of connectors.

Perform the following checks:

1. Ensure Syslog settings is as per the environment.

3. Ports are open between log source and Adapter i.e, **514 TCP/UDP**. Syslog listens through 514 port on Adapter.

5. The port is in listening mode. Verify using the following command:netstat -auntp | grep &lt;port&gt;

7. Logs are received on tcpdump of Adapter.

```
tcpdump -nnnAvi <interface> host <HOST_IP> and port <Listener_port>
```

- If logs are not displayed on tcpdump, check the IP address and Ethernet number.

- If logs are displayed on tcpdump of Adapter but not on Console, then check if route has been configured. To check list of routes currently configured use the following command:

```
route -n
```

- Verify the outgoing packets from LogSource to Adapter.

```
tcpdump -nnnAvi <interface> dst <Dst-IP> and port <Listener_port>
```

- If IP address and port information is correct and still traffic is not seen on tcpdump, a firewall or the network could be preventing inbound traffic over the specified port. Verify using the following command:

```
 iptables -n -v -L | grep <Event_Source_IP_addr>
```

- Ensure there is a rule for the log source IP address through firewall.

**If the issue is not resolved, proceed to perform the connectivity tests to confirm that Adapter is reachable.**

1. Login to the log source command line and test the server with ping utility using the following syntax:ping -c 4 <Adapter_Server_IP_addr>

3. To verify if log source events are being received on DNIF Console, execute the following query

```
_fetch * from events where $Duration=5m AND $DevSrcIP-<Event_Source_IP_addr> limit 100
``` -->
