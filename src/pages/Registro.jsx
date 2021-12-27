import React from "react";
import { useForm } from 'react-hook-form';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Registro() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <Container >
             <h3 className="fontTitle" >Cadastro</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row className="justify-content-center">
                    <Col xs={8} sm={10} md={4} xl={3}>
                    <label className="inputLabel">Nome</label>
                        <input className="inputForm" type="text" {...register("nome", { required: "Digite o nome" })} />
                        {errors.nome && <p className="error">{errors.nome.message}</p>}
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={8} sm={10} md={4} xl={3}>
                    <label className="inputLabel">Email</label>
                        <input className="inputForm" type="email" {...register("email", { required: "Digite o email" })} />
                        {errors.email && <p className="error">{errors.email.message}</p>}
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={8} sm={10} md={4} xl={3}>
                    <label className="inputLabel">Username</label>
                        <input className="inputForm" type="text" {...register("username", { required: "Digite o username" })} />
                        {errors.email &&  <p className="error">{errors.username.message}</p>}
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={8} sm={10} md={4} xl={3}>
                    <label className="inputLabel">Senha</label>
                        <input className="inputForm" type="password"
                            {...register("senha",
                                {
                                    required: "Digite a senha",
                                    minLength: {
                                        value: 8,
                                        message: "A senha deve ter pelo menos 8 caracteres"
                                    }
                                })}
                        />
                        {errors.senha && <p className="error">{errors.senha.message}</p>}
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={8} sm={10} md={4} xl={3}>
                        <input className="button" type="submit" value={"Cadastrar"}/>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={8} sm={10} md={4} xl={3}>
                        <p className="menosDestaque">Já tem uma conta? <Link to="/login" className="link"><b>Fazer login.</b></Link></p>
                    </Col>
                </Row>
            </form >
        </Container >
    )
}