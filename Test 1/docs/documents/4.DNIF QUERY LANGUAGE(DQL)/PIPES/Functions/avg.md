---
title: "Avg"
date: 2025-01-20
type: "epkb_post_type_1"
---

  
The AVG function is an aggregate function that calculates the average value of a set. The following illustrates the syntax of the AVG function:

```
Stream=firewall | groupby dstcn | select dstcn, avg (evtlen)
```

Here,

- Stream is Firewall

- Groupby function allows to organize similar data into groups i.e. groupby destination country.

- Select function helps you to retrieve records from one or more tables, the records retrieved are known as a result set.

- The avg ( ) function returns the average value of a numeric column.

In this case, on execution it should retrieve all fields for each event where the stream is a firewall; it retrieves the average value in each group. The output is shown as below:

![image 1-Dec-05-2023-12-52-06-5077-PM](./images-Avg/Avg-1.png)
