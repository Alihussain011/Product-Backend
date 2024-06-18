const client = require("../db/db");

const getProductOfId = async (id) =>{
    try {
        return await client.query("SELECT * FROM product_schema.product where id = $1",[id]);
    } catch (error) {
        return {
            error
        };
    }
}

const getAllProducts = async () =>{
    try {
        return await client.query("SELECT * FROM product_schema.product");
    } catch (error) {
       return {
            error
        };
    }
}

const insertProduct = async ({title,description,thumbnail}) =>{
    try {
        return await client.query("INSERT INTO  product_schema.product (title,description,thumbnail) values ($1,$2,$3)",[title,description,thumbnail]);
    } catch (error) {
        return {
            error
        };
    }
}

const updateProduct = async ({id,title,description,thumbnail})=>{
    try {
        return await client.query("UPDATE product_schema.product set title=$1,description=$2,thumbnail=$3 where id=$4",[title,description,thumbnail,id]);
    } catch (error) {
        return {error};
    }
}

  
const deleteProduct =async (id)=>{
    try {
        return await  client.query("DELETE FROM product_schema.product where id=$1",[id]);
    } catch (error) {
        return {error};
    }
}

module.exports = {getAllProducts,getProductOfId,insertProduct,updateProduct,deleteProduct};