const express = require("express")
const mysql = require("mysql")

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"abhi@7838",
    database:"test"
})

const PORT = 4000 

app.get("/", (req, res)=> {
    res.json("hello this is the backend")
})

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books", (req, res) => {
    
})

app.listen(PORT, ()=> {
    console.log(`sever is running.......`)
})