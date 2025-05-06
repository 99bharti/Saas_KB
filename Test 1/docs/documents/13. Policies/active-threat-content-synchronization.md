---
title: "Active Threat Content Synchronization"
date: 2025-01-15
type: "epkb_post_type_1"
---

###### **Policy and Guidelines**  
  

DNIF introduces Active Threat Content delivery to arm Security Operations with continuously updating security content. Security engineers can now focus on triage, investigation and responding to Threat as opposed to writing the searches. DNIF brings instant access to pre-built content through ATC synchronisation through UNET. As new threats emerge, DNIF customers will automatically receive new detection content and be able to put this content into action immediately.

###### **How DNIF does it?**  
  

- The ATC Sync replaces the DNIF Authored content with the improved content which will improve our ability to detect true positive behaviors.

- The ATC Sync is promoted on a continuous basis to bring new and improved detection mechanism to our customers

###### **What exactly gets synchronised?**  
  

All the native content which is ' **Authored**' by DNIF, including following:

\* Detection queries in Workbooks  
\* Dashboards  
\* Reports  
\* Native Extractors

###### **Recommendations for Users**  
  

- The native content will be force-synced resulting in loss of any local changes.

- For users looking to customize DNIF out-of-the-box content, we recommend making a copy of the native content

- DNIF recommends following steps to be taken by Users to preserve changes made at User's end.

- For end users who have modified the native (DNIF authored) Extractor must:
    1. Make a copy of the modified native extractor
    
    3. Disable the native extractor
    
    5. Create a custom extractor and paste the copied content of native extractor and make the required changes.
    
    7. Enable the custom extractor.

-  The above steps should be repeated for every modified native extractor. It should be ensured that duplicate extractors for any particular device do not exist, as it might impact the events not getting extracted as desired

- As a measure to handle conflicting extractor id’s, DNIF reserves extractor-id up to 10000. Any custom parser should add an extractor-id greater than 10000 and maintain their own record of extractor-id’s.

- For end users who have modified the OOTB Detection rules, Dashboards, Reports etc, then they must:
    1. Make a copy of the workbook and keep the DNIF authored workbook intact.
    
    3. Make all custom changes to your copy and save.

###### **How to view what is revised during ATC Synchronisation?**

  
Native Workbooks display the flag of " **New**" and " **Updated**" for 24 hours post Synchronization

![](./images-Active%20Threat%20Content%20Synchronization/Active-Threat-Content-Synchronization-1.webp)

  
DNIF maintains absolute transparency to all our users through DNIF's [Github repository](https://github.com/dnif/content). We encourage our users to make active use of Content repository for understanding new and improved detection content.
