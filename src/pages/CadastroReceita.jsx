/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import { Container, Row, Col } from 'react-bootstrap';
import receitaService from "../services/receita.service";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function CadastroReceita() {

    const { resposta } = useFetch("/ingredientes"); //, fetchError, isLoading
    const [opcoes, setOpcoes] = useState([]);

    useEffect(() => {
        // console.log(res);
        setOpcoes(resposta);
    }, [resposta])
    
    const teste = opcoes && opcoes.map(opcao => opcao.nome);
    console.log(teste);

    const options = [
        {value:"farinha", label:"Farinha"}
    ]



    const { handleSubmit, control, register, setValue,  formState: { errors } } = useForm();

    let { id } = useParams();

    const { res } = useFetch(id && "/receitas/" + id);
    const [dados, setDados] = useState([]);

    useEffect(() => {
        // console.log(res);
        setDados(res);
    }, [res])

    useEffect(() => {
        setValue("nome", id && dados && dados.nome);
        setValue("categoria", id && dados && dados.categoria);
        setValue("ingredientes", id && dados && dados.ingredientes);
        setValue("tempoPrep", id && dados && dados.tempoPrep);
        setValue("rendimento", id && dados && dados.rendimento);
        setValue("custo", id && dados && dados.custo);
        setValue("anotacoes", id && dados && dados.anotacoes);
        setValue("imagem", id && dados && dados.imagem);
    }, [dados])

    const onSubmit = data => {
        // console.log(data);

        if (!id) {
            receitaService.create(data).then(() => {
                window.location = "/painel";
                console.log("Receita adicionada com sucesso!");
            })
                .catch(e => {
                    console.log(e);
                });
        } else {
            receitaService.update(id, data).then(() => {
                window.location = "/painel";
                console.log("Receita atualizada com sucesso!");
            })
                .catch(e => {
                    console.log(e);
                });
        }

    }

   

    return (
        <><Container className="w-75">
            <h3 className="fontTitle" >Cadastro Receita</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Row className="d-flex">
                    <Col sm>
                        <label className="inputLabel">Nome</label>
                        <input className="inputForm" type="text" {...register("nome",
                            { required: "Digite o nome da receita" })} />
                        {errors.nome && <p className="error">{errors.nome.message}</p>}
                    </Col>
                    <Col sm>
                        <label className="inputLabel">Categoria</label>
                        <input className="inputForm" type="text" {...register("categoria",
                            { required: "Escolha a categoria da receita" })} />
                        <p className="error">{errors.categoria?.message}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                       <label className="inputLabel">Ingredientes</label>
                        <Controller
                            control={control}
                            defaultValue={options.map(c => c.value)}
                            name="ingredientes"
                            render={({ field: { onChange, value, ref } }) => (
                                <Select
                                    inputRef={ref}
                                    value={options.find(c => c.value === value)}
                                    onChange={val => onChange(val.map(c => c.value))}
                                    options={options}
                                    isMulti
                                    
                                />
                            )}
                        />
                        
                        {/* <input className="inputForm" type="text" {...register("ingredientes",
                            { required: "Escolha os ingredientes da receita" })} />
                        <p className="error">{errors.ingredientes?.message}</p> */}
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <label className="inputLabel">Tempo de preparo</label>
                        <input className="inputForm" type="text" {...register("tempoPrep",
                            { required: "Digite o tempo de preparo da receita" })} />
                        <p className="error">{errors.tempoPrep?.message}</p>
                    </Col>
                    <Col sm xs={6}>
                        <label className="inputLabel">Rendimento (g/ml)</label>
                        <input className="inputForm" type="text" {...register("rendimento",
                            { required: "Digite o rendimento da receita" })} />
                        <p className="error">{errors.rendimento?.message}</p>
                    </Col>
                    <Col>
                        <label className="inputLabel">Custo da receita</label>
                        <input className="inputForm" type="text" {...register("custo",
                            { required: "Digite o custo da receita" })} />
                        <p className="error">{errors.custo?.message}</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <label className="inputLabel">Anotações</label>
                        <input className="inputForm" type="text" {...register("anotacoes")} />
                    </Col>
                    <Col sm>
                        <label className="inputLabel">Imagem da receita</label>
                        <input className="inputForm" type="img" {...register("imagem")} />
                    </Col>
                </Row>
                <Row className="justify-content-end" >
                    {/* className="justify-content-between" */}
                    <Col sm={4} md={3} lg={2}>
                        <Link to="/painel"><input className="btnCancelar" type="button" value={"Cancelar"} /></Link>
                    </Col>
                    <Col sm={8} md={3} lg={2}>
                        {!id && <input className="button" type="submit" value={"Cadastrar"} />}
                        {id && <input className="button" type="submit" value={"Salvar"} />} </Col>
                </Row>

            </form>
        </Container>
        </>
    )
}
