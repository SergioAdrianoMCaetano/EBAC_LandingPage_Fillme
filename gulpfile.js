//CONFIGURAÇÃO IMPORTAR MÓDULOS
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

//FUNÇÃO PARA COMPILAR ARQUIVOS SASS em CSS
function styles(){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle : 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

//FUNÇÃO PARA OTIMIZAR IMAGENS PARA WEB
function images(){
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

//TAREFA PADRÃO GULP
exports.default = gulp.parallel(styles, images);
//FUNÇÃO DE MONITORAMENTO
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}