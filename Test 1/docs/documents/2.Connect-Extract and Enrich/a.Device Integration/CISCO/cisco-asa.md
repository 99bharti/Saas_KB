---
title: "CISCO ASA"
date: 2025-01-17
type: "epkb_post_type_1"
---

Cisco ASA stands for Adaptive Security Appliance. Cisco ASA is a security device that combines firewall, antivirus, intrusion prevention, and Virtual Private Network (VPN) capabilities.

###### **Integration of Cisco ASA with DNIF**

The following configurations should be done to forward Cisco ASA firewall logs to DNIF.

- Log in to Cisco ASA device using CLI, and execute the following command to access privileged EXEC mode:

```
$ enable
```

- Execute the following command to access global configuration mode:

```
$ conf t
```

- Execute the following command to enable logging:

```
$ logging enable
```

- Execute the following command to configure the logging details:

```
$ logging console warning$ logging trap warning$ logging asdm warning
```

- Execute the following command to configure logging to DNIF Adapter:

```
$ logging host &lt;interface&gt; &lt;IP address&gt;
```

- **Interface** is the name of the Cisco adaptive security appliance interface.

- **IP address** is the IP address of DNIF Adapter.

- Execute the following command to view all available interfaces of Cisco device.

```
$ show interfaces
```

- Disable the output object name option to ensure that the logs use IP addresses and not the object names.

```
$ no names
```

- Exit configuration

```
$ exit
```

- Save changes

```
$ write mem
```

Cisco ASA firewall logs are now streamed to DNIF.
