const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');

/* Dir config */

const CONFIG = {
  dist: 'dist'
};

/* Partial tasks */

gulp.task('clean', () => {
  del.sync(CONFIG.dist);
});

gulp.task('js', () => {
  gulp.src('src/**/*.{js,jsx}')
    .pipe(babel({
      presets: ['react', 'env', 'stage-3']
    }))
    .pipe(gulp.dest(CONFIG.dist));
});

/* Final tasks */

gulp.task('dist', ['clean', 'js']);

gulp.task('dev', () => {
  gulp.watch('src/**/*.{js,jsx}', ['dist']);
});
