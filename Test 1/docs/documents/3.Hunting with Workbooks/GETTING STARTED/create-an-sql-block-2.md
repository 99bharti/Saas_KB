---
title: "Create an SQL Block"
date: 2025-01-29
type: "epkb_post_type_1"
---

  
DNIF supports query processing and analysis with SQL. You can interpret the data using SQL for targeted analysis and fetch relevant data.

- SQL Block could be the first block to be added in Workbook.

- The output data from the SQL block can be used as an input to other blocks such as DQL / Code / Signal block etc to generate an output.

- All the standard SQL functions and operations are allowed.

###### **How to add an SQL Block?**

- Hover on the **Workbooks** icon on the left navigation bar, it will display the folder wise view of existing workbooks in the tenant (previously known as cluster).

![image 1-Dec-21-2023-04-47-07-9790-AM](./images-%20Create%20an%20SQL%20Block/Create-a-SQL-Block-1.png)

- Click the **plus** icon on the Workbook page and select SQL Block from the list, the following screen will be displayed.

**SQL Block**

![image 2-Dec-21-2023-04-47-20-6977-AM](./images-%20Create%20an%20SQL%20Block/Create-a-SQL-Block-2.png)

- Enter the query and click **Run** to execute the query, the result dataset will be displayed.

![image 3-Dec-21-2023-04-47-31-1170-AM](./images-%20Create%20an%20SQL%20Block/Create-a-SQL-Block-3.png)

**Example SQL Query**

```
SELECT *FROM FIREWALLWHERE $Duration = 1h
```

In the above example, the query result is displaying all the details of Stream= Firewall within an hour.

- Click **Information** icon, to view log details. You can view the log details in JSON and TABLE format.

![image 4-Dec-21-2023-04-47-44-3936-AM](./images-%20Create%20an%20SQL%20Block/Create-a-SQL-Block-4.webp)

- Click **Copy** icon, to copy the details to clipboard.

###### **SQL Block Functions  
**

| **Icons** | **Functionality** |
| --- | --- |
| ![image 5-Dec-21-2023-04-48-02-7426-AM](./images-%20Create%20an%20SQL%20Block/Create-a-SQL-Block-5.webp) | Used to filter the query result based on your requirement. |
| ![image 6-Dec-21-2023-04-48-09-9072-AM](./images-%20Create%20an%20SQL%20Block/Create-a-SQL-Block-6.webp) | User to delete the block |
| ![image 7-Dec-21-2023-04-48-16-3726-AM](./images-%20Create%20an%20SQL%20Block/Create-a-SQL-Block-7.webp) | Used to export logs in CSV format |

For more details on Workbooks refer [Create a Workbook](https://dnif.it/kb/hunting-with-workbooks/getting-started-hunting-with-workbooks/how-to-create-a-workbook-2/).
