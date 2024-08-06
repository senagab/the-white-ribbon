const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const ffmpeg = require('gulp-fluent-ffmpeg');

function scripts() {
    return gulp.src('./src/scripts/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}

function styles(){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function images(){
    return gulp.src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
}

function videos() {
    return gulp.src('./src/videos/*.{mp4}')
        .pipe(ffmpeg('output.mp4', function (cmd) {
            return cmd
                .videoCodec('libx264')
                .audioCodec('aac')
                .format('mp4')
                .outputOptions('-crf 28')
                .outputOptions('-preset veryslow');
        }))
        .pipe(gulp.dest('./dist/videos'));
}

function watch() {
    gulp.watch('./src/styles/*.scss', styles);
    gulp.watch('./src/scripts/*.js', scripts);
    gulp.watch('./src/img/**/*', images);
    gulp.watch('./src/videos/*.{mp4}', videos);
}

exports.default = gulp.parallel(styles, images, scripts, videos);

exports.watch = watch;