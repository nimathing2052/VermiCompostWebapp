/// <binding AfterBuild='default' />
var gulp = require('gulp');
var ugify = require("gulp-uglify");
var concat = require("gulp-concat");

gulp.task("minify", function () {
  return gulp.src("wwwroot/js/**/*.js")
    .pipe(ugify())
    .pipe(concat("nepalitreat.min.js"))
    .pipe(gulp.dest("wwwroot/dist"));
});

gulp.task('default', gulp.series("minify"), ["minify"]);