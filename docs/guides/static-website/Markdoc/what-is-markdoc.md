
# What is Markdoc?

Markdoc is a powerful markdown-based syntax for creating flexible documentation and content. It extends standard markdown with custom components, variables, and configuration options.

## Key Features

- **Component-driven**: Build reusable content blocks with custom components
- **Variables and expressions**: Embed dynamic content using `{% %}`
- **Type safety**: Define schemas for your content
- **Framework agnostic**: Works with any static site generator or framework
- **Extensible**: Create custom tags and functions


## Useful Resources

- [Official Markdoc Documentation](https://markdoc.dev)
- [Markdoc GitHub Repository](https://github.com/markdoc/markdoc)
- [Markdoc Examples](https://markdoc.dev/docs/examples)
- [Community Discussions](https://github.com/markdoc/markdoc/discussions)
- [Markdoc npm Package](https://www.npmjs.com/package/@markdoc/markdoc)


## Core Concepts

### Tags
Custom HTML-like elements that extend markdown functionality:
```js
{% callout type="info" %}
This is a callout component
{% /callout %}
```

### Variables
Insert dynamic content into your documents:
```js
{% variable_name %}
```

### Functions
Perform logic and transformations:
```js
{% if condition %}
Content here
{% /if %}
```

## Use Cases

- Technical documentation
- Knowledge bases
- Content management systems
- Static site generation
- API documentation

## Getting Started

Markdoc integrates seamlessly with modern development workflows and provides excellent developer experience through validation and IDE support.


