---
title: "Percentage_of"
date: 2025-01-17
type: "epkb_post_type_1"
---

  
The Percentage\_of function calculates the percentage value where the condition is met. The following illustrates the syntax of the percentage\_of function:

```
Stream=FIREWALL | groupby dstip | select dstip, percentage_of (dstport==23) | having percentage_of_col1>0
```

Here,

- Stream is Firewall

- Groupby function allows to organize similar data into groups i.e. groupby destination IP Address.

- Select function helps you to retrieve records from one or more tables, the records retrieved are known as a result set.

- The percentage\_of (condition) function returns the percentage value of a numeric column.

In this example, on execution it should retrieve all fields for each event where the stream is a firewall; it retrieves the percentage value in each group. The output is shown as below:

![image 1-Dec-06-2023-04-48-39-6412-AM](./images-Percentage_of/Percentage_of-1.png)
