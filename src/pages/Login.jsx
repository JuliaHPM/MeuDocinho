import React from "react";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

export default function Login() {
    return (
        <>

            <Container>
                <h1 className="fontTitle m-4">Login</h1>
                <Row className="justify-content-center ">
                    <Col>
                        <Input placeholder="Usuário" className="m-auto"></Input>
                    </Col>
                </Row>
                <Row className="justify-content-center ">
                    <Col>
                        <Input placeholder="Senha" type="password"></Input>
                    </Col>
                </Row>
                <Row className="justify-content-center ">
                    <Col>
                        <button className="btnLogin">Entrar</button>
                    </Col>
                </Row>
                <p className="mt-4 menosDestaque">Não tem uma conta? <Link to="/registro" className="link"><b>Cadastre-se</b></Link>.</p>

            </Container>

        </>
    )
}