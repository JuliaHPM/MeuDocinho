import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { Container, Row, Col } from 'react-bootstrap';
import doceService from "../services/doce.service";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function CadastroDoce() {
    const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm();

    let { id } = useParams();

    const { res } = useFetch(id && "/doces/" + id);
    const [dados, setDados] = useState([]);

    useEffect(() => {
        // console.log(res);
        setDados(res);
    }, [res])

    useEffect(() => {
        setValue("nome", id && dados && dados.nome);
        setValue("categoria", id && dados && dados.categoria);
        setValue("receitas", id && dados && dados.receitas);
        setValue("tempoPrep", id && dados && dados.tempoPrep);
        setValue("rendimento", id && dados && dados.rendimento);
        setValue("custo", id && dados && dados.custo);
        setValue("margemLucro", id && dados && dados.margemLucro);
        setValue("valorTotal", id && dados && dados.valorTotal);
        setValue("valorTotalMargem", id && dados && dados.valorTotalMargem);
        setValue("anotacoes", id && dados && dados.anotacoes);
        setValue("imagem", id && dados && dados.imagem);
    }, [dados])

    const onSubmit = data => {
        console.log(data);
        if (!id) {
            doceService.create(data).then(() => {
                // console.log("Doce adicionado com sucesso!");
                window.location = "/painel";

            })
                .catch(e => {
                    console.log(e);
                });
        } else {
            doceService.update(id, data).then(() => {
                // console.log("Doce adicionado com sucesso!");
                window.location = "/painel";

            })
                .catch(e => {
                    console.log(e);
                });
        }

    }

    function calculoValorMargem(e) {
        const margem = e.target.name === "margemLucro" ? e.target.value : getValues("margemLucro");
        const valorTotal = e.target.name === "valorTotal" ? e.target.value.replace(",", ".") : getValues("valorTotal").replace(",", ".");
        const totalMargem = valorTotal && margem && ((parseFloat(valorTotal) * (parseFloat(margem) / 100)) + parseFloat(valorTotal)).toFixed(2);
        setValue("valorTotalMargem", String(totalMargem).replace(".", ","));
    }

    return (
        <Container className="w-75">
            {!id && <h3 className="fontTitle mb-4">Cadastro Doce</h3>}
            {id && <h3 className="fontTitle mb-4">Editar Doce</h3>}
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
                        <input className="inputForm" type="text"  {...register("categoria",
                            { required: "Escolha a categoria do doce" })} />
                        <p className="error">{errors.categoria?.message}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label className="inputLabel">Receitas</label>
                        <input className="inputForm" type="text"  {...register("receitas",
                            { required: "Escolha as receitas do doce" })} />
                        <p className="error">{errors.receitas?.message}</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <label className="inputLabel">Tempo de preparo</label>
                        <input className="inputForm" type="text"  {...register("tempoPrep")} />
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
                        {/* automático, soma do custo das receitas 
                        (preço ingredientes + horas trabalhadas(deve pegar o tempo de preparo de cada receita+tempo de montar o doce?), 
                        vira preço de mão de obra + preço de embalagens
                         utilizadas+custos fixos(multiplica o total dos custos fixos por 3 e divide por 100))*/}
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <label className="inputLabel">Margem de lucro (%)</label>
                        <input className="inputForm" type="number" {...register("margemLucro", { onChange: (e) => calculoValorMargem(e) },
                            { required: "Digite a margem de lucro desejada" })} />
                        <p className="error">{errors.margemLucro?.message}</p>
                    </Col>
                    <Col>
                        <label className="inputLabel">Valor total</label>
                        <input className="inputForm" type="text" {...register("valorTotal", { onChange: (e) => calculoValorMargem(e) })} />
                        {/* automático*/}
                    </Col>
                    <Col>
                        <label className="inputLabel">Valor total com margem</label>
                        <input disabled className="inputForm" type="text" {...register("valorTotalMargem")} />
                        {/* automático (soma o custo de produção com a multiplicação do custo pela divisão da margem por 100 )*/}
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
                <Row className="justify-content-end">
                    <Col sm={4} md={3} lg={2}>
                        <Link to="/painel"><input className="btnCancelar" type="button" value={"Cancelar"} /></Link>
                    </Col>
                    <Col sm={8} md={3} lg={2}>
                        {!id && <input className="button" type="submit" value={"Cadastrar"} />}
                        {id && <input className="button" type="submit" value={"Salvar"} />}
                    </Col>
                </Row>





            </form>
        </Container >
    )
}
