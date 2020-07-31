import React, { useState, useEffect } from "react";

import TemplateBase from "../../components/TemplateBase";
import { Link } from "react-router-dom";
import FormField from "../../components/FormField";
import Button from "../../components/Button";

const RegisterCategory = () => {
  const [category, setCategory] = useState([]);

  const initialValues = {
    name: "",
    description: "",
    color: "",
  };

  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleState(infoEvent) {
    setValue(infoEvent.target.getAttribute("name"), infoEvent.target.value);
  }

  function handleSubmit(infoEvent) {
    infoEvent.preventDefault(); // eslint-disable-next-line
    {
      /**Evitar o reload da página ao cadastrar */
    }

    setCategory([...category, values]);
    // eslint-disable-next-line
    {
      /**"..." significa pegar tudo que já tinha, trazer isso */
    }

    setValues(initialValues);
  }

  useEffect(() => {
    const URL = "https://geoflix2.herokuapp.com/category";

    fetch(URL).then(async (serverAnswer) => {
      const answer = await serverAnswer.json();
      setCategory([...answer]);
    });
  }, []);

  {
    /**primeira parte do useEffect, é o efeito que quero que aconteça em determinado momento
o array é o tempo. [] vazio é pra fazer 1x só */
  }

  return (
    <TemplateBase>
      <h1>Cadastro de Categoria: {values.name}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleState}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleState}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleState}
        />

        <Button>Cadastrar</Button>
      </form>

      <ul>
        {category.map((category, index) => {
          return <li key={`${category}${index}`}>{category.name}</li>;
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </TemplateBase>
  );
};

export default RegisterCategory;
