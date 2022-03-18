const form = document.getElementById("form"); 
const username = document.getElementById("username");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const senhaConfirm = document.getElementById("senhaConfirm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});


function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const senhaValue = senha.value;
  const senhaConfirmValue = senhaConfirm.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }
  if(emailValue === ""){
      setErrorFor(email, "O E-mail é obrigatório");
  } else if (!checkEmail(emailValue)){
      setErrorFor(email, "Por favor, insira um email válido");
  } else {
    setSuccessFor (email)
  }
  if(senhaValue ===""){
      setErrorFor(senha, "A senha é obrigatória");
    } else if(senhaValue.length < 7){
        setErrorFor(senha, "A senha precisa ter no mínimo 7 caracteres");
    } else {
        setSuccessFor(senha);
    }
    if(senhaConfirmValue === ""){
        setErrorFor(senhaConfirm, "A confirmação da senha é obrigatória ")

    } else if(senhaConfirmValue != senhaValue){
        setErrorFor(senhaConfirm,"As senhas não conferem ")
    } else{ 
        setSuccessFor(senhaConfirm)
    }

     // para usar o método "every" terá que transforma a variavel "formControl" em uma lista, porque ele não é um Array padrão do Js ele é um NodeList. Então é preciso dessa conversão para usar o método.
    const formControl = form.querySelectorAll(".form-cadastro");
    

    const formIsValid = [...formControl].every( formControl =>{
        return (formControl.className === "form-cadastro sucesso")
        // nessa variavel está verficando se todos os "form-cadastro" tem essa classes "form-cadastro sucesso"
        //Se tiver.. vem o "if"
    });
    if (formIsValid){
      
      alert("Cadastro efetuado com sucesso");
      window.location.href = "/Login/login.html"
        
    } 
}

function setErrorFor(input, message) {
  const formCadastro = input.parentElement;
  const small = formCadastro.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formCadastro.className = "form-cadastro erro";
}

function setSuccessFor(input) {
  const formCadastro = input.parentElement;
 
  // Adicionar a classe de sucesso
  formCadastro.className = "form-cadastro sucesso";
}

// Função para verificar email. Esse método vai retorna TRUE se o email for válido e FALSE se for invalido com RegEx que faz a verificação
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

