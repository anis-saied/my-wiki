---
title: Mkdocs
slug: /guides/static-website/mkdocs
sidebar_position: 1
last_update:
  date: 2026-01-03
  author: Anis
---

# MkDocs SSG
Generate static web site using mkdocs (SSG) and github pages hosting

## Install requirments
```bash
pip install mkdocs-material
```


## Create a new repository from github
named : mkdocs-static-site
Add a README file

clone via Github for desktop : https://github.com/anis-saied/mkdocs-static-site.git


## create project

```bash
cd mkdocs-static-site/
mkdocs new .
```

## configure the project
* add theme (other theme , materials,...?)=>
* add to mkdocs.yml
-----------------
theme:
  name: material

## test the project
mkdocs serve =>http://127.0.0.1:8000/

## Automate the deployment        
mkdir -p .github/workflows
touch .github/workflows/ci.yml

add this content to ci.yml file

```yml
name: ci 
on:
  push:
    branches:
      - master 
      - main
permissions:
  contents: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-python@v4
        with:
          python-version: 3.x
      - run: echo "cache_id=$(date --utc '+%V')" >> $GITHUB_ENV 
      - uses: actions/cache@v3
        with:
          key: mkdocs-material-${{ env.cache_id }}
          path: .cache
          restore-keys: |
            mkdocs-material-
      - run: pip install mkdocs-material 
      - run: mkdocs gh-deploy --force
```

if you  use terminal
```bash
git init
curl -u anis-saied https://api.github.com/user/repos -d '{"name":"mkdocs-static-site"}'
git remote add origin https://github.com/anis-saied/mkdocs-static-site.git
```


## publish the code to the remoote repository
```bash
git push -u origin main
```
## prepare the remote gh-pages branch used by github pages
### Create a Local Branch:
```bash
git checkout -b --orphan gh-pages
```
make some changes to the new branch ceated to publish them to the remote repository

```bash
mkdocs build 
```

=> Building documentation to directory: 
`/home/orca/Documents/projects/mkdocs-static-site/site`
```bash
echo "site/" >> .gitignore
git add .
git commit -m 'first commit'
```

### Push the Local Branch to Remote
```bash
git push -u origin gh-pages
```

## configure the branch used to automate the deployment
* in https://github.com/anis-saied/mkdocs-static-site/settings
* in sidebar menu : Code and automation > pages
* choose the branch named  `gh-pages`

## rebuild the project on local
* return to the main branch
* execute 
```bash
mkdocs build 
git add .
git commit -m 'first build'
```
* push new changes to the remote main branch

## verify the result
Your GitHub Pages site is currently being built from the gh-pages branch
https://anis-saied.github.io/mkdocs-static-site/

## content

### add pages



### nav menu

*Note* : a section cannot have a page assigned to it. Sections are only containers for child pages and sub-sections. 

```yaml
nav:
  - Home: 'index.md'
  - 'User Guide':
    - 'Writing your docs': 'writing-your-docs.md'
    - 'Styling your docs': 'styling-your-docs.md'
  - About:
    - 'License': 'license.md'
    - 'Release Notes': 'release-notes.md'
```

*Note*:

Any pages not listed in your navigation configuration will still be rendered and included with the built site, however, they will not be linked from the global navigation and will not be included in the `previous` and `next` links. Such pages will be "hidden" unless linked to directly.

#### Linking to images and media

```yml
mkdocs.yml
docs/
    CNAME
    index.md
    about.md
    license.md
    img/
        screenshot.png
```

To include images in your documentation source files, simply use any of the regular Markdown image syntaxes:

```Markdown
Cupcake indexer is a snazzy new project for indexing small cakes.

![Screenshot](https://img/screenshot.png)

*Above: Cupcake indexer in progress*
```

Your image will now be embedded when you build the documentation, and should also be previewed if you're working on the documentation with a Markdown editor.

## themes

**Material for MkDocs**:

```bash
pip install mkdocs-material
```

**Read the Docs**:

```
pip install mkdocs-rtd-dropdown
```

**Bootstrap**:

```
pip install mkdocs-bootstrap
```

**Windmill**:

```
pip install mkdocs-windmill
```

**Stark**:

```
pip install mkdocs-stark
```

**Wind**:

```
pip install mkdocs-wind
```
