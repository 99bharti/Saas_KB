---
title: "Sophos Cyberoam Firewall"
date: 2025-01-17
type: "epkb_post_type_1"
---

###### **Configure the Syslog Server in Sophos XG firewall**

You can configure a syslog server in Sophos Firewall by following the instructions below.

1. Go to **System Services > Log Settings** and click Add to configure a syslog server.
2. Enter a Name for the syslog server.
3. Enter the IP Address of the syslog server. Messages from the device will be sent to the entered IP Address.
4. Enter a Port number that the device will use for communicating with the syslog server. Device will send messages using the selected port.

###### **Firewall Analyzer uses 1514 as default syslog server port.**

1. Select the Facility from the available options. As an example, we have selected the default value i.e. DAEMON.

Facility informs the syslog server of the log message's source. It is defined by the syslog protocol. You can configure the facility to distinguish log messages from different devices. This parameter helps you identify the device that recorded a specific log file.

.  
**Available options:**

- DAEMON (Default): Information on the services running in the device as daemon.
    - KERNEL: Kernel log.
    - LOCAL0 - LOCAL7: Log level information.
    - USER: Logging based on users who are connected to the Server.

1. Select the Severity Level from the available options. Severity level is the severity of the message that has been generated. The firewall logs all messages with a severity level equal to or greater than the level you select. For example, select Error to log all messages tagged as Error as well as any messages tagged with Critical, Alert and Emergency. Select Debug to log all messages.  
    Available options:
    - Emergency (Default): The System is not usable.
    - Alert: Action must be taken immediately.
    - Critical: Critical problem/error.
    - Error: An Error has occurred.
    - Warning: Warning of a problem/error.
    - Notification: Normal, but significant.
    - Information: Informational.
    - Debug: Debug-level messages.  
          
        
2. Select the Format from the available options. Currently, the firewall can only produce logs in its own standard format.
    
      
    ![](./images-Sophos%20Cyberoam%20Firewall/Sophos-Cyberoam-Firewall-1.webp)
    
3. Click **Save** to save the configuration.

Once you have added the server, go to the **System > System Services > Log Settings** page and enable all those logs, which are to be sent to the syslog server in the section **Log Settings**.

###### **Enable Traffic Logging**

1. **Enable firewall traffic logs**
    - Go to **Firewall > Edit Firewall Rule** to view the status of logging and security policies.
    - Enable logging of firewall traffic from the Log Traffic section. It ensures that traffic passing through the Firewall rule has been logged and can be viewed from Log Viewer.
    - We recommend you enable logging for all firewall rules.
        
        ![](./images-Sophos%20Cyberoam%20Firewall/Sophos-Cyberoam-Firewall-2.webp)
        
2. **Apply Security Policies**  
    Set security policies to Allow All or Default Policies or a custom policy so that logs are generated. If the security policies are set to None then logs may not generate.
3. **Enable Local Logging**  
    Go to **Configure > System Services > Log Settings** and select the checkbox **Log Type (System)** to enable local logging. We recommend you enable logging for all modules.

[Official Documentation](https://support.sophos.com/support/s/article/KB-000035777?language=en_US#Check%20Status%20of%20Logging%20and%20Security%20Policies)
