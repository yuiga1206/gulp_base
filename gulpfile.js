var fs = require('fs');
var gulp = require('gulp');
var plumber = require("gulp-plumber");
var sass = require('gulp-sass');
var bulkSass = require('gulp-sass-bulk-import');
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
var ejs = require("gulp-ejs");
var rename = require("gulp-rename");
var browserSync = require('browser-sync').create();


var running_tasks = [
  'sass',
  'ejs',
  'browser-sync'
];

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "static/"
    }
  });
});


gulp.task('ejs', function() {
  var index_json_file = 'source/ejs/index.json';
  var pages_json_file = 'source/ejs/pages.json';
  var index_json = JSON.parse(fs.readFileSync(index_json_file));
  var pages_json = JSON.parse(fs.readFileSync(pages_json_file));
  var page_data = pages_json.pages;
  for (var i = 0; i < page_data.length; i++) {
    var id = page_data[i].id;
    var parentId = page_data[i].parentId;
    gulp.src("source/ejs/" + parentId + "/index.ejs")
      .pipe(plumber())
      .pipe(ejs(index_json, {
          pageData: page_data[i]
      }))
      .pipe(rename(id + ".html"))
      .pipe(gulp.dest("static/" + parentId + "/"))
      .pipe(browserSync.reload({stream:true}));
  }
});


gulp.task('sass', function() {
  gulp.src(["source/scss/**/*.scss","!source/scss/**/_*.scss"])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(bulkSass())
    .pipe(sass({outputStyle: "expanded", sourcemap:true}))
    .pipe(autoprefixer('last 2 versions', 'ie 8', 'ie 9'))
    .pipe(sourcemaps.write('./', {
      includeContent: false
    }))
    .pipe(gulp.dest('static/css/'))
    .pipe(browserSync.reload({stream:true}));
});


gulp.task('default', running_tasks, function() {
  gulp.watch(['source/scss/**/*.scss'], ['sass']);
  gulp.watch(['source/ejs/**/*.ejs'], ['ejs']);
});
