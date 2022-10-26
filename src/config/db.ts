import * as dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()

const sqlPool = new Pool({
    host: process.env.HOST , 
    port: Number(process.env.PORT) , 
    database: process.env.DB,
    user: process.env.DB_USER,
    password: process.env.PASSWORD
})

export const createTables =() => {
    console.log('Criando as tabelas')
    sqlPool.query(`
        create table if not exists "user" (
            "id" serial primary key,
            "nome" varchar not null,
            "email" varchar not null
        )
    `, (err, _)=>{
        if(err){
        console.log('Erro ao tentar criar a tabela user')
        console.log(err)
    }
        
    })

    sqlPool.query(`
        create table if not exists "post" (
            "id" serial primary key,
            "title" varchar not null,
            "content" varchar not null,
            "creationDate" date not null
        )
    `, (err, _)=>{
        if(err){
        console.log('Erro ao tentar criar a tabela post')
        console.log(err)
    }
        
    })

    console.log('processes finishid')
}

process.on('SIGINT',async () => {
    await sqlPool.end()
    console.log('Connecion to db closed')
})