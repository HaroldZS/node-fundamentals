const gulp = require("gulp");
const server = require("gulp-server-livereload");

gulp.task("build", function (cb) {
  console.log("Builing website");
  setTimeout(cb, 1200);
});

gulp.task("serve", function (cb) {
  gulp.src("WWW").pipe(
    server({
      livereload: true,
      open: true,
    })
  );
});

gulp.task('default', gulp.series("build","serve" ));