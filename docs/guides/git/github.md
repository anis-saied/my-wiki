---
title: Github
slug: /guides/git/github
sidebar_position: 1
last_update:
  date: 2026-01-03
  author: Anis
---

# GitHub

## my Github info
- all data : https://api.github.com/users/anis-saied/repos
- My Git hub id: 69865343
- avatar: https://avatars1.githubusercontent.com/u/69865343?s=460&v=4
- [Writing on GitHub](https://docs.github.com/en/get-started/writing-on-github)

## Tools

### Github for desktop

useful to synchronize the local and remote repositories


## Repository

## Create local git repository

```bash
echo "# <repository-name>" >> README.md
git init # create default branch name : master
git branch -m main # rename master to main
git add .
git commit -m 'Initial commit'
```

*Note* : To configure the initial branch name to use in all of your new repositories

```bash
git config --global init.defaultBranch <name>
```

## Configure Git

configure local Git manually

```bash
git config --global --add safe.directory /home/orca/Documents/projects/my-project

# Rename production branch from master to main
git branch -m master main

#Author identity 
git config --global user.email "anissaied2@gmail.com"
git config --global user.name "Anis SAIED"
```

**Configure Git to Use you Personal Access Token on GitHub**

- Log in to your GitHub account.
- Go to "Settings" > "Developer settings" > "Personal access tokens".
- Click "Generate new token" and follow the prompts to give the token the necessary permissions. Make sure to select the appropriate scopes based on what you'll be doing with the token (e.g., repo access, user access, etc.).
- Once the token is generated, copy it. Note that you won't be able to see it again, so make sure to store it securely.
- Open your terminal and run the following command, replacing `<your-token>` with the access token you generated:

```bash
git config --global credential.helper store
```

- After setting up the credential helper, the first time you perform a Git action that requires authentication (like pushing to or pulling from a remote repository), Git will prompt you to enter your GitHub username and password.
- Enter your GitHub username and use the personal access token as the password.
- **Automatic Authentication:**
  - Once you've entered your credentials, Git will store them locally so you won't need to re-enter them for a while.
  - When you perform Git actions that require authentication, Git will automatically use the stored credentials.

## Remote Git Repository
### Create a remote GitHub Repository

To create a new private remote repository on GitHub. Replace `<repository>` with your desired repository name:

```bash
# Replace <username> with your GitHub username
# Replace <repository> with your desired repository name
#curl -u <username> https://api.github.com/user/repos -d '{"name":"<repository>", "private": true}'
curl -u anis-saied https://api.github.com/user/repos -d '{"name":"<repository-name>", "private": true}'

```

### Link Local Repository to Remote:

Run the following commands in your local repository's terminal:

```bash
# Replace <username> with your GitHub username
# Replace <repository> with your repository name
#git remote add origin https://github.com/<username>/<repository>.git
#<repository-name>
git remote add origin https://github.com/anis-saied/<repository-name>.git
```

### Push Local Repository to GitHub

* Make sure all your changes are committed using `git commit`.

* Run the following command to push your code to the GitHub repository's main branch (usually main  or master ):

```bash
git push -u origin main
```

The `-u` flag sets the upstream branch for future pushes.

**Enter GitHub Credentials:**

- If prompted, provide your GitHub username and password. 
- Alternatively, you can use a personal access token for authentication.

**Verify the Push:**

- After the push is successful, go to your GitHub repository's page in your web browser to see your code and changes.

**Note**

1. you can use **Github for desktop** tool to add this remote repository to the local repository

2. You  can create a new repository on GitHub for your Vue.js app. You can do this through the GitHub web interface. then link your local Git repository to the GitHub repository you created

```bash
git remote add origin https://github.com/anis-saied/ipei.tn.git
git branch -M main
git push --set-upstream origin main
git push -u origin main
```
