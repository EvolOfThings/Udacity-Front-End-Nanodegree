const gulp = require('gulp');
const uglify = require('gulp-uglify');
// const uglify = require('gulp-uglify-js')
const cleanCSS = require('gulp-clean-css');
const htmlMin = require('gulp-htmlmin');
const inlineSource = require('gulp-inline-source');
const imagemin = require('gulp-imagemin');
const jshint = require('gulp-jshint');
// var cache = require('gulp-cache');
// var responsive = require('gulp-responsive-images');



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


//Images
gulp.task('images', () =>
   gulp.src(['images/*.png', 'images/*.jpg'])
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);

gulp.task('images-logos', () =>
   gulp.src(['images/logos/*.svg', 'images/logos/*.ico' ])
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images/logos'))
);

gulp.task('images-background', () =>
   gulp.src('images/background/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images/background'))
);


//scripts
gulp.task('scripts', function() {
    return gulp.src(['js/main.js', 'js/jQuery.js'])
        .pipe(uglify())                                     // TODO: yet to fix the error
        .pipe(gulp.dest('dist/js'));
});

//no need to minimize this file
gulp.task('scripts-1', function() {
    return gulp.src(['js/bootstrap.min.js'])
        .pipe(gulp.dest('dist/js'));
});


//adding pdf file w/o any task function
gulp.task('resume', function(){
    return gulp.src('resume/resume.pdf')
    .pipe(gulp.dest('dist/resume'));
});


//Linting
gulp.task('lint', function() {
    return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


//Run gulp
gulp.task('default',['styles','html', 'images', 'images-logos', 'images-background', 'resume', 'scripts', 'scripts-1', 'lint']);






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


//After setting json pk, and installing gulp globally and locally,
//the plugins must be individually installed through terminal
//then add those plugins to gulpfile along with its functions.
