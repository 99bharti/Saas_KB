---
title: "McAfee Web Gateway"
date: 2025-01-17
type: "epkb_post_type_1"
---

This article describes the steps to configure McAfee Web Gateway

1. Configure the syslog daemon.  
    a. In File Editor, open the syslog daemon configuration file.  
    b. Locate the line similar to: info:mail.none; authpriv.none;cron.none /var/log/messages and replace it with ".info;daemon.!=info;mail.none; authpriv.none; cron.none-/var/log/messages. This prevents messages  
    from being written to the /var/log/messages file, which could fill the /var partition.  
    c. At the end of the file, add a line: [daemon.info](http://daemon.info);auth. info @&lt;syslog server IP address&gt;:514. 
      
    

3. Create a rule to send all access log data to the syslog server.

5. Create a rule to send the logline to syslog.

7. Download and install the McAfee SIEM (Nitro) logging ruleset and the CEF syslog format ruleset.

9. If you want to send audit logs to syslog, click **Configuration > Alloiances > Log File Manager > Settings** for the Audit Log and select **Write audit log to syslog**.  
      
    

Audit events are sent using the auth facility at the informational severity (6). So your rsyslog configuration would specify auth.=info.
