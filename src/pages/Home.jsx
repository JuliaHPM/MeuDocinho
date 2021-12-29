import React from "react";
import { Link } from "react-router-dom";
import Confeiteira from "../img/confeiteira.png"

export default function Home() {
    return (
        <>
            <div className="conteudoHome container">
                <div className="row justify-content-center">
                    <div className="col-8 col-lg-6 " >
                        <h3 className="fontTitle" >MeuDocinho.com</h3>
                        <h4 className="mt-4 textPink">Precifique seus doces e tenha uma confeitaria  organizada e com lucro</h4>
                        <p className="mt-4">Aqui você pode cadastrar seus ingredientes, suas receitas e então montar seus doces, informando seus gastos e tendo uma precificação final que realmente lhe traga lucro</p>
                        <p>Faça <Link to="/login" className="link"><b>login</b></Link> ou <Link to="/registro" className="link"><b>cadastre-se</b></Link> para continuar.</p>
                    </div>
                 </div>       
                        <img src={Confeiteira} width={320} className="img-fluid m-auto mt-3" alt="Confeiteira" />
                    </div>
                </>
                )
}