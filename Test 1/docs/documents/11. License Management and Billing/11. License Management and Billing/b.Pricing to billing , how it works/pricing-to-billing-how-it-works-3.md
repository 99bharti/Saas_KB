---
title: "Pricing to billing, how it works"
date: 2025-01-20
type: "epkb_post_type_1"
---

## **Know how your billing works, how everything around data ingestion is calculated. Also understand why pricing is configured the way it is.**

Pricing is a key decision making factor for customers looking to invest in a SIEM, or in many cases customers looking to optimize the price of their SIEM investment. The pricing page on the ([https://www.dnif.it/pricing](https://www.dnif.it/en/pricing-aws-apac-mumbai) ) website has figures that might be a misleading, so we are going to use this post to come clean. 

In this post we will first understand the licensing model of DNIF HYPERCLOUD, and then understand the plans described on the website and finally why we chose to described pricing in that manner. We will also delve into the pricing model and understand why it is configured in a matter that may seem confusing,

## **Licensing model**

We have a lot of experience in pricing schemes and we think charging by volume of events ingested every day is still the simplest for you to track and pay for. You can subscribe to one of the many slabs that is closest to your current utilization (plus a sufficient buffer) and you will likely get a volume discount on the projected per GB price based. 

The pricing scheme is designed in a way that you are able to predict your budget and not have to pay for overage on minor or even major deviations. More information on overage calculation is available in a detailed post below.

[Calculating overage](https://dnif.it/kb/billing/calculating-overage-2/)

## **Arriving from the GB / Day price**

Assuming you choose a daily ingestion slab of 50GB / Day. The way the website GB / Day price is used - 

- 50 (Slab GB / Day) x 30 (or 31 Days in a Month) = 1500 (GB / Month)

- 1500 (GB / Month) x Advertized GB price is what you will pay at the start of every month.

## **I don't know my volume estimate**

If this is your first time with a SIEM, it is normal to not have a indicator of your usage. We can help you estimate your volume based on your devices, however that will still remain only an estimate. We suggest customers use the monthly plan for the first 2 to 3 months during which you would have on-boarded all your event sources.

This will give you a sufficient idea of your volume and then you could settle into the correct slab by planning for growth and make a yearly commitment to be able to further optimize the price.

## **Why is the pricing warped on the website**

Unfortunately we have to follow the industry we operate in, SIEM vendors like to project the per GB price on their websites, rightly so it gives you a chance to evaluate the smallest unit cost. So to make ourselves more comparable with the rest of our tribe we chose to boil the price down to a per GB price. 

Full disclosure (to your advantage) the per GB price displayed on the website is the absolute highest you will pay, as you move up slabs and increase your utilization you will end up paying lower than the price displayed on the website.

So, go ahead don't hold back, there is value in retaining events.
