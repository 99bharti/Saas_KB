---
title: "Enrichment"
date: 2025-01-21
type: "epkb_post_type_1"
---

  
Most logs by themselves are devoid of internal business context like HR details for a User or asset inventory details for a server and external intelligence like location and threat intel which could add a lot more context to monitored activities. DNIF provides real-time and customizable event data enrichment which reduces overall investigation times.

###### **How Data Enrichment Works?**

Data is enriched at the time of ingestion and enriched fields are stored alongside the raw log and parsed fields in the Datanode. Enrichment data is made available through Enrichment Buckets which are scheduled on a daily basis (midnight), these enrichment buckets are rebuilt every time an enrichment is enabled and on the scheduled time.

###### **How does it help?**

Data enrichment in SIEM involves monitoring user behavior to detect anomalies, this approach includes:

- **Contextualize data:** Data Enrichment process adds context to the data, this helps a great deal in identifying what, why and how during investigations and assists security teams to triage alerts faster. Data enrichment plays a key role in weeding out noise and prioritizing high risk threats.

- **Reduced response times:** Faster triage means faster remediation, since incident handlers now have a contextual storyline to help them connect the dots. Events forwarded to your SIEM solution are supplemented with threat intelligence from your chosen intel providers in real time.

- **Leverage actionable threat intelligence:** Tapping into an expansive pool of indicators of compromise (IOCs) from multiple sources helps you learn from others mistakes and detect known threats rapidly, without much manual investigation. Enriched Data is used to validate threats and provide additional insight during incident investigation.

###### **Get started with Examples**

Listed below are few enrichment examples, these examples will help you to quickly get started with the enrichment process by demonstrating practical use cases.

- **Example 1**: [UBA: Coalescing User Identities](https://dnif.it/kb/data-ingestion/enrichment-examples/uba-coalescing-user-identities/)

- **Example 2**: [Enrich DevSrcIP with Asset Store](https://dnif.it/kb/data-ingestion/enrichment-examples/enrich-devsrcip-with-asset-store/)

- **Example 3**: [Flag Risky User Activities](https://dnif.it/kb/data-ingestion/enrichment-examples/flag-risky-user-activities/)

- **Example 4**: [Flag matches with Greensnow ThreatIntel](https://dnif.it/kb/data-ingestion/enrichment-examples/flag-matches-with-greensnow-threatintel/)
