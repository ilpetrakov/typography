# Tyfy

My personal framework for applying typographic styles and options on the web. See the [online docs and demos](http://aaronpinero.net/tyfy/docs/index.html).

## Why build another framework?

There are three reasons:

* To collect all of my best design and pattern work into one system.
* To create a system that I can employ in future projects.
* To learn something along the way.

A framework is an expression of the values, preferences, priorities, and experience of the person or persons creating it. While I like some existing frameworks (Bootstrap 4, PureCSS), I want  something that reflects my values and the work that I do.

## Dependencies

### Other Projects

Two additional repos are necessary for this project:

* [FontAwesome Pro](https://github.com/FortAwesome/Font-Awesome-Pro) - clone to `dist/vendor/fontawesome`
* [Normalize.css](https://github.com/necolas/normalize.css) - clone to `dist/vendor/normalize`

### Build Tools

This project uses node for compiling the SCSS files into CSS and for assembling the documentation pages

* For production output, run `npm run build-css`. This outputs compressed CSS.
* For development output, run `npm run build-css-dev`. This outputs readable CSS with source file comments.
* For the docs, run `node docs.js`. This uses templatesjs to assemble the HTML pages and their includes.

## Additional thanks

I realize that without the benefit of work previously done by others, this project would not happen. Since those frameworks are part of my experience, my work reflects theirs as well. Tyfy is a combination of something old, something new, something borrowed, and something blue from some of the following works:

* [HTML5 Boilerplate](https://html5boilerplate.com)
* [Archetype](https://archetypeapp.com)
* The [Columbia College](https://www.college.columbia.edu) Style Guide
* [PureCSS](https://purecss.io)
* [Better Web Type](https://betterwebtype.com)
