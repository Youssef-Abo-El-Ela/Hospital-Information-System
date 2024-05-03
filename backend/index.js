const { Pool } = require('pg');
const express = require('express')

const app = express()

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


// login 
app.post('/api/login',async (req, res) =>{
        const {email , password} = req.body
        const client = await pool.connect();
        try {
          const result = await client.query(`select u.email from users u where u.email = ${email}`);
          if (result){
            console.table(result.rows);
          }
        }
        catch(error){
          console.log(error);
        }
        finally {
          client.release();
        }
      }
)


// register 




// edit user data 



// get user data 






// app.get('/',async (req, res) =>{

// })


// async function getPgVersion() {
//     const client = await pool.connect();
//     try {
//       const result = await client.query("select * from users");
//       console.table(result.rows);
//     } finally {
//       client.release();
//     }
//   }
// getPgVersion();


app.listen(4000, ()=>{
  console.log("server is running on port 4000")
})