---
title: "Calculating overage"
date: 2025-01-20
type: "epkb_post_type_1"
---

###### **This is how we calculate usage above subscribed limit**

So we put our intent out there right at the beginning, by design overage is the last thing we want to put you through. DNIF HYPERCLOUD is designed to ensure you are able to operate on a predictable budget and you are not penalized for the slightest change in your usage pattern. However, there are unavoidable circumstances where overage will be charged and we think being transparent on the below mentioned questions are important. 

###### **When is overage applicable**

Let’s begin with talking about how your usage is measured, we will use the image below as a reference and walk through usage observability. The image below is your monthly usage graph, each bar on this chart represents your daily usage. 

![billing](./Images/Calculating-overage-1.png)

Daily usage is the total amount of raw data ingested by your across all your connectors, daily usage does not include extracted data or enriched data.

Next, let's mark out the daily subscribed volume, the area marked as (a) in the chart below represents the daily subscribed volume. Assuming as an example you subscribed for a daily volume of 200GB, which means you can ingest 200GB of raw events every day. Just so that we can make our point the sample has usage on certain days breaching the daily subscribed volume.

![subscribed](./Images/Calculating-overage-2.png)

Next let’s talk about the buffer volume, yes - so you do not go over the limit and hurt your budget on some days. DNIF HYPERCLOUD has a buffer zone. This buffer zone is 200% of your daily subscribed volume. So in our example the buffer zone marked as zone (b) will be an additional 400GB per day. 

![buffer](./Images/Calculating-overage-3.png)

DNIF HYPERCLOUD allows you to breach your daily subscribed volume five times every billing cycle, which means you can ingest more than your subscribed volume but be within your buffer zone for five days in each billing cycle. This additional usage is not charged back or considered as overage.

In the chart below we have added an indicator (c) that counts the first five violations in a billing cycle. Remember the five violations do not have to be on consecutive days.

![violation](./Images/Calculating-overage-4.png)

Finally in the chart below you have an area marked as (d) which is where the overage is applicable in the billing cycle. Overage is charged only for the additional volume that breach the below two conditions.

1. Overage is charged on all usage beyond the 200% buffer zone

3. Overage is charged on all usage in the buffer zone and after the first five violations

![overage](./Images/Calculating-overage-5.png)

###### **How is overage charged**

If you have subscribed to DNIF HYPERCLOUD and have a month on month subscription, then you will pay every month in advance for your subscribed volume. However, the overage will be realized at the end of the month and will be added to your next bill in the following month.  
In case you are on a yearly subscription, then you have already paid in advance. If you encounter an overage in a specific month you will receive an overage only bill at the start of the next month.

###### **Conclusions**

Here are some brief summary points that are relevant for calculating overage.

- When overage is applicable

- How is overage charged

- Usage value is reset every day at 00:00 UTC

- Overage is always tracked monthly, even if you are signed up for a yearly program

- Daily buffer limit is 200% of your daily subscribed volume

- Buffer limit resets every day like your daily subscribed volume

- Upton five violations of your subscribed volume is allowed every billing cycle

- This violation counter resets every billing cycle

- Overage is always charged monthly in arrears

- Overage price per GB applied will be prorated on your current subscription value
