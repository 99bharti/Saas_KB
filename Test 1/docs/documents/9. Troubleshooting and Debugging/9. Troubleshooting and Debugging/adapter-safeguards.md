---
title: "Adapter Safeguards"
date: 2025-01-17
type: "epkb_post_type_1"
---

Safeguards play a vital role in the system to protect against any possible risks / disruptions.

DNIF has “Adapter Safeguards” that protects the Adapter from certain possible failures / dangers. They are listed as follows.

###### **EPS Governor**

  
EPS Governor helps to monitor the EPS reaching its max limit and take decisions on it to prevent any abnormal functioning of processes that can affect the overall operation of the Adapter.

###### **How it safeguards the Adapter?**

1. **EPS Governor** monitors the incoming EPS at the rate of per minute where the monitoring is performed on each of the log collectors.

3. EPS Governor consists of eps\_threshold where it measures the capacity of the EPS coming from all the log collectors as per the Adapter Hardware statistics.

5. Threshold can be defined as the limits or the maximum capacity that a system is able to sustain. The eps\_threshold is the value of the incoming maximum EPS that an Adapter has the capacity to hold.

7. Ideally, this eps\_ threshold is calculated internally and are set as per the capacity of the Adapter Hardware.

9. Once the eps\_threshold is reached, the EPS Governor checks for the events monitoring status. These event monitoring status checks for the iteration of events. There is a default value set to ‘n’ which acts as the threshold called events\_threshold.

11. The events\_threshold for iterations is also set internally by the EPS Governor, indicating that for the next ‘n’ iterations the events would be monitored.

13. If for the next ‘n’ iterations, the events threshold is reached, the EPS Governor will take the decision to drop the events meeting the thresholds at the Adapter level.

15. The ingestion does not get affected but after crossing the threshold, the EPS governor starts dropping off the events to prevent any failure of operations.

###### **EVTMEM Cache Limits**

  
EVTMEM is used to store the data in the form of a queue and transfer further for processing of those events. In case of any irregularities it takes decisions to prevent from abnormal functioning in the Adapter

###### **How it safeguards the Adapter?**

1. There is a mechanism for holding the data in the form of queues that stores the data for further processing and the queue is called as EVTMEM.

3. There is a possibility of pileup of the data in case it faces issues to transfer the data for further processing or in case of a high amount of data collection.

5. To prevent the pileup of the data and leading to abnormalities in functioning of the Adapter, a limit has been defined in the queue which is called max\_length that will hold a capacity to store the defined number of events in the queue.

7. The calculation is all performed internally and is based on the mount point configuration. The max\_length is measured from the mount point used in the deployment of DNIF tenant (previously known as cluster ) which is usually seen as /dnif.

9. The calculation for the queue is defined as 30% of the total disk present for the mount point which is used as the value to set the max\_length of the particular queue.

11. If the queue reaches the threshold set for max\_length and above, the EVTMEM will start dropping off the events to prevent any criticality faced on the Adapter.

13. The event is dropped to prevent the queue increasing in the EVTMEM which can thus hamper the operations on the Adapter.

###### **Datanode Transfer Cache limits**

  
On Adapter, the incoming data is parsed and enriched and the output received as data chunks are held in a transfer cache until written in the DataNode.

###### **How it safeguards the Adapter?**

1. Data is cached and saved on the Adapter before indexing on to the Datanode.

3. A threshold level is internally set by the system to define the maximum number of records to be stored in a folder.

5. If there is an increase of incoming data and the process is slowed down, the data is piled on Adapter disk.

7. To prevent this pilling of data on Adapter, it stops ingesting logs as soon as the threshold is met.

9. An alert message **DataNode transfer cache full, stopping ingestion** will be displayed under Notable Events indicating the threshold limit has been crossed and ingestion is stopped.
