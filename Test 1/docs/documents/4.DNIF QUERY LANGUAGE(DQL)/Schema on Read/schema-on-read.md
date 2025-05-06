---
title: "Schema on Read"
date: 2025-01-20
type: "epkb_post_type_1"
---

Introduced in v9.2.0

Access Structured Data in your logs without Extraction. With DQL, you can now access JSON and structured Key Value fields without extraction.

- Non-extracted fields are referred to in the query with @ prefix instead of $ prefix.

- @ fields can be used in selection, where and group clauses alongside extracted fields.

- **sourcename** filter is mandatory for structured key value logs whereas for json logs, the soucename filter is not required.

###### **JSON**

For JSON logs you can add @ prefix i.e. @fieldname to extract the field details of that particular column.  
**  
Example 1**

```
stream=cloudtrail | select @type,@userIdentity.type
```

This query will retrieve all the UserIdentity.type fields for each event where Stream is CLOUDTRAIL. The output will be displayed as below.

![image 1-Dec-05-2023-11-04-20-9351-AM](./images-Schema%20on%20Read/Schema-on-Read-1.png)

###### **Key Value**

**Example**

```
stream=firewall where sourcename='FORTIGATE' | groupby @srcip, @dstip | select @srcip,@dstip,sum(evtlen)
```

Here,

- Stream is Firewall

- Groupby function allows to organize similar data into groups i.e. groupby source and destination ip address.

- Select function helps you to retrieve records from one or more tables, the records retrieved are known as a result set.

- The sum ( ) function returns the total sum of a numeric column i.e, Eventlength

![image 2-Dec-05-2023-11-04-34-2686-AM](./images-Schema%20on%20Read/Schema-on-Read-2.png)

The above query should retrieve the total sum of all values in the expression, select and group it as per the source and destination IP Address for each event where the stream is a firewall and Sourcename is Fortigate.
