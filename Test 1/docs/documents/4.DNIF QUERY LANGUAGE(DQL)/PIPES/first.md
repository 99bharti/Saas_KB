---
title: "First"
date: 2025-01-17
type: "epkb_post_type_1"
---

  
The first keyword picks the oldest or earliest events to be a part of the result set. Hence, the oldest/earliest events appear first in the result set. The result set is then limited to the number of events specified in the query after the first keyword.

Take a look at the example given below:

```
stream=firewall | groupby dstport, dstcn | first 2
```

This query retrieves two fields: destination port and destination country. However, we limit the result set (first 2) to only 2 oldest events which satisfy the where condition. The result set is sorted in the ascending order.

![image 1-Dec-05-2023-12-26-44-0116-PM](./IMAGES-First/First-1.png)
