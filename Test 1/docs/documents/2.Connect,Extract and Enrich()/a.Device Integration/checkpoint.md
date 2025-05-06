---
title: "CheckPoint"
date: 2025-01-17
type: "epkb_post_type_1"
---

Firewall includes the CheckPoint IPS Software Blade, which secures your network by inspecting packets traversing through the gateway.

###### **Prerequisites**

\* [Log exporter](https://supportcenter.checkpoint.com/supportcenter/portal?action=portlets.SearchResultMainAction&eventSubmit_doGoviewsolutiondetails=&solutionid=sk122323) for CheckPoint version specific.

###### **Configuration**

Run all commands under EXPERT mode. In CLI, enter Expert, then enter the specific password.

- To add a new target, run the following command on the log server:

```
cp_log_export add name &lt;name&gt; [domain-server &lt;domain-server&gt;] target-server <DNIF Adapter IP Address> target-port &lt;(udp|tcp)&gt; protocol &lt;syslog&gt; format &lt;syslog&gt; [optional arguments]
```