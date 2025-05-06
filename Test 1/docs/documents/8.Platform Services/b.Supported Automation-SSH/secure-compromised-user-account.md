---
title: "Secure Compromised User Account"
date: 2025-01-31
type: "epkb_post_type_1"
---

This article lists few examples, these examples will help you to quickly get started with the configuration process by demonstrating practical use cases.

- [Terminate active sessions](#Terminate-active-sessions)

- [Reset Password](#Reset-Password)

- [Kill a suspicious process](#Kill-a-suspicious-process)

## **Terminate active sessions**

The below configuration allows you to connect to host and run any commands:

![image 1-Dec-21-2023-11-51-46-6572-AM](./image/Secure-Compromised-User-Account-1.jpg)

- In the above configuration, the **killall -u** command, will terminate all the active sessions for the specified user.

- Once SSH integration is configured, run a search.  
    

![image 2-Dec-21-2023-11-51-56-6347-AM](./image/Secure-Compromised-User-Account-2.jpg)

- In the above figure, a workbook named **Response for Compromised Account** is executed that displays a suspected User on execution of the workbook.  
    

![image 3-Dec-21-2023-11-52-51-1704-AM](./image/Secure-Compromised-User-Account-3.jpg)

```
_trigger api ssh execute_command 'Terminate Session'
```

- Using _trigger query, an api call is made to the ssh integration (Terminate Session) configuration, which will terminate the active sessions for the suspected user.

## **Reset Password**

The below configuration allows you to connect to host and run any commands:

![image 4-Dec-21-2023-11-53-02-9207-AM](./image/Secure-Compromised-User-Account-4.jpg)

- In the above configuration, the **passwd -e &lt;Username&gt;** command, will reset the password of the specified user.

- Once SSH integration is configured, run a search.  
      
    ![image 5-Dec-21-2023-11-53-12-5301-AM](./image/Secure-Compromised-User-Account-5.jpg)  
    

- In the above figure, a workbook named **Response for Compromised Account** is executed that displays a suspected User on execution of the workbook.  
      
    ![image 6-Dec-21-2023-11-53-48-4097-AM](./image/Secure-Compromised-User-Account-6.jpg)  
    

```
_trigger api ssh execute_command 'Reset Password'
```

- Using _trigger query, an api call is made to the ssh integration (Reset Password) configuration, which will reset the password for the suspected user

## **Kill a suspicious process**

The below configuration allows user to connect to host and run a command:

![image 7-Dec-21-2023-11-54-00-3073-AM](./image/Secure-Compromised-User-Account-7.jpg)

- In the above configuration, the **kill -9 &lt;Process ID&gt;** command, will will kill the specified Process ID.

- Once SSH integration is configured, run a search.  
      
    ![image 8-Dec-21-2023-11-54-12-2171-AM](./image/Secure-Compromised-User-Account-8.jpg)  
    

- In the above figure, a search query is executed that displays all the suspicious Process ID's against the respective $DevSrcIP.  
      
    ![image 9-Dec-21-2023-11-54-21-1961-AM](./image/Secure-Compromised-User-Account-9.jpg)  
    

```
_trigger api ssh execute_command 'Kill Process' _$DevSrcIP_
```

- Using _trigger query, an api call is made to the ssh integration (Kill Process) configuration, which will terminate the processes running on the host $DevSrcIP.
