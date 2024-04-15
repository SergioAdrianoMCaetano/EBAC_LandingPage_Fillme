//EXECUTA O CÓDIGO APÓS A PÁGINA SER CARREGADA
document.addEventListener('DOMContentLoaded', function(){
    //SELECIONA TODOS OS ELEMENTOS DESTE ATRIBUTO 
    const buttons = document.querySelectorAll('[data-tab-button]');
    
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
});

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