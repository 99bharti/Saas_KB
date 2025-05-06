---
title: "Troubleshooting Automations"
date: 2025-01-17
type: "epkb_post_type_1"
---

On [Configuring Automations](https://dnif.it/kb/uncategorized/configuring-automation/), the status for **Validation** field will be modified and the updated **Validation** status will be indicated according to the configuration saved.

The following is the list of **Validation** status that would be displayed based on the configurations:

- [**Not Validated**](#Not-Validated)

- [**Validation in Progress**](#Validation-in-progress)

- [**Validated**](#VALIDATED)

- [**Validation Forbidden**](#Validation-forbidden)

- [**Credentials not Authorized**](#Credentials-not-authorized)

- [**Validation Failed**](#Validation-failed)

- [**Validation Resource not found**](#Validation-Resource-Not-Found)

## **Not Validated**  
  

This is the default status when the Integration is in an un-configured state. The status will be displayed as **Not Validated** only when the integration is in an **un-configured** state. If the integration is configured and still the status is displayed as **Not Validated**, perform the following checks:

- Check if the credentials entered are correct. The credentials include each input value that is given at the time of configuring the Integration.

- Check if the specific endpoint/host is reachable from CORE.

## **Validation in Progress**  
  

On saving the configurations the **Validation** status is changed to **Validation in Progress**. If the **Validation** status is not changed to **Validation in Progress**, perform the following checks:

- Click **Refresh** on the right corner of the **Integrations** screen.

- The status of the saved integration should change to **Validated**, if the status does not change check whether the endpoint/host is reachable from CORE.

- If after **refresh** the validation status changes to some other status except **Validated**, perform the checks specified for that particular **Validation** status.

## **Validated**  
  

This **Validation** status signifies that the Integrations have been configured successfully.

## **Validation Forbidden**  
  

This **Validation** status indicates that the configured values are unauthorized i.e, the user credentials do not have access to the endpoint/Host, perform the following check:

- Check if the credentials entered during configuration are correct.

## **Credentials not Authorized**  
  

This **Validation** status indicates that the credentials are incorrect, perform the following check:

- Check if the credentials entered during configuration are correct.

## **Validation Failed**  
  

This **Validation** status signifies there is a failure in the endpoint/host request, perform the following check:

- Check if the credentials entered during configuration are correct.

## **Validation Resource Not Found**  
  

The **Validation** status signifies the availability of endpoint host resources, perform the following check:

- Check for the availability of endpoint host resources.

## **Microsoft Active Directory**

This section includes troubleshooting recommendations and procedures for diagnosing and fixing problems that may occur while establishing a connection with Active Directory.

1. Check if you are able to establish a telnet connection to the Active Directory server using the following command:

```
telnet <AD_HOST> <AD_port>
```

1. Now, **[install and configure an LDAP client](https://dnif.it/kb/operations/ldap-authentication/) on the host** which is connecting to LDAP server.

3. On setting up LDAP client on host, check the connection to the LDAP server using the following command:

```
ldapwhoami -H ldap://192.168.31.95:636 -D "CN=Administrator,CN=Users,DC=example,DC=com" -W
```
