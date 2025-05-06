---
title: "March 5th, 2025 -  Application Update"
date: 2025-03-05
type: "epkb_post_type_1"
---

We are happy to introduce new features and enhancements to improve your experience with our platform. Here’s what’s included in this release:

## **What’s New**

- [Log Source integration - Cloudflare](https://dnif.it/kb/connectors/supported-connectors/cloudflare-logpull-connector-setup-guide/)

## **Enhancements**

### Extractor Validator

- **Seamless Extractor Validation for Business Continuity**  
    To enhance user experience and ensure seamless business operations, we have improved the extractor validator. These enhancements prevent disruptions caused by validation errors when modifying extractors, ensuring that the existing data flow remains unaffected until the new extractor is fully validated and ready for use.

- **Key Benefits:**
    - **Seamless Data Processing:** Any changes to an extractor now create a draft version instead of directly impacting the live system. The original extractor remains active until the draft passes validation.
    
    - **User-Centric Control & Transparency:** Users can track, modify, and resolve validation issues in a controlled environment before deploying changes.  
        

- **Cloning Flow for Native Extractors**
    - Modifications to native extractors now require cloning, ensuring the original remains intact. A dedicated Clone button provides a clear action path.
    
    - The cloned extractor undergoes validation before activation.
    
    - Any validation failure is contained within the draft version, which can be accessed later for resolution.
    
    - Once validated, the original Native extractor gets disabled. 
    
    - The cloned extractor retains the status(enabled/disabled) of the native extractor.

- **Editing a Custom Extractor**
    - Modifications to custom extractors create a draft variant that undergoes validation.
    
    - The draft retains any errors, allowing users to resolve issues without affecting ongoing operations.
    
    - Upon successful validation, the new extractor seamlessly replaces the previous version.  
        
<iframe width="560" height="315" src="https://www.youtube.com/embed/f3WyLytX_rQ?si=h_Ss8zr32Zh3x5mt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- https://videopress.com/v/ITWeXwOo?resizeToParent=true&cover=true&preloadContent=metadata&useAverageColor=true

<iframe width="560" height="315" src="https://www.youtube.com/embed/wNhsJQUasgY?si=HMTZaWgUsQ8bU5oz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- https://videopress.com/v/tt03QEFr?resizeToParent=true&cover=true&preloadContent=metadata&useAverageColor=true --> -->

- **Creating a New Extractor/AI-Powered Extractor Generation**
    - New extractors can be created using YAML configurations and log samples; these are stored as a draft variant.
    
    - The draft extractor is validated before activation, ensuring that issues are addressed before deployment.
    
    - Any validation errors are preserved in the draft state, allowing users to troubleshoot at their convenience.
