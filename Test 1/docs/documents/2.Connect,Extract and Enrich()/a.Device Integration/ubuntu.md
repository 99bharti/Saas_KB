---
title: "Ubuntu"
date: 2025-01-17
type: "epkb_post_type_1"
---

Ubuntu is an open source software operating system that runs from the desktop, to the cloud, to all your internet connected things.

###### **Integration of Ubuntu system Logs with DNIF**

To forward Ubuntu System logs to DNIF Adapter make the following configuration

- Log in to the server as the root user, install syslog package, if you haven’t installed it

```
$ apt-get install rsyslog
```

- Edit rsyslog configuration with **vim /etc/rsyslog.d/50-default.conf** and add following line as below,

```
*.* @DNIF-Adapter-IP:514
```

- Save the **syslog** configuration file.
- Restart the **rsyslog** service.

```
/etc/init.d/rsyslog restart
```

Ubuntu System logs are now streamed to DNIF
