import { pool } from "../db.js";

//CREAR REGISTRO
export const postControllerEmployees = async (req,res) => {    
    const { NAME , salary } = req.body;

     try{
        const [row] = await pool.query('INSERT INTO employee (NAME , salary) VALUES (?,?)',[ NAME , salary]);    
         res.json({
         id : row.insertId ,
         NAME,
         salary,
         });
     }catch(error){
        return res.status(500).json({
            message : "Error al agregar empleado"
        })
     }
};

//MODIFICAR REGISTRO
export const putControllerEmployees = async (req,res)=> {
    const {NAME ,salary} = req.body;
    const paramId = req.params.id;

    try {
        const [row] = await pool.query('UPDATE employee SET NAME = IFNULL(?,NAME) , salary = IFNULL(?,salary) WHERE id = ?',[NAME,salary,paramId]);
        if(row.affectedRows === 0){
            return res.sendStatus(404).end('No se elimino registro');
        }
    
        const [regEmplo] = await pool.query('SELECT * FROM employee WHERE id = ?',paramId);
        res.json(regEmplo)        
    } catch (error) {
        res.status(500).json({
            message : "Error al modificar el registro"
        })
    }

};

export const deleteControllerEmployees = async (req,res)=> {
    const paramId = req.params.id;
    
    try {
        const [row] = await pool.query('DELETE FROM employee WHERE id=?',[paramId]);
        console.log(row);
        if(row.affectedRows <=0){
            return res.status(404).end('registro no encontrado');
        }
        res.sendStatus(204);        
    } catch (error) {
        res.status(500).json({
            message : "Error al eliminar un registro"
        })
    }

};

export const getControllerEmployees = async (req,res)=> {
    try {
        const [registro] = await pool.query('SELECT * FROM employee');
        res.json(registro);        
    } catch (error) {
        res.status(500).json({
            message : "Error al listar los empleados"
        })
    }
};

export const gentControllerEmployee = async (req,res)=>{
    const paramId = req.params.id;
    try {
        const [registro] = await pool.query('SELECT * FROM employee WHERE id=?',paramId);
        if(registro.length <= 0){
           return res.status(404).end();
        }
        res.json(registro);        
    } catch (error) {
        res.status(500).json({
            message : "Error al buscar el empleado"
        })
    }

}
