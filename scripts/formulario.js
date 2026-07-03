const botaoMensagem = document. querySelector('.btn-mensagem');
const formularioContato = document.querySelector( '.formulario-contato');
const inputNome = document.querySelector('.input-nome');
const inputEmail = document.querySelector('.input-email');
const inputMensagem = document.querySelector('.input-mensagem');
const feedback = document.querySelector('.feedback');

//evento: click
botaoMensagem.addEventListener('click', () => {
formularioContato.classList.toggle('escondido');
if (formularioContato.classList.contains('escondido')){
    botaoMensagem.textContent = 'Enviar mensagem';}
else {
    botaoMensagem.textContent = 'Cancelar mensagem';
}
});


//envio do formulário
formularioContato.addEventListener('submit', (event) => {
    event.preventDefault();
   const nome=inputNome. value;
   const email=inputEmail.value;
   const mensagem=inputMensagem.value;
   
   feedback.innerHTML=`<div class="feedback-sucesso">
      <span>Mensagem enviada com sucesso, ${nome}!</span>

      <button class="fechar-feedback">
        ×
      </button>
    </div>`;

    //pegar o botao de fechar feedback
    const botaoFecharFeedback =document.querySelector('.fechar-feedback');
botaoFecharFeedback.addEventListener('click', () => {
    feedback.innerHTML='';
})


    //reset formulario
    formularioContato.reset();
});