---
title: "Two - Factor Authentication (2FA)"
date: 2025-01-20
type: "epkb_post_type_1"
---

Two-Factor Authentication, adds an extra layer of protection to your system and intranet/extranet login. With MFA, your password alone is no longer enough to access your system, it has dramatically improved the security of your personal information you store in the system. You can enable the MFA feature, which mandates the personnel to enter an additional passcode (Time-based One-Time Password (TOTP) after entering the login password. So, even if an unauthorized person knows the system credentials, the MFA feature secures an account against unauthorized logins.

DNIF uses Time-based OTPs for Two-Factor Authentication (2FA), you will require an Authenticator Application.

## **Prerequisites**

- Configure SMTP on DNIF Console

- Authenticator Application

## **Recommended Applications**

- Google Authenticator

- Microsoft Authenticator

- Authenticator Chrome Extension

## **How to enable Two-Factor Authentication (2FA)?**

- Navigate to **Administration Panel** > **Organizations**, the following screen will be displayed.

![image 1-Dec-08-2023-10-08-57-4706-AM](./img/Two%20–%20Factor-1.jpg)

- In order to enable Two-Factor Authentication (2FA) for an organization, toggle on the 2FA status for that organization.

![image 2-Dec-08-2023-10-09-08-7268-AM](./img/Two%20–%20Factor-2.jpg)

- As the Two-Factor Authentication (2FA) is enabled for an organization, all the users will receive an email bearing the secret required to configure the Authenticator App.

- Once the Two-Factor Authentication (2FA) is enabled all the users will have to provide an OTP in addition to the email address and password for Authentication.

## **Reset Two-Factor Authentication (2FA)**

- In order to reset the Two-Factor Authentication (2FA) for a user, Navigate to **Administration Panel** **\>** **Manage Users**, the following screen will be displayed.

![image 3-Dec-08-2023-10-09-21-6638-AM](./img/Two%20–%20Factor-3.jpg)

- Select the user for which you want to reset Two-Factor Authentication (2FA) and click **Reset 2FA**.

![image 4-Dec-08-2023-10-09-36-0543-AM](./img/Two%20–%20Factor-4.jpg)

- An email will be sent to the user bearing the secret required to re-configure the Authenticator Application.
