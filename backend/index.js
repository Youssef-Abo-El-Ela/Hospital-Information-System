require('dotenv').config();
const { Pool } = require('pg');
const express = require('express')
const httpStatusCodes = require('./utils/httpStatusCodes')

const app = express()
app.use(express.json())



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
        const {email , password}  = req.body

        const client = await pool.connect();
        try {
          if (!(email && password)){
          res.status(400).json({status:httpStatusCodes.FAIL , msg:"You have to insert your email and password"})
          return
          }
          const result = await client.query(`select u.email, u.password from users u where u.email = '${email}'`);
          if (!result.rows.length){
            res.status(400).json({status:httpStatusCodes.FAIL , msg:"User Not Found"})
            return
          }
          const db_password = result.rows[0].password
          if (password === db_password){
              res.status(200).json({status:httpStatusCodes.SUCCESS , msg:"You have logged in successfully"})
            }
            else {res.status(500).json({status:httpStatusCodes.FAIL , msg:"Wrong Password"})}
            return
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