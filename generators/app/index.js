/* Based on, https://github.com/yeoman/generator-generator */

'use strict';
var path       = require('path');
var generators = require('yeoman-generator');
var askName    = require('inquirer-npm-name');
var lodash     = require('lodash');
var extend     = require('deep-extend');
var mkdirp     = require('mkdirp');

function makeProjectName(name) {
  return lodash.kebabCase(name);
}

module.exports = generators.Base.extend({
  initializing: function () {
    this.props = {};
  },

  prompting: function () {
    var done = this.async();

    askName({
      name: 'name',
      message: 'Your svg-smart project name',
      default: makeProjectName(path.basename(process.cwd())),
      filter: makeProjectName,
      validate: function (str) {
        return str.length > 0;
      }
    }, this, function (name) {
      this.props.name = name;
      done();
    }.bind(this));
  },

  default: function () {
    if (path.basename(this.destinationPath()) !== this.props.name) {
      this.log(
        'Your project must be inside a folder named ' + this.props.name + '\n' +
        'I\'ll automatically create this folder.'
      );
      mkdirp(this.props.name);
      this.destinationRoot(this.destinationPath(this.props.name));
    }

    var readmeTpl = lodash.template(this.fs.read(this.templatePath('README.md')));

    this.composeWith('node:app', {
      options: {
        babel: false,
        gulp: false,
        boilerplate: false,
        coveralls: false,
        githubAccount:false,
        name: this.props.name,
        skipInstall: true,
        readme: readmeTpl({
          repositoryName: this.props.name
        })
      }
    }, {
      local: require('generator-node').app
    });
  },
  writing: function () {

    /* modify the package.json file */
    var pkg = this.fs.readJSON(this.destinationPath('package.json'), {});
    pkg.devDependencies = {
      "gulp": "*",
      "gulp-svg-smart": "*"
    };
    pkg.scripts = {"postinstall":"gulp"};
    this.fs.writeJSON(this.destinationPath("package.json"), pkg);

    this.fs.copy(
      this.templatePath('_gulpfile.js'),
      this.destinationPath('gulpfile.js')
    );
    this.fs.copy(
      this.templatePath('_smart.json'),
      this.destinationPath('smart.json')
    );
    this.fs.copy(
      this.templatePath('_deploy.sh'),
      this.destinationPath('deploy.sh')
    );
    this.fs.copy(
      this.templatePath('src/'),
      this.destinationPath('src/')
    );
  },

  // install: function () {
  //   this.installDependencies({bower: false});
  // }
});
