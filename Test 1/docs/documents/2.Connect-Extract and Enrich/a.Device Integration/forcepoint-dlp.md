---
title: "Forcepoint DLP"
date: 2025-01-17
type: "epkb_post_type_1"
---

This article describes the steps to configure log forwarding for Forcepoint DLP.

Use the **Settings > General > SIEM Integration** page to configure Websense software to send log data from Filtering Service to a supported Security Information and Event Management (SIEM) solution.

Before using this page to enable SIEM integration, make sure an instance of Websense Multiplexer is installed for each Policy Server in your deployment.

Perform these steps for each Policy Server instance in your deployment.

1. Select **Enable SIEM integration for this Policy Server** to turn on the SIEM integration feature.
2. Provide the **IP address or hostname** of the machine hosting the SIEM product, as well as the communication **Port** to use for sending SIEM data.
3. Specify the **Transport protocol** (UDP or TCP) to use when sending data to the SIEM product.
4. Select the **SIEM format** to use. This determines the syntax of the string used to pass log data to the integration.
    1. The available formats are syslog/CEF.
    2. If you select Custom, a text box is displayed. Enter or paste the string that you want to use. Click **View SIEM format strings** for a set of sample strings to use as a reference or template.
    3. If you select a non-custom option, a sample **Format string** showing fields and value keys is displayed.
5. Click **OK** to cache your changes. Changes are not implemented until you click **Save and Deploy**.

[Official Documentation](https://www.websense.com/content/support/library/web/v78/triton_web_help/settings_siem_explain.aspx)
