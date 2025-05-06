---
title: "Define Custom Enrichment Bucket"
date: 2025-01-21
type: "epkb_post_type_1"
---

  
This section will help you understand the procedure to create a custom enrichment bucket as per your requirement.

- To create a custom enrichment, click the **plus** icon on the Enrichment list page.  
      
    ![image 1-Dec-04-2023-12-25-29-8999-PM](./images-Define%20Custom%20Enrichment%20Bucket/Define-Custom-Enrichment-Bucket-1.webp)  
      
    

- Enter a name for the enrichment bucket you are about to create and you can directly start writing in the yaml editor.  
      
    ![image 2-Dec-04-2023-12-39-26-1545-PM](./images-Define%20Custom%20Enrichment%20Bucket/Define-Custom-Enrichment-Bucket-2.webp)

The yaml format is as follows:

```
bucket: User   fields:          - Userschema-version: 1.0source:         - sourcetype: sql    query: "SELECT $SuspectUser, SUM($DetectionScore) as $Score, $Occurrences FROM SIGNALS GROUP BY $SuspectUser, $Occurrences HAVING $Score > 5 ORDER BY $Score DESC LIMIT 10;"    enr_key: '{$SuspectUser}@net-mon.net'        enr_values:      annotate:                      UserRisk: HIGH      translate:                     $Occurrences : Count        $Score : RiskScore
```

| **Field** | **Description** |
| --- | --- |
| Bucket | Enter the name for the enrichment bucket. |
| Fields | Enter the field names to be enriched. |
| schema-version | Enter the schema version |
| Source | List of sources for the enrichment bucket. **Note:** There can be multiple sources for one enrichment bucket**Source Type:** Enter the source type i.e. dql/sql/eventstore**Query/Eventstore:** Enter the query incase of dql/sql or enter the eventstore name incase if source type is eventstore**Enr_key:** Enter the desired value to be detected in output representation. For example, '{$FirstName}.{$LastName}@net-mon.net'**Enr_values**The following are two values**Annotate:** Static key value pair to be added to every row of enrichment bucket. For example: User risk,User occupation**Translate:** Allows you to replace the column names of the query result. To replace enter &lt;**column name&gt;: &lt;new column name**&gt;**$Occurrences: Count** In this case, the column name **$Occurrences**  is replaced with  **$Count** |

- Click **Submit** after writing the enrichment and it will be listed in the enrichment list.

To check if enrichment has been added successfully, execute the query from the yml file to fetch enriched details. Enrichment will be applied to the field values mentioned in the enrichment bucket of yml file.

**Example:** On executing the query from the above mentioned yml file, the list of enriched users will be displayed ( this is because in the given yml, the enrichment is been applied on users \[refer $fields section\], this will vary as per the enrichment bucket )

From the query result, you can further drill down to each entity in the result and verify the enriched details.
