import e, { json } from "express";
import { classificaHeroe } from "./controller/RankHeroeController.js";

const app = e();

const PORT =4000;

app.use(e.json());


app.get('/api', (req,res)=> res.status(200).json({msg:"tudo ocorre bem!"}));

app.post('/api/rankeando', (req,res) =>{
    const {nome,xp} = req.body;

    console.log(nome, xp);

    const nivel = classificaHeroe(xp);

    if(nivel == "invalido") res.status(400).json({msg:`Valor de XP Invalido`})
    
    res.json({msg:`O Herói de nome ${nome} está no nível de ${nivel}`})
})



app.listen(PORT, console.log(`Ouvindo na porta localhost:${PORT}`));



