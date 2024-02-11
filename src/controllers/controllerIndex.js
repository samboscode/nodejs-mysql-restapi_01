import { pool } from "../db.js";

export const getControllerIndex = async(req,res)=>{
    const resul = await pool.query('SELECT  1 + 1 AS SUMAA');
    res.json(resul)
}

