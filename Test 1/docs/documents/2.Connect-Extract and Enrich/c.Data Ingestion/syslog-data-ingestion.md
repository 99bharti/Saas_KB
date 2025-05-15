---
title: "Syslog (Data Ingestion)"
date: 2025-01-21
type: "epkb_post_type_1"
---

  
Syslog Connector can receive logs from various devices and log sources via UDP connection on port 514 of the Adapter.

###### **How to Ingest Data without any Configuration?**

Syslog Connector will be automatically added (no configurations required) while onboarding Adapter.

Follow the steps below to ingest data into DNIF without any configurations.

- Ensure that all the components are up and running. 

- Ensure that port 514UDP is open and is not occupied by some other services to enable forwarding of log events.

- Log in to the server as the root user.

- Install syslog package, if you haven’t installed it  
    

```
apt-get install rsyslog
```

- Edit rsyslog configuration with vim /etc/rsyslog.d/50-default.conf and paste following line below

```
*.* @DNIF-Adapter-IP:514
```

- Save the syslog configuration file.

- Restart the rsyslog service.

```
/etc/init.d/rsyslog restart
```

The logs will be automatically ingested into DNIF on performing the above steps
