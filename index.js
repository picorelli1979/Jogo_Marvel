
const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem)=>{
   personagem.addEventListener('mouseenter',()=>{
    
    const idSelecionado = personagem.attributes.id.value; 

    if(idSelecionado === 'ultron') return; 

    /*   
        OBJETIVO 1 
        QUANDO PASSAR O MOUSE ENCIMA DO PERSONAGEM TEMOS QUE:    
           > COLOCAR A CLASSE DO PERSONAGEM PARA A ANIMAÇÃO 
             NO QUAL PASSAMOS O MOUSE ENCIMA

           > RETIRAR A CLASSE  SELECIONADO DO PERSONAGEM SELECIONADO  
    */
    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')
    
    personagem.classList.add('selecionado')

    /*  
        OBJETIVO 2 
        QUANDO PASSAR O MOUSE EM CIMA TROCAR A IMAGEM DA LISTAGEM E NOME  DO PERSPNAGEM  

        > ALTERAR A IMAGEM DO JOGADOR 1  
        > ALTERAR O NOME DO JOGADOR 1

    */    
    
    const imagemJogador1 = document.getElementById('personagem-jogador-1');
    imagemJogador1.src =  `./Imagens/${idSelecionado}.png`;

    const nomeJogador1 = document.getElementById('nome-jogador1');
    
    const nomeSelecionado = personagem.getAttribute('data-name');
        
    nomeJogador1.innerHTML = nomeSelecionado;


   })

})








///////////////////////////////////////////////////////////
// NESTA SERIA UMA FORMA MAIS DENSA DE FAZER O CODIGO
/*const homemDeFerro = document.getElementById('iron-man')

homemDeFerro.addEventListener('mouseenter', ()=> {     
    homemDeFerro.classList.add('selecionado');
})

const hulk = document.getElementById('hulk')

homemDeFerro.addEventListener('mouseenter', ()=> {     
    hulk.classList.add('selecionado');
})*/
//////////////////////////////////////////////////////

/* OBJETIVO 2 
QUANDO PASSAR O MOUSE EM CIMA TROCAR A IMAGEM DA LISTAGEM E NOME  DO PERSPNAGEM  

   > ALTERAR A IMAGEM DO JOGADOR 1  
   > ALTERAR O NOME DO JOGADOR 1

*/










