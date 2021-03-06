import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { Container, Row, Col } from 'react-bootstrap';
import ingredienteService from "../services/ingrediente.service";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function CadastroIngrediente() {
    const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm();

    let { id } = useParams();

    const { res } = useFetch(id && "/ingredientes/" + id);
    const [dados, setDados] = useState([]);

    useEffect(() => {
        // console.log(res);
        setDados(res);
    }, [res])

    useEffect(() => {
        setValue("nome", id && dados && dados.nome);
        setValue("marca", id && dados && dados.marca);
        setValue("quantEmb", id && dados && dados.quantEmb);
        setValue("precoUnit", id && dados && dados.precoUnit);
        setValue("precogml", id && dados && dados.precogml);
        setValue("imagem", id && dados && dados.imagem);
    }, [dados, id, setValue])

    const onSubmit = data => {
        // console.log(data);

        if (!id) {
            ingredienteService.create(data).then(() => {
                window.location = "/painel";
                console.log("Ingrediente adicionado com sucesso!");
            })
                .catch(e => {
                    console.log(e);
                });
        } else {
            ingredienteService.update(id, data).then(() => {
                window.location = "/painel";
                console.log("Ingrediente atualizado com sucesso!");
            })
                .catch(e => {
                    console.log(e);
                });
        }
    }

    function calculoPrecogml(e) {
        const precoUnit = e.target.name === "precoUnit" ? e.target.value : getValues("precoUnit");
        const quantEmb = e.target.name === "quantEmb" ? e.target.value : getValues("quantEmb"); //.replace(",", ".")
        if (precoUnit && quantEmb) {
            const precogml = (parseFloat(precoUnit) / parseFloat(quantEmb) ).toFixed(4);
            setValue("precogml", String(precogml).replace(".", ","));
        }
    }

    return (
        <Container className="w-75 ">
            {!id && <h3 className="fontTitle mb-4">Cadastro Ingrediente</h3>}
            {id && <h3 className="fontTitle mb-4">Editar Ingrediente</h3>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col>
                        <label className="inputLabel">Nome</label>
                        <input className="inputForm" type="text" {...register("nome",
                            { required: "Digite o nome do ingrediente" })} />
                        {errors.nome && <p className="error">{errors.nome.message}</p>}
                    </Col>
                    <Col>
                        <label className="inputLabel">Marca</label>
                        <input className="inputForm" type="text" {...register("marca",
                            { required: "Digite a marca do ingrediente" })} />
                        {errors.marca && <p className="error">{errors.marca.message}</p>}
                    </Col>
                </Row>
                <Row>
                    <Col md>
                        <label className="inputLabel">Quantidade da embalagem (g/ml)</label>
                        <input className="inputForm" type="text" {...register("quantEmb", { onChange: (e) => calculoPrecogml(e) },
                            { required: "Digite a quantidade da embalagem" })} />
                        {errors.quantEmb && <p className="error">{errors.quantEmb.message}</p>}
                    </Col>
                    <Col>
                        <label className="inputLabel">Pre??o unit??rio</label>
                        <input className="inputForm" type="text"  {...register("precoUnit", { onChange: (e) => calculoPrecogml(e) },
                            { required: "Digite o pre??o unit??rio" })} />
                        {errors.precoUnit && <p className="error">{errors.precoUnit.message}</p>}
                    </Col>
                    <Col>
                        <label className="inputLabel">Pre??o por g/ml</label>
                        <input className="inputForm" type="text" disabled {...register("precogml")} />
                    </Col>
                </Row>
                <label className="inputLabel">Imagem do ingrediente</label>
                <input className="inputForm" type="text" {...register("imagem")} />
                {/* imagem? */}
                <Row className="justify-content-end">
                    <Col sm={4} md={3} lg={2}>
                        <Link to="/painel"><input className="btnCancelar" type="button" value={"Cancelar"} /></Link>
                    </Col>
                    <Col sm={8} md={3} lg={2}>
                    {!id && <input className="button" type="submit" value={"Cadastrar"} />}
                        {id && <input className="button" type="submit" value={"Salvar"} />}  </Col>
                </Row>


            </form>
        </Container>
    )
}

export default CadastroIngrediente;