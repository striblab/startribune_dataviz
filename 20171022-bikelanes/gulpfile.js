// git status
// git add .
// git commit -m "message"
// git push origin master

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    // coffeescript.org shortcut for writing js (like sass)
    browserify = require('gulp-browserify'),
    // used to include jquery and mustache
    // tagline.coffee requires $ = require 'jquery'
    // templates.js requires var Mustache = require('mustache');
    compass = require('gulp-compass'),
    // used for sass and compiling scss
    gulpif = require('gulp-if'),
    // creating conditional tasks inside the task elements
    uglify = require('gulp-uglify'),
    // js library that controls how js code is minified
    minifyHTML = require('gulp-minify-html'),
    // minify index file for production
    jsonminify = require('gulp-jsonminify'),
     // minify json files for production
    // imagemin = require('gulp-imagemin'),
    // pngcrush = require('imagemin-pngcrush'),
    concat = require('gulp-concat'),
    //used for compiling all of the js files together into 1 file
    browserSync = require('browser-sync').create();
    // live reload feature that allows multiple browsers and simulators to show the page changes concurrently

var env,
    coffeeSources,
    jsSources,
    sassSources,
    htmlSources,
    jsonSources,
    outputDir,
    sassStyle;

// NODE_ENV=production gulp  
// above is used to compile the css file based on whether dev/prod
env = process.env.NODE_ENV || 'development';

if (env==='development') {
  outputDir = 'builds/development/';
  sassStyle = 'expanded'; // if in dev make css readable
} else {
  outputDir = 'builds/production/';
  sassStyle = 'compressed'; // if prod, compress css
}

coffeeSources = ['components/coffee/tagline.coffee'];

// add any custom js scripts here to be compiled or comment out
jsSources = [
  'components/scripts/st_script.js'
];

// add any js libraries here to be compiled or comment out
librarySources = [
  // 'components/scripts/rclick.js',
  // 'components/scripts/pixgrid.js',
  // 'components/scripts/tagline.js',
  // 'components/scripts/template.js',
  // 'components/scripts/jquery-ui.js',
  'components/scripts/d3.v3.min.js',
  // 'components/scripts/three.min.js',
  // 'components/scripts/queue.v1.min.js',
  // 'components/scripts/topojson.v1.min.js',
  // 'components/scripts/datatables.min.js',
  // 'components/scripts/dataTables.responsive.min.js',
  // 'components/scripts/d3.slider.js',
  // 'components/scripts/nv.d3.min.js',
  'components/scripts/c3.min.js',
  // 'components/scripts/mapbox.js',
  // 'components/scripts/Leaflet.fullscreen.min.js',
  // 'components/scripts/leaflet.markercluster-src.js',
  // 'components/scripts/leaflet-omnivore.min.js',
  'components/scripts/mapbox-gl.js',
  // 'components/scripts/mapbox-gl-geocoder.js',
  // 'components/scripts/jquery.fullpage.min.js'
];

sassSources = ['components/sass/style.scss'];
htmlSources = [outputDir + '*.html'];
jsonSources = [outputDir + 'js/*.json'];

// compiling coffescript into js file and sending it to components/scripts
gulp.task('coffee', function() {
  // gulp.src(coffeeSources)
  //   .pipe(coffee({ bare: true })
  //   .on('error', gutil.log))
  //   .pipe(gulp.dest('components/scripts'))
});

// working with js scripts to compile them into a single js file and inject them into page
gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js')) // combining all of the js files into a single js file (script.js)
    .pipe(browserify())
    .pipe(gulpif(env === 'production', uglify()))
    .pipe(gulp.dest(outputDir + 'js')) // putting in local js folder
    .pipe(browserSync.stream())
});

gulp.task('libraries', function() {
  gulp.src(librarySources)
   .pipe(gulp.dest(outputDir + 'js')) // putting in local js folder
   .pipe(browserSync.stream())
});

// watching local scss files for changes and then compiling css and injecting into the page with browserSync
gulp.task('compass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      css: 'components/css',
      sass: 'components/sass',
      style: sassStyle
    })
    .on('error', gutil.log))
    .pipe(gulp.dest(outputDir + 'css')) // moving compiled sass to builds folders
    .pipe(browserSync.stream())
});

// watching local sources for changes that will prompt a browserSync injection or reload
gulp.task('watch', function() {
  gulp.watch(coffeeSources, ['coffee']);
  gulp.watch(jsSources, ['js']);
  gulp.watch('components/sass/*.scss', ['compass']);
  gulp.watch('builds/development/*.html', ['html']);
  gulp.watch('builds/development/js/*.json', ['json']);
  gulp.watch('builds/development/images/**/*.*', ['images']);
});

// sets up a localhost server to show the page and inject css and js changes  
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./builds/development/" // initial load on gulp is index.html in dev build
        }
    });
});

// the index.html file that resides in either dev or prod builds 
gulp.task('html', function() {
  gulp.src('builds/development/*.html')
    .pipe(gulpif(env === 'production', minifyHTML()))
    .pipe(gulpif(env === 'production', gulp.dest(outputDir)))
    .pipe(browserSync.stream())
});

//grab images
gulp.task('images', function() {
  gulp.src('builds/development/images/**/*.*')
    .pipe(gulpif(env === 'production', imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngcrush()]
    })))
    .pipe(gulpif(env === 'production', gulp.dest(outputDir + 'images')))
    .pipe(browserSync.stream())
});

//move json data
gulp.task('json', function() {
  gulp.src('builds/development/data/*.json')
   .pipe(gulpif(env === 'production', gulp.dest('builds/production/data')))
   .pipe(browserSync.stream())
});

//move geojson and shapefiles
gulp.task('shapefiles', function() {
  gulp.src('builds/development/shapefiles/*.json')
   .pipe(gulpif(env === 'production', gulp.dest('builds/production/shapefiles')))
   .pipe(browserSync.stream())
  gulp.src('builds/development/shapefiles/*.geojson')
   .pipe(gulpif(env === 'production', gulp.dest('builds/production/shapefiles')))
   .pipe(browserSync.stream())
});

//move geographic data
gulp.task('geojson_data', function() {
  gulp.src('builds/development/data/*.geojson')
   .pipe(gulpif(env === 'production', gulp.dest('builds/production/data')))
   .pipe(browserSync.stream())
});

gulp.task('default', ['html', 'json', 'geojson_data', 'coffee', 'libraries', 'js', 'shapefiles', 'compass', 'watch', 'browserSync']);