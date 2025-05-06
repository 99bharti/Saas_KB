---
title: "_retrieve"
date: 2025-01-20
type: "epkb_post_type_1"
---

  
Reads data from an event store created using the **\_store** directive

The **\_retrieve** query directive is used to read the data from an event store that was created using the **\_store** directive.

The result set stored using the **\_store** directive is referred to as a event store. Hence the **\_store** directive is also called an even store.

Take a look at the example given below:

```
_retrieve list waf_server_list
```

Here, waf\_server\_list is an in\_disk event store created using the **\_store** directive. The **\_retrieve** directive reads data from the waf\_server\_list event store and displays it.

###### **Syntax**

```
_retrieve [ list | query <store_name> ]
```

Here,

- **list:** Keyword used to get the list of event stores.

- **store\_name:** Name of the event store you want to read.

###### **List**

The **\_retrieve** directive, along with the list keyword is used to get a list of the saved event stores.

Take a look at the example given below:

```
_retrieve list
```

The **\_retrieve** directive uses the list keyword to fetch a list of all the existing event stores (within the scope) that were created using the **\_store** directive. The output is as shown below:

![image 1-Dec-06-2023-10-51-15-3430-AM](./images-_retrieve/_retrieve-1.png)

The above image lists all the existing event stores.

To retrieve the contents of an event store, use the **\_retrieve** directive with query and event store name.

###### **Store Name**

The **\_retrieve** directive uses the event store name to retrieve contents of that event store.  
For example, to retrieve contents of the **user\_store** event store, use the query given below:

```
_retrieve query user_store
```

This query retrieves the contents of the **user\_store** event store. This event store has been created earlier using the **\_store** directive. The output is as shown below:

![image 2-Dec-06-2023-10-51-29-8316-AM](./images-_retrieve/_retrieve-2.png)

###### **Filter Clause**

The filter clause filters data returned by the query based on the conditions you specify immediately after the filter keyword. Hence, you can use this clause to search for specific events based on the values of one or more fields in various permutations as desired.

Take a look at the example given below:

```
_retrieve query user_store filter $PStatus = 'PAD' AND $EvtLen = 77
```

This query retrieves the contents of **user\_store** event store after applying the filters $PStatus = 'PAD' AND $EvtLen = 77. The output is as shown below:

![image 3-Dec-06-2023-10-51-41-7190-AM](./images-_retrieve/_retrieve-3.png)
