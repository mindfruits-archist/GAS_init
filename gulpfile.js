const gulp = require('gulp');
const jshint = require('gulp-jshint');
const runSequence = require('run-sequence');
const resizer = require('gulp-image-resize');
const del = require('del');
const sass = require('gulp-sass');

function _html(){
  return gulp.src('*.html')
  .pipe(gulp.dest('dist'));
}
function script(){
  return gulp.src("*.js")
  .pipe(jshint({esversion:8}))
  .pipe(jshint.reporter('default'))
  .pipe(gulp.dest('dist'));
}
function polyfill(){
  return gulp.src("node_modules/babel-polyfill/browser.js")
  .pipe(gulp.dest("dist/node_modules/babel-polyfill"));
}
function images(){
  return gulp.src("img/*.jpg")
  //.pipe(resizer({width:100,height:100,crop:true,imageMagik:true}))
  .pipe(gulp.dest("dist/img"));
}
function clean(){
  return del('dist');
}
function doSass(){
  return gulp.src("css/*.scss")
  .pipe(sass())
  .pipe(gulp.dest('dist/css'))
}


gulp.task('watch', () => {
  gulp.watch('*.html', ['_html']);
  gulp.watch('script.babel.js', ['script']);
})


//gulp.task('default', ["_html", "polyfill"]);

module.exports = {_html, script, polyfill, images, clean,
  default: gulp.series(
    clean,
    gulp.parallel(clean, script, polyfill, _html, doSass, images, )
  )}
