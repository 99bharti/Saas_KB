---
title: "Case Lifecycle"
date: 2025-01-23
type: "epkb_post_type_1"
---

A case in DNIF is a structured unit used to manage and resolve security incidents. It serves as a container for signals and context related to a specific incident or group of related events. By organizing these details in one place, cases streamline the incident response process and facilitate collaboration among security teams.   

The lifecycle of a case in DNIF describes the stages it undergoes from creation to closure. Managing this lifecycle effectively is critical for ensuring timely and effective incident resolution. Each stage is described below.

1. Case Creation:  
    Users can create a Case from the Signals page. On the Signal listing page, they can add one or more Signals to a new Case. The newly created Case has an **Open** status, and no handler is assigned by default. The Time to Respond (TTR) for the Case begins when it is opened for the first time. If a Case is reopened from the **Closed** status, the TTR calculation resumes from where it left off.  
    Permissible transitions of a Case from **Open** status:  
    \-  In-Progress  
    \- On-Hold  
    \- Closed  
    
<video width="100%" height="auto" controls>
  <source src="/videos/Screen Recording 2025-03-11 183142.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>  

3. Case In-Progress:  
    Users can change the status of a Case to **In-Progress** either from **Open** or **On-Hold** if the Case is being actively worked on. Assigning a Handler is mandatory to move a Case to the **In-Progress** status. When the status changes from **Open** to **In-Progress**, the Time to Respond (TTR) calculation remains unaffected. However, if the status changes from **On-Hold** to **In-Progress**, the TTR calculation resumes.  
    Permissible transitions of a Case from **In-Progress** status:  
    \- On-Hold  
    \- Closed  
    

5. Case On-Hold:  
    Users can move the status of a case from **Open** or **In-Progress** to **On-Hold** if the case is not being actively worked upon. The Time to Respond (TTR) calculation is paused in this status.  
    Permissible  transitions of a Case from **On-Hold** status:  
    \- In-Progress  
    \- Closed  
    

7. Case Closed:  
    Users can change the status of a Case to **Closed** from **Open**, **In-Progress**, or **On-Hold** to officially mark the Case as resolved. The Time to Respond (TTR) calculation stops when the Case is moved to the **Closed** status.  
    Permissible transitions of a Case from **Closed** status.  
    \- Open

**Note:** In DNIF, users must have a **Security Engineer** or **Security Analyst** role to create, access, and perform actions on cases.
