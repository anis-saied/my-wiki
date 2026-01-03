---
sidebar_position: 1
title: Apache Httpd
slug: /guides/devops/web-servers/apache-httpd
last_update:
  date: 2026-01-03
  author: Anis
---

# Apache httpd 

official documentation: 
https://httpd.apache.org/docs/2.4/install.html

## installation
### install httpd on fedora
- intall httpd
```
sudo dnf install httpd
sudo systemctl enable httpd
sudo systemctl start httpd
```
- install related modules
this instllation require php some others dependencies

```
sudo dnf install php
sudo dnf install php-mysqlnd php-fpm
```
- change the  **change Ownership and Permissions**  for `/var/www/html` and all their nested content
```
sudo chown -R apache:apache /var/www/html
sudo chmod -R 755 /var/www/html
```
## Deployment
### Deploy php website on fedora
1. The php project `my-website` must be deployed on `/var/www/html` directory

2. this directory by default is restricted, **change Ownership and Permissions** (if necessary):

```
sudo chown -R apache:apache /var/www/html/my-website
sudo chmod -R 755 /var/www/html/my-website
```

3. **Configure the access to this project by httpd**

Update the `SELinux Context`. If SELinux is enabled, it can restrict access to files even if the permissions are set correctly. To check and set the SELinux context for the directory, run:
```
sudo chcon -R -t httpd_sys_content_t /var/www/html/my-website
```

4. **Restart Apache**

After making changes to the configuration files, restart the Apache server to apply the changes:
```
sudo systemctl restart httpd
```

5. Check if the project is accessible on `http://localhost/my-website`. 

Add an `my-website/index.php`

```html
<!DOCTYPE html>
<html>
<head>
    <title>Test</title>
</head>
<body>
    <?php
    echo 'test';
    ?>
</body>
</html>
```
