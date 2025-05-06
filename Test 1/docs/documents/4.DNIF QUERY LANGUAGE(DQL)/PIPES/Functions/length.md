---
title: "Length"
date: 2025-01-20
type: "epkb_post_type_1"
---

  
The length function returns the length of a string. The following illustrates the syntax of the length() function:

```
Stream=AUTHENTICATION | groupby user | select user, length(user)
```

Here,

- Stream is Firewall

- Groupby function allows to organize similar data into groups i.e. User.

- Select function helps you to retrieve records from one or more tables, the records retrieved are known as a result set.

- The length (field) function returns the length of the field value.

In this example, on execution it should retrieve all fields for each event where stream is Authentication; it retrieves the length of the field value. The output is shown as below:

![](./images-Length/Length-1.png)
