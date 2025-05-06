---
title: "Having Clause"
date: 2025-01-17
type: "epkb_post_type_1"
---

  
A HAVING clause in DQL specifies that a DQL SELECT statement must only return rows where aggregate values meet the specified conditions. It enables you to specify conditions that filter which group results appear in the results.

The WHERE clause places conditions on the selected columns, whereas the HAVING clause places conditions on groups created by the GROUP BY clause.

The following query shows the position of the HAVING Clause in a query.

```
Stream=FIREWALL |groupby dstip |select dstip, percentage_of(dstport==23), ratio_of(dstport==23) |having percentage_of_col1>0
```

The HAVING clause must follow the GROUP BY clause in a query.

Here,

- Stream is Firewall

- Groupby function allows to organize similar data into groups i.e. groupby destination IP Address.

- Select function helps you to retrieve records from one or more tables, the records retrieved are known as a result set.

- The having clause percentage\_of (condition) function returns the percentage value of a numeric column that would be more than zero (0).

The above query will retrieve all fields for each event where the stream is a firewall; it retrieves the percentage value of the group(s) as shown below:

![image 1-Dec-05-2023-12-04-15-1768-PM](./images-Having%20Clause/Having-Clause-1.png)
