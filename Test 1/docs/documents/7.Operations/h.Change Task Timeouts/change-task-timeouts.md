---
title: "Change Task Timeouts"
date: 2025-01-20
type: "epkb_post_type_1"
---

To change the default task timeout configuration for celery workers you need to follow the below steps:

1. Edit the task timeout configuration file on all datanodes.

3. Restart sheepdog on all datanodes.

## **Configuration Path**

```
/dnif/csltuconfig/task_timeout.yml
```

## **Default Configuration**

```
task_timeout:  analytics: 120  interactive: 3600  reports: 21600
```

Value is in seconds.
