import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Col, Row, Container } from "react-bootstrap";

export default function Cardapio() {
    const { res } = useFetch("/doces"); //, fetchError, isLoading
    const [data, setData] = useState([]);


    useEffect(() => {
        // console.log(res);
        setData(res);
    }, [res])

    return (
        <>
            <Container>
                <h1 className="fontTitle mb-5">Cardápio</h1>
                <Row >
                    {data && data.map(doce => (

                        <Col  key={doce.id}>
                            <h4>{doce.nome}</h4>
                            <p className=" justify-content-end">{doce.receitas}</p>
                            <p d-flex="true" className="d-flex justify-content-end">R${doce.valorTotalMargem}</p>
                        </Col>

                    ))}
                </Row>
            </Container>
        </>
    )
}