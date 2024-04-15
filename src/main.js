//EXECUTA O CÓDIGO APÓS A PÁGINA SER CARREGADA
document.addEventListener('DOMContentLoaded', function(){
    //SELECIONA TODOS OS ELEMENTOS DESTE ATRIBUTO 
    const buttons = document.querySelectorAll('[data-tab-button]');
    //SELECIONA TODOS OS ATRIBUTOS DA FAQ
    const questions = document.querySelectorAll('[data-faq-question]');

    //CABEÇALHO Pós HERO
    const heroSection = document.querySelector('.hero');
    //PEGAR A ALTURA NA PÁGINA
    const alturaHero = heroSection.clientHeight;

    //PEGAR A POSIÇÃO ATUAL NA PÁGINA
    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < alturaHero){
            ocultarElementosDoHeader();
        }else{
            exibeElementosDoHeader();
        }
    });
    
    for (let i = 0; i < buttons.length; i++){
        //ADICIONA UMA FUNÇÃO AO CLICK DO BOTÃO
        buttons[i].addEventListener('click', function(botao){
            //QUANDO O BOTÃO É CLICADO, O VALOR DO ATRIBUTO 'buttons' É ARMAZENADO CONSTANTE 'abaAlvo'
            const abaAlvo = botao.target.dataset.tabButton;
            
            //CORRESPONDE A ABA DO BOTÃO SELECIONADO
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            
            escondeTodasAbas();
            
            //ADICIONA A CLASSE 'shows__list--is-active' E TORNA A ABA VISÍVEL
            aba.classList.add('shows__list--is-active');

            removeBotaoAtivo();

            //ADICIONA A CLASSE 'shows__tabs__button--is-active' INDICANDO QUE ELE ESTÁ ATIVO
            botao.target.classList.add('shows__tabs__button--is-active');
        });
    }

    //PERGUNTAS E RESPOSTAS FAQ
    for (let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
});

function ocultarElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

//FUNÇÃO PARA ABRIR OU FECHAR A FAQ
function abreOuFechaResposta(elemento){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

//FUNÇÃO PARA REMOVER A CLASSE 'shows__tabs__button--is-active' INDICANDO QUE NÃO ESTÃO MAIS ATIVOS
function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}
//FUNÇÃO QUE ESCONDE TODAS AS ABAS
function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id');

    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}