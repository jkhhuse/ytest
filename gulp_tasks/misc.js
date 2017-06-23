const path = require('path');

const gulp = require('gulp');
const del = require('del');
const filter = require('gulp-filter');

const conf = require('../conf/gulp.conf');

gulp.task('clean', clean);
gulp.task('other', other);

function clean() {
  //删除文件
  return del([conf.paths.dist, conf.paths.tmp]);
}

function other() {

  //stat.isFile()判断是否为文件
  const fileFilter = filter(file => file.stat.isFile());

  //非scss/js/html文件输出
  return gulp.src([
    path.join(conf.paths.src, '/**/*'),
    path.join(`!${conf.paths.src}`, '/**/*.{scss,js,html}')
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(conf.paths.dist));
}
