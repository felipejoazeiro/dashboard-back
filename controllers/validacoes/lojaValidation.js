const mongoose = require("mongoose")
const Usuario = mongoose.model("Usuario")
const Loja = mongoose.model("Loja")

const BaseJoi = require('joi')
const Extension = require('joi-date-extensions')
const Joi = BaseJoi.extend(Extension)



const LojaValidation = {
    admin: (req,res,next) => {
        if(!req.payload.id) return res.sendStatus(402);
        const { loja } = req.query;
        //if(!loja) return res.sendStatus(403);
        Usuario.findById(req.payload.id).then(usuario => {
            if(!usuario) return res.sendStatus(404);
            if(!usuario.loja) return res.sendStatus(405);
            if(!usuario.permissao.includes("admin")) return res.sendStatus(406);
            //if(usuario.loja.toString() !== loja) return res.sendStatus(407);
            next();
        }).catch(next);
    },
    show: {
        params: {
            id: Joi.string().alphanum().length(24).required()
        }
    },
    store: {
        body: {
            nome:  Joi.string().required(),
            cnpj: Joi.string().length(18).required(),
            email: Joi.string().email().required(),
            telefones: Joi.array().items(Joi.string()).required(),
            endereco: Joi.object({
                local: Joi.string().required(),
                numero: Joi.string().required(),
                complemento: Joi.string().optional(),
                bairro: Joi.string().required(),
                cidade: Joi.string().required(),
                CEP: Joi.string().required()
            }).required()
        }
    },
    update: {
        body: {
            nome:  Joi.string().optional(),
            cnpj: Joi.string().length(18).optional(),
            email: Joi.string().email().optional(),
            telefones: Joi.array().items(Joi.string()).optional(),
            endereco: Joi.object({
                local: Joi.string().required(),
                numero: Joi.string().required(),
                complemento: Joi.string().optional(),
                bairro: Joi.string().required(),
                cidade: Joi.string().required(),
                CEP: Joi.string().required()
            }).optional()
        }
    }
}

module.exports = {LojaValidation}