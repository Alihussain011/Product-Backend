const client = require("../db/db");

const get = async (req,res)=>{
   
    try {
      let data=null;
      if(req.query.id){
         data =  await client.query("SELECT * FROM product_schema.product where id = $1",[req.query.id]);
      }
      else if(req.params.id){
         data =  await client.query("SELECT * FROM product_schema.product where id = $1",[req.params.id]);
      }
      else{
         data =  await client.query("SELECT * FROM product_schema.product ");
      }
      return res.status(200).json(data.rows);
    }catch (error) {
       return res.status(400).send("error");  
    }
}

const post =async (req,res)=>{
    let {title,description}= req.body;
    try {
        let data =  await client.query("INSERT INTO  product_schema.product (title,description) values ($1,$2)",[title,description]);
        return res.status(200).json(data);
     }catch (error) {
        return res.status(400).send("error");  
     }
}

const put =async (req,res)=>{

   let {id,title,description}= req.body;

   try {
       let data =  await client.query("UPDATE product_schema.product set title=$1,description=$2 where id=$3",[title,description,id]);
       return res.status(200).json(data);
    }catch (error) {
       return res.status(400).send("error");  
    }
}

const del = async (req,res)=>{
   
   let id=null;

   if(req.body.id)
      id=req.body.id;
   else  if(req.query.id)
      id=req.query.id;   
   else  if(req.params.id)
      id=req.params.id;

   try {
       let data =  await client.query("DELETE FROM product_schema.product where id=$1",[id]);
       return res.status(200).json(data);
    }catch (error) {
       return res.status(400).send("error");  
    }
}
module.exports = {get,post,put,del};