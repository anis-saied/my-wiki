---
title: minted
slug: /research/writing/tex/minted
sidebar_position: 5
last_update:
  date: 2026-02-05
  author: Anis
---

# minted

The `minted` package is a powerful tool for including syntax-highlighted code listings in LaTeX documents. It leverages the Pygments library to provide support for a wide range of programming languages and styles.

## Features of minted

- **Syntax Highlighting**: Supports over 300 programming languages and text formats.
- **Customizable Styles**: Offers various styles for code highlighting, allowing users to choose the one that best fits their document's aesthetics.
- **Line Numbering**: Can add line numbers to code listings for better reference.
- **Code Blocks and Inline Code**: Supports both block-level and inline code highlighting.
- **Error Handling**: Provides options to handle errors gracefully during code highlighting.
- **Integration with LaTeX**: Works seamlessly with LaTeX documents, making it easy to include code snippets.
- **Flexibility**: Allows customization of various aspects such as font size, background color, and more.
- **External File Inclusion**: Can include code directly from external files.
- **Escape to LaTeX**: Allows embedding LaTeX commands within code listings.
- **Line Highlighting**: Can highlight specific lines within a code block for emphasis.
- **Automatic Line Breaking**: Supports automatic line breaking for long lines of code.
- **Custom Commands**: Users can define custom commands for frequently used code styles or settings.
- **Compatibility**: Works well with other LaTeX packages and classes.
- **Documentation**: Comprehensive documentation is available to help users get started and explore advanced features.
- **Active Community**: A large user base and community support for troubleshooting and sharing tips.
- **Open Source**: The package is open source, allowing users to contribute and improve it.
- **Regular Updates**: The package is actively maintained, with regular updates to support new languages and features.

## Basic Usage

To use the `minted` package, you need to include it in the preamble of your LaTeX document and specify the programming language for syntax highlighting. Here is a simple example:

```latex
\documentclass{article}
\usepackage{minted}
\begin{document}
\begin{minted}{python}
def hello_world():
    print("Hello, World!")
\end{minted}
\end{document}
```

## Requirements

To use the `minted` package, you need to have Python and the Pygments library installed on your system. You can install Pygments using pip:

```bash
pip install Pygments
```

:::info
Code dans Beamer --> Nécessite `fragile`

Tes frames avec code doivent simplement être : `\begin{frame}[fragile]{Titre}`
:::

When using `minted` within a Beamer presentation, you need to add the `fragile` option to the `frame` environment to handle special characters properly. Here is an example:

```latex
\begin{frame}[fragile]
\begin{minted}{python}
def hello_world():
    print("Hello, World!")
\end{minted}
\end{frame}
```

## compile tex files with minted

When compiling a LaTeX document that uses the `minted` package, you need to enable shell escape (also known as write18) to allow LaTeX to execute external programs. You can do this by adding the `-shell-escape` flag when compiling your document. For example, if you are using `pdflatex`, you would run:
:::info
Minted exige l’option `-shell-escape`.
:::

```bash
pdflatex -shell-escape your_document.tex
```

ou dans Overleaf :

`Menu → Settings → Compiler → ☑ Enable shell escape`

Sans ça, minted plantera, même si le reste est correct.

## Documentation

For more detailed information and advanced usage, refer to the official `minted` documentation: [CTAN minted package](https://ctan.org/pkg/minted)

## Common Options

Here are some commonly used options for the `minted` package:  
| Option | Description |
| :------------- | :----------------------------------------------------- |
| `fontsize` | Sets the font size for the code block. |
| `linenos` | Enables line numbering in the code block. |
| `bgcolor` | Sets the background color for the code block. |
| `frame` | Adds a frame around the code block. |
| `escapeinside` | Allows embedding LaTeX commands within the code block. |
| `highlightlines` | Highlights specific lines in the code block. |
| `breaklines` | Enables automatic line breaking for long lines of code.|

## Advanced Usage

The `minted` package offers various advanced features for customizing code listings. Here are some examples

### Including Code from External Files

You can include code directly from an external file using the `\inputminted` command:

```latex
\inputminted{python}{path/to/your/code.py}
```

### Customizing Styles

You can customize the style of the code highlighting by specifying a style option:

```latex
\begin{minted}[style=monokai]{python}
def hello_world():
    print("Hello, World!")
\end{minted}
```

### Highlighting Specific Lines

You can highlight specific lines in a code block using the `highlightlines` option:

```latex
\begin{minted}[highlightlines={2,4}]{python}
def hello_world():
    print("Hello, World!")
    return True
\end{minted}
```

### Escaping to LaTeX

You can embed LaTeX commands within a code block using the `escapeinside` option:

```latex
\begin{minted}[escapeinside=@@]{python}
def hello_world():
    print("Hello, World!")  # This will be in \textbf{bold}
\end{minted}
```

### Customize Minted Environments

You can define custom commands for frequently used settings:

```latex
\newminted{python}{fontsize=\small, linenos, frame=lines}
```

:::info
La commande `\newminted{python}{...}` crée un environnement nommé `pythoncode` (car Minted ajoute par défaut le suffixe **code** si vous utilisez cette syntaxe)
:::

Then use it as:

```latex
\begin{pythoncode}
def hello_world():
    print("Hello, World!")
\end{pythoncode}
```

:::warning
Définir un style ≠ définir un environnement.
:::

Minted fournit par défaut :

- `\begin{minted}{sql}`
- `\mintinline{sql}{...}`

👉 `sqlcode` n’existe pas tant que tu ne l’as pas créé explicitement.

donc, soit on écrite

```tex
\begin{minted}{sql}
\end{minted}
```

ou bien

```tex
\newenvironment{sqlcode}
{\VerbatimEnvironment\begin{minted}{sql}}
{\end{minted}}

\newminted{sql}{...} % crée sqlcode
\begin{sqlcode}
\end{sqlcode}
```

:::info
Centraliser Minted (propre)

- Ajoute ceci une seule fois,

```latex
\setminted{
	breaklines=true,
	autogobble=true
}
```

- Puis surcharge par langage si besoin

```latex
\setminted[python]{fontsize=\small}
\setminted[sql]{fontsize=\footnotesize,linenos}
```

:::

## gnore les espaces d'indentation

Pour que LaTeX ignore les espaces d'indentation que vous mettez dans votre fichier .tex afin d'aligner le code avec vos balises, l'option magique est `autogobbl`

```latex
\usepackage[autogobble]{minted}
```

### Sécurité Beamer + Minted (important)

Ajoute en haut du config :

```latex
\usepackage{etoolbox}
\makeatletter
\patchcmd{\beamer@frame}
  {\@tempswafalse}
  {\@tempswatrue}
  {}{}
\makeatother
```

👉 Évite certains bugs subtils avec minted + overlays.

## Conclusion

The `minted` package is a versatile and powerful tool for including syntax-highlighted code listings in LaTeX documents. Its extensive features and customization options make it suitable for a wide range of applications, from academic papers to technical documentation. With its active community and comprehensive documentation, users can easily get started and explore its capabilities.
