---
title: Vue Axios
slug: /dev/vue/vue-axios
sidebar_position: 1
last_update:
  date: 2026-01-03
  author: Anis
---

# Vue axios

## install 

```bash
npm install axios
```

## configuration
Add `axios` as **global property** in a vue js app in the `main.js` file :

```js
import axios from "./axios";
app.config.globalProperties.$axios = axios;
```

To configure `axios`, create `axios.js` file in `/src` folder containing :

```js
import axios from "axios";

axios.defaults.baseURL = "http://localhost/<app-name>/api";

export default axios;
```
if your *php* application served with ths webserver :
- **xampp**: `<app-name>` is the folder name in `/opt/lampp/htdocs`

Example : `/opt/lampp/htdocs/portfolio` , the `<app-name>` is `portfolio`

- **httpd**: `<app-name>` is the folder name in `/var/www/html`

Example : `/var/www/html/portfolio` , the `<app-name>` is `portfolio`
