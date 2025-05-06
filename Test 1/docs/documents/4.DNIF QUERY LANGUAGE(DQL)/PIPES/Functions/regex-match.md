---
title: "Regex Match"
date: 2025-01-17
type: "epkb_post_type_1"
---

  
A Regular Expression, popularly known as RegEx, is a generalized expression that is used to match patterns with various sequences of characters. A RegEx can be a combination of different [data types](https://www.edureka.co/blog/sql-basics/) such as integers, special characters, Strings, images, etc. Generally, these patterns are used in String searching algorithms in order to perform find or find and replace operations on Strings, or for validating the input.

**Basic Syntax:**

The basic syntax for a regular expression is as follows

```
Stream=streamname where rlike(columnname,”pattern*”)
```

Here,

- Streamname is the name of the stream on which the regular expression is to be performed.

- rlike (columnname,"pattern\*") is the regular expression operator, columnname is name of the column on which the regular expression is to be performed on and pattern represents the pattern to be matched by REGEX.

Let's now look at a practical example:

```
stream=cloudtrail where rlike(useragent,”console.*”)
```

The above query searches for all the values of useragent that match the specified regular expression pattern. The output is shown below:

![image 1-Dec-06-2023-04-28-16-3521-AM](./images-Regex%20Match/Regex-Match-1.png)
