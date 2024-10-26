import conexao from "./conexao.js"
 
export async function busacarProdutos(){
    const sql = `SELECT * FROM produtos`
    const conn = conexao()
    try {
        // Executar a consulta
        const [rows] = await conn.query(sql);
        //console.log('Dados consultados', results.affectedRows);
        await conn.end()
        return rows
      } catch (err) {
        return err.menssage
      }
}
