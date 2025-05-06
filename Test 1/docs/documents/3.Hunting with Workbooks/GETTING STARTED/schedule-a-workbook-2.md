---
title: "Schedule a Workbook"
date: 2025-01-29
type: "epkb_post_type_1"
---

  
A Workbook with a collection of queries can be saved and scheduled to run at set intervals. Users don’t have to manually write a query every time, the scheduler will run the query at the designated time and signal the users in case of any threat detection. It provides control and visibility into the enterprise.

###### **Streamed Workbooks**

The objective of Streamed Workbooks is to enable continuous threat detection without having to manually figure out schedules for executing content.

- If the main query in the streamed workbook searches a duration of up to 30 minutes or has no duration specified, it will be triggered every minute as long as logs are received in the corresponding stream.

- If the main query in the streamed workbook searches a duration longer than 30 minutes, it will be auto-scheduled to execute thrice in the specified duration and not every minute. For example, if the duration in the query is 90 minutes, the workbook will trigger every 30 minutes searching a duration of 90 minutes. Such queries will be executed on the report server and not correlation server.

- In the interest of platform stability and availability, we strongly discourage specifying a duration in streamed workbooks. It will default to scanning the last five minute duration and trigger every minute data is ingested in the stream.

###### **How to schedule a workbook?**

- Hover on the **Workbooks** icon on the left navigation bar, it will display the folder wise view of existing workbooks in the tenant (previously known as cluster).

![image 1-Dec-07-2023-12-09-45-0842-PM](./images-Schedule%20a%20Workbook/Schedule-a-Workbook-1.png)

- Click the **plus** icon on the Workbook page and then add a DQL /Search / Code / AI Block.

- Enter the required query and click **Run**, to view the query result.

![image 2-Dec-07-2023-12-10-02-3598-PM](./images-Schedule%20a%20Workbook/Schedule-a-Workbook-2.png)

- Once you have added all the required blocks in the Workbook. Click **Save**, to save your Workbook.

- The **Schedule** icon is displayed, once you save the Workbook.

![image 3-Dec-07-2023-12-10-14-2577-PM](./images-Schedule%20a%20Workbook/Schedule-a-Workbook-3.png)

- Click **Schedule** icon on the top right corner of the screen to schedule a Workbook

![image 4-Dec-07-2023-12-10-22-9318-PM](./images-Schedule%20a%20Workbook/Schedule-a-Workbook-4.png)

Workbooks can be either be:

- Scheduled

- Streamed

- Select **Off** to disable any scheduled / streamed jobs.

- The **Schedule** icon is displayed only on the saved Workbook.

The following parameters are available for Scheduled jobs:

| **Time Range** | **Description** |
| --- | --- |
| Run Daily | Schedule on a daily basis at a particular time |
| Run Weekly | Schedule on a weekly basis at a particular time. You can schedule it for multiple days in a week. |
| Run Monthly | Schedule on a monthly basis at a particular date and time |
| Run Cron (Custom) | Enter the required Cron Value to be scheduled. The cron value should be entered in format.      For example, 21 4 1 2 1   21 represents minutes   4 represents hours   1 represents date of the month   2 represents month   1 represents day of the week   Here in the above example, the scheduler will run at 4:21 on 1st February, 2021 (Monday) |
| Timezone | Select the timezone as per your local time zone. |

- Click **OK**, to schedule a Workbook and then click **Save** to update the details.

For more examples refer the following table:

| Minute | Hour | Date of the Month | Month | Day of the Week | Result |
| --- | --- | --- | --- | --- | --- |
| 21 | 4 | \* | 2 | \* | The scheduler will run at 4:21 on 1st February, 2021 (Monday) |
| 21 | 4 | \* | 2 | 3 | The scheduler will at 4:21 on 3rd February, 2021 (Wednesday |

- If the value is left as . \* \* \* \* \* then the cron will be scheduled to run after every minute.

- If the fields for date, year, and day are mentioned as \* then it will be scheduled for that set time everyday.

- If the fields for month and day of the week are mentioned as \*, then the cron will be scheduled for the particular date and time every month.

- If only the day of the week is mentioned as \*, the cron will be scheduled for the particular date of the month.

- Example: 00 01 \* 10 \* . If the time is set to 1:00 on October and the fields of date and day of the week are marked as \*. In this case it will be scheduled to run at 1:00 am. on 1st of October 2020.

- All the workbooks scheduled will be executed based on Local timezone

- For more details on Workbooks refer [Create a Workbook](https://dnif.it/kb/hunting-with-workbooks/getting-started-hunting-with-workbooks/how-to-create-a-workbook-2/).
