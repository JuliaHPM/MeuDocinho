import React from "react";
// import Input from "../components/Input";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import userService from "../services/user.service";
// import { useContext } from "react";
// import { LoginContext } from "../contexts/LoginContext";
import { useState } from "react";

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    //const { toggleLogin } = useContext(LoginContext);
    const [mensagemUsuario, setMensagemUsuario] = useState();
    const [mensagemSenha, setMensagemSenha] = useState();

    const onSubmit = data => {
        console.log(data);
        userService.login(data).then(resp => {
            console.log(resp.data.message);
            if(resp.data.message === "Login realizado com sucesso!"){
                localStorage.setItem("login",data.username);
                window.location = "/painel";
                //toggleLogin();
            }else if(resp.data.message === "Senha Incorreta"){
               setMensagemSenha("Senha Incorreta");
            }else{
                setMensagemUsuario("Usuário não encontrado");
            }
        })
            .catch(e => {
               // console.log(e);
                setMensagemUsuario("Usuário não encontrado");
            });
    }

    return (
        <>
            <Container >
                {/* className="w-75" */}
                <h1 className="fontTitle m-2">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="justify-content-center" >
                        <Col xs={8} sm={6} md={4} lg={4} xl={3} xxl={2}>
                            <label className="inputLabel">Usuário</label>
                            <input className="inputForm" type="text" {...register("username",
                                { required: "Digite o nome de usuário!" })} />
                            <p className="error">{errors.username?.message}</p>
                            {mensagemUsuario && <p className="error">{mensagemUsuario} </p>}
                        </Col>
                    </Row>
                    <Row className="justify-content-center ">
                        <Col xs={8} sm={6} md={4} lg={4} xl={3} xxl={2}>
                            <label className="inputLabel">Senha</label>
                            <input className="inputForm" type="password" {...register("senha",
                                { required: "Digite a senha!" })} />
                            <p className="error">{errors.senha?.message}</p>
                            {mensagemSenha && <p className="error">{mensagemSenha} </p>}
                        </Col>
                        
                    </Row>
                    <Row className="justify-content-center ">
                        <Col xs={8} sm={6} md={4} lg={4} xl={3} xxl={2}>
                            <button className="button mt-3" type="submit">Entrar</button>
                        </Col>

                    </Row>
                    <p className=" menosDestaque">Não tem uma conta? <Link to="/registro" className="link"><b>Cadastre-se</b></Link>.</p>
                </form>
            </Container>
            
        </>
    )
}

// import PropTypes from 'prop-types';

// async function loginUser(dados){
//     return fetch('http://localhost:8080/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(dados)
//       })
//         .then(data => data.json())
//      }


// submitHandle(data, setToken);

// async function submitHandle(e, data, setToken){
//     e.preventDefault();
//     const token = await loginUser(data);
//     setToken(token);
// }

// const haandleSubmit = async e => {
    //     e.preventDefault();
    //     const token = await loginUser(data);
    //     setToken(token);
    //   }

    // Login.propTypes = {
    //     setToken: PropTypes.func.isRequired
    // }