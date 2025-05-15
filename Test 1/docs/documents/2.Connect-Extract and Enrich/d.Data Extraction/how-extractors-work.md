---
title: "How Extractors work?"
date: 2025-01-21
type: "epkb_post_type_1"
---

  
On adding a new extractor, DNIF performs the following functions to extract relevant data from the incoming events.

- The extractor database is rebuilt as per the newly added extractor and the Adapter pipeline is restarted.

- First, the master filter is validated and if a match is found the extractor is identified and applied to the incoming log source.

- The event is passed on to the first match. If the first match is found, then the event is routed to the appropriate event key for appropriate annotation and translation. Here, the event is annotated to a particular stream based on the event type, and relevant fields are extracted to the standard [DNIF Data Model](https://dnif.it/kb/data-ingestion/extractors/extractor-validator/). The event is tagged as PAD (Parsed as desired).

- If the event doesn’t match the master filter, then it will not be parsed and will be tagged as NLF (No Log Found ).

- If an event matches the master filter and encounters any errors during field extraction, the event is tagged as PER (Parsing Error).

- If the event key doesn’t match after matching the master filter and first match, then the event will be tagged as OTHER events (if configured in the fallback clause).

**Introduced in v9.1.1**

 UNET sync is a process that is running on core and it automatically syncs your extractors every 30 minutes.
