var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var htmlMin = require('gulp-htmlmin');
var inlineSource = require('gulp-inline-source');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
// var cache = require('gulp-cache');
// var responsive = require('gulp-responsive-images');




gulp.task('scripts', function() {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});


gulp.task('styles', function() {
  gulp.src('css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
});


gulp.task('html', function() {
    gulp.src('./*.html')
        .pipe(inlineSource())
        .pipe(htmlMin({collapseWhitespace: true, removeComments: true, minifyJS: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
  return gulp.src(['images/*.jpg','images/*.png', 'images/*.jpeg' ])
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});



// gulp.task('pizzeriaViews', function() {
//   return gulp.src('src/views/images/pizzeria.jpg')
//     .pipe(responsive({
//       'pizzeria.jpg': {
//         width: 100,
//         suffix: '-100'
//       }
//     }))
//     .pipe(gulp.dest('dist/views/images'));
// })

// gulp.task('imagesViews', function () {
//   return gulp.src(['src/views/images/*.png','src/views/images/*.jpg'])
//     .pipe(imagemin())
//     .pipe(gulp.dest('dist/views/images'));
// });




gulp.task('lint', function() {
    return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('default',['scripts','styles','html', 'images' ,'lint']);



//After setting json pk, and installing gulp globally and locally,
//the plugins must be individually installed through terminal
//then add those plugins to gulpfile along with its functions.
