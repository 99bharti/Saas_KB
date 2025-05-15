---
title: "CISCO Network OS"
date: 2025-01-17
type: "epkb_post_type_1"
---

A Cisco switch is a computer networking device that connects devices together on a computer network by using packet switching to receive, process, and forward data to the destination device.

###### **Integration of Cisco Network OS with DNIF**

The following configurations should be done to forward Cisco Network OS to send syslog messages to DNIF.

- In privileged EXEC mode, enter the following commands:

```
$ set logging timestamp {enable | disable}
```

- Execute the above command to specify the system to timestamp messages.

```
$ set logging server <IP address>
```

- Execute the above command to specify to specify the IP address of the DNIF Adapter.

```
$ set logging server severity <enter_severity_level>
```

- Execute the above command to specify to specify severity level as per preference.

- The severity levels are as follows:

| **Severity Level** | **Description** |
| --- | --- |
| 0 | Emergency |
| 1 | Alert |
| 2 | Critical |
| 3 | Error |
| 4 | Warning |
| 5 | Notice |
| 6 | Informational |
| 7 | Debug |

- Execute the following command to specify facility parameter as per requirement.

```
$ set logging sever facility <facility-server-parameter>
```

Where **local7** is the default value, other values are, **local0, local 1, local2, local3, local4, local5, and local6**

-  Execute the following command to enable syslog messages to be sent to DNIF Adapter.

```
$ set logging server enable
```

- Execute the following command to check changes made in the logging configuration.

```
$ show logging
```

Cisco Network OS events are now streamed to DNIF.
