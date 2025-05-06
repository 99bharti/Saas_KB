---
title: "Add Parameters to Workbook"
date: 2025-01-20
type: "epkb_post_type_1"
---

  
Workbook parameters can be referred to as the input to conditions that are used to filter query results or to provide input queries. This section helps you to add parameters to a Workbook.

###### **How to add parameters to workbook?**

- Hover on the **Workbooks** icon on the left navigation bar, it will display the folder wise view of existing workbooks in the tenant (previously known as cluster).

![image 1-Dec-04-2023-08-24-55-8042-AM](./images-Add%20Parameters%20to%20Workbook/Add-Parameters-to-Workbook-1.png)

- Click the **plus** icon at the top right corner of the Workbooks list page to create a new workbook, the following screen is displayed.

![image 2-Dec-04-2023-08-25-19-9559-AM](./images-Add%20Parameters%20to%20Workbook/Add-Parameters-to-Workbook-2.png)

  

- Enter a query and execute the same, the results will be displayed.

- Parameters will be applied to the query result columns.

- Multiple parameters can be added to a single workbook

- Click **Parameters** icon on the top right corner of the screen to add parameters to a Workbook.

![image 3-Dec-04-2023-08-28-36-8876-AM](./images-Add%20Parameters%20to%20Workbook/Add-Parameters-to-Workbook-3.png)

  
**Add parameters** bar is added, click this to define parameters for the Workbook.

![image 4-Dec-04-2023-08-35-07-9256-AM](./images-Add%20Parameters%20to%20Workbook/Add-Parameters-to-Workbook-4.png)

  

| **Field Name** | **Description** |
| --- | --- |
| Name | Enter a parameter name for the Workbook. Workbook field value to be parameterised |
| Field Type | Indicates the field type. By default, the field type displayed is **Text** |
| Default Value | Enter the parameterized value |

Click the **Save** icon to save the details, the parameter value added will be displayed above the query section of the workbook.

![image 5-Dec-04-2023-08-36-04-7495-AM](./images-Add%20Parameters%20to%20Workbook/Add-Parameters-to-Workbook-5.png)

  
Now, you can apply this paramater anywhere in query in the following format  
**AND $columnname=**

**Example**

```
_fetch * from event where $Stream=FIREWALL AND $EvtLen= limit 1d
```

_The above output will fetch and display only the details as per the value set in EventLength parameter._

During Signal investigations, you can directly send a parameter value on demand and invoke the workbook.
