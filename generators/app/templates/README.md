# <%= name %>

[![Build Status](https://travis-ci.org/<%= githubAccount %>/<%= repositoryName %>.svg?branch=master)](https://travis-ci.org/<%= githubAccount %>/<%= repositoryName %>)

Generates all your svg, png, icon and svg sprites needs using a data─driven
svg template system, [svg-smart](https://github.com/websemantics/svg-smart).

[View all logos](http://<%= githubAccount %>.github.io/<%= repositoryName %>/)

## Install

- Install Node.js dependencies and generate logos.

```
npm install
```

## Includes

This scripts generates all image files as follows

- Folder `assets/png` contains PNG files
- Folder `assets/ico` contains ICO files
- Folder `assets/svg` contains SVG files
- Folder `assets/sprite` contains collection of sprites

## Related

This project is using [SVG SMART](https://github.com/websemantics/svg-smart), a Node.js module to generate the logo in `svg`, `png`, `icon` and `svg sprite` formats using a data-driven `svg` template approach, and  [Gulp SVG Smart](https://github.com/websemantics/gulp─svg─smart).
