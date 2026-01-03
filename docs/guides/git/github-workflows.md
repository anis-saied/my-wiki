---
title: Github Workflows
slug: /guides/git/github-workflows
sidebar_position: 2
last_update:
  date: 2026-01-03
  author: Anis
---

# Github workflows

## github Actions CI/CD

Continuous Integration/Continuous Deployment (CI/CD) service like GitHub Actions

For more info visit **FTP-Deploy-Action** by *SamKirkland* : [GitHub Actions](https://github.com/SamKirkland/FTP-Deploy-Action)


steps:
1. create **Actions secrets**:

open this url : https://github.com/anis-saied/simple-shop/settings/secrets/actions
    
add 2 secrets actions :
        
- **FTP_USERNAME** (see the ftp login on https://www.ovh.com/manager/#/web/hosting/wzdhrfd.cluster029.hosting.ovh.net/ftp)
- **FTP_PASSWORD** (see password from /home/orca/Documents/data/projects-credentials.md)


2. Create a **Workflow File**: 
- In your GitHub repository, create a directory named .**github/workflows** if it doesn't exist already. 
- Then create a YAML file inside this directory, for example, **deploy.yml**. This file will define your workflow.
    
