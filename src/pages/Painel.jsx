import React, { useEffect, useState } from "react";
import { Card, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgIngr from '../img/imgIngr.png';
import imgReceita from '../img/imgRecei.png';
import imgDoce from '../img/imgDoce.png';
import Tabela from "../components/Tabela";
import { useFetch } from "../hooks/useFetch";

export default function Painel() {

    const [titulos, setTitulos] = useState(["Ingrediente", "Marca", "ml/g embalagem", "Preço Unit.","Preço g/ml"]);
    const [atributos, setAtributos] = useState(["nome", "marca", "quantEmb", "precoUnit","precogml"]);
    const [url, setUrl] = useState("/ingredientes");
    const { res } = useFetch(url); //, fetchError, isLoading
    const [data, setData] = useState([]);

    useEffect(() => {
        // console.log(res);
        setData(res);
    }, [res])

    function changeTable(value) {
        if (value === "ingrediente") {
            setTitulos(["Ingrediente", "Marca", "ml/g embalagem", "Preço Unit.","Preço g/ml"]);
            setAtributos(["nome", "marca", "quantEmb", "precoUnit","precogml"]);
            setUrl("/ingredientes");

        } else if (value === "receita") {
            setTitulos(["Receita", "Categoria", "Ingredientes", "Tempo Preparo", "Rendimento","Custo",]);
            setAtributos(["nome", "categoria", "ingredientes", "tempoPrep", "rendimento","custo"])
            setUrl("/receitas");

        } else {
            setTitulos(["Doce", "Categoria", "Receitas", "Tempo Preparo", "Rendimento","Custo","Valor Final"]);
            setAtributos(["nome", "categoria", "receitas", "tempoPrep", "rendimento","custo","valorTotalMargem"]);
            setUrl("/doces");
        }
    }

    return (
        <>
            <div className="pink-background ">
                <div className="container">
                    <h1 className="fontTitle">Cadastros</h1>
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
            </div>
            <Container>
                <div className="d-flex justify-content-start">
                    <h1 className="fontTitle pb-3" >Meus Cadastros</h1>
                </div>
                <Nav variant="pills" defaultActiveKey="link-1">
                    <Nav.Item >
                        <Nav.Link className="navPills" eventKey="link-1" onClick={() => changeTable("ingrediente")}>Ingredientes</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navPills" eventKey="link-2" onClick={() => changeTable("receita")}>Receitas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navPills" eventKey="link-3" onClick={() => changeTable("doces")}>
                            Doces
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

                <Tabela titulos={titulos} data={data} atributos={atributos} />
            </Container>
            <footer className="m-5"></footer>
        </>
    )
}