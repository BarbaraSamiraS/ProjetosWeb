import mysql from 'mysql2/promise'
import {config} from 'dotenv'

config ()
export default function Conexao (){
    const pool = mysql.createPool({
        host :      process.env.HOST_DATABASE,
        port :      process.env.PORT,
        user :      process.env.USER,
        password:   process.env.PASSWORD, 
        database:   process.env.DATA_BASE
    })
    return pool
}
