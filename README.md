#Projeto de uma landing page para um filme a minha escolha.

Este é um script JavaScript que adiciona interatividade a um site estilizado com CSS. Ele manipula classes CSS para mostrar ou ocultar elementos do cabeçalho com base na posição de rolagem da página.

Neste projeto, empreguei Node.js, SASS/SCSS para estilos eficientes e modulares, e Gulp para automação de tarefas, incluindo compilação de SASS em CSS e minificação de código com Uglify. Usei a tarefa watch do Gulp para monitoramento em tempo real de alterações nos arquivos. Além disso, desenvolvi o site para ser totalmente responsivo usando media queries, garantindo uma boa funcionalidade em diversos dispositivos e tamanhos de tela.

Incorporei também o **gulp-imagemin** no fluxo de trabalho do projeto. Esta ferramenta é essencial para otimizar imagens, reduzindo o tamanho do arquivo sem perder a qualidade visual, o que resulta em tempos de carregamento de página mais rápidos e uma melhor experiência do usuário.

Utilizei a regra **@font-face** do CSS para incorporar fontes personalizadas no site. Isso me permitiu usar fontes que não estão disponíveis por padrão nos navegadores, permitindo uma maior flexibilidade no design e ajudando a manter a consistência da marca em todo o site.

Por fim, usei **gulp-uglify** para minificar o código JavaScript. Isso reduz o tamanho do arquivo JavaScript, resultando em tempos de carregamento de página mais rápidos. Além disso, a minificação torna o código mais difícil de ler, oferecendo uma camada extra de proteção contra aqueles que podem tentar copiar ou manipular o código.
