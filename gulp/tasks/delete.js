module.exports = function () {
  p.gulp.task("delete", function (callback) {
    p.del.sync(p.paths.project); // Удаляем папку с собранным проектом
    callback();
  });
};