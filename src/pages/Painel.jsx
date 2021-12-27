import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgIngr from '../img/imgIngr.png';
import imgReceita from '../img/imgRecei.png';
import imgDoce from '../img/imgDoce.png'

export default function Painel() {
    return (
        <>
            <h1 className="fontTitle">Cadastros</h1>
            <div className="container">
                <div className="d-flex justify-content-center">
                <div className="row mt-5">
                    <div className="col d-flex justify-content-center mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Link to="/cadastroIngrediente" className="link">
                                <Card.Img variant="top" src={imgIngr} />
                                <Card.Body>
                                    <Card.Title><h4 className="cardTitle">Cadastrar Ingrediente</h4></Card.Title>
                                </Card.Body>
                            </Link>
                        </Card>
                    </div>
                    <div className="col d-flex justify-content-center mb-4">

                        <Card style={{ width: '18rem' }}>
                            <Link to="/cadastroReceita" className="link">
                                <Card.Img variant="top" src={imgReceita} />
                                <Card.Body>
                                    <Card.Title><h4 className="cardTitle">Cadastrar Receita</h4></Card.Title>
                                </Card.Body>
                            </Link>
                        </Card>

                    </div>
                    <div className="col d-flex justify-content-center mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Link to="/cadastroDoce" className="link">
                                <Card.Img variant="top" src={imgDoce} />
                                <Card.Body>
                                    <Card.Title><h4 className="cardTitle">Cadastrar Doce</h4></Card.Title>
                                </Card.Body>
                            </Link>
                        </Card>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}