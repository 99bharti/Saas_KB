---
title: "Availability Timeline"
date: 2025-01-28
type: "epkb_post_type_1"
---

  
This chart displays the availability of signals over time, i.e. the duration for which the particular signals were in an active mode. You will have to group your data and the query should include the first seen and last seen details to form the chart. 

###### **Creating an availability timeline chart**

- Go to workbooks, add a DQL block and enter a query. Ensure the stream is signals and first seen and last seen parameters are added to the query.

For Example:

```
stream=signals| groupby detectionname, firstseen, lastseen
```

- The stream=signals directive will retrieve all fields for each event where **Stream** is **Signals**. The result set is grouped by unique values of detectionname, firstseen and lastseen. The result set is sorted in the descending order of **count\_unique** (by default). The query results will be displayed as follows.  
      
    ![](./images-Availability%20Timeline/Availability-Timeline-1.webp)

- Now add a visual block,and enter the following details in the field provided.  
      
    ![](./images-Availability%20Timeline/Availability-Timeline-2.webp)  
      
    

| **Field** | **Description** |
| --- | --- |
| Name  | Enter a name for this particular widget/chart that you are creating |
| Type  | Select timebar from the drop-down |
| Primary | Select the primary value for the chart to be created |
| Secondary | Selected the secondary value for the chart to be created. **Note:** You can add multiple secondary values as per requirement. In this query firstseen, lastseen and count are secondary values. |

- The availability time chart is displayed  
      
    ![](./images-Availability%20Timeline/Availability-Timeline-3.webp)

- Hover on the bar to view the exact duration.
