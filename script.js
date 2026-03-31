// ===== EVENTOS DA PÁGINA =====
function carregouPagina() {
  console.log("Página carregada");
}

function saiuPagina() {
  console.log("Saiu da página");
}

// ===== BOTÃO EXPLORAR =====
function explorarPraias() {
  console.log("Botão explorar clicado");

  let msg;
  let clima = "ensolarado";

  if (clima === "ensolarado") {
    msg = "Hoje é um ótimo dia para visitar as praias do Ceará!";
  } else {
    msg = "Talvez hoje seja melhor ficar em casa.";
  }

  alert(msg);
  return msg;
}

// ===== FORMULÁRIO =====
function enviarFormulario(e) {
  e.preventDefault();

  const form = document.getElementById("contatoForm");

  let nome = form.querySelector('input[type="text"]').value;
  let email = form.querySelector('input[type="email"]').value;

  if (nome && email) {
    console.log("Formulário enviado:", nome, email);
    alert(`Obrigado ${nome}, sua mensagem foi enviada!`);
    form.reset();
  } else {
    console.log("Preencha todos os campos!");
    alert("Por favor, preencha todos os campos.");
  }
}