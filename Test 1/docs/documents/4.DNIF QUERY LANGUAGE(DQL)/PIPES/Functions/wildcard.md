---
title: "Wildcard"
date: 2025-01-17
type: "epkb_post_type_1"
---

  
DNIF DQL supports wildcard operators in conjunction with the LIKE operator. It is used to substitute one or more characters in a string. Wildcard characters are used with the LIKE operator. The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.

The following illustrates the syntax of the wildcard function:

```
stream=cloudtrail where useragent like "%amazonaws%"
```

The above query will return all the fields that have **amazonaws** in the cloudtrail stream. The output is shown as below:

![image 1-Dec-06-2023-04-32-39-5519-AM](./images-Sum/Sum-1.png)
