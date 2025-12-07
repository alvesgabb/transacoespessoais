//Funções das rotas

let transacoes=[]
let nextId= 1 


//GET
function getAll(req, res) {
  console.log("GET /transacoes -> retornando lista de trasacoes");
  return res.status(200).json(transacoes);
}


//POST 
function create(req,res){
const { descricao, tipo, data, valor } = req.body;

  
  if (!descricao || !tipo || !data || valor == null) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

    const transacao = { id : nextId++,
     Descrição: descricao, 
     Transação : tipo,
     Data: data,
     Valor: valor };

  
  transacoes.push(transacao);

  console.log("Transação adicionada:", transacao);
  return res.status(201).json(transacao);
}

//PUT atualizar lista de lançamentos
function update(){

}

//DELETE deteletar por id
function deleteId(req,res){
  
}


//DELETE deletar todos
function deleteAll(req,res){

}


//GET Saldo
function getSaldo(req,res){

}



module.exports = {
  getAll,
  update,
  create,
  deleteId,
  deleteAll,
  getSaldo
}
