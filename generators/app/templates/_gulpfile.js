/**
 *    ______    __________           ____  __  ___  ___     ___    ______
 *   / ____ |  /  _  ____/   ____   / __/ /  |/  / / _ |   / _ \  /_  __/
 *   \ \  | | / / / / __    /___/  _\ \  / /|_/ / / __ |  / , _/   / /
 *  __\ \ | |/ / / (_/ /          /___/ /_/  /_/ /_/ |_| /_/|_|   /_/
 * /____/ |___/  \____/          GULP PROJECT
 *
 * Generates all your svg, png, icon and svg sprites needs using a data─driven
 * svg template system.
 *
 * This is a basic Gulp project scaffold to use svg-smart node.js module.
 * For more information see [SVG SMART](https://github.com/websemantics/svg-smart)
 *
 * @link      http://websemantics.ca
 * @author    Web Semantics, Inc. Dev Team <team@websemantics.ca>
 * @author    Adnan M.Sagar, PhD. <adnan@websemantics.ca>
 */

  var gulp      = require("gulp");
  var smart     = require("gulp-svg-smart");

  /* Load svg-smart resources */
  smart.load("smart.json", "package.json");

  // ---------------------------------------------------
  // TASK : default - require SVG SMARTs ..
  // ---------------------------------------------------
  gulp.task('default', ['svg-smart-tasks'],function() {

    /* Insert your code here as per usual .. */

  });
