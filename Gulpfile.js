const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const plumber = require("gulp-plumber");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const browserSync = require("browser-sync").create();
const watch = require('gulp-watch');
const DIST = "./public/dist";
const HTML_SOURCE = "./public/**/*.html";
const SCRIPT_SOURCE = "./public/js/**/*.js";
// const CSS_SOURCE = "./public/**/*.css";
const SASS_SOURCE = "./public/sass/**/*.scss";



gulp.task("sass", function() {
  return gulp
    .src(SASS_SOURCE)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(DIST + "/sass"))
    .pipe(browserSync.stream());
});


gulp.task("scripts", () => {
  gulp
    .src(SCRIPT_SOURCE)
    .pipe(
      plumber(err => {
        console.log("THIS IS THE ERRORRRRR /n/n/n/n/ " + err);
        this.emit("end");
      })
    )
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["env"]
      })
    )
    .pipe(uglify())
    .pipe(concat("app.js"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./public/dist/js/"))
    // .pipe(livereload())
    .pipe(browserSync.stream());
  console.log("scripts");
});
gulp.task("js-watch", ["scripts"], function(done) {
  browserSync.reload();
  done();
});

gulp.task("browser-sync", function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});
gulp.task("watch", () => {
  gulp.watch([SCRIPT_SOURCE, HTML_SOURCE, SASS_SOURCE], ["js-watch", "scripts", "sass"]);
});
gulp.task("default", ["js-watch", "watch"], function() {
  // Serve files from the root of this project
  browserSync.init({
    server: {
      baseDir: "./public"
    }
  });
  gulp.watch("js/*.js", ["js-watch"]);
});
