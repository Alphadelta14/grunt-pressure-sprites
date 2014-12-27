/*
 * grunt-pressure-sprites
 * https://github.com/Alphadelta14/grunt-pressure-sprites
 *
 * Copyright (c) 2014 Alpha <alpha@projectpokemon.org>
 * Licensed under the MIT license.
 */

'use strict';

var spawn = require('child_process').spawn;

module.exports = function(grunt) {

  grunt.registerMultiTask('pressure-sprites',
                          'Pressure Spritesheet Generator wrapper for Grunt',
                          function() {
    var done = this.async();
    var options = this.options({
      executable: 'generate_spritesheet',
      output: 'textures.png',
      data: 'textures.json',
      base: null
    });

    var args = [];

    args.push('--output', options.output);
    args.push('--data', options.data);
    if (options.base) {
      args.push('--base', options.base);
    }

    args = args.concat(this.filesSrc);

    var proc = spawn(options.executable, args);
    proc.stdout.on('data', function (data) {
      grunt.log.write(data.toString());
    });

    proc.stderr.on('data', function (data) {
      grunt.log.error(data);
    });

    proc.on('close', function (code) {
      if (code !== 0) {
        grunt.fail.warn('generate_spritesheet exited with bad code ' + code + '.');
      }
      done();
    });
  });
};
