document.getElementById("enviar").addEventListener("click", validateForm)

function validateForm() {
    if(document.getElementById("user-name").value != "" &&
      document.getElementById("user-email").value != "" &&
      document.getElementById("user-tel").value != "" ){

    alert("Prontinho! você receberá as novidades por email.")
   }else{
     alert("Por favor, preencha os campos nome e email.")
   }
}

