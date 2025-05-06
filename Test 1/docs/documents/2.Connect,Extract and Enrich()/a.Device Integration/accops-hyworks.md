---
title: "Accops Hyworks"
date: 2025-01-17
type: "epkb_post_type_1"
---

###### **Objective**

This document is used to configure syslog server in HyWorks management console to enable log forwarding to syslog server.

###### **Prerequisites**  

- HyWorks management console access

- Syslog server IP

- Port must be open from HyWorks controller

###### **Steps to configure syslog server**

Follow below steps to configure syslog server for log forwarding:

1. Login into HyWorks Controller Management Console

3. Go to below location: System -> Syslog server

5. Provide following details:
    - Identity: Specify Server name e.g., HWSCTRL1
    
    - Remote Address: Specify Syslog server IP or
    
    - Remote Port: Specify port on which the syslog server is configured to receive logs
    
    - Enable Syslog: Select to send logs to the configured syslog server.

7. Click Update button to save the settings

###### **Advance Configurations**

Following advance configurations can be done to get some extra logs:  
Location of Controls: System -> Advance Config

1. **Controller Session Monitoring:** This flag is used to enable Controller Session logging. After enabling this flag, it will add extra logs for user login and connect desktop and application. Default is false and should be marked as true to get additional session details.

3. **Controller Session Monitoring Interval:** This value is used to define Controller Session Monitoring interval (in minutes). Default is 15 minutes.

###### **Log format used for syslog server**

Below is the log format, used for HyWorks logs:

**Format:** DateTime\_UserName\_OrganizationName\_LogLevel(Info/Error/Warn)\_LogMessage\_Exception(StackTarace)\_Logger(Entitiy)\_CorelationIdL1\_CorelationIdL2\_CorelationIdL3

HyWorks log can be downloaded for verification from following location on HyWorks Controller Management console:

HyWorks management console -> Logs -> download logs

###### **HyWorks logs Parsing Examples**  
  

| **ARS HyWorks Fields** | **Details about fields** | **Logs** |
| --- | --- | --- |
| @timestamp | Log timing | 2021-11-23 17:30:48,138 |
| Course\_Self\_Study\_Reservation\_Name | Name of CSS reservation from logs | &lt;14&gt;HWC-PROD: 2021-11-23 17:30:48,138 \_a0215550 \_default \_INFO \_User 'a0215550' log-in into course self-study reservation 'Res-EITWGH' and course '\[\]' - '2021888T013001'. \_ \_EDCLog |
| Self\_Study\_Course\_Code | CSS course name, If users will create CSS then we can filter course name through this tag | User 'a0193741' log-in into course self-study reservation 'Res-GPIOG6' and course '' - '20211106202000' |
| Course\_Self\_Study\_Username | Username of user from CSS | User 'a0193741' log-in into course self-study reservation 'Res-GPIOG6' and course '' - '20211106202000' |
| HyWorks \_Identifier | HyWorks server name which we added as Identifier in Syslog settings in HyWorks | &lt;14&gt;HWC-PROD: 2021-11-23 17:30:48,138 \_a0215550 \_default \_INFO \_User 'a0215550' log-in into course self-study reservation 'Res-EITWGH' and course '\[\]' - '2021888T013001'. \_ \_EDCLog |
| LogType | Type of logs in HyWorks i.e. INFO/ERROR/WARNING | 2021-11-23 17:30:52,311 \_ \_default \_INFO \_'VDI-OC3XP6-0044''Shutdown' \_ \_EDCLog2021-11-23 17:30:48,028 \_a0215550 \_default \_WARN \_RDP login name changed from a0215550@kuecs.kyoto-u.ac.jp to a0215550 for desktop VDI-V1NAV4-0085 \_ \_EDCLog |
| Login\_Time | Login time of user logged into HyWorks |   |
| Profile | Organization Details (Default in case of Kyoto HyLabs) | default |
| Self\_Study\_Reservation\_Name | Name of SS reservation name | &lt;14&gt;HWC-PROD: 2021-11-23 11:09:20,062 \_a0181820 \_default \_INFO \_User 'a0181820' log-in into self-study reservation 'Res-X55BV0'. \_ \_EDCLog |
| Self\_Study\_Username | Username of user from SS | &lt;14&gt;HWC-PROD: 2021-11-23 11:09:20,062 \_a0181820 \_default \_INFO \_User 'a0181820' log-in into self-study reservation 'Res-X55BV0'. \_ \_EDCLog |
| Session\_Time | This Log is specific to Application active time which is published in HyWorks (Not applicable in case of HyLabs) |   |
| Username | User connected with VDI on Connect Desktop Agent/ Connect Desktop Call | 2021-11-23 11:09:20,062 \_a0181820 \_default \_INFO \_\['Connect Desktop'\] UserName: a0181820@kuecs.kyoto-u.ac.jp, Connect Desktop at:11:09:20.0625748Total time taken - 00:00:01.424 \[Format: HH:MM:SS:sss\] \_ \_EDCLog2021-11-23 11:09:20,046 \_a0181820 \_default \_INFO \_\['CallDesktopAgent'\] UserName: 10.252.250.65, CallDesktopAgent at:11:09:20.0469531Total time taken - 00:00:01.381 \[Format: HH:MM:SS:sss\] \_ \_EDCLog |
| \_index | You can select the index as per the requirement, Available Index -> HyWorks /HySecure/Metricbeat/Goldmaster |   |
| concurrent\_vms | Concurrent Number of powered on VMs at particular time of interval | 2021-11-23 17:31:57,704 \_ \_default \_INFO \_\[Syslog\] System Usage log : Total license : 1000, Used license : 14, Total logged in users : 14 , Logged in active users : 12 , Logged in idle users : 1 , Logged in disconnected users : 1 , Total application sessions : 0, Application connected sessions : 0, Application disconnected sessions : 0, Total shared desktop sessions : 0, Shared desktop connected sessions : 0,Shared desktop disconnected sessions : 0, Total dedicated desktop sessions : 9 , Total Power On Ready Desktop : 560 \_ \_EDCLog |
| host | HyWorks sever address |   |
| idle\_users\_hw | Logged in idle users, Users which are in idle state in HyWorks | 2021-11-23 17:31:57,704 \_ \_default \_INFO \_\[Syslog\] System Usage log : Total license : 1000, Used license : 14, Total logged in users : 14 , Logged in active users : 12 , Logged in idle users : 1 , Logged in disconnected users : 1 , Total application sessions : 0, Application connected sessions : 0, Application disconnected sessions : 0, Total shared desktop sessions : 0, Shared desktop connected sessions : 0,Shared desktop disconnected sessions : 0, Total dedicated desktop sessions : 9 , Total Power On Ready Desktop : 560 \_ \_EDCLog |
| license\_used\_hw | License used as per the total logged in users. | 2021-11-23 17:31:57,704 \_ \_default \_INFO \_\[Syslog\] System Usage log : Total license : 1000, Used license : 14, Total logged in users : 14 , Logged in active users : 12 , Logged in idle users : 1 , Logged in disconnected users : 1 , Total application sessions : 0, Application connected sessions : 0, Application disconnected sessions : 0, Total shared desktop sessions : 0, Shared desktop connected sessions : 0,Shared desktop disconnected sessions : 0, Total dedicated desktop sessions : 9 , Total Power On Ready Desktop : 560 \_ \_EDCLog |
| logged\_in\_active\_users\_hw | Users session in active state | 2021-11-23 17:31:57,704 \_ \_default \_INFO \_\[Syslog\] System Usage log : Total license : 1000, Used license : 14, Total logged in users : 14 , Logged in active users : 12 , Logged in idle users : 1 , Logged in disconnected users : 1 , Total application sessions : 0, Application connected sessions : 0, Application disconnected sessions : 0, Total shared desktop sessions : 0, Shared desktop connected sessions : 0,Shared desktop disconnected sessions : 0, Total dedicated desktop sessions : 9 , Total Power On Ready Desktop : 560 \_ \_EDCLog |
| logged\_in\_disconnected\_hw | Users Session are in disconnected state in HyWorks | 2021-11-23 17:31:57,704 \_ \_default \_INFO \_\[Syslog\] System Usage log : Total license : 1000, Used license : 14, Total logged in users : 14 , Logged in active users : 12 , Logged in idle users : 1 , Logged in disconnected users : 1 , Total application sessions : 0, Application connected sessions : 0, Application disconnected sessions : 0, Total shared desktop sessions : 0, Shared desktop connected sessions : 0,Shared desktop disconnected sessions : 0, Total dedicated desktop sessions : 9 , Total Power On Ready Desktop : 560 \_ \_EDCLog |
| loglvl | Controller Logs level -> 14- Info, 12- Warning |   |
| message | Log message from HyWorks |   |
| timestamp | Log timing |   |
| total\_dedicated\_desktop\_sessions\_hw | Connected dedicated desktops in HyWorks | 2021-11-23 17:31:57,704 \_ \_default \_INFO \_\[Syslog\] System Usage log : Total license : 1000, Used license : 14, Total logged in users : 14 , Logged in active users : 12 , Logged in idle users : 1 , Logged in disconnected users : 1 , Total application sessions : 0, Application connected sessions : 0, Application disconnected sessions : 0, Total shared desktop sessions : 0, Shared desktop connected sessions : 0,Shared desktop disconnected sessions : 0, Total dedicated desktop sessions : 9 , Total Power On Ready Desktop : 560 \_ \_EDCLog |
| total\_licenses\_hw | Total available licenses available in HyWorks | 2021-11-23 17:31:57,704 \_ \_default \_INFO \_\[Syslog\] System Usage log : Total license : 1000, Used license : 14, Total logged in users : 14 , Logged in active users : 12 , Logged in idle users : 1 , Logged in disconnected users : 1 , Total application sessions : 0, Application connected sessions : 0, Application disconnected sessions : 0, Total shared desktop sessions : 0, Shared desktop connected sessions : 0,Shared desktop disconnected sessions : 0, Total dedicated desktop sessions : 9 , Total Power On Ready Desktop : 560 \_ \_EDCLog |
| total\_logged\_in\_users\_hw | Total Logged in concurrent users at particular interval of time | 2021-11-23 17:31:57,704 \_ \_default \_INFO \_\[Syslog\] System Usage log : Total license : 1000, Used license : 14, Total logged in users : 14 , Logged in active users : 12 , Logged in idle users : 1 , Logged in disconnected users : 1 , Total application sessions : 0, Application connected sessions : 0, Application disconnected sessions : 0, Total shared desktop sessions : 0, Shared desktop connected sessions : 0,Shared desktop disconnected sessions : 0, Total dedicated desktop sessions : 9 , Total Power On Ready Desktop : 560 \_ \_EDCLog |

###### **Log format used in HyWorks**

1. Login in HyWorks management console

3. Go to Logs.

5. Download log file compare all logs
