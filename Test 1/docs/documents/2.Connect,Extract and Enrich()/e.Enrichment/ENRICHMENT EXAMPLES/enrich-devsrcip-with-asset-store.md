---
title: "Enrich DevSrcIP with Asset Store"
date: 2025-01-21
type: "epkb_post_type_1"
---

  
DNIF receives logs from multiple log sources like hosts, devices, connectors, etc. Each of these log sources are tagged with a Device Source IP to denote the source of these logs with the field **$DevSrcIP**.

To get more information about the values in **DevSrcIP** field, an enrichment bucket can be created which refers to data from an eventstore for Assets to extract more information about the source device.

Let's consider an example, the event store **AssetStore** has data imported from a **csv** file. Displayed below is a sample **csv** file.  
  
[asset\_store.csv](https://m.dnif.it/hubfs/asset_store.csv)

###### **Upload a custom eventstore**

A custom event store called **AssetStore** can be created by uploading the .**csv** file containing source device data. The event store that you created will be listed as shown below:  

![](./IMAGES-Enrich%20DevSrcIP%20with%20Asset%20Store/Enrich-DevSrcIP-with-Asset-Store-1.webp)

An enrichment bucket for the field **$DevSrcIP** can be created to refer values from the **AssetStore** eventstore.

###### **Define a custom Enrichment Bucket**

The enrichment bucket would identify the additional details of a specific **$DevSrcIP** in the log events coming from different sources.

The yaml format is as follows:

```
bucket: IPv4fields:- DevSrcIPschema-version: 1.0source:- enr_key: '{$DevSrcIP}'  enr_values:    translate:      AssetGroup: AssetGroup      AssetName: AssetName      AssetOwner: AssetOwner  eventstore: AssetStore  sourcetype: event_store
```

| **Field** | **Description** |
| --- | --- |
| Bucket | Enter the name for the enrichment bucket. |
| Fields | Enter the field names to be enriched. |
| schema-version | Enter the schema version |
| Source | List of sources for the enrichment bucket.       **Note:** There can be multiple sources for one enrichment bucket   **Source Type:** Enter the source type i.e. dql/sql/eventstore   **Eventstore:** For this scenario, enter the eventstore name.   **Enr\_key:** Enter the desired value to be detected in output representation. For example, **‘{DevScrcIP}’Enr\_valuesTranslate:** Allows you to replace the column names of the query result. |

Save the enrichment bucket.

###### **Run a Search**

To check if enrichment has been added successfully, run a search on data to fetch enriched details. Enrichment will be applied to the field values mentioned in the enrichment bucket of yml file.  

![](./IMAGES-Enrich%20DevSrcIP%20with%20Asset%20Store/Enrich-DevSrcIP-with-Asset-Store-2.png)

In the above screen, you can view the asset name, owner and group that correlates to the **$DevSrcIP** field.

From the query result, you can further drill down to each entity in the result by clicking on the **Information** icon and verify the enriched details.
