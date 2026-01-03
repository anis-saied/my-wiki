---
title: Vue Create App
slug: /dev/vue/vue-create-app
sidebar_position: 4
last_update:
  date: 2026-01-03
  author: Anis
---

# Create a Vue app

[Official guide](https://vuejs.org/guide/quick-start)

## Requirements

### IDE & plugins

The recommended IDE setup is **VSCode** + the Vue Language Features (**Volar**) 

### Github for desktop

useful to synchronize the local and remote repositories

## Install Node.js, npm and Vue js:

1. install Node.js and npm:

This will install both Node.js and npm.
```bash
sudo dnf install -y nodejs
# Verify the installation
node -v
npm -v
```

2. **install vue js**

```bash
npm cache clean --force
npm install -g vue @vue/cli #or npm update -g vue @vue/cli
vue --version
```
More info : [How to install Vue CLI](https://cli.vuejs.org/guide/installation.html)

## Create a New Vue.js App
3. **create the vue app**
if you have cloned a github repository, pass to the next step.

```bash

```

4. **install dependencies**
Once the project is created, 
follow the instructions to install dependencies 
```bash
cd my-app
sudo npm install
```

4. **start the dev server** and **run the vue app**

```bash
sudo npm run format
sudo npm run dev
```


## Create a New Vue.js App:

### Preset the default configuration

create a `vue-preset.json` file containing the default configuration in

 `~/Documents/projects/vue-app-template`\:

```json
{
  "useConfigFiles": true,
  "vueVersion": "3",
  "cssPreprocessor": "sass",
  "plugins": {
    "@vue/cli-plugin-babel": {},
    "@vue/cli-plugin-eslint": {
      "config": "prettier",
      "lintOn": ["save", "commit"]
    },
    "@vue/cli-plugin-router": {  
    	"historyMode": true
    	},
    "@vue/cli-plugin-vuex": {}
  }
}
```

More info : [Vue CLI Presets](https://cli.vuejs.org/guide/plugins-and-presets.html#presets)

### create the project

1. First, create a new Vue.js app using the Vue CLI:

   ```bash
   chmod -R 755 ~/Documents/projects
   cd ~/Documents/projects
   vue create vue-ecommerce-frontend-template --preset ~/Documents/projects/vue-app-template/vue-preset.json
   ```



This command will prompt you to choose a preset for your Vue.js app. 
The presets include configurations for features like Babel, ESLint, Vue Router, Vuex, etc. 
You can select the default preset or manually select features based on your project's needs.

NOTE : choose 

* class-style component syntax
* (select) all features of vue 3: TypeScript, Vue rooter, 
* select:
  * version of vue js : **3.x**
  * use **Babel alongside typescript**
  * use **history mode**  for rooter
  * pre-processor : **sass/scss**
  * Pick a linter / Autoformatter : **ESLint + Prettier **
  * E2E testing tool : **Cypress**

2. create a folder for the vue js named **app** inside the the folder  **vue-ecommerce-frontend-template** 

   and configure the application before staring the development

   ```bash
   mkdir -p ~/Documents/projects/vue-ecommerce-frontend-template/app
   # change the persmissions of the local folder (so the npm can add, edit and delete files into this folder)
   chmod -R 755 ~/Documents/projects/vue-ecommerce-frontend-template
   ```

   This configuration ensures that you, as the owner, have full control over your projects and can read, write, and execute any scripts or files. The group and others have read and execute permissions, which allows them to access and execute files but not modify them.

   **NOTE**

   If the permissions of the files and directories in your **vue-ecommerce-frontend-template** directory are currently owned by the root user, you should change ownership back to your own user.

   `sudo chown -R $USER:$USER ~/Documents/projects/vue-ecommerce-frontend-template`

   Note : with this command you can execute the rest of commands without using **sudo**

3. move all files 
   from **vue-ecommerce-frontend-template**  
   to **vue-ecommerce-frontend-template/app**  
   except the following files: 

   * **.git**, 

   * **README.md** 

   * **.gitignore**

   ```bash
   cd ~/Documents/projects/vue-ecommerce-frontend-template
   for file in *; do
       if [ "$file" != ".git" ] && [ "$file" != "README.md" ] && [ "$file" != ".gitignore" ] && [ "$file" != "app" ]; then
           mv -v "$file" "./app/$file"
       fi
   done
   
   # Move specific files (all others files not moved) to the root app directory
   mv -v .browserslistrc .eslintrc.js "./app/"
   ```



## Configure the packages to use

you can create a file to list all the dependencies your Vue.js app needs, and then use that file to automatically install the dependencies when running npm run serve, npm run build, or during the execution of your GitHub Actions workflow.

### steps 

Here's a general approach you can take:

1. Create a **package-list.txt** File:

   ```bash
   cd ~/Documents/projects/vue-ecommerce-frontend-template/app
   touch package-list.txt
   ```

   

Create a file named **package-list.txt** (or any other name you prefer) in the root directory of your Vue.js project (/app). 
In this file, list all the npm packages your app needs, one package per line. For example:

```tex
axios
vue-router
vuex
```

... other dependencies

2. Modify **package.json** Scripts:

In your package.json file, modify the scripts section to include a new script that reads the package-list.txt file and installs the listed packages using npm.

```bash
"scripts": {
    "install-deps": "xargs -a package-list.txt npm install",
    "serve": "npm run install-deps && vue-cli-service serve",
    "build": "npm run install-deps && vue-cli-service build",
    "lint": "vue-cli-service lint"
    // ... other scripts
},
```



In the above script, xargs reads the lines from package-list.txt and passes them as arguments to npm install.

### Test if all works

before beginning the development, check if all works locally perfectly

`cd ~/Documents/projects/vue-ecommerce-frontend-template/app`

Starting development server (with sudo):
`npm run serve`


More info:
- How tu use [create vue](https://github.com/vuejs/create-vue)

## Repository



### Local Git Repository

configure local Git manually

```bash
cd ~/Documents/projects/vue-ecommerce-frontend-template
git add .
git commit -m 'Initial commit'
git config --global --add safe.directory /home/orca/Documents/projects/vue-ecommerce-frontend-template

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
curl -u anis-saied https://api.github.com/user/repos -d '{"name":"vue-ecommerce-frontend-template", "private": true}'

```

### Link Local Repository to Remote:

Run the following commands in your local repository's terminal:

```bash
# Replace <username> with your GitHub username
# Replace <repository> with your repository name
#git remote add origin https://github.com/<username>/<repository>.git
#vue-ecommerce-frontend-template
git remote add origin https://github.com/anis-saied/vue-ecommerce-frontend-template.git
```

### Push Local Repository to GitHub

* Make sure all your changes are committed using `git commit`.

* Run the following command to push your code to the GitHub repository's main branch (usually main  or master ):

```
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

`git remote add origin https://github.com/anis-saied/ipei.tn.git
git branch -M main`

`git push --set-upstream origin main
git push -u origin main`

# CI/CD 
set up a CI/CD workflow using GitHub Actions to build and deploy a Vue.js app

## Create GitHub Actions Workflow:
Create a `.github/workflows` directory in the root of your project

```bash
mkdir -pv ~/Documents/projects/vue-ecommerce-frontend-template/.github/workflows
```

The -p flag ensures that parent directories are created if they don't exist.

## Create a workflow file

```bash
touch ~/Documents/projects/vue-ecommerce-frontend-template/.github/workflows/ci-cd.yml
```

note:

GitHub Actions uses its own environment to run the workflows, and it doesn't require write permissions on the workflow configuration file.
The permissions -rw-rw-r-- on the ci-cd.yml file are appropriate for a configuration file and should not cause problems when GitHub Actions executes the jobs defined within it.

**ci-cd.yml**
Here's a simple example to get you started:

name: CI/CD Workflow

```bash
on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: 14
          
      - name: Install dependencies
        run: npm run install-deps
        
      - name: Install dependencies and build Vue.js app
        run: |
          cd app  # Navigate to the Vue.js app directory within the repository
          npm install
          npm run build

      - name: Install lftp
        run: sudo apt-get update && sudo apt-get install -y lftp

      - name: Deploy to OVH using deploy.sh
        run: |
          chmod +x deploy.sh
          ./deploy.sh
```

# WebServer Configuration

## htaccess

Create the **.htaccess** file to configure apache inside ~/Documents/projects/ipei.tn/app folder

```bash
touch ~/Documents/projects/vue-ecommerce-frontend-template/app/.htaccess
```

Add this rules :

```bash
RewriteEngine On

# Rediriger toutes les requêtes vers HTTPS

RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Rediriger toutes les requêtes non existantes vers Vue.js

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !^/api [NC]
RewriteRule ^ index.html [L]
```




# Deployment script

create a **deploy.sh** file for your deployment script in the repository root 

```bash
touch ~/Documents/projects/vue-ecommerce-frontend-template/delpoy.sh
chmod +x deploy.sh
```

Add this deployment script into `delpoy.sh`

```bash
#!/bin/bash

HOST="ftp.cluster029.hosting.ovh.net"
USER="mwkybwo"
PASS="MyNewPass25"  # Replace with your FTP password
REMOTE_DIR="/www"   # Replace with your remote directory
LOCAL_DIR="./app/dist"   # Replace with the path to your local app directory

lftp -c "open -u $USER,$PASS $HOST; mirror -R --exclude-glob .git* --exclude .git/ $LOCAL_DIR $REMOTE_DIR --delete --parallel=2"
```

# First build

```bash
cd ~/Documents/projects/vue-ecommerce-frontend-template/app
npm run build
```

this step to create the dist folder inside cd ~/Documents/projects/ipei.tn/app




# First deployment test
## Commit and Push

Commit your changes and push both your Vue.js app code and the workflow file to the repository:

```bash
cd ~/Documents/projects/vue-ecommerce-frontend-template
git add .
git commit -m "Initial deploy"
git push -u origin main
```


## Test the Workflow:

- Push some changes to your repository's main branch to trigger the workflow. 
- You can monitor the progress and logs in the "Actions" tab on your GitHub repository.


# Project tree
orca@orca-pc:~/Documents/projects/ipei.tn$ tree -aL 2 
.
├── app
│   ├── babel.config.js
│   ├── dist
│   │   ├── css
│   │   │   └── app.2cf79ad6.css
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   └── js
│   │       ├── app.4fc17852.js
│   │       ├── app.4fc17852.js.map
│   │       ├── chunk-vendors.085dbafa.js
│   │       └── chunk-vendors.085dbafa.js.map
│   ├── .htaccess
│   ├── jsconfig.json
│   ├── node_modules
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── favicon.ico
│   │   └── index.html
│   ├── src
│   └── vue.config.js
├── deploy.sh
├── .git
│   ├── branches
│   ├── COMMIT_EDITMSG
│   ├── config
│   ├── description
│   ├── FETCH_HEAD
│   ├── HEAD
│   ├── hooks
│   ├── index
│   ├── info
│   ├── logs
│   ├── objects
│   ├── ORIG_HEAD
│   ├── packed-refs
│   └── refs
├── .gitattributes
├── .github
│   └── workflows
│   	└── ci-cd.yml
├── .gitignore
└── README.md

## Running Locally:

When you run **npm run serve** or **npm run build**, the newly added script (install-deps) will install the dependencies listed in **package-list.txt** if they are not already installed.

##GitHub Actions Workflow:

In your GitHub Actions workflow (.github/workflows/ci-cd.yml), make sure to include a step to run the npm run install-deps script before running any other steps related to building, testing, or deploying your Vue.js app.

`
    jobs:
      build-and-deploy:
        runs-on: ubuntu-latest

        steps:
          - name: Checkout code
            uses: actions/checkout@v2
    
          - name: Set up Node.js
            uses: actions/setup-node@v2
            with:
              node-version: 14
    
          - name: Install dependencies
            run: npm run install-deps
    
          # ... continue with other steps like building and deploying
`
This approach allows you to maintain a separate list of dependencies and ensures that the required dependencies are installed automatically whenever you run npm run serve, npm run build, or during your GitHub Actions workflow.
