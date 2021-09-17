
function getKeys(numero) {
  let tela = document.getElementById('tela');
  
  let telaContent = tela.textContent;
  var ultimoChar = telaContent.substring(telaContent.length - 1);
  let primeiroChar = telaContent.substr(0,1);
  tela.textContent += numero;

  

  



  
  
   
  

  
  /*
  (function () {
     if(ultimoChar === '+' ||ultimoChar === '-' )  {
    tela.textContent = telaContent.substring(0,telaContent.length - 1) + numero;
    
    }
  })()

  */
   function getOperator(action) {
  
    if(action == '+') {
      tela.textContent = '+'
    }
  }



  

}

function equals() {
  let tela = document.getElementById('tela')
  let resultado = eval(tela.textContent);
  tela.textContent = resultado;
}

function clearScr() {
  tela.textContent = '';
}