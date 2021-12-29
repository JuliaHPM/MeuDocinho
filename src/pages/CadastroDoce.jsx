import React from "react";
import { useForm } from 'react-hook-form';
import { Container, Row, Col } from 'react-bootstrap';
import doceService from "../services/doce.service";

export default function CadastroDoce() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);

        doceService.create(data).then(() => {
            // console.log("Doce adicionado com sucesso!");
            window.location = "/painel";
            
        })
            .catch(e => {
                console.log(e);
            });
    }

    return (
        <Container className="w-75">
            <h3 className="fontTitle mb-4">Cadastro Doce</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col>
                    <label className="inputLabel">Nome</label>
                        <input className="inputForm" type="text" {...register("nome",
                            { required: "Digite o nome do doce" })} />
                        {errors.nome && <p className="error">{errors.nome.message}</p>}
                    </Col>
                    <Col>
                    <label className="inputLabel">Categoria</label>
                        <input className="inputForm" type="text" {...register("categoria",
                            { required: "Escolha a categoria do doce" })} />
                        <p className="error">{errors.categoria?.message}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <label className="inputLabel">Receitas</label>
                        <input className="inputForm" type="text" {...register("receitas",
                            { required: "Escolha as receitas do doce" })} />
                        <p className="error">{errors.receitas?.message}</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                    <label className="inputLabel">Tempo de preparo</label>
                        <input className="inputForm" type="text" {...register("tempoPrep")} />
                        {/* automático, soma do tempo de preparo das receitas */}
                    </Col>
                    <Col  > 
                    <label className="inputLabel">Rendimento (g/ml)</label>
                        <input className="inputForm" type="text" {...register("rendimento",
                            { required: "Digite o rendimento do doce" })} />
                        <p className="error">{errors.rendimento?.message}</p>
                    </Col>
                    <Col>
                    <label className="inputLabel">Custo da produção</label>
                        <input className="inputForm" type="text" {...register("custo")} />
                        {/* automático, soma do custo das receitas */}
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                    <label className="inputLabel">Margem de lucro (%)</label>
                        <input className="inputForm" type="text" {...register("margemLucro",
                            { required: "Digite a margem de lucro desejada" })} />
                        <p className="error">{errors.margemLucro?.message}</p>
                    </Col>
                    <Col>
                    <label className="inputLabel">Valor total</label>
                        <input className="inputForm" type="text" {...register("valorTotal")} />
                        {/* automático*/}
                    </Col>
                    <Col>
                    <label className="inputLabel">Valor total com margem</label>
                        <input className="inputForm" type="text" {...register("valorTotalMargem")} />
                        {/* automático*/}
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <label className="inputLabel">Anotações</label>
                        <input className="inputForm" type="text" {...register("anotacoes")} />
                    </Col>
                    <Col>
                    <label className="inputLabel">Imagem do doce</label>
                        <input className="inputForm" type="img" {...register("imagem")} />
                    </Col>
                </Row>





                <input className="button" type="submit" value={"Cadastrar"} />
            </form>
        </Container >
    )
}
