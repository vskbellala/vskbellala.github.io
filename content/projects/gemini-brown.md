---
title: "Brown University Gemini Theme"
date: 2022-07-25T16:30:44-04:00
draft: false
images: ["https://raw.githubusercontent.com/vskbellala/gemini-brown/main/samples/brown_poster.png"]
alt: ""
noshow: true
---
{{<github "vskbellala/gemini-brown">}}

[Brown University](https://www.brown.edu/) color scheme for [Gemini](https://github.com/anishathalye/gemini) LaTeX beamerposter theme.
<!--more-->

- Colors extracted from [Brown University Visual Identity](https://www.brown.edu/university-identity/university-identity/visual-identity)
- `beamercolorthemebrown.sty` - standard scheme with brown headings
- `beamercolorthemebrownminimal.sty` - minimalistic and more printer-friendly variant

## Usage

1. Copy `beamercolorthemebrown.sty` and/or `beamercolorthemebrownminimal.sty` to your project.
2. In your `main.tex`, set up the Gemini theme.
```tex
% Preamble
\usepackage[size=custom, height=HEIGHT,width=WIDTH, scale=1.0]{beamerposter} % Set HEIGHT and WIDTH in cm
\usetheme{gemini}
\usecolortheme{brown} % \usecolortheme{brownminimal} for minimal theme
```
3. Enjoy your poster!

## Demo

### Brown theme
`\usecolortheme{brown}`


[![](https://raw.githubusercontent.com/vskbellala/gemini-brown/main/samples/brown_poster.png)](https://raw.githubusercontent.com/vskbellala/gemini-brown/main/samples/brown_poster.pdf)

### Brown Minimal theme
`\usecolortheme{brownminimal}`

[![](https://raw.githubusercontent.com/vskbellala/gemini-brown/main/samples/brownminimal_poster.png)](https://raw.githubusercontent.com/vskbellala/gemini-brown/main/samples/brownminimal_poster.pdf)