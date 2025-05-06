---
title: "Forcepoint Websense"
date: 2025-01-17
type: "epkb_post_type_1"
---

Organization uses Websense solutions to protect you and other users against advanced web-based threats and data theft while on and off the corporate network.

###### **Integration of Websense Proxy Logs with DNIF**

Navigate to **Settings > General > SIEM Integration** to configure Websense software, to send log data from Filtering Service to a supported Security Information and Event Management (SIEM) solution.

To enable SIEM integration, ensure an instance of Websense Multiplexer is installed for each Policy Server in your deployment.

Perform the following steps for each Policy Server instance in your deployment.

1. Select **Enable SIEM integration** for this Policy Server to enable SIEM integration feature.

3. Enter the IP address or hostname of the machine hosting the SIEM product and also the communication Port for sending SIEM data.

5. Specify the Transport protocol (UDP or TCP) to send data to the SIEM product.

7. Select the **SIEM format**. This determines the syntax of the string used to pass log data to the integration. Here, select **CEF format**.
    - If you select **Custom**, a text box is displayed. Enter or paste the string that you want to use.
    
    - Click **View SIEM format strings** for a set of sample strings to use as a reference or template.
    
    - If you select a non-custom option, a sample Format string showing fields and value keys is displayed.

9. Click **OK** to cache your changes. Changes are not implemented until you click **Save and Deploy**.

When you save your changes, Websense Multiplexer connects to Filtering Service that distributes log data to both Log Server and the selected SIEM integration.

For Official Documentation: [Click here](http://www.websense.com/content/support/library/web/v80/triton_web_help/settings_siem_explain.aspx)
