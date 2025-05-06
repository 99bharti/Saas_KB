---
title: "Select"
date: 2025-01-17
type: "epkb_post_type_1"
---

  
The Select pipe will help you retrieve only the data that you want and will help you to combine data from different sources.

**Basic Syntax:**

The basic syntax for a Select pipe is as follows:

```
Stream=stream_name | groupby column_name | select column_name
```

Here,

- Stream is Firewall

- Groupby function allows to organize similar data into groups i.e. groupby destination country.

- Select function helps you to retrieve records from one or more tables, the records retrieved are known as a result set.

Let's now look at a practical example:

```
stream=firewall | groupby dstcn |select dstcn
```

This query will retrieve all fields for each event where the stream is a firewall, select and group it as per the destination country as shown below:

![image 1-Dec-05-2023-12-41-04-1787-PM](./images-Select/Select-1.png)
