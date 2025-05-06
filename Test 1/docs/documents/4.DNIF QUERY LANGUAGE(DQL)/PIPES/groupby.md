---
title: "Groupby"
date: 2025-01-17
type: "epkb_post_type_1"
---

  
The **groupby** pipe will help you organize data in groups and calculate some kind of aggregate statistics for these mentioned groups. It basically groups rows with the same value into one group or bucket. Let's see how it works.

The following syntax shows the position of the Groupby Clause in a query.

```
stream=firewall | groupby dstcn
```

The above query will group the results as per destination country for each event where the stream is firewall as shown below:

![image 1-Dec-05-2023-12-34-56-5094-PM](./images-Groupby/Groupby-1.png)
