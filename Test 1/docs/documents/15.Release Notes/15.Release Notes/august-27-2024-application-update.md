---
title: "August 27, 2024 - Application Update"
date: 2025-01-20
type: "epkb_post_type_1"
---

DNIF HYPERCLOUD Console's latest update, released on August 27th, 2024.

## **What’s Fixed?**

**  
This fix updates and resolves edge cases in the Extractor Validator**  
  
In a few cases, the Extractor Validator will work without log samples.  
Some edge cases affect customers using existing extractors that need to be modified. The Extractor Validator would not expect log samples in the following cases:

- Modifying Existing Custom Extractors (that are Enabled and Published) with the intent to add new fields and streams.

- Cloning Native Extractors with the intent to add new fields and streams.

- Enabling a Native Extractor

The Extractor Validator expects log samples in the following cases:

- Adding a New Extractor.

- Addition/Modification of First matches/Master Filters of existing Extractors (expects Log samples only for the new or modified First Matches/Master Filters).

- Enabling an existing disabled custom extractor that was previously in the draft stage.

[Know more](https://dnif.it/kb/data-ingestion/extractors/extractor-validator/) about the feature.

Stay tuned for more updates and improvements to the DNIF HYPERCLOUD Console.
