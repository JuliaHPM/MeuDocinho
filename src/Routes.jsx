import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Painel from "./pages/Painel"
import Cardapio from "./pages/Cardapio";
import Registro from "./pages/Registro";
import CadastroIngrediente from "./pages/CadastroIngrediente";
import CadastroReceita from "./pages/CadastroReceita";
import CadastroDoce from "./pages/CadastroDoce";

export default function Routes(){
    return(
        
            <Switch>
                <Route path="/" element={<Home/>}/>
                <Route path="/registro" element={<Registro/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/painel" element={<Painel/>}/>
                <Route path="/cardapio" element={<Cardapio/>}/>
                <Route path="/cadastroIngrediente" element={<CadastroIngrediente/>}/>
                <Route path="/cadastroReceita" element={<CadastroReceita/>}/>
                <Route path="/cadastroDoce" element={<CadastroDoce/>}/>
                <Route path="/editarDoce/:id" element={<CadastroDoce/>}/>
                <Route path="/editarIngrediente/:id" element={<CadastroIngrediente/>}/>
                <Route path="/editarReceita/:id" element={<CadastroReceita/>}/>
            </Switch>
    )
}