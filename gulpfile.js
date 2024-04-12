//CONFIGURAÇÃO IMPORTAR MÓDULOS
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

//FUNÇÃO PARA COMPILAR ARQUIVOS SASS em CSS
function styles(){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle : 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

exports.default = styles;
//FUNÇÃO DE MONITORAMENTO
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}