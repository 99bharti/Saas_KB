---
title: "Dell Cylance Endpoint"
date: 2025-01-17
type: "epkb_post_type_1"
---

Dell takes Endpoint Security to a New Level with Cylance® Advanced Threat Protection Technology. Cylance is the cyber security company that uses artificial intelligence to proactively prevent, rather than just reactively detect, advanced persistent threats and malware.

###### **Integration of Dell Cylance Endpoint with DNIF**  

The following configurations should be done to forward Dell cylance endpoint logs to DNIF Adapter.

- From Cylance, navigate to **Settings > Application**.

- In the Integrations section, select **Syslog/SIEM.**

- Under **Event Types**, select **all available events**.

- For **SIEM**, select **DNIF** as the destination.

- For **Protocol**, select **UDP**.

- On **IP/DOMAIN**, type the\*\* IP address\*\* of the DNIF Adapter.

- Use **514** as the port number if using UDP.

- For **Severity**, select **Debug**.

- For **Facility**, select **Internal**.

- Click **Save**.

Dell Cylance endpoint logs are now streamed to DNIF.
