Photo Competition - Basic Framework
================================

The basic framework for the photo competition site includes:
- Directory structure to hold all the relevant files
- Simple structure for the *index* page and a placeholder for the *about* page.
- Small amount of SCSS to arrange the pages
- JavaScript to fetch the image with jQuery

## Setup Instructions

1. [Install SASS](https://sass-lang.com/install) - download the [latest release](https://github.com/sass/dart-sass/releases/) and [add it to your PATH](https://katiek2.github.io/path-doc/).

2. Update the fields at the top of `js/common.js` with the correct `backendIp` and `user`.

## Development Instructions

### Compiling SASS

To compile the SASS, run `sass sass/common.scss stylesheets/common.css`.
For development, you may wish to use 'watch' mode, either with sass itself or your IDE.

**Remember, you'll need to recompile your SASS to see any changes!**

### Viewing the site

Open `index.html` in a web browser and you should see your website.
If you can't see an image on the homepage, then check the [JavaScript Console](https://webmasters.stackexchange.com/a/77337) for error messages.

## Architecture

The project directory structure is:

* `html` - There is one HTML source file for every web page in your site and they define the structure of the site. 
* `sass` - [SASS](https://sass-lang.com/) source files provide the style for the site.
* `stylesheets` - CSS files which are compiled from the SASS files above.
  Since these files are compiled by SASS they are not committed to the codebase.
  It is these files, rather than the SASS source, which will be sent to a web browser when it hits your site.
  *You should never modify these files directly*. 
* `js` - JavaScript source files, these contain the logic of the application.  
* `js/vendor` - third-party javascript libraries, in our case this is the [JQuery](https://jquery.com/) library.
 