---
title: "Native Workbook"
date: 2025-01-29
type: "epkb_post_type_1"
---

  
Native workbooks are workbooks authored by Community and DNIF, the native tag will be displayed on opening these workbooks and users will not be able to edit these workbooks. Now DNIF allows users to clone these native workbooks and you can make the required changes in the cloned version.

###### **How to clone a native workbook?**

To clone a native workbook, open a workbook and click Save, a pop up window with multiple options is displayed.

![image 1-Dec-07-2023-10-32-25-0348-AM](./images-Native%20Workbook/Native-Workbook-1.png)

The following options are displayed

- **Disable existing workbook:** This option is enabled by default. On enabling this option the original workbook is disabled and the new clone of the workbook will be enabled. You can modify the required changes in the cloned workbook.

- **Retain the schedule:** A native workbook can be a standard/Scheduled/Streamed workbook. Enabling this option will create the new workbook as per the existing schedule and disabling this option will create a standard workbook. To create a new schedule, refer [Schedule a workbook](https://dnif.it/kb/hunting-with-workbooks/getting-started-hunting-with-workbooks/schedule-a-workbook-2/)

- **Workbook Name:** Workbook name for the cloned workbook is automatically generated and custom is added to the existing name by default.You can also edit the name and provide a name as per your requirement.

Click **Save**, this will save a new version of the current native workbook and the new workbooks will be displayed on screen.

- On the workbook list page, both the new and existing workbooks will be listed and if you have enabled the **Disable existing workbook** option, the existing native workbook will appear as disabled in the list. The disabled workbooks will not execute as per the schedule or stream; it will not be invoked in the disabled state.

- You can also disable or enable workbooks from the list page. To enable or disable, select a particular workbook and the following bar will be displayed.

![image 2-Dec-07-2023-10-33-29-5873-AM](./images-Native%20Workbook/Native-Workbook-2.png)

- In this case when you disable a workbook only the invoke is stopped and the cron is maintained so when you enable the workbook again, it will be enabled again along with the cron.
