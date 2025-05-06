---
title: "Distinct"
date: 2025-01-17
type: "epkb_post_type_1"
---

  
The distinct function is used to avoid duplicate values present in any specific columns/table. The following illustrates the syntax of the distinct() function:

```
stream=firewall |groupby dstip |select distinct(dstip)
```

Here,

- Stream is Firewall

- Groupby function allows to organize similar data into groups i.e. Destination IP Address.

- Select function helps you to retrieve records from one or more tables, the records retrieved are known as a result set.

- The distinct (field) clause is used to remove duplicates from the result set.

In this example, on execution it should retrieve all fields for each event where the stream is a firewall, the DISTINCT clause kept only the distinct destination IP Address and removed all the duplicate values.The output is shown as below:

![image 1-Dec-06-2023-04-30-18-6020-AM](./images-Distinct/Distinct-1.png)
