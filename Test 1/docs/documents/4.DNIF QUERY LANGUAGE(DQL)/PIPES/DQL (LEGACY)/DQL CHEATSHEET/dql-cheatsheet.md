---
title: "DQL CHEATSHEET"
date: 2025-01-17
type: "epkb_post_type_1"
---

  
**Easy to work with query samples for DQL. Use them as a starting point in building your queries.**

| SQL | `SELECT * FROM FIREWALL WHERE $DstPort=220%` |
| --- | --- |
| DQL | `stream=firewall where dstport=22`    |
|   | Query all firewall events for SSH traffic assuming destination port is 22 |
|   |   |
| SQL | `SELECT * FROM FIREWALL WHERE $DstPort=53 AND $DstIP!='8.8.8.8'` |
| DQL | `stream=firewall where dstport=53 and dstip!='8.8.8.8'` |
|   | Query all firewall events for SSH traffic assuming standard port is 53 and destination ip is not 8.8.8.8 |
|   |   |
| SQL | `SELECT * FROM FIREWALL WHERE $DstPort=53 AND`    `($DstIP='8.8.8.8' OR $DstIP='1.1.1.1')` |
| DQL | `stream=firewall where dstport=53 and(dstip='8.8.8.8' or`   `dstip='1.1.1.1')`    |
|   | Query all firewall events for SSH traffic assuming standard port is 53 and destination ip is 8.8.8.8 or 1.1.1.1 |
|   |   |
| SQL | `SELECT * FROM FIREWALL WHERE $DstPort=23 AND $SrcCN="US"` |
| DQL | `stream=firewall where dstport=23 and srccn='US'` |
|   | Query all firewall events for SSH traffic assuming standard port is 23 and source country is ”US” |
|   |   |
| SQL | `SELECT $DstCN FROM FIREWALL` |
| DQL | `stream=firewall \| select dstcn` |
|   | Query DstCN of all firewall events  |
|   |   |
| SQL | `SELECT $DstPort, $DstCN, COUNT(*) FROM FIREWALL Group By $DstPort, $DstCN LIMIT 10` |
| DQL | `stream=firewall \| groupby dstport, dstcn \| limit 10` |
|   | Query top 10 firewall events and group it as per destination port and   destination country |
|   |   |
| SQL | `SELECT $DstPort, $DstCN, COUNT(*) FROM FIREWALL Group By $DstPort, $DstCN LIMIT 10` |
| DQL | `stream=firewall \| groupby dstport, dstcn \| limit 10` |
|   | Query top 10 firewall events and group it as per destination port and   destination country |
|   |   |
| SQL | `SELECT $DstCN, $DstPort FROM FIREWALL LIMIT 2` |
| DQL | `stream=firewall \| groupby dstport, dstcn \| last 2` |
|   | Query last two firewall events and group it as per destination port and destination country |
|   |   |
| SQL | `SELECT $DstIP, (CAST(SUM(CASE WHEN $DstPort=='23' THEN 1 ELSE 0 END) AS FLOAT)/CAST(COUNT(*) AS FLOAT))*100 AS percentagecount,(CAST(SUM(CASE WHEN $DstPort=='23' THEN 1 ELSE 0 END) AS FLOAT)/CAST(COUNT(*) AS FLOAT)) AS ratiocount FROM FIREWALL WHERE $Duration=1h GROUP BY $DstIP HAVING percentagecount>0` |
| DQL | `Stream=FIREWALL \|groupby dstip \|select dstip, percentage_of(dstport==23),ratio_of(dstport==23) \|having percentage_of_col1>0` |
|   | Query all firewall events that are grouped by destination ip address and determine the percentage and ratio of a destination port |
|   |   |
| SQL | `SELECT $SrcCN, $DstPort, COUNT(*) FROM FIREWALL WHERE $Duration=1d GROUP BY $SrcCN, $DstPort` |
| DQL | `stream=firewall \| groupby srccn,dstport\| duration 1d` |
|   | Query all firewall events occurred in a day and group it as per source country and destination port |
|   |   |
| SQL | `SELECT * FROM FIREWALL WHERE $StartTime=2022-04-14T17:42:00 AND$EndTime=2022-06-02T18:13:32 AND $SrcIP="10.35.38.1"` |
| DQL | `stream=firewall where srcip='10.35.38.1' \| duration from 2021-05-20T00:00:00 to 2022-05-22T23:59:00` |
|   | Query all firewall events for source ip address 10.35.38.1 occurred during   the specific time period (in this case between 20th May 2021 and 22nd May 2022) |
|   |   |
| SQL | ``SELECT $DstIP, CAST(SUM(CASE WHEN `$DstPort` == '23' THEN 1 ELSE 0 END) AS FLOAT)/CAST(COUNT(*) AS FLOAT) AS ratiocount FROM FIREWALL GROUP BY $DstIP HAVING ratiocount>0`` |
| DQL | `Stream=FIREWALL \| groupby dstip \| select dstip, ratio_of(dstport==23) \| having ratio_of_col1>0` |
|   | Query all firewall events grouped by destination ip address to retrieve the   ratio of destination port (23 in this case) |
|   |   |
| SQL | `SELECT $DstIP, (CAST(SUM(CASE WHEN $DstPort=='23' THEN 1 ELSE 0 END) AS FLOAT)/CAST(COUNT(*) AS FLOAT))*100 AS percentagecount, (CAST(SUM(CASE WHEN $DstPort=='23' THEN 1 ELSE 0 END) AS FLOAT)/CAST(COUNT(*) AS FLOAT)) AS ratiocount FROM FIREWALL WHERE $Duration=1h GROUP BY $DstIP HAVING percentagecount>0` |
| DQL | `Stream=FIREWALL \| groupby dstip \| select dstip,`   `percentage_of(dstport==23) \| having percentage_of_col1>0` |
|   | Query all firewall events grouped by destination ip and get the percentage of destination port 23 greater than 0 |
|   |   |
| SQL | `SELECT $DstIP, count_if($DstPort==23) AS total_count FROM FIREWALL GROUP BY $DstIP HAVING total_count > 0` |
| DQL | `Stream=FIREWALL \| groupby dstip \| select dstip, count_if(dstport==23) \| having count_if_col1>0` |
|   | Query all firewall events to retrieve the total count of events against the   destination ip address |
|   |   |
| SQL | `SELECT $DstCN, COUNT(DISTINCT $DstIP) AS totalcnt,COUNT(*) as total_count FROM FIREWALL GROUP BY $DstCN` |
| DQL | `stream=firewall \| groupby dstcn \| select dstcn, distinct_count(dstip), COUNT(*) as total_count` |
|   | Query all firewall events to fetch the total count of destination Ip addresses   grouped by country |
|   |   |
| SQL | `SELECT $System,LENGTH($System) AS systemlength FROM FIREWALL GROUP BY $System, systemlength` |
| DQL | `Stream=FIREWALL \| groupby user \| select user, length(system)` |
|   | Query all firewall events grouped by user to retrieve all the length of the   field value (in this case it is ‘System’) |
|   |   |
| SQL | `SELECT * FROM CLOUDTRAIL WHERE $UserAgent LIKE '%amazonaws%'` |
| DQL | `stream=cloudtrail where useragent like "%amazonaws%"` |
|   | Query all cloudtrail events to retrieve all fields that have amazonaws |
|   |   |
| SQL | `SELECT DISTINCT $DstIP FROM FIREWALL GROUP BY $DstIP`  |
| DQL | `stream=firewall \|groupby dstip \|select distinct(dstip)` |
|   | Query all firewall events grouped by destination ip address to retrieve all   destination ip address with distinct values and remove all duplicate values |
|   |   |
| SQL | `SELECT * FROM CLOUDTRAIL WHERE $UserAgent REGEXP 'console.*'` |
| DQL | `stream=cloudtrail where rlike(useragent, ‘console.*’)` |
|   | Query all cloudtrail events to retrieve the values that match the specified   regular expression pattern. (in this case useragent,”console.\*”) |
|   |   |
| SQL | `SELECT * FROM CLOUDTRAIL WHERE NOT $SrcIP="11.71.11.11" AND$SourceName="AWS-CLOUDTRAIL"` |
| DQL | `stream=cloudtrail where sourcename='AWS-CLOUDTRAIL' and not srcip='11.71.11.11'` |
|   | Query all cloudtrail events to retrieve all fields with source name as AWS- CLOUDTRAIL and source ip address is not 11.71.11.11 |
|   |   |
| SQL | `SELECT $DstCN, sum(evtlen) FROM FIREWALL GROUP BY $DstCN` |
| DQL | `Stream=firewall \| groupby dstcn \| select dstcn, sum (evtlen)` |
|   | Query all firewall events grouped by destination country to retrieve the total   sum of all or distinct values in an expression |
|   |   |
| SQL | `SELECT $DstCN, max(evtlen) FROM FIREWALL GROUP BY $DstCN` |
| DQL | `Stream=firewall \| groupby dstcn \| select dstcn, max (evtlen)` |
|   | Query all firewall events grouped by destination country to retrieve the maximum value in the selected group |
|   |   |
| SQL | `SELECT $DstCN, min(evtlen) FROM FIREWALL GROUP BY $DstCN` |
| DQL | `Stream=firewall \| groupby dstcn \| select dstcn, min (evtlen)` |
|   | Query all firewall events grouped by destination country to retrieve the   minimum value in the selected group |
|   |   |
| SQL | `SELECT $DstCN, avg(evtlen) FROM FIREWALL GROUP BY $DstCN` |
| DQL | `Stream=firewall \| groupby dstcn \| select dstcn, avg (evtlen)` |
|   | Query all firewall events grouped by destination country to retrieve the   average value in each group |
