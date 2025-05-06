---
title: "Search API"
date: 2025-01-20
type: "epkb_post_type_1"
---

The **DNIF Search API** lets you develop an application that can retrieve and display results with the desired DQL query programmatically. With this API, you can use RESTful requests to get search results for multiple streams with desired start and end time.

## Prerequisites

Ensure you have the following details before using the DNIF Search API:

- Console IP address  
- Cluster ID  
- API Token (Generated from DNIF Console. Visit **Manage Token** to generate)

---

## API Overview

| Operation    | Description                                           | REST HTTP Mapping |
|--------------|-------------------------------------------------------|-------------------|
| **invoke**   | Returns the requested id of the search for DQL query | POST              |
| **get status** | Returns the status of task execution of requested id | GET               |
| **get result** | Returns result of the search for the DQL query        | GET               |

---

## How to use the API?

### Method Details

| Field              | Description        |
|--------------------|--------------------|
| **HTTP Method**    | POST               |
| **Response Format**| JSON               |
| **Authentication** | Yes                |

---

## Query Parameters

### Invoke

You can retrieve the `task_id` for a particular search by sending an HTTP POST request to its URL. Pass the search details in the query body.

**Endpoint:**  
```
POST https://<ipaddress>/<cluster_id>/wrk/api/job/invoke
```

### Request Header

| Field        | Value                      |
|--------------|----------------------------|
| **Token**    | Token from DNIF Console    |
| **Content-Type** | application/json       |

### Request Body

| Field             | Value | Description |
|------------------|-------|-------------|
| `query_timezone` | `Asia/Kolkata` | Time zone of execution |
| `scope_id`       | `default`      | Scope of data retrieval |
| `job_type`       | `dql`          | Type of job (only DQL supported) |
| `job_execution`  | `on-demand`    | Execution type (only on_demand supported) |
| `query`          | `_fetch * from event where $Stream=FIREWALL AND $StartTime=2021-09-14T17:42:00 AND $EndTime=2021-09-14T18:13:32 limit 10` | DQL Query |

> All fields are mandatory.

### Curl Command

```bash
curl -k --location --request POST 'https://<ipaddress>/<cluster_id>/wrk/api/job/invoke' \
--header 'Token: <token>' \
--header 'Content-Type: application/json' \
--data-raw '{
  "query_timezone": "Asia/Kolkata",
  "scope_id": "default",
  "job_type": "dql",
  "job_execution": "on-demand",
  "query": "_fetch * from event where $Stream=FIREWALL AND $StartTime=2021-09-14T17:42:00 AND $EndTime=2021-09-14T18:13:32 limit 10"
}'
```

---

## Response - Invoke

### Success

| Field        | Value | Description |
|--------------|-------|-------------|
| `status_code` | 200 | Search invoked successfully |
| `status`      | success | Indicates success |

**Response JSON**
```json
{
  "data": [
    {
      "id": "e646af00-66da-456f-a606-ca2b0a3dd19a-id-0",
      "status": "PENDING"
    }
  ],
  "status": "success"
}
```

### Error (Syntax Error)

| Field        | Value |
|--------------|-------|
| `status_code` | 200 |
| `status`      | error |

### Failure (Parameter Error)

| Field        | Value |
|--------------|-------|
| `status_code` | 200 |
| `status`      | failed |

**Response JSON**
```json
{
  "message": "Incorrect job_execution type",
  "status": "failed"
}
```

---

## Get Status

### Endpoint
```
GET https://<ipaddress>/<cluster_id>/wrk/api/dispatcher/task/state/<task_id>
```

### Request Header

| Field | Value |
|-------|-------|
| Token | Token from DNIF Console |

### Curl Command

```bash
curl -k --location --request GET 'https://<ipaddress>/<cluster_id>/wrk/api/dispatcher/task/state/<task_id>' \
--header 'Token: <token>'
```

### Response Codes

| Code | Task Stage | Task State         |
|------|------------|--------------------|
| 200  | EXECUTING  | STARTED            |
| 200  | EXECUTED   | SUCCESS            |
| 200  | PENDING    | QUEUED             |
| 200  | PENDING    | QUERY_WORKERS_DOWN |
| 200  | FAILURE    | FAILED             |

**Success Response**
```json
{
  "status": "success",
  "task_stage": "EXECUTED",
  "task_state": "SUCCESS"
}
```

> Wait for `"task_state": "SUCCESS"` before calling Get Result API.

---

## Get Result

### Endpoint
```
GET https://<ipaddress>/<cluster_id>/wrk/api/dispatcher/task/result/<task_id>?pagesize=<limit>&pageno=<page_no>
```

### Request Header

| Field | Value |
|-------|-------|
| Token | Token from DNIF Console |

### Curl Command

```bash
curl -k --location --request GET 'https://<ipaddress>/<cluster_id>/wrk/api/dispatcher/task/result/<task_id>?pagesize=<size>&pageno=<number>' \
--header 'Token: <token>'
```

### Response

| Field        | Value | Description |
|--------------|-------|-------------|
| `status_code` | 200 | Indicates success |
| `status`      | success | Status of the task |

**Example Response**
```json
{
  "apply_hidden": true,
  "execution_time": "1.7275 sec",
  "fields_list": [
    "$CNAMTime", "$System", "$SourceName", "$SourceType", "$Stream", "$Action",
    "$SrcIP", "$SrcPort", "$DstIP", "$DstPort", "$Proto", "$TXLen", "$RXLen",
    "$SystemTstamp", "$EvtLen", "$EventName", "$SrcType", "$IntelReference",
    "$Status", "$Type", "$DstType", "$IntelURL", "$App", "$DevSrcIP", "$DstLOC",
    "$DstCN", "$DstASN", "$DstISP", "$SrcLOC", "$SrcCN", "$SrcASN", "$SrcISP",
    "$ExtractorID", "$EStatus", "$PStatus"
  ],
  "result": [
    {
      "$Action": "PACKET_BLOCKED",
      "$App": null,
      "$CNAMTime": 1630074479965,
      "$DevSrcIP": "10.139.128.73",
      "$DstASN": "396212",
      "$DstCN": "US",
      "$DstIP": "71.39.18.125",
      "$DstISP": "AIMS-COMMUNITY-COLLEGE",
      "$DstLOC": "[40.3851,-104.6759]",
      "$DstPort": "53413",
      "$DstType": "PUBLIC",
      "$EStatus": "EAD",
      "$EventName": null,
      "$EvtLen": 500,
      "$ExtractorID": "127",
      "$IntelReference": null,
      "$IntelURL": null,
      "$PStatus": "PAD",
      "$Proto": "UDP",
      "$RXLen": 0,
      "$SourceName": "FORTIGATE",
      "$SourceType": "FIREWALL",
      "$SrcASN": "-",
      "$SrcCN": "CN",
      "$SrcIP": "116.5.35.83",
      "$SrcISP": "-",
      "$SrcLOC": "[23.1057,113.2023]",
      "$SrcPort": "13031",
      "$SrcType": "PUBLIC",
      "$Status": "FAILED",
      "$Stream": "FIREWALL",
      "$System": "gotham-fortigate",
      "$SystemTstamp": "2016-08-06",
      "$TXLen": 0,
      "$Type": null,
      "$Xhour": "2021082714",
      "$Xminute": "202108271427"
    }
  ],
  "source_stream": "FIREWALL",
  "status": "success",
  "task_status": "Task Executed Successfully",
  "total_count": 1
}
```
