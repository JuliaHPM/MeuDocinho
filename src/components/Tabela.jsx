import React, { useState } from "react";
import { Dropdown, DropdownButton, InputGroup, Table } from "react-bootstrap";
import MeuModal from "./Modal";

export default function Tabela({ titulos, data, atributos }) {
    const [show, setShow] = useState(false);
    const [itemExcluir, setItemExcluir] = useState();
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function mostrarModal(id){
        handleShow();
        setItemExcluir(id);
    }
  
    function excluir(){

    }

    return (
        <>
        <MeuModal show={show} handleClose={handleClose} handleShow={handleShow}
        title={"Atenção!"} text={"Deseja excluir o 'ingrediente'?"} acao={excluir} variant={"danger"} textBtn={"Excluir"}
        />
            <Table className="tabela mb-5" responsive bordered hover>
                <thead>
                    <tr>
                        {titulos.map((titulo, i) => (
                            <th key={i}>{titulo}</th>
                        ))}
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map(linha => (
                        <tr key={linha.id}>
                            {atributos.map(a => (
                                <td key={a}>{linha[a]}</td>
                            ))}

                            <td >
                                <InputGroup className="d-flex justify-content-center" >
                                    <DropdownButton variant="outline-secondary" id="input-group-dropdown-1">
                                        <Dropdown.Item href="#">Editar</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item onClick={()=> mostrarModal(linha.id)}>Excluir</Dropdown.Item>
                                    </DropdownButton>
                                </InputGroup>

                            </td>

                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}