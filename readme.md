Yeoman Generator (Moda fork, modified) for Gumby 2.6 Framework using Assemble.io and RequireJS
========================================================================

Note - this project has been modified heavily to build dist to a parent directory of the source (the generated project directory), and to be served from a domain subdirectory, e.g., modahealth.com/styleguide. This is a self-contained microsite of the main site.

## Usage

Prerequisites:

- node (latest) installed globally
- npm installed globally
- Ruby
- Sass
- Compass (tbd what extra notes might apply here)
- Modular Scale
- Sassy Math

	
<!-- Install it (only once): `npm install -g generator-gumby-assemble`-->
Install yo and generator-generator globally: `npm install -g yo generator-generator`

Clone this repo into your desired generator directory (not the directory from which you'll end up working):

```
$ mkdir gumby-assemble-generator
$ cd gumby-assemble-generator
$ git clone https://github.com/moda-schneij/generator-gumby-assemble-moda.git
```

- While in this directory, create a global npm link to use the generator on your machine by running `npm link`
  
  - (You should see a lot of output. If this fails for any reason, try it again)
	
- Return to your sites directory, create a new folder AND a NESTED folder for the source (pre-build), and cd into it:

```
$ cd /sites
$ mkdir gumby-assemble
$ mkdir gumby-assemble/source
$ cd gumby-assemble/source
```

### Specific configuration for running a site in a subdirectory - otherwise, the generator's Gruntfile needs to be modified

- Run `yo gumby-assemble-moda`

- Edit the generated Gruntfile.js with the correct yeomanConfig.sitePath (in this case, it's 'styleguide')

- Run `grunt` to build and `grunt server` to preview

- You can run `yo gumby-assemble-moda` and choose to overwrite your entire site if you need to tweak the generator and recreate the project


## Options

* `--skip-install`

  Skips the automatic execution of `bower` and `npm` after
  scaffolding has finished.

* `--test-framework=[framework]`

  Defaults to `mocha`. Can be switched for
  another supported testing framework like `jasmine`.

## Using Assemble to generate pages
- [Assemble.io](http://assemble.io/)

## Using RequireJS for modular script loading
- [Require.js](http://requirejs.org/)

## Gumby Framework

Gumby Framework is a flexible, responsive CSS Framework, Powered by SASS. Create rapid and logical page layout and app prototypes with a flexible and responsive grid system and UI kit.

Full documentation can be found at [http://gumbyframework.com](http://gumbyframework.com/docs).

Gumby is developed with love by your friends at [Digital Surgeons](http://www.digitalsurgeons.com).

Gumby has a few dependencies. Big thank you to the innovative geniuses behind these awesome technologies.

- [Sass](https://github.com/nex3/sass) - Nathan Weizenbaum
- [Compass](https://github.com/chriseppstein/compass) - Chris Eppstein
- [Modular Scale](https://github.com/scottkellum/modular-scale) - Scott Kellum
- [jQuery](http://jquery.com/)
- [Modernizr](http://modernizr.com/)

**MIT Open Source License**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
