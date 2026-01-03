---
sidebar_position: 2
title: Create A Blog Post
slug: /guides/how-to-work-with-docusaurus/create-a-blog-post
last_update:
  date: 2026-01-03
  author: Anis
---

# Create a Blog Post

Docusaurus creates a **page for each blog post**, but also a **blog index page**, a **tag system**, an **RSS** feed...

## Create your first Post

Create a file at `blog/2021-02-28-greetings.md`:

```md title="blog/2021-02-28-greetings.md"
title: Create A Blog Post
slug: /tutorial-basics/create-a-blog-post
last_update:
  date: 2026-01-03
  author: Anis
---
slug: greetings
title: Greetings!
authors:
  - name: Joel Marcey
    title: Co-creator of Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus maintainer
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [greetings]
title: Create A Blog Post
slug: /tutorial-basics/create-a-blog-post
last_update:
  date: 2026-01-03
  author: Anis
---

Congratulations, you have made your first post!

Feel free to play around and edit this post as much as you like.
```

A new blog post is now available at [http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings).
