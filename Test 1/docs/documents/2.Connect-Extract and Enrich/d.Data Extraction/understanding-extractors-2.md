---
title: "Understanding Extractors"
date: 2025-01-21
type: "epkb_post_type_1"
---

  
Your SIEM is built to translate and transform events from multiple devices with different logging standards. The process of bringing events from multiple sources, extracting the the right information and then translating the basis of the event to a common context is done by the extractors.

###### **Overview**

Events are collected by the connectors and handed over to the extractors. Extractors work in tandem to parse the inbound event and extract key data points from the event. These data points are mapped into fields or keys that form a part of the DNIF Data Model (DDM). Extractors are able to -

- **Parse** - events at extremely high speeds

- **Transform** - native key names to match the DDM

- **Substitue** - event to normalize to a common structure

- **Annotate** - known events with stream names, subsystems and actions

Depending upon the format followed by the log source, extractors use three strategies to parse events. This allows DNIF to use the best strategy to efficiently parse out events.

###### **Features**

The core capabilities across extractor types remains the same, below are the key features available -

- Conveniently extract data from different formats - JSON, Key / Value pairs or raw syslog

- Correctly classify data streams or events from different sources without being provided a pre-configured configuration

- Auto extract fields based on format

- Manually extract fields on custom or non-discrpt formats

- Classifying data from event sources into streams

- Provide annotations on data from each stream

- Substitute and transform data into a common language

###### **Extractor families**

There are three primary extractor families available with DNIF, namely -

- JSON extractor

- Key / Value pair (KV) extractor

- Regex based extractors (Traditional DNIF Parsers)

DNIF v9 introduced the JSON and the KV extractor, before all parsers were based on regular expressions or regex. However, due to the evolution of structured logging and JSON, several OEMs use JSON or KV pairs to encode vital information into events.

###### **Key differences**

JSON / KV based extractors are only able to extract data from structured log formats, a large part of source devices are still logging in unstructured natural language. Events in unstructured natural language need to be parsed individually where each field or the context needs to be extracted using a regular expression.

Each event is therefore unique and has an unique parser or regular expression. Therefore if there is a change in the data format, the regular expression can break and the parser can result in an error.

Against this, JSON / KV extractors are resilient and are accomodating towards format changes and vendor updates.

DNIF Hypescale SIEM hence encourages its patrons to use published **Integration Manuals** (Ingesting Data > Automation) in order for DNIF supported Extractors to work seemlessly.
