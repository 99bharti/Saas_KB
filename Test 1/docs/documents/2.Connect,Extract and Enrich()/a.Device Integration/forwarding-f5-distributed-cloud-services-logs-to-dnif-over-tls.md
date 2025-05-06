---
title: "Forwarding F5 Distributed Cloud Services Logs to DNIF over TLS"
date: 2025-01-22
type: "epkb_post_type_1"
---

F5® Distributed Cloud Services are SaaS-based solutions offering security, networking, and application management services that can be deployed across multi-cloud, on-premises, and edge locations. To forward F5 logs to DNIF via TLS, we'll use the Global Log Receiver service provided by F5 Distributed Cloud Services.

###### **Prerequisites**

- A valid F5 Account with the ability to configure the Global Log Receiver.

- A TLS connector enabled on the DNIF side. Click here for [configuration details](https://www.dnif.it/en/kb/tls).

- Add the following IP ranges to your firewall's allow list:
    - 193.16.236.68/32
    
    - 185.160.8.156/32

###### **Capture the TLS Connector Certificate Details**  
  

**Step A: Configure TLS Connector on DNIF**

1. On the PICO/AD side, from the Console, configure the TLS connector and set **Client Authentication Enable** to **False**.

**Step B: Retrieve the Certificate Data**

Execute the following command in the PICO/AD backend to capture the connector certificate details. The default path is -> **/DNIF/&lt;AD_or_PICO&gt;/connectors/tls_connector/DNIF_TLS.crt**._

```
cat <path_of_connector_file>
```

###### **Configure Global Log Receiver on F5 Cloud Portal**

**Step 1: Add Global Log Receiver**

1. Log in to the F5 cloud portal.

3. Navigate to the **Global Log Receiver** tab.

5. Click on **Add Global Log Receiver** and select **HTTP receiver** under **Receiver Configuration**.

**Step 2: Configure HTTP Receiver**

Enter the PICO IP and port number in the **HTTP URI** field in the following format:

```
<IP_address>:<TLS_connector_port_number>
```

**Step 3: Set Authentication**

1. Under **Authentication**, select **None** from the dropdown.

**Step 4: Enable TLS**

1. Toggle the **Show Advanced Fields** option.

3. In the TLS section, select **Use TLS** from the dropdown.

**Step 5: Disable Certificate and Hostname Verification**

1. For **Verify Server Certificate** and **Verify Server Hostname**, select **Skip** to disable verification.

**Step 6: Add Trusted CA Certificate**

1. Under **Trusted CA**, select **Server CA Certificate**.

3. Paste the output of the certificate details captured in **Step B**.

**Step 7: Finalize Configuration**

1. Disable **mTLS**.

3. Click **Save & Exit**.
