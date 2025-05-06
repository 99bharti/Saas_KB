---
title: "UBA: Coalescing User Identities"
date: 2025-01-21
type: "epkb_post_type_1"
---

  
In an organization, multiple identities could be associated to a specific user.

**For Example:** An Employee named **John Doe** might be accessing multiple applications in the organization using different User details.

| **Applications** | **User Details** |
| --- | --- |
| Application 1 | john@example.com |
| Application 2 | john\_doe |
| Application 3 | Employee ID 111 |

In the above scenario, the user details look different although they are the same user. Using enrichments, we can coalesce all the multiple identities of the same user into a single identity.

It is possible to maintain an eventstore with details for each user in an organization including the different user ids, email ids, user names of different applications, etc.

Let's consider another example, the eventstore UserInfo has data imported from a csv file. Displayed below is a sample csv file

[user\_info.csv](https://cdn.document360.io/41644e2e-65f8-4981-aaf1-d48806f846a9/Images/Documentation/user_info.csv)

###### **Upload a custom eventstore**

A custom eventstore called **UserInfo** can be created by uploading the **csv** file containing user data. The event store that you created will be listed as shown below:

![image 1-Dec-04-2023-01-05-53-1894-PM](./IMAGES-UBA%20Coalescing%20User%20Identities/UBA-Coalescing-User-Identities-1.webp)

An enrichment bucket for the field **$User** can be created to refer values from the **UserInfo** eventstore.

###### **Define a custom Enrichment Bucket**

The enrichment bucket would identify different identities of a specific user observed (**$ObservedUser**) in the log events coming from different sources and point to a specific user in the **$User** field.

The yaml format is as follows:

```
bucket: Userfields:- Userschema-version: 1.0source:- enr_key: '{$UserID1}'  enr_values:    translate:      $User: User      $UserID1: ObservedUser  eventstore: UserInfo  sourcetype: event_store- enr_key: '{$EmployeeID}'  enr_values:    translate:      $EmployeeID: ObservedUser      $User: User      '{$Department}/{$Designation}': Role      '{$Manager}': Manager  eventstore: UserInfo  sourcetype: event_store
```

| **Field** | **Description** |
| --- | --- |
| Bucket | Enter the name for the enrichment bucket. |
| Fields | Enter the field names to be enriched. |
| schema-version | Enter the schema version |
| Source | List of sources for the enrichment bucket. **Note:** There can be multiple sources for one enrichment bucket   **Source Type:** Enter the source type i.e. dql/sql/eventstore   **Eventstore:** For this scenario, enter the eventstore name.   **Enr\_key:** Enter the desired values to be detected output representation. **For example**, **‘{UserID1}’**   **Enr\_values**   **Translate:** Allows you to replace the column names of the query result. To replace enter : **For example**, **$EmployeeID: ObservedUser** In this case, the column name $EmployeeID is replaced with $ObservedUser. |

Save the enrichment bucket.

###### **Run a Search**

To check if enrichment has been added successfully, run a search on data to fetch enriched details. Enrichment will be applied to the field values mentioned in the enrichment bucket of yml file.  

![](./IMAGES-UBA%20Coalescing%20User%20Identities/UBA-Coalescing-User-Identities-2.png)

In the above screen, the user identities in **$ObservedUser** field displays the identities that are correlated to the user in $User field.

From the query result, you can click the **Information** icon to further drill down to each entity in the result and verify the enriched details.

![image 2-Dec-04-2023-01-06-08-0752-PM](./IMAGES-UBA%20Coalescing%20User%20Identities/UBA-Coalescing-User-Identities-3.png)



In the above example, the **$ObservedUser (shumbham\_gilada / NM111)** are correlated to the same **$User (Shubham Gilada)**.
