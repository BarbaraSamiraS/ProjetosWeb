import express from 'express'
import { busacarProdutos } from './DAO/buscarProdutos.js'

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/produtos', async function (req, res) {
    const produtos = await busacarProdutos()
    res.send(produtos)
  })

  
app.listen(3000, ()=> {
    console.log('Rodando na porta 3000')
;})



















// buscar dados 
/*
import Conexao from './conexao.js'
export async function busacarProdutos (){

    const sql = "Select*from Tbl_produtos"
    const conm = Conexao()

    try{

        const[rouls] = await 
        conm.query(sql)
        return rouls

    }catch(en){
        return en
    }

} 
*/