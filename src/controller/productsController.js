const client = require("../db/db");
const { getAllProducts, insertProduct, updateProduct, deleteProduct } = require("../modal/productsModel");

const get = async (req,res)=>{

   let id=null;
   let result=null;

   // getting id from param or query
   if(req.query.id)  id=req.query.id; 
   else if(req.params.id)  id=req.params.id;

   // if id found then fetch data according to id
   if(id)  result =  await getProductOfId(id);

   // Otherwise fetch all data of products
   result =  await getAllProducts(); 

   // if any database error accrued 
   if(result.error) return res.status(500).send("sql error");
      
   // Otherwise sort the rows send to client
   return res.status(200).json(result.rows.sort((a,b)=> a.id-b.id));
   
}

const post =async (req,res)=>{
   // destructuring product data from body
   let {title,description,thumbnail}= req.body;

   // if thumbnail not found make it empty
   if(!thumbnail) thumbnail="";
   // query to database to insert data
   let data =  await insertProduct({title,description,thumbnail});

   // if any database error accrued 
   if(result.error) return res.status(500).send("sql error");
      
   // Otherwise send the data to client
   return res.status(200).json(data);
}

const put =async (req,res)=>{

   // destructuring product data from body
   let {id,title,description,thumbnail}= req.body;
   // if thumbnail not found make it empty
   if(!thumbnail) thumbnail="";

   // query to database to Update data
   let result =  await updateProduct({id,title,description,thumbnail});

   // if any database error accrued 
   if(result.error) return res.status(500).send("sql error");
      
   // Otherwise send the data to client
   return res.status(200).json(result);
   
}

const del = async (req,res)=>{

   let id=null;
   // getting id from param, query or body
   if(req.body.id)   id=req.body.id;
   else  if(req.query.id)  id=req.query.id;   
   else  if(req.params.id) id=req.params.id;

   // if id not found
   if(!id) return res.status(400).send("Id not found");

   // query to database to Update data
   let result =  await deleteProduct(id);

   // if any database error accrued 
   if(result.error) return res.status(500).send("sql error");
      
   // Otherwise send the data to client
   return res.status(200).json(result);
   
}
module.exports = {get,post,put,del};