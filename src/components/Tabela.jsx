import React, { useState } from "react";
// import { Dropdown, DropdownButton, InputGroup, Table } from "react-bootstrap";
import MeuModal from "./Modal";
import DoceService from "../services/doce.service"
import IngredienteService from "../services/ingrediente.service"
import ReceitaService from "../services/receita.service"
import { Link } from "react-router-dom"
import { Table } from "react-bootstrap";

export default function Tabela({ titulos, data, atributos }) {
    const [showModalExcluir, setShowModalExcluir] = useState(false);
    const [itemSelecionado, setItemSelecionado] = useState();

    const handleCloseModalExcluir = () => setShowModalExcluir(false);
    const handleShowModalExcluir = () => setShowModalExcluir(true);

    function mostrarModalExcluir(id) {
        handleShowModalExcluir();
        setItemSelecionado(id);
    }

    return (
        <>
            <MeuModal show={showModalExcluir} handleClose={handleCloseModalExcluir} handleShow={handleShowModalExcluir}
                title={"Atenção!"} text={"Deseja excluir o item?"} acao={excluir} variant={"danger"} textBtn={"Excluir"}
            />

            <Table className="tabela mb-5" responsive hover>
                <thead >
                    <tr className="cabecalhoTabela">
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
                                <Link className="m-2" to={"/editar" + titulos[0] + "/" + linha.id}> <img title="Editar" alt="icon" width={25} src="https://img.icons8.com/ios/48/000000/pencil--v1.png"/></Link>
                                <img title="Excluir" onClick={() => mostrarModalExcluir(linha.id)} alt="icon" src="https://img.icons8.com/ios/30/000000/delete--v1.png" width={25} style={{cursor:"pointer"}} />
                            </td>

                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )



    function excluir() {
        if (titulos[0] === 'Receita') {
            ReceitaService.delete(itemSelecionado).then(() => {
                window.location = "/painel";
                console.log("Doce excluído com sucesso!");
            })
                .catch(e => {
                    console.log(e);
                });

        } else if (titulos[0] === 'Doce') {
            DoceService.delete(itemSelecionado).then(() => {
                window.location = "/painel";
                console.log("Doce excluído com sucesso!");
            })
                .catch(e => {
                    console.log(e);
                });
        } else {
            IngredienteService.delete(itemSelecionado).then(() => {
                window.location = "/painel";
                console.log("Ingrediente excluído com sucesso!");
            })
                .catch(e => {
                    console.log(e);
                });

        }

    }


}