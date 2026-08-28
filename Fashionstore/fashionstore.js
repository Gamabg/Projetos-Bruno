//instalando programas
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
 
//configurando o roteamento para teste no postman
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const port = 3000;
 
//configurando o acesso ao mongodb
mongoose.connect('mongodb://127.0.0.1:27017/sportszone',
{   useNewUrlParser: true,
    useUnifiedTopology: true
});
 
//criando a model do seu projeto
const usuarioSchema = new mongoose.Schema({
    email : {type : String, required : true},
    senha : {type : String}
});
const Usuario = mongoose.model("Usuario", usuarioSchema);
 
//criando a segunda model
const produtoroupaSchema = new mongoose.Schema({
    id_produtoroupa : {type : String, required : true},
    descricao : {type : String},
    marca : {type : String},
    dataFabricacao : {type : Date},
    quantidadeEstoque : {type : Number}
});
const Produtoroupa = mongoose.model("Produtoroupa", produtoroupaSchema);
 
//configurando os roteamentos
app.post("/cadastrousuario", async(req, res)=>{
    const email = req.body.email;
    const senha = req.body.senha;
 
    //mandando para banco
    const usuario = new Usuario({
        email : email,
        senha : senha,
    })
 
    try{
        const newUsuario = await usuario.save();
        res.json({error : null, msg : "Cadastro ok", usuarioId : newUsuario._id});
    } catch(error){
        res.status(400).json({error});
    }
});
 
app.post("/cadastroprodutoroupa", async(req, res)=>{
    const id_produtoroupa = req.body.id_produtoroupa;
    const descricao = req.body.descricao;
    const marca = req.body.marca;
    const dataFabricacao = req.body.dataFabricacao;
    const quantidadeEstoque = req.body.quantidadeEstoque
 
    //mandando para banco
    const produtoesporte = new Produtoroupa({
        id_produtoroupa : id_produtoroupa,
        descricao : descricao,
        marca : marca,
        dataFabricacao : dataFabricacao,
        quantidadeEstoque : quantidadeEstoque
    })
 
    try{
        const newProdutoroupa = await produtoroupa.save();
        res.json({error : null, msg : "Cadastro ok", produtoroupaId : newProdutoroupa._id});
    } catch(error){
        res.status(400).json({error});
    }
});
 
//rota para o get de cadastro
app.get("/cadastrousuario", async(req, res)=>{
    res.sendFile(__dirname +"/cadastrousuario.html");
})
 
//rota para o get de cadastro
app.get("/cadastroprodutoroupa", async(req, res)=>{
    res.sendFile(__dirname +"/cadastroprodutoroupa.html");
})
 
//rota raiz - inw
app.get("/", async(req, res)=>{
    res.sendFile(__dirname +"/index.html");
})
 
//configurando a porta
app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
})