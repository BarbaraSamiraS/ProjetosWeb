const {conexao} = require('../conexao.js')

async function deletarEndereco(codigo){
    
    const sql = `DELETE FROM tbl_endereco WHERE codigo = ?`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[codigo]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

module.exports = {deletarEndereco}