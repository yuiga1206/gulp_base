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
var concat = require('gulp-concat');

// ================================================
// SSI用
//
// 参考URL：http://cly7796.net/wp/other/use-ssi-with-browser-sync/
// 参考リポジトリ：https://bitbucket.org/bon_dev/jr_hokurikueticket_static/src/master/
//
// 最初ににプラグインをインストールする：npm install connect-ssi --save-dev
//
// HTMLへの埋め込み例：<!--#include virtual="/goyoyaku/news/e5489-hokuriku-eticket/assets/rwd-header/header.html"-->
// ================================================
// var connectSSI = require('connect-ssi');


var running_tasks = [
  'sass',
  'ejs',
  'js',
  'browser-sync'
];

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "static/"
    }
  });
});


// ================================================
// SSI用
// ================================================
// gulp.task('browser-sync', function() {
//   browserSync.init({
//     server: {
//       baseDir: 'static/',
//       middleware: [
//         connectSSI({
//           baseDir: __dirname + '/static/',
//           ext: '.html'
//         })
//       ]
//     }
//   });
// });



gulp.task('ejs', function() {
  // var index_json_file = 'source/ejs/index.json';
  var pages_json_file = 'source/ejs/pages.json';
  // var index_json = JSON.parse(fs.readFileSync(index_json_file));
  var pages_json = JSON.parse(fs.readFileSync(pages_json_file));
  var page_data = pages_json.pages;
  for (var i = 0; i < page_data.length; i++) {
    var id = page_data[i].id;
    var parentId = page_data[i].parentId;
    gulp.src("source/ejs/" + parentId + "/" + id + ".ejs")
      .pipe(plumber())
      // .pipe(ejs(index_json, {
      .pipe(ejs({
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

gulp.task('js', function () {
  gulp.src(["source/js/**/*.js","!source/js/**/_*.js"])
 .pipe(plumber())
 .pipe(concat('common.js'))
 .pipe(gulp.dest('static/js/'))
 .pipe(browserSync.reload({stream:true}));
});


gulp.task('default', running_tasks, function() {
  gulp.watch(['source/scss/**/*.scss'], ['sass']);
  gulp.watch(['source/ejs/**/*.ejs'], ['ejs']);
  gulp.watch(['source/js/**/*.js'], ['js']);
});
