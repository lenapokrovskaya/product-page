module.exports = function () {
    p.gulp.task("public", function () {
        return p.gulp
            .src(p.paths.src.public)
            .pipe(p.gulp.dest(p.paths.build.public)) // Просто копируем всю папку
            .pipe(p.browserSync.reload({
                stream: true
            }));
    });
};