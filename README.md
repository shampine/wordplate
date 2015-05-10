#wordplate

This is a clean, minimalist, starter boilerplate built with some of the concepts of the [wp-boilerplate](https://github.com/GunnJerkens/wp-boilerplate). The main difference between the two is that this one does not use WordPress as a submodule, this is better suited for when you are zipping up a project to deliver to a client.

## setup

To get started run `npm install` in the root of the project to install all the node.js dependencies for the Grunt. To run grunt use `grunt -v`, if you need to concatenate the javascript for debugging use `grunt dev -v`.

Copy & edit `wp-config.php.example` to `wp-config.php` and add in credentials for each environment. In the WordPress admin activate the wordplate theme.

## features

- Grunt
- SCSS
- BrowserSync
- Bootstrap 3.4.3
- Gunn/Jerkens bin
- Non-standard asset directory
- wp-config outside webroot

## license

MIT