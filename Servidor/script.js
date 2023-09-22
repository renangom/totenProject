function verificarRespostas() { 

  var perguntas = document.getElementsByClassName('pergunta'); 

  var mensagem = document.getElementById('resultado'); 

  var mensagem = document.getElementById('resultado'); 

  var container = document.getElementsByClassName('container')[0]; 

  const respostaPergunta1 = document.querySelector('input[name="resposta1"]:checked').value; 

  const respostaPergunta2 = document.querySelector('input[name="resposta2"]:checked').value; 

  const resultado = document.getElementById('resultado'); 

  const contagem = document.getElementById('contagem'); 
  
  var rock = document.getElementsByClassName('rock')[0]; 
   

  if ((respostaPergunta1 === 'a' || respostaPergunta1 === 'b') && (respostaPergunta2 === 'c' || respostaPergunta2 === 'd')) { 

    rock+(1); 
  }

  // Esconde as perguntas 

  for (var i = 0; i < perguntas.length; i++) { 

    perguntas[i].style.display = 'none'; 

    } 

  // Exibe o elemento de carregamento 

  container.style.display = 'block'; 

  // Simula um atraso de 2 segundos 

  setTimeout(function() { 

    // Esconde o elemento de carregamento 

    container.style.display = 'none';}); 

 
} 