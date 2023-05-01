const { src, dest, watch,series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return  src('./sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(dest('./css'));
  };

  exports.watch = function () {
    watch('./sass/**/*.scss', series(buildStyles));
  };