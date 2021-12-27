import React from "react";
import Logo from "../img/Logo.png";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Perfil from "../img/perfil";
import IconIngredientes from "../img/ingredientes.png"
import IconReceita from "../img/receita.png"
import IconDoce from "../img/doce.png"
import IconLogout from "../img/logout.png"
import IconCozinheira from "../img/cozinheira.png"
import IconAjuda from "../img/ajuda.png"
import IconConf from "../img/configuracao.png"

export default function Menu() {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="white" className="shadow-sm p-1 mb-5 bg-white" >
                <Container>
                    <Navbar.Brand href="/">
                        <img src={Logo} alt="Logo" width={210} height={35} />
                        {/* MeuDocinho */}
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link to="/" className="link"> Home </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/painel" className="link"> Painel </Link>
                            </Nav.Link>
                            <NavDropdown title="Cadastros" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/cadastroIngrediente"><img src={IconIngredientes} alt="icon" width={21} /> Ingrediente</NavDropdown.Item>
                                <NavDropdown.Item href="/cadastroReceita"><img src={IconReceita} alt="icon" width={21} /> Receita</NavDropdown.Item>
                                <NavDropdown.Item href="/cadastroDoce"><img src={IconDoce} alt="icon" width={21} /> Doce</NavDropdown.Item>
                                {/* <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                            </NavDropdown>
                            <Nav.Link href="/cardapio"> Cardápio</Nav.Link>
                        </Nav>
                        <Nav className="align-items-center">
                        <Nav.Link>
                                <Link to="/login" className="link"> Login </Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link to="/registro" className="link"> Cadastre-se </Link>
                            </Nav.Link>

                            <NavDropdown title={<Perfil />} id="collasible-nav-dropdown">

                                <NavDropdown.Item disabled href="#action/3.1" >
                                    <img src={IconCozinheira} alt="icon" width={21} /> Perfil </NavDropdown.Item>
                                <NavDropdown.Item disabled href="#action/3.2"> <img src={IconAjuda} alt="icon" width={21} /> Ajuda</NavDropdown.Item>
                                <NavDropdown.Item disabled href="#action/3.2"><img src={IconConf} alt="icon" width={21} /> Configurações</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3"><img src={IconLogout} alt="icon" width={21} /> Logout</NavDropdown.Item>
                            </NavDropdown>

                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}