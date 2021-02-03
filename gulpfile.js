// const gulp = require('gulp');
const { src, dest, watch, series } = require('gulp');
const browsersync = require('browser-sync').create();
// Project Set Up

// const fs = require('fs');
// gulp.task('directories', () => {
//     const folders = [
//         // 'app',
//         // 'dist',
//         'css',
//         'images',
//         'js',
//         'scss',
//     ];
//     folders.forEach(dir => {
//         if(!fs.existsSync(dir)) {
//             fs.mkdirSync(dir);
//             console.log('The following folder was created:', dir);    
//         }   
//     });
// });

// SASS Tasks

const sass = require('gulp-sass');

function scssTask(){
    return src('scss/styles.scss', { sourcemaps: true })
      .pipe(sass())
      .pipe(dest('css', { sourcemaps: '.' }));
  }

 // Live Server
 function browsersyncServe(cb){
    browsersync.init({
      server: {
        baseDir: '.'
      }
    });
    cb();
  } 

  function browsersyncReload(cb){
    browsersync.reload();
    cb();
  }
  
  // Watch Task
  function watchTask(){
    watch('*.html', browsersyncReload);
    watch(['scss/**/*.scss', 'js/**/*.js'], series(scssTask, browsersyncReload));
  }
  
  // Default Gulp task
  exports.default = series(
    scssTask,
    browsersyncServe,
    watchTask
  );

