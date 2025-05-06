---
title: "Custom Extractors"
date: 2025-01-21
type: "epkb_post_type_1"
---

  
DNIF provides users with the flexibility to create custom extractors. These custom extractors can be completely new or created by cloning or modifying existing native extractors. This allows users to parse certain log events or additional fields not captured by the native extractors. It is recommended to consult your administrator when creating custom extractors.

To write Custom extractors in DNIF, you can choose from the following methods:

1. [DNIF AI-Assisted Extractor Generator](#extractor-generator): leverages generative artificial intelligence to automatically generate extractors from provided log samples. 

3. [Manual Method](#manual-method): helps to manually create new extractors using the "Extraction" interface

5. [Cloning Method](#cloning_method):  helps in duplicating or modifying an existing native extractor

Also, the [extractor validator](https://dnif.it/kb/data-ingestion/extractors/extractor-validator/) is a valuable feature that assists users in writing more effective extractors by providing immediate feedback and helping them avoid errors.

###### **DNIF AI**

The Extractor Generator assists the security analyst in auto-generating a custom extractor using the power of generative artificial intelligence. By analyzing the structure and content of the provided log samples. DNIF AI suggests a starting point for your extractors, effectively reducing the effort and complexity involved in manual creation. [Click here](https://dnif.it/kb/dnif-ai/extractor-generator/extractor-generator-overview/) to learn more about it.

###### **Manual Method**

 To customize extractors manually through the designated interface, follow these steps:

1. Navigate to the extractor page and click on the plus icon "+" to create a custom extractor.

3. Select "Manual" from the options provided, as illustrated in the image below.  
      
    ![](./images-%20Custom%20Extractors/Custom-Extractors-1.webp)

3. A new window will open as shown below, Enter a **Name** for the extractor you are about to create, and you can directly start writing in the yaml editor.  
      
    ![](./images-%20Custom%20Extractors/Custom-Extractors-2.png)  
      
    

5. Paste your **Log samples** in the below log samples section.  
      
      
    ![](./images-%20Custom%20Extractors/Custom-Extractors-3.png)  
      
    

7. Click **Submit** after writing the parser  
      
     ![](./images-%20Custom%20Extractors/Custom-Extractors-4.png)  
      
      
    

9. It will start validating the extractor and show errors if any. Check for the Extractor validation [here](https://dnif.it/kb/data-ingestion/extractors/extractor-validator/).

11. If any of the checks fail, the extractor is saved in draft mode.

13. If all checks pass, the extractor gets published and is enabled by default.

 The customized extractor will then appear in the list on the extractor listing page.

###### **Cloning Method**

In this method, you have the option to create a custom extractor by duplicating an existing native extractor.

1. To initiate this process, click on the name of the desired native extractor from the list.  
      
    ![](./images-%20Custom%20Extractors/Custom-Extractors-5.webp)  
      
    

3. The current extractor listing page will appear, allowing you to modify the existing extractor according to your needs.  
      
    ![](./images-%20Custom%20Extractors/Custom-Extractors-6.png)  
      
    

5. After making the necessary changes, click "**Submit**" at the bottom of the page to save your modifications.  
      
    ![](./images-%20Custom%20Extractors/Custom-Extractors-7.png)  
      
    

7. A popup window will appear next., it will allow you to  Disable the existing extractor, Click "**Save**" to finalize the creation of your custom extractor.  
      
    ![](./images-%20Custom%20Extractors/Custom-Extractors-8.png)  
      
    **Note:**  The existing extractor will always be disabled by default to ensure that only one extractor is active at any given time. If a user attempts to enable both simultaneously, an error message will be displayed.

9. The New Cloned Extractor will open in edit mode and the validation process will begin.(For Extractor validation click [here](https://dnif.it/kb/data-ingestion/extractors/extractor-validator/).)

11. If any of the checks fail, the extractor is saved in draft mode.

13. If the extractor goes through all the checks, the extractor gets published and is enabled by default.

###### **How to write an extractor using a yaml file?**

Extractors are built-in .yaml files, the value for ExtractorID, SourceName, and SourceType is populated along with the assigned key value.

**Basic Information**

Each extractor will have the following basic information

| **Field** | **Description** |
| --- | --- |
| schema-version | The version assigned to the extractor. |
| extractor-id | The unique ID assigned to the extractor is autogenerated and does not need to be specified in the yaml file. |
| source-name | The name assigned to the extractor as per the device. Example: Fortigate, Checkpoint, etc |
| source-type | The type of device.   **Example**: Firewall, OS, switch etc. |
| source-description | A short description regarding the extractor |

###### **Stream**

Stream is a domain-specific collection of data from different sources that contributes to a unique dataset and a unique set of use-cases. Each value in the Stream field within the extractor can be used to generate a search that returns a particular dataset with information.

![](./images-%20Custom%20Extractors/Custom-Extractors-9.webp)

  
This is the section where we could define the streams that are included in the extractor. There are various streams such as: AUTHENTICATION, SYSMON-PROCESS, SYSMON-NETWORK, IAM etc  
**Example:** Authentication refers to the login and logout activity events, IAM refers to the User Management events such as create user, delete user.

###### **Master Filters**

  
The Master Filters and First Matches help to identify the extractor to be applied to a given log source, it has been heavily optimized for performance.

**Event Details**:

The following configuration should be done under Event details

1. **First Match**  
    First Matches will help us identify different patterns associated with a log source.
    1. Each first match will be associated with a decoder.
    
    3. First matches can now yield multiple events if used with decoder=json or custom-kv.

The decoder=regex is the legacy event detail approach that will be relevant for older devices.

1. **Decoder**  
    Decoder section defines the type of decoder to be used on the basis of the log format. Decoders are defined at the First match level, therefore, we could use multiple decoders in an extractor file.  
    There are 3 decoders available
    1. **JSON**: It is written as '**decoder: json**' in the extractor files. The log samples which are in JSON format could be parsed using this decoder. It parses all the key-values correctly that are rendered in the log sample.  
        **Note:** Regex is not required to parse key values.
    
    3. **Custom(key-value)**: It is written as '**decoder: custom**' in the extractor files. The log samples which are in key-value format could be parsed using this decoder. Here, we have to write a generic regex that captures the key and value from the log samples appropriately.  
          
        **Example**: Refer to the below snapshot:  
          
        ![image 5-Dec-04-2023-11-46-42-9226-AM](./images-%20Custom%20Extractors/Custom-Extractors-10.webp)  
          
        
    
    5. As per the snapshot, it is seen that a generic regex is written to capture the key value in the log sample. This regex will result in groups of keys and values, displayed in the image below. Further, the Key could be annotated as per the field Annotations in the extractor.  
          
        ![image 6-Dec-04-2023-11-47-20-9193-AM](./images-%20Custom%20Extractors/Custom-Extractors-11.webp)  
          
        
    
    7. **Regex**: It is written as 'decoder: regex' in the yml files. The log samples that are in Syslog (only values) format could be parsed using this decoder. Here, we have to write the regex and define the field name in it. This field name could be mapped and annotated in the extractor accordingly.  
          
        **Example**: Refer to the below snapshot  
          
        ![image 7-Dec-04-2023-11-47-59-2933-AM](./images-%20Custom%20Extractors/Custom-Extractors-12.webp)  
          
          
        In the snapshot, it can be seen that field names are defined in the regex. This could be achieved by writing (?P&lt;field\_name&gt;) at the start of the group.  
          
        ![image 8-Dec-04-2023-11-48-26-2332-AM](./images-%20Custom%20Extractors/Custom-Extractors-13.webp)  
          
        

3. **Event Key Format**  
    In the event-key-format section we have to define the field on the basis of which we could achieve an accurate present in the log event.  
    For example: Refer to the snapshot below:  
      
    ![image 9-4](./images-%20Custom%20Extractors/Custom-Extractors-14.webp)  
      
    

5. In the snapshot above one can see that First Match is defined on the basis of SourceName and further it is segregated on the basis of EventID in the '**event-key-format**' section.

7. **Event Key Mapping**:  
    In the 'event-key-mapping' section the events could be defined with appropriate Streams. Although while specifying an event in this section one needs to ensure each event identifies itself with a Stream.  
      
    ![image 10-3](./images-%20Custom%20Extractors/Custom-Extractors-15.webp)  
      
      
    In the snapshot, EventID is defined as the pointer that provides us maximum information about the log event. Refer to the below table to understand regarding annotate and translate fields.  
      
    ![image 11-2](./images-%20Custom%20Extractors/Custom-Extractors-16.webp)  
      
    

| **Field** | **Description** |
| --- | --- |
| annotate | Static key value for Stream, Action and status to be added as per the log event's information. In the above snapshot, relevant Stream, Action and Status is defined as per the log event's information.**Stream**: Type of log**Action**: Action Performed in the log event. Eg: Login, Logout**Status**: Status of the action performed in the log event. Eg: Passed, Failed |
| translate | All the relevant fields as per the stream should be defined under the translate section. Allows you to replace the fields as per DNIF terminology. |

1. **Fallback**:  
    Fallback is a mandatory field. All the events that are defined with Stream will be parsed accurately, while the undefined events for that particular First Match will parse under the fallback section.  
    **Example:** Let us consider we have created the First Match on the basis of SourceName for Windows Extractor and the further division is on the basis of EventID. In this we have defined some EventIDs with proper stream while some of the EventIDs could not be defined, this undefined EventID will then parse under the fallback section.  
      
    Refer the snapshot for fallback events field definition:  
      
    ![image 12-4](./images-%20Custom%20Extractors/Custom-Extractors-17.webp)  
      
    

3. **Globals  
      
    **Globals is a non-mandatory field. In this section we could define the generic fields that are present throughout the Extractor.  
      
    Refer the snapshot for globals definition:  
      
    ![image 13-2](./images-%20Custom%20Extractors/Custom-Extractors-18.webp)  
      
    

5. **Substitutions  
      
    **In most of the devices, there are substitutions provided for some fields. This substitution can be defined under the globals section as follows:  
      
    ![image 14-2](./images-%20Custom%20Extractors/Custom-Extractors-19.webp)  
      
    

To make this work for multiple samples (First Matches) in the Extractor, following procedures can be followed.

For example:  
  
  
![image 15-2](./images-%20Custom%20Extractors/Custom-Extractors-20.webp)  
  

![image 16-2](./images-%20Custom%20Extractors/Custom-Extractors-21.webp)

We have two first matches here.

Referring to the first occurrence of First Match, we have subs defined for it. The only addition being (&id001) present against subs. The character '&' denotes assigning value of subs to the variable id001. Once we assign this to a variable, we can reuse it wherever we are using the same values, as in case of subs. (& sign is placed before variable name as assignment)

Referring to the second occurrence of First Match, we have subs but now we are only using (_id001). So we are basically reusing the subs defined before. The symbol '_' is used with id001 to refer (&id001).

For all other occurrences of subs further, we can simply refer to the first occurrence of subs. We just need to make sure that assigning value to a variable has to be done at first occurrence of subs and then used later with its reference. And basic variable naming should be considered (alphabets/alphanumeric would be preferred.)

###### **Pitfalls to avoid in a new way of building parsers**

The procedure for creating an extractor has been mentioned in detail. If any of the steps are not followed correctly, it would result in bad extractor performance on the setup, this could also affect the EPS hits.
