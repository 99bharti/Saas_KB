---
title: "Create a Call Block"
date: 2025-01-29
type: "epkb_post_type_1"
---

######   
**Overview**

Call block works on the principle of Reusability (Create once and Use Anywhere).  It assists the users in chaining the Workbooks  - workbooks can now be called from another workbook using **Call Block.**  This Reduces workbook development time and facilitates ease of change of content. Also, reusable workbooks are more reliable as the content is already tested.

###### **How to add a Call Block?**

**Navigate to Workbook Section:**

- Hover on the **Workbooks** icon on the left navigation bar, it will display the folder-wise view of existing workbooks in the tenant (previously known as cluster).  
      
    ![](./images-Create%20a%20Call%20Block/Create-a-Call-Block-1.png)  
      
    

- Create a new workbook or open an existing workbook. 

- In the **Workbook** page, click on **plus icon** and select **Call Block** from the list.

- Call Block is an independent block. It may be used independently in a workbook or with other blocks.  
      
    ![](./images-Create%20a%20Call%20Block/Create-a-Call-Block-2.png)  
      
      
    ![](./images-Create%20a%20Call%20Block/Create-a-Call-Block-3.png)  
      
    

- Within the **Call Block** select the workbook that you want to call.  
      
    ![](./images-Create%20a%20Call%20Block/Create-a-Call-Block-4.png)  
      
    

- Run the Call Block. 

- The result set from the previous block is passed as input to the Workbook specified in the call Block. The called Workbook is executed however no data is returned from the called Workbook to the calling Workbook.

- After the execution of the Call block the control is returned to the calling workbook.

- E.g. You can use the Call Block to call a Notification Workbook that can send notifications.  
      
    ![](./images-Create%20a%20Call%20Block/Create-a-Call-Block-5.png)  
      
    **Important Note**: Use the call block for scenarios where data is not modified, i.e. Data is not returned by the called workbook.
