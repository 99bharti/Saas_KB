---
title: "DNIF Entities"
date: 2025-01-20
type: "epkb_post_type_1"
---

## **Definitions and meanings of DNIF entities.**

**Organization -** An Organization represents a real-world entity in DNIF.

**User -** Users are individuals granted access to DNIF. Users belong to exactly one Organization.

**Organization Administrator -** User with elevated privileges in an Organization. They manage user life cycle tasks such as creation, editing, deletion, enabling, disabling, password resets and MFA settings. There can be multiple administrators within a single organization for distributed management or redundancy purposes.

**Tenant** \- Tenants are DNIF installations for customers, managed by either a Customer or a DNIF Partner. Each Tenant has one Primary Organization (customer or partner) and zero or more Secondary Organizations. 

**Tenant Administrator** - A tenant administrator manages a tenant’s user access, including adding/removing users and granting/revoking role-based access to users. Multiple tenant administrators can exist for a tenant, all belonging to the primary organization.

**Tenant User** - A tenant user is anyone granted access to the tenant. Tenant users are assigned roles for specific access to the tenant. They belong to either primary or secondary organizations of the tenant.

**Scope** - A scope is a data silo, that enables segregation of dataset, users, workbooks (detection, playbooks, processors), dashboards and reports.
