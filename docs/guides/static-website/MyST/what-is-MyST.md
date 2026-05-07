
# MyST Markdown Guide

## What is MyST?

MyST (Markedly Structured Text) is a rich and extensible flavor of Markdown designed for technical and scientific documentation. It combines Markdown simplicity with reStructuredText power.

## Key Features

- **Markdown Syntax**: Familiar, easy-to-learn syntax
- **Roles & Directives**: Extended functionality for complex documents
- **Jupyter Integration**: Native support for notebooks and computational content
- **Cross-referencing**: Built-in citation and reference management
- **Flexible Output**: Export to HTML, PDF, and more

## Useful Links

- [MyST Documentation](https://myst-parser.readthedocs.io/)
- [MyST GitHub Repository](https://github.com/executablebooks/MyST-Parser)
- [Jupyter Book (MyST Integration)](https://jupyterbook.org/)
- [MyST Spec](https://spec.mystmd.org/)

## Static Site Generation
- Use **Jupyter Book** for integrated MyST publishing
- Deploy to GitHub Pages, Netlify, or Vercel
- Build with: `jupyter-book build .`

## Installation
```bash
pip install myst-parser
pip install jupyter-book
```

### Quick Start
```bash
jupyter-book create my-book
jupyter-book build my-book
```

## Deployment
### deploy on read the docs
- [https://docs.readthedocs.com/platform/stable/intro/mystmd.html](https://docs.readthedocs.com/platform/stable/intro/mystmd.html)