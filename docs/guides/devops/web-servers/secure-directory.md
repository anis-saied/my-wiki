---
title: Secure Directory
slug: /guides/devops/web-servers/secure-directory
sidebar_position: 2
last_update:
  date: 2026-01-03
  author: Anis
---

# Secure a website directory

create a directory named *includes* inside your website: 
- This directory contains files that are not directly accessible from the URL. 
- It includes *config.json*, *footer.php*, and *header.php*.

## make this directory private
### Unsing `.htaccess`
If you're using Apache web server, you can create an `.htaccess` file in the *includes* directory with the following content:
```bash
# Deny all requests to this directory
Deny from all
```
This will deny access to the directory and its contents via the web server.


### Using **empty** `index.php` file
You can place an empty `index.php` file in the includes directory. 
            
If someone tries to access the directory directly, they will see a blank page because PHP will execute the empty index.php file instead of showing the directory contents.
