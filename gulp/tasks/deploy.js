module.exports = function () {
    p.gulp.task("deploy", function() {
        return p.gulp.src('./build/**/*')
          .pipe(p.ghPages());
    });
};