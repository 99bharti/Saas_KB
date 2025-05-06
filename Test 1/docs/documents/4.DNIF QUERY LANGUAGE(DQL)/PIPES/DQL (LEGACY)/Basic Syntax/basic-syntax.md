---
title: "Basic Syntax"
date: 2025-01-17
type: "epkb_post_type_1"
---

  
The DNIF query language lets you use **pipe (|)** syntax to explore, discover, and query data stored in DNIF. The syntax consists of commands delimited by the pipe character (|) where data flows from left to right through each pipeline.

For doing operations on data, DQL has many **built-in functions**, such as count\_distinct, sum, min, max, avg, percentage\_of, ratio\_of, count\_if, length, and distinct.

###### **Syntax**

To execute a **basic query**, you can start with just a simple stream selection. In DNIF, Stream is a specific collection of data that is used as a log. The data is written to and read from the log stream in a specific format so that all the instances of a particular stream are diverted into a single segment.

The basic syntax is as follows:

```
stream = stream_name
```

Here,

- Stream is the standard DQL keyword to retrieve data.

- Stream\_name: It represents the name of the stream from where data will be retrieved.

Let's now look at a practical example:

```
stream=firewall
```

On execution of the above DQL query, it should retrieve all fields for each event where the stream is a firewall.

###### **Where Clause**

Events can be matched by specifying criteria to match the fields in the event to other values. The where clause filters data returned by the query based on the conditions you specify immediately after the where keyword. Hence, you can use this clause to search for events based on the values of one or more fields in various permutations as desired.

For example, the following DQL query matches events with an event type of stream and a dstport of 22:

```
stream=firewall where dstport=22
```

In the above example, stream is a firewall and it also specifies a value for the matching condition. It will retrieve all fields for each event where the stream is a firewall and the destination port is 22.

Below are some more examples,

```
stream=firewall where dstport=53 and dstip!='8.8.8.8'stream=firewall where dstport=53 and (dstip='8.8.8.8' or dstip='1.1.1.1')
```

**Non-numeric values** must also be enclosed with **single quotes**. **For example, stream=firewall where dstport=53 and user='abc'**
