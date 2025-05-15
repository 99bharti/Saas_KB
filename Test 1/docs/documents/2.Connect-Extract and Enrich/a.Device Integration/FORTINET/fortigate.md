---
title: "FortiGate"
date: 2025-01-17
type: "epkb_post_type_1"
---

The FortiGate firewall is Fortinet’s flagship integrated network security solution. The FortiGate offers data center firewall (DCFW), unified threat management (UTM), and next-generation firewall (NGFW) technologies.

###### **Integration of FortiGate Firewall with DNIF**

**Forward FortiGate firewall logs to DNIF using CLI**

```
config log syslogd setting
```

```
  set status enable ##enable logging to a remote syslog server
   set server <IP Address> ##the IP Address of the DNIF Adapter
   set port 514 ##Server listen port
   set facility local0 ##identifies the source of the log message to syslog
   set source-ip <src_ip> ##Source IP address of syslog
end
```

- Most FortiGate features are enabled for logging by default, but you can make sure the Traffic, Web and URL Filtering features are enabled for logging with the following commands:

```
config log syslogd filter
   set traffic enable
   set web enable
   set url-filter enable
end
```

The logging of referrer URLs was introduced in FortiOS 5.4, which is a great feature for web usage analysis. Unfortunately, you need to enable it per web profile. This is also done in the CLI:

```
config webfilter profile
   edit [Name of your profile]
   set log-all-url enable
   set web-filter-referer-log enable
end
```

**Forward FortiGate firewall logs to DNIF using GUI.**

- Go to **Log & Report > Log Config > Log Settings** (depending on the version of FortiGate).
- Select the **Log** to Remote Host option or Syslog checkbox (depending on the version of FortiGate).
- Enter the **IP address** and **port** of the Adapter server.
- Select the **logging level** as Information or select the **Log All Events** checkbox (depending on the version of FortiGate).
- Select the facility as **local7**
- Click **Apply**

###### **Configuring Rule Sets for Logging Traffic**

Follow the steps below to configure rule-sets for logging all traffic from or to the FortiGate firewall:

- Select **Firewall > Policy**.
- Choose a rule for which you want to log traffic and click **Edit.** You can configure any traffic to be logged separately if it is acted upon by a specific rule.
- Select the **Log Traffic** checkbox
- Click **OK** and then click **Apply**
- Repeat the above steps for all rules for which you want to log traffic.

FortiGate Firewall logs are now streamed to DNIF.
