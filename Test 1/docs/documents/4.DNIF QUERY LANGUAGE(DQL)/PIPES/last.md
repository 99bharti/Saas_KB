---
title: "Last"
date: 2025-01-17
type: "epkb_post_type_1"
---

  
This works similarly to the limit keyword. This is because the last keyword also picks the newest/latest events first and then limits the number of events to be included in the final result set.

Take a look at the example given below:

```
stream=firewall | groupby dstport, dstcn |last 2
```

This query retrieves two fields: destination port and destination country. However, we limit the result set (last 2) to only 2 newest events which satisfy the where condition. The result set is sorted in the ascending order.

![image 1-Dec-05-2023-12-12-33-8700-PM](./images-Last/Last-1.png)
