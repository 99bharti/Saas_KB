---
title: "Not Clause"
date: 2025-01-17
type: "epkb_post_type_1"
---

  
NOT is a [logical operator](https://mode.com/sql-tutorial/sql-logical-operators) in DQL that you can put before any conditional statement to select rows for which that statement is false.

To negate the result of any Boolean expression, you use the NOT operator. The following illustrates how to use the NOT operator:

```
stream=cloudtrail where sourcename='AWS-CLOUDTRAIL' and not srcip='11.71.11.11'
```

The above query will retrieve all the fields from stream cloudtrail where the sourcename is AWS-CLOUDTRAIL and srcip is not 11.71.11.11. The output is shown as below:

![image 1-Dec-06-2023-04-22-06-7896-AM](./images-Not%20Clause/Not-Clause-1.png)
