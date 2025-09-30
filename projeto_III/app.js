const imagem = document.querySelectorAll('img');
let foto_troca = false;

function trocaFoto(){
    for(let i = 0; i > imagem.length; i++ ){
    if(foto_troca === false){
      imagem[i].src = `brino(${i + 9}).jpg`; 
      foto_troca = true;
    }else{
      for (let i = 0; i < imagem.length; i++) {
      imagem[i].src = `brino(${i+9}).jpg`; 
      foto_troca = false;
    }}
}}