---
title: "Guidelines for Sanitizing Log Samples"
date: 2025-01-21
type: "epkb_post_type_1"
---

######   
**Overview**

To maintain privacy and security, it's essential to properly sanitize log samples before sharing or using them in any context that may expose sensitive information. Follow these guidelines to ensure that no personally identifiable information (PII) or other sensitive data is included in the samples.

###### **Definitions**

**Sanitization:**

The process of modifying or removing sensitive information from data to prevent the exposure of PII or other confidential details. This can involve anonymization, pseudonymization, and the removal of specific data fields.

**Anonymization:**

Anonymization is the process of removing or modifying personal data in such a way that individuals cannot be identified, directly or indirectly. Once data is anonymized, it should be impossible to trace it back to an individual.

**Anonymizing Identifiers**

Anonymization should be applied to data elements that could uniquely identify an individual. This includes:

- **Names:** Replace with general descriptors (e.g., “User1,” “Customer A”).

- **Email Addresses:** Replace with non-descriptive placeholders (e.g., “email@example.com”).

- **Phone Numbers:** Replace with generic placeholders (e.g., “555-1234”).

- **IP Addresses:** Replace with non-identifiable placeholders (e.g., “192.0.2.0”).

Anonymization makes it impossible to identify individuals from the anonymized data alone.

**Pseudonymization:**

Pseudonymization is the process of replacing private identifiers with fake identifiers or pseudonyms. While pseudonymized data can be used for analysis or sharing, it can still be re-identified if the pseudonym is matched with the original data.

**Pseudonymizing Identifiers**

Pseudonymization can be used for identifiers that do not need to be completely anonymized but should be altered to maintain some degree of confidentiality. This includes:

- **User IDs:** Replace with pseudonyms (e.g., “user123” becomes “uABC123”).

- **Transaction IDs**: Replace with a different but unique pseudonym (e.g., “txn5678” becomes “txnXYZ5678”).

- **Custom Identifiers:** Replace with systematic pseudonyms (e.g., “order789” becomes “orderABC789”).

###### **Caution:**

- **When to pseudonymize vs. anonymize:** pseudonymize data that may still need to be re-linked for operational purposes but does not require direct identification of individuals. Anonymize data that should be completely de-identified to ensure privacy.

- **Risk of Re-Identification:** Pseudonymized data can still be re-identified if matched with the original dataset. Use pseudonymization carefully when there is a potential risk of unauthorized data correlation.

###### **Recommended Best Practices for Sanitizing Log Samples**

To protect sensitive information and ensure compliance with privacy standards, it is crucial to sanitize log samples before using them with our AI tools. Follow these guidelines:

1. **Avoid Including Sensitive Data:** Do not include names, email addresses, phone numbers, or IP addresses in the logs that will identify your organization or its stakeholders. Replace them with placeholders.

**Remove Personally Identifiable Information (PII)**

**Examples:** Names, addresses, phone numbers, email addresses, social security numbers, account numbers.  
**Replace** PII with generic placeholders (e.g., John Doe becomes USER\_NAME, 123 Main St becomes ADDRESS).

**Exclude Confidential Business Information**

**Examples:** Company financials, proprietary algorithms, sensitive internal communications.  
**Replace** sensitive data with placeholders (e.g., proprietary\_algorithm\_v1 becomes ALGORITHM\_NAME).

**Mask IP Addresses and Hostnames**

**Examples:** 192.168.1.1, myserver.company.com  
**Replace** IP addresses with IP\_ADDRESS and hostnames with HOSTNAME.

**Anonymize and Psuedonymize Identifiers**

**Examples:** User IDs, session tokens, unique identifiers.  
**Replace** with generic terms   
**Original:** User John Doe logged in from 192.168.1.1 using johndoe@example.com  
**Anonymized:** User \[REDACTED\] logged in from \[REDACTED\] using \[REDACTED\]  
**Pseudonymized:** User u12345 logged in from 192.0.2.0 using email@example.com

**Generalize Dates and Times**

**Examples:** Specific timestamps, dates of transactions.  
**Use placeholders** (e.g., 2023-05-01 08:00:00 becomes DATE\_TIME). 

2. **Log Sample Entry:** Pasting the log samples as guided below will help in maintaining the consistency of the log format for accurate analysis.
    - **Enter Each Log Separately:** Log samples should be entered as separate entries on new lines.
    
    - **No Empty New Lines:** Ensure there are no empty new lines between log entries.
    
    - **Use Unique Log Events:** Ensure to provide log samples pertaining to unique log events to enhance the quality of the DNIF AI extractor. This step will also benefit in manually building the extractor.

**ENTER LOG SAMPLES AS FOLLOWS:**  
sample log 1  
sample log 2  
sample log 3
