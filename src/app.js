import express from "express";
import routerEmployees from "./routes/routersEmployees.js";
import routerIndex from "./routes/routerIndex.js";

const app = express();

app.use(express.json());

app.use(routerIndex);
app.use(routerEmployees);

app.use((req,res,next)=>{
    res.status(404).json({
        message : "endpoint not found"
    })
})

export default app;
