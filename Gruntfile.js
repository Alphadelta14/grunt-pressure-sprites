/*
 * grunt-pressure-sprites
 * https://github.com/Alphadelta14/grunt-pressure-sprites
 *
 * Copyright (c) 2014 Alpha <alpha@projectpokemon.org>
 * Licensed under the MIT license.
 */


'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.loadTasks('tasks');
};
