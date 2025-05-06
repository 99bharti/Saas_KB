---
title: "Flag Risky User Activities"
date: 2025-01-21
type: "epkb_post_type_1"
---

  
Various users can be identified in logs for different streams ingested by DNIF. Multiple signals can be raised for a Suspected User, this leads to Suspected User being a Risky User.

It is possible to enrich more data about a risky user by creating an enrichment bucket to find out the top Risky Users and add a tag against the user as being Risky.

###### **Define a custom Enrichment Bucket**

You can create a custom enrichment bucket to identify the top risky users and gather additional information on why a particular user is risky.

```
bucket: Userfields:- Userschema-version: 1.0source:- enr_key: '{$SuspectUser}'  enr_values:    annotate:      UserTag: Risky    translate:      $StatUniqueSum: RiskScore  query: "_fetch * from event where $Stream=SIGNALS AND $Duration=7d group stat_unique $SuspectUser sum $DetectionScore limit 10"  sourcetype: dql
```

| **Field** | **Description** |
| --- | --- |
| Bucket | Enter the name for the enrichment bucket. |
| Fields | Enter the field names to be enriched. |
| schema-version | Enter the schema version |
| Source | List of sources for the enrichment bucket. **Note:** There can be multiple sources for one enrichment bucket   **Source Type:** Enter the source type i.e. dql/sql/eventstore.   **Eventstore:** For this scenario, enter **dql** query.   **Enr\_key:** Enter the desired values to be detected in the output representation. **For example**, _'{$SuspectUser}'_   **Enr\_values**   **Translate:** Allows you to replace the column names of the query result. To replace enter : **For example**, **$StatUniqueSum: RiskScore** In this case, the column name **$StatUniqueSum** is replaced with **$RiskScore**. |

###### **Run a Search**

To check if enrichment has been added successfully, run a search on data to fetch enriched details. Enrichment will be applied to the field values mentioned in the enrichment bucket of yml file.

![](./IMAGES-Flag%20Risky%20User%20Activities/Flag-Risky-User-Activities-1.png)

In the above screen, you can view all the additional information to identify a particular user to be risky.

From the query result, you can click the **Information** icon to further drill down to each entity in the result and verify the enriched details.

![](./IMAGES-Flag%20Risky%20User%20Activities/Flag-Risky-User-Activities-2.webp)
