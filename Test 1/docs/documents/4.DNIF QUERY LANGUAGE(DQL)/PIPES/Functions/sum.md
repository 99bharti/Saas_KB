---
title: "Sum"
date: 2025-01-20
type: "epkb_post_type_1"
---

  
The SUM function is an aggregate function that returns the sum of all or distinct values. We can apply the SUM function to the numeric column only.

```
Stream=firewall | groupby dstcn | select dstcn, sum (evtlen)
```

Here,

- Stream is Firewall

- Groupby function allows to organize similar data into groups i.e. groupby destination country.

- Select function helps you to retrieve records from one or more tables, the records retrieved are known as a result set.

- The sum ( ) function returns the total sum of a numeric column i.e, Eventlength

In this example, on execution it should retrieve all fields for each event where the stream is a firewall, retrieve the total sum of all or distinct values in an expression, select and group it as per the destination country. The output is shown as below:

![image 1-Dec-06-2023-04-12-29-9062-AM](./images-Sum/Sum-1.png)
