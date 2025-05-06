---
title: "Create a Code Block"
date: 2025-01-29
type: "epkb_post_type_1"
---

Code Block also known as a Python Block is used to manipulate the data and generate a new output using python.

- The Python block is a dependent block, so you mandatorily need an input data source from the DQL / Search block.
- The output data from the DQL / Search block will be used as an input to the Python block to manipulate and generate an output.
- It is a restrictive shell, no imports or invocations are allowed. Only standard pythonic functions and operations are allowed.

###### **How to add a Code Block?**

- Hover on the **Workbooks** icon on the left navigation bar, it will display the folder wise view of existing workbooks in the tenant (previously known as cluster).

![image 1-Dec-21-2023-04-52-56-9211-AM](./images-%20Create%20a%20Code%20Block/Create-a-Code-Block-1.png)

- Click the **plus** icon on the Workbook page and select **Code Block** from the list, the following screen will be displayed.

The python block should be added in the following format:

![image 2-Dec-21-2023-04-53-42-5781-AM](./images-%20Create%20a%20Code%20Block/Create-a-Code-Block-2.png)

```
def transform(inward_array):
   for log in inward_array:
       for k,v in list(log.items()):
           if v == None:
               del log[k]
   return inward_array
```

| **Code** | **Description** |
| --- | --- |
| def | It is used to define a function and is a mandatory part of the block. For more information refer [https://docs.python.org/release/3.0/](https://docs.python.org/release/3.0/) |
| Inward Array | Enter the input value from the previous block (DQL) here |
| List | The list that needs to be manipulated as per your requirement. In the above example, all the v= none columns will be deleted from the list. |
| Return inward array | This is also a mandatory field, this would be the result of the manipulations done. It is also mandatory that the return format and the inward format should match. |

- Enter the query and click **Run** to execute the query, the result dataset will be displayed.

![image 3-Dec-21-2023-04-56-02-3895-AM](./images-%20Create%20a%20Code%20Block/Create-a-Code-Block-3.png)

- Click **Information** icon, to view log details. You can view the log details in JSON and TABLE format.

![image 4-Dec-21-2023-04-56-40-9373-AM](./images-%20Create%20a%20Code%20Block/Create-a-Code-Block-4.png)

- Click **Copy** icon, to copy the details to clipboard.

###### **Code Block Functions  
  
**

| **Icons** | **Functionality** |
| --- | --- |
| ![image 5-Dec-21-2023-04-57-09-4974-AM](./images-%20Create%20a%20Code%20Block/Create-a-Code-Block-5.webp) | Used to execute the query |
| ![image 6-Dec-21-2023-04-57-15-8666-AM](./images-%20Create%20a%20Code%20Block/Create-a-Code-Block-6.webp) | Used to revoke the executed query. |
| ![image 7-Dec-21-2023-04-57-21-4347-AM](./images-%20Create%20a%20Code%20Block/Create-a-Code-Block-7.webp) | Used to filter the query result based on your requirement. |
| ![image 8-Dec-21-2023-04-57-29-2367-AM](./images-%20Create%20a%20Code%20Block/Create-a-Code-Block-8.webp) | Used to delete a block |

For more details on Workbooks refer [Create a Workbook](https://dnif.it/kb/hunting-with-workbooks/getting-started-hunting-with-workbooks/how-to-create-a-workbook-2/).

###### **Usage of json\_parse and json\_stringify  
  
**

json\_parse is used for parsing data that is received as JSON; it deserializes a JSON string into a JavaScript object. json\_stringify on the other hand is used to create a JSON string out of an object or array; it serializes a JavaScript object into a JSON string.

In the below example, a webhook plugin is run, it returns $WebhookResponse in stringified json format.

![image 9-Dec-21-2023-05-01-51-2829-AM](./images-%20Create%20a%20Code%20Block/Create-a-Code-Block-9.png)

Python code block is used to parse the above mentioned response into a json object and extract the required fields to create a new json object, and json\_stringify is used to store it in $NewPayload field

![image 10-Dec-21-2023-05-05-02-4839-AM](./images-%20Create%20a%20Code%20Block/Create-a-Code-Block-10.webp)

###### **Usage of regexp\_extract**

Extracts the first string in str that matches the regexp expression and corresponds to the regex group index.

###### **Syntax  
  
**

```
regexp_extract(pattern str, string str, group int=0)
```

###### **Arguments  
  
**

**pattern:** A STRING expression to be matched.  
**string:** A STRING expression with a matching pattern.  
**group:** An optional integral number expression greater or equal 0 with default 0.

###### **Returns**

The REGEXP\_Extract function returns a string value.

The regexp string must be a python regular expression. String literals are unescaped. For example, to match 'abc', a regular expression for regexp can be '^abc$'. regexp may contain multiple groups. group indicates which regex group to extract. An int of 0 means matching the entire regular expression.

###### **Example  
  
**

```
def transform(inward_array):
	for log in inward_array:
		log["$PacketAction"] = regexp_extract("PACKET_(w+)", log["$Action"], 1)
	return inward_array
```

In the above example, the function **regexp\_extract("PACKET\_(w+)** will return all the matching values of **PACKET\_** from the group viz. **PACKET\_ALLOWED**, **PACKET\_BLOCKED** and the new extracted value is displayed in the **$PacketAction** column as shown below:

![image 11-Dec-21-2023-05-06-02-3634-AM](./images-%20Create%20a%20Code%20Block/Create-a-Code-Block-11.webp)

###### **Usage of regexp\_match**

Returns true if the target value exactly matches the regular expression pattern.

###### **Syntax  
  
**

```
regexp_match(pattern str, string str)
```

###### **Arguments**

**pattern:** A STRING expression to be matched.  
**string:** A STRING expression with a matching pattern.

###### **Returns**

The REGEXP\_MATCH function returns boolean values.

REGEXP\_MATCH attempts to match the entire string contained in pattern str. For example, if pattern str is "ABC123":

REGEXP\_MATCH(pattern str, 'A') returns false.  
REGEXP\_MATCH(pattern str, 'A.\*') returns true.

###### **Example  
  
**

```
def transform(inward_array):
	for log in inward_array:
		log["$PacketAction"] = str(regexp_match("PACKET_(w+)", log["$Action"]))
	return inward_array
```

In the above example, the function **str(regexp\_match("PACKET\_(w+)** will return all the matching values of **PACKET\_** viz. **PACKET\_ALLOWED**, **PACKET\_BLOCKED** and will also return a boolean value corresponding to the string if a substring of the specified string matches the regular expression pattern as shown below:

![image 12-Dec-21-2023-05-08-20-2667-AM](./images-%20Create%20a%20Code%20Block/Create-a-Code-Block-12.webp)
