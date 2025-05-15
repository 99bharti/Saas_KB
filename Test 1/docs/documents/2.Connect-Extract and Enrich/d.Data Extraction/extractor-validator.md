---
title: "Extractor validator"
date: 2025-01-21
type: "epkb_post_type_1"
---

  
The extractor validator is a valuable feature that assists users in validating the extractors developed ( [AI-generated extractors](https://dnif.it/kb/dnif-ai/extractor-generator/extractor-generator-overview/)) and ensuring that the newly created extractors effectively parse the log samples. The ingested log samples are parsed and normalized using extractors that comply with the DNIF Data Model (DDM). Out-of-the-box (OOTB) native extractors are included with DNIF, enabling users to maximize the platform's functionality and parse their log events.  Users can easily create custom extractors in YAML format to meet their needs. 

###### **Validating syntax**  

This section provides validation on syntax issues and the presence of certain key fields.

![](./images-Extractor%20validator/Extractor-validator-1.webp)

1. **Syntax: Extractor in invalid YAML format**  
    Highlight any Yaml format issues, if any.  
      
    ![](./images-Extractor%20validator/Extractor-validator-2.webp)  
      
    

3. **Syntax: Missing keys: source-type  
    **Highlights any important keys missing from the Yaml file or if the keys are not in the proper format, the example above shows source type missing.  
      
    ![](./images-Extractor%20validator/Extractor-validator-3.webp)  
      
    

5. **Syntax: decoder type is invalid**  
    Highlights invalid decoder types. Valid decoder types are json, custom, and regex.  
      
    ![](./images-Extractor%20validator/Extractor-validator-4.webp)  
      
    

7. **Syntax: Missing keys: decoder in first-match: fm1**  
    Highlights missing keys in a specific first-match section, for example, are missing.  
      
    ![](./images-Extractor%20validator/Extractor-validator-5.webp)  
      
    

9. **Syntax: The provided regex \\m is not a valid regex.  
    **Highlights the issue in compiling the regex pattern defined in the master filter, and first match which shows mf1 as a placeholder for the actual regex pattern for extractor-1. 
      
    ![](./images-Extractor%20validator/Extractor-validator-6.webp)  
      
    

11. **Syntax: Keyword "Stream" missing for mapping: map1 in first-match: fm1**  
    Highlights the missing key "stream" for mapping map1 under first-match fm1. 
      
    ![](./images-Extractor%20validator/Extractor-validator-7.webp)  
      
    

13. **Syntax: Keyword "annotate" missing for mapping: map1 in first-match: fm1**  
    Highlights the missing key "annotate" for mapping map1 under first-match fm1. 
      
    ![](./images-Extractor%20validator/Extractor-validator-8.webp)  
      
    

15. **Syntax: Keyword "translate" missing for mapping: map1 in first-match: fm1**  
    Highlights the missing key "translate" for mapping map1  under first-match fm1. 
      
    ![](./images-Extractor%20validator/Extractor-validator-9.webp)  
      
    

17. **Syntax: Keyword "translate" missing for mapping: globals in first-match: fm1**  
    Highlights the missing key "translate" for mapping globals under first-match fm1. 
      
    ![](./images-Extractor%20validator/Extractor-validator-10.webp)  
      
    

19. **Syntax:Keyword Stream missing for mapping: fallback in first-match: fm1**  
    Highlights the missing key stream for mapping fallback under first-match fm1. 
      
    ![](./images-Extractor%20validator/Extractor-validator-11.webp)  
      
    

21. **Syntax: Keyword annotate missing for mapping: fallback in first-match: fm1**  
    Highlights the missing key annotation for mapping fallback under first-match fm1. 
      
    ![](./images-Extractor%20validator/Extractor-validator-12.webp)  
      
    

23. **Syntax: Validation failure for master-filters**  
    Highlights an empty master filter or an incorrectly defined master filter. The master filter is defined as a list in YAML format. Refer to the extractor YAML syntax for more information.  
      
    ![](./images-Extractor%20validator/Extractor-validator-13.webp)  
      
    

25. **Syntax: extractor\_id already exists**  
    It is expected that the extractor ID is unique for every extractor. The user can manually change the extractor\_id and try to save the extractor (previous documentation suggests the user use an extractor\_id higher than 10,000). Unless specifically required to pass an extractor ID, the user can choose to ignore the extractor\_id field as the system can auto-generate extractor\_id.  
      
    ![](./images-Extractor%20validator/Extractor-validator-14.webp)  
      
    

27. **Syntax: extractor\_id  must be less than 2147483647**  
    For certain internal safety measures, the extractor\_id is capped at the number 2147483647. Users are advised to use extractor\_ids that do not breach this limitation and limit it to a range of 10,000 to 1,00,000. 
      
    ![](./images-Extractor%20validator/Extractor-validator-15.webp)  
      
    

29. **Syntax: source-name already exists for extractor: extractor-1**  
    The source name is expected to be unique, and users are advised to provide a unique source name while developing extractors.  
      
    ![](./images-Extractor%20validator/Extractor-validator-16.webp)  
      
    

31. **Syntax: forbidden pattern found in master filter: mf1 for extractor\_id: ext-123**  
    There are certain limitations to using patterns in the master filter, which are placed to ensure high performance of the system. Look around (look ahead and look behind) patterns are not recommended for use.  
      
    ![](./images-Extractor%20validator/Extractor-validator-17.webp)  
      
    

33. **Syntax:  Change of extractor-id not allowed**  
    Once an extractor is added, users cannot change the extractor ID.  
      
    ![](./images-Extractor%20validator/Extractor-validator-18.webp)  
      
    

###### **Checking for duplicate streams and field**

This section focuses on issues related to streams and fields defined in the extractor, specifically concerning the [**DNIF Data Model**.](#DDM) Certain query-related problems may occur during parsing or due to case-sensitive errors in the fields. These errors are identified and highlighted as duplicate streams and duplicate fields. For example, a user may create a field "**User**" or "**USER**" for the "**AUTHENTICATION**" stream but the DNIF Data model already uses a field titled "**user**". Hence, such duplication should be avoided to ensure the data is parsed correctly.  

![](./images-Extractor%20validator/Extractor-validator-19.webp)

  
To address issues related to duplicate streams and fields in the DNIF extractor, refer to the [**DNIF Data Model**](#DDM) section. This section provides a comprehensive view of the recommended streams and fields for troubleshooting purposes. By accessing the right-hand side modal, you can view a filtered list of streams and fields to help you identify and resolve case-sensitive errors in the data model.

![](./images-Extractor%20validator/Extractor-validator-20.webp)

###### **DNIF Data Model**

DNIF data model reference is a comprehensive resource that outlines the structure, relationships, and attributes of data entities within the DNIF dataset stream.

![](./images-Extractor%20validator/Extractor-validator-21.webp)

  
It serves as a blueprint for security engineers to understand how data is organized and accessed within the console.

![](./images-Extractor%20validator/Extractor-validator-22.webp)

**To locate the preferred stream and field, follow the example provided below**

Search for the required Stream first, as shown below as "Firewall.”

![](./images-Extractor%20validator/Extractor-validator-23.webp)

  
Then search for the field shown as "SID” below.

![](./images-Extractor%20validator/Extractor-validator-24.webp)

######   
**Checking for new streams and fields error**

  
This section highlights the presence of new streams and fields within the extractor.

![](./images-Extractor%20validator/Extractor-validator-25.webp)

  
The decision to incorporate these new elements into the existing DNIF data model needs validation. 

Two actions can be taken if an error occurs while checking for new streams and fields:

1. Either refer to the  [**DNIF Data Model Reference**](#DDM) section  
      
    ![](./images-Extractor%20validator/Extractor-validator-26.webp)  
      
    

3. Or, raise a support ticket, as demonstrated in the image above. Once the ticket is raised, the red cross will turn into a **yellow warning symbol** that will appear alongside a message stating, **"A ticket has been raised to DNIF support."** This will be followed by an email from the support team.  
      
    ![](./images-Extractor%20validator/Extractor-validator-27.webp)  
      
    In both cases, the user interface provides an option to create a support ticket directly from the UI, where the error is highlighted. Once the ticket is raised, the DNIF support team will be notified and they will get in touch with the user.

###### **Validating primary log source and log events** 

This section assesses the provided log sample against the given extractor, providing feedback on the efficiency and completeness of the extractors, as well as any runtime errors that may occur.

![](./images-Extractor%20validator/Extractor-validator-28.webp)

  
Understanding runtime errors:

1. **First Match** fails to compile: The user must create an error-free regex pattern for the first match.

3. **Error** in extracting headers for CEF/LEEF format logs, indicating log format issue: An error occurs when extracting headers for CEF/LEEF format logs, indicating a log format problem.

Understanding Feedback on Efficiency/Completeness:

1. The master filter pattern does not match any provided log events:

- The regex of the master filter does not match the log event.

- The user should fix the master filter to match the intended log event, add another log event for the specific master filter, or remove the master filter if it is no longer required.

2\. The first match does not match any provided log events:

- The user should follow the same steps mentioned above for the master filter.

3\. Log events matching more than one master filter and first-match:

- This case is crucial, as it indicates that the master filter and/or first match are not unique.

- The user should ensure that the defined regex pattern is strict enough to uniquely match the log events.

4\. Log events not matching the master filter:

- Certain log events do not match the master filter and will not extract the mentioned log event.

- The user should create a new master filter or improve the existing one to match it.

5\. Log events not matching the first match:

- Certain log events do not match the first match and will not extract the mentioned log event.

- The user should create a new first match or improve the existing one to match it.

###### **Ensuring the provided log samples are unique**

This section verifies that the provided log samples do not match any existing extractors within the system. 

![](./images-Extractor%20validator/Extractor-validator-29.webp)

  
In cases where devices belong to a family of devices with similar logging patterns, and either the existing set of extractors or the provided extractors have non-strict regex patterns in their master filter, the user should take the following actions:

1. Determine if they are currently using the existing extractor to extract certain log events. If so, create a copy of the existing extractor (by disabling the existing extractor) and add support for new log events.

3. If the existing extractor is not in use, disable it and attempt to add the current extractor.

**Note:** Disabling the extractor will override the existing extractor and prevent matching against its master filter.

In case of persistent issues, reach out to DNIF support, highlighting the problem.

###### **Ensuring this extractor is unique**

This section ensures that the current extractor does not interfere with log samples from another device. 

![](./images-Extractor%20validator/Extractor-validator-30.webp)

  
The regex of an extractor can be too broad, matching log samples from other devices. This is a common issue for some devices. In such cases, the user should:

1. Study which log sample the current master filter is matching with to gain insight into the pattern used. This will help in creating stricter regex patterns to only match the log events for the current device.

3. Reach out to DNIF support, highlighting the issue.

###### **"Play" button**

The "Play" button allows you to preview the parsed output created using the extractor. Click on the play button and view the **Extractor Simulation** window.

![](./images-Extractor%20validator/Extractor-validator-31.webp)

To determine the parsing status, we can view **PStatus** ([PAD, PER, and NLF](https://dnif.it/kb/data-ingestion/extractors/how-extractors-work/)).

###### **Note on Best Practices of Extractor Validator:**  

1. An extractor is saved as a draft only after passing syntax validation.

3. An extractor will only function if it passes all validation.

5. Use a separate line for each unique sample.

7. Do not use '\\n' to separate the log samples.

9. The log sample should not contain any blank lines.
