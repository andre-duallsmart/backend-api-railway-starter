---
title: Broncar Directus Railway Starter
description: A one-click-install Directus instance using remote PostgreSQL. Always install lastest version know of Directus.
tags:
  - javascript
  - directus
  - cms
  - postgreSQL
---

# Broncar Directus Railway Starter

This example runs a [Directus](https://directus.io/) instance with  config for external PostgreSQL.


## ✨ Features

- Directus
- remote PostgreSQL config
- Javascript

## 💁‍♀️ How to use

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/urNtot?referralCode=uZqPOi)

- Add the .env vars on template (you can add more vars when the app is deployed).
- Let railway deploy your service, grab the generated domain from the service settings.
- Login in the panel using the defined ADMIN_EMAIL and ADMIN_PASSWORD used in .env vars

## 📝 Notes

- This is a minimal one-click-deploy solution to Directus, see [Directus docs](https://docs.directus.io/getting-started/introduction.html) to config it to your needs.

- Re deploys won't erase your db data since according to Directus docs `Directus will use an existing .env file (or existing environment variables) to either install the database (if it's empty) or migrate it to the latest version (if it already exists and has missing migrations).` but be careful!