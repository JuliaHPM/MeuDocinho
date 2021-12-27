import React from "react";
import { useForm } from 'react-hook-form';
import { Container, Row, Col } from 'react-bootstrap';

function CadastroIngrediente() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <Container className="w-75 ">
            <h3 className="fontTitle mb-4">Cadastro Ingrediente</h3>
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
                        <input className="inputForm" type="text" {...register("quantEmb",
                            { required: "Digite a quantidade da embalagem" })} />
                        {errors.quantEmb && <p className="error">{errors.quantEmb.message}</p>}
                    </Col>
                    <Col>
                        <label className="inputLabel">Preço unitário</label>
                        <input className="inputForm" type="text" {...register("precoUnit",
                            { required: "Digite o preço unitário" })} />
                        {errors.precoUnit && <p className="error">{errors.precoUnit.message}</p>}
                    </Col>
                    <Col>
                        <label className="inputLabel">Preço por g/ml</label>
                        <input className="inputForm" type="text" {...register("precogml")} />
                    </Col>
                </Row>
                <label className="inputLabel">Imagem do ingrediente</label>
                <input className="inputForm" type="img" {...register("imagem")} />
                <Row>
                    <Col>
                        <input className="button" type="submit" />
                    </Col>
                </Row>


            </form>
        </Container>
    )
}
export default CadastroIngrediente;