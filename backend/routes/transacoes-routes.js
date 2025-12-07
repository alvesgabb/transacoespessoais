//Rotas

const express = require("express")
const router = express.Router()
const transacoesController = require("../controllers/transacoes-controller")


//GET mostrar transações
router.get("/",transacoesController.getAll)

//POST receber lançamentos
router.post("/",transacoesController.create)

//PUT atualizar lançamentos
router.put("/",transacoesController.update)

//DELETE especifico
router.delete("/:id",transacoesController.deleteId)

//DELETE todos
router.delete("/",transacoesController.deleteAll)

//GET  Saldo -> mostrar saldo
router.get("/saldo",transacoesController.getSaldo)


module.exports = router
