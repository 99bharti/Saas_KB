---
title: "Query multiple streams"
date: 2025-01-20
type: "epkb_post_type_1"
---

  
The DNIF Query Language lets you query multiple streams separated by a comma.

###### **Syntax**

The syntax for querying multiple streams is as follows:

`stream = stream_name1,stream_name2, stream_name3`

Here, 

The keyword stream is a standard DQL keyword used to retrieve data

stream\_name1, stream\_name2, and stream\_name3 are the names of the streams from which the data will be retrieved. These stream names are separated by commas. Let’s now look at a practical example

`stream = AUTHENTICATION, FIREWALL,THREAT`

The above DQL query retrieves all fields for each event in the FIREWALL, AUTHENTICATION, and THREAT streams.

###### **Querying multiple streams in DQL Block**

<figure>

<video width="100%" height="auto" controls>
  <source src="./images-Query multiple streams/Query-multiple-streams-1.mp4" />
  Your browser does not support the video tag.
</video> 

<figcaption>

  

</figcaption>

</figure>

###### **Querying multiple streams in Search Block**

<video width="100%" height="auto" controls>
  <source src="./images-Query multiple streams/Query-multiple-streams-2.mp4" />
  Your browser does not support the video tag.
</video> 