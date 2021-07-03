import Joi from "joi";

export const categoriasCreateOneBody = Joi.object()
  .keys({
    nome: Joi.string().required(),
    descricao: Joi.string().required(),
  })
  .required();

export const categoriasGetOneParams = Joi.object()
  .keys({
    categoria_id: Joi.number().integer().required(),
  })
  .required();

export const categoriasUpdateOneParams = Joi.object()
  .keys({
    categoria_id: Joi.number().integer().required(),
  })
  .required();

export const categoriasUpdateOneBody = Joi.object()
  .keys({
    nome: Joi.string(),
    descricao: Joi.string(),
  })
  .min(1)
  .required();

export const categoriasDeleteOneParams = Joi.object()
  .keys({
    categoria_id: Joi.number().integer().required(),
  })
  .required();
