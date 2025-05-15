---
title: "TLS"
date: 2025-01-21
type: "epkb_post_type_1"
---

TLS Connector can receive logs from various devices and log sources via TCP connection with SSL on any custom port of the Adapter.

###### **Pre-requisites**

- Certificate and key files OR default certificate and key

###### **Certificate and Key Generation**

The certificate and key are generated in pairs by the following command using openssl:

```
openssl req -newkey rsa:2048 -nodes -keyout DNIF_TLS.key -x509 -days 365 -out DNIF_TLS.crt
```

This certificate with -days parameter as 365 is valid for 365 days from date of generation.

The command on execution prompts for organisational information:

![image 1](./IMAGES-TLS/TLS-1.webp)

These are self signed certificate-key pair which are stored at the location “/dnif/connectors/tls\_connector/”.

###### **Ship certificates from other location**

If there is a requirement of individual cert-key pair for every TLS Connector process or if you have your own cert-key pair (say org-x.crt and org-x.key ), then:

1. The files need to be moved to Adapter Host at the location  
    “/DNIF/AD/connectors/tls\_connector/org-x.crt” and “/DNIF/AD/connectors/tls\_connector/org-x.key”

3. As the mount point of Host “/DNIF/AD/” is “/dnif/” inside the container, therefore the configuration of TLS Connector should have :

- Certificate Path as “/dnif/connectors/tls\_connector/org-x.crt”

- Key Path as “/dnif/connectors/tls\_connector/org-x.key”

###### **Configuration**

TLS Connector operates in two modes. The following settings need to be applied while spawning the TLS connector:

![Image 2](./IMAGES-TLS/TLS-2.webp)

**Mode 1: Client Authentication Enable set to True**

Configuring TLS connector in this mode requires the client to authenticate server(TLS Listener) using the Certificate (.crt) file to start communication.

**Configuration details:**

| **Configuration** | **Description** | **Value** |
| --- | --- | --- |
| Connector Name | Name assigned to connector shall be visible on console in Connector’s list. The name should therefore be unique to easier identification. | TLS |
| Connector Type | This is populated y default based on the connector that is added via the ‘+’ icon when adding a connector. It must be a valid connector type | TLS Connector |
| Listener Port | The port on which the TLS Listener shall listen for incoming data. The log sending on the client side should be configured to send data to this port. Multiple TLS Connectors can be spawned on different ports. | 1514 |
| Number of Processes | The number of processes spawned for the connector | 1 |
| Client Authentication Enable | This must be set to True to operate TLS Connector to work in this mode. The client (TLS sender) should connect using the certificate(.crt) file to communicate with the server.(Default Value is True) | True |
| Certificate Path | The path to the certificate(.crt) file is to be entered here. DNIF TLS Connector is shipped with a default crt file \[ DNIF\_TLS.crt \]. | The default path to this file is /dnif/connectors/tls\_connector/DNIF\_TLS.crt |
| Key Path  | The Path to the key(.key) file is to be entered here. DNIF TLS Connector is shipped with a default key file \[ DNIF\_TLS.key \]. | The default path to this file is /dnif/connectors/tls\_connector/DNIF\_TLS.key |

**Mode 2: Client Authentication Enable set to False**

Configuring TLS connector in this mode can allow the client to communicate with server(TLS Listener) without using the Certificate (.crt) file.

**Configuration details:**

| **Configuration** | **Description** | **Value** |
| --- | --- | --- |
| Connector Name | Name assigned to connector shall be visible on console in Connector’s list. The name should therefore be unique to easier identification. | TLS |
| Connector Type | This is populated by default based on the connector that is added via the ‘+’ icon when adding a connector. It must be a valid connector type. | TLS Connector |
| Listener Port | The port on which the TLS Listener shall listen for incoming data. The log sending on the client side should be configured to send data to this port. Multiple TLS Connectors can be spawned on different ports. | 1514 |
| Number of Processes | The number of processes spawned for the connector. | 1 |
| Client Authentication Enable | This must be set to False to operate TLS Connector to work in this mode. The client (TLS sender) does not require the certificate(.crt) file to communicate with the server. | False |
| Certificate Path | The path to the certificate(.crt) file is to be entered here. DNIF TLS Connector is shipped with a default crt file \[ DNIF\_TLS.crt \]. | The default path to this file is /dnif/connectors/tls\_connector/DNIF\_TLS.crt |
| Key Path | The path to the key(.key) file is to be entered here. DNIF TLS Connector is shipped with a default key file \[ DNIF\_TLS.key \]. | The default path to this file is /dnif/connectors/tls\_connector/DNIF\_TLS.key |

- Click **Save** after entering all the required details and click **Test Connection**, to test the configuration.

- A **Connection successful** message will be displayed on screen along with the time stamp.

- If the connection is not successful an error message will be displayed. Refer [Troubleshooting Connector Validations](https://dnif.it/kb/troubleshooting-and-debugging/troubleshooting-connector-validations/) for more details on the error message.

Once the connector is configured, validate if the connector is listed under **[Collection Status](https://dnif.it/kb/operations/collection-status/)** screen with status as **Active**. This signifies the connector is configured successfully and data is ready to ingest.
