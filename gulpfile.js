//CONFIGURAÇÃO IMPORTAR MÓDULOS
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

//FUNÇÃO UGLYFI PARA MINIFICAÇÃO DO CÓDIGO
function scripts(){
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}

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
exports.default = gulp.parallel(styles, images, scripts);
//FUNÇÃO DE MONITORAMENTO
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
}