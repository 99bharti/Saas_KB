---
title: "Workbooks"
date: 2025-01-20
type: "epkb_post_type_1"
---

Workbooks can be used to process information for investigations, auto-detection and profiling using various blocks such as Search, DQL, Code, Text, and Visual etc. You can identify or investigate events or observations that raise a suspicion and can also automate these queries to run at an interval or on demand as per requirement.

- Workbooks are an elegant way to run jobs without the hassle of writing the same queries repeatedly.

- A single workbook can have multiple blocks and these multiple blocks will be automatically executed one after the other. A workbook with multiple blocks will be considered as a single use case.

- A workbook with multiple queries can be saved and used as an input for another workbook. i.e. you can call a workbook from another workbook.

- The workbook comprises of the following blocks:
    - **DQL Block**: Used to manually write DQL queries, multiple DQL Blocks can be added in a Workbook.
    
    - **Search Block**: Used to build DQL queries by selecting the predefined directives, filters, functions etc
    
    - **SQL Block**: Used to manually write queries in SQL.
    
    - **Code Block**: You can write a python code to manipulate the data and generate a new output using python.
    
    - **AI Block**: To accelerate and automate the process of identifying a potential threat by adding the identified incident as a signal.
    
    - **Visualization Block**: The visualization block will display the result of the queries executed in a graph or chart format.
    
    - **Text Block**: Used to write descriptions, steps, use cases for the workbook that helps you to understand everything about workbook  
        The editor supports markdown format.
    
    - **Signal Block**: Signals are triggered via Workbooks i.e. as per the logic set in its query. On executing a query via workbook and if there are any threat related data such as types of attacks etc, a signal will be triggered.

Workbooks can be scheduled on an on-demand basis or streamed at a definite interval as per requirement.
