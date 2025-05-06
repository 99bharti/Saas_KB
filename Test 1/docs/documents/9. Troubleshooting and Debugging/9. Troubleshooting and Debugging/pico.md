---
title: "PICO"
date: 2025-01-17
type: "epkb_post_type_1"
---

###### **Prerequistes**

- Ensure all the conditions mentioned in **[Before your Begin](https://dnif.it/kb/getting-started/before-you-begin/)** are met before proceeding with Installation.

It is mandatory for PICO to have a VPN connectivity to Core private interface i.e. the CORE\_IP mentioned while bringing up the component.

###### **Installation**

  
The installation and setup of the Pico is handled by the script which is to be run by using below command:

```
bash -c "$(curl -s https://raw.githubusercontent.com/dnif/installer/main/picoinstaller.sh)"
```

The inputs required are:

- **CORE\_IP:** Specify the IP Address of the Core to bind to a tenant ( previously known as cluster)

- **PROXY:** This is an optional input if a proxy setup is present in your environment.
