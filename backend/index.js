const { Pool } = require('pg');
const express = require('express')

const app = express()

// login 
app.post('/api/login',async (req, res, next) =>{
  
})


// register 




// edit user data 



// get user data 






// app.get('/',async (req, res) =>{

// })

require('dotenv').config();
let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const pool = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: {
    require: true,
  },
});

async function getPgVersion() {
    const client = await pool.connect();
    try {
      const result = await client.query("select * from users");
      console.table(result.rows);
    } finally {
      client.release();
    }
  }
getPgVersion();


app.listen(4000, ()=>{
  console.log("server is running on port 5000")
})