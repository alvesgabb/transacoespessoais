
const API = "http://localhost:3000/transacoes";

//POST Fazer lançamento
async function lancarFinanca() {
  alert("clicou"); //teste
  const descricao = document.getElementById("descricao").value;
  const tipo = document.getElementById("select").value;
  const data = document.getElementById("data").value;
  const valor = document.getElementById("valor").value;



const resposta = await fetch(API,{
  method:"POST",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({
    descricao, 
    tipo, 
    data, 
    valor: Number(valor)
})
});

const dataa = await resposta.json()
console.log(dataa)

document.getElementById("descricao").value=""
document.getElementById("select").value="entrada"
document.getElementById("data").value=""
document.getElementById("valor").value=""

}

async function listarLancamentos(){
  alert("clicou");
  
}

async function atualizarlancamento() {
  alert ("clicou");
  
}

async function deletarPorId(){
  alert ("clicou");

}

async function deletarTodos(){
  alert("clicou")

}


async function mostrarSaldo() {
  alert("clicou")
  
}