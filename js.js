const { series, src, dest } = require('gulp');

function copy(cb) {
  src('src/*.html')
    .pipe(src('src/**/*.html'))
    .pipe(dest('dest/'));
  cb();
}

function devTask() {
  watch('src/**/*.*', {}, function(cb) {
    src('src/*.*')
      .pipe(src('src/**/*.*'))
      .pipe(dest('dest/'));

    cb();
  });
}

function minify(cb) {
  console.log('minify');
  cb();
}

function defaultTask(cb) {
  console.log('DONE');
  cb();
}

module.exports.default = defaultTask;
module.exports.build = series(copy, minify);
module.exports.dev = devTask;
