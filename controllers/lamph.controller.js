const {request, response} = require('express');
const moment = require('moment');

const Lamph = require('../models/lamph.model');

const agregarLamph = async(req=request, res=response)=>{
    const {voltaje, corriente, estado_sensor} = req.body;
    try{
        
        const fecha_inicio = moment();

        const lamph = new Lamph({
            voltaje, 
            corriente, 
            estado_sensor,
            fecha_inicio,
            fecha_fin: fecha_inicio
        });

        await lamph.save();

        res.status(200).json({
            ok: true,
            lamph
        })

    }catch(e){
        console.log(e);
        return res.status(500).json({
            ok: false,
            msg: 'Error en el servidor'
        });
    }
}

const obtenerLamphs = async(req=request, res=response)=>{
    try{

        const lamphs = await Lamph.find();

        const fecha = lamphs[0].fecha_inicio;

        return res.status(200).json({
            ok: true,
            lamphs
        });

    }catch(e){
        console.log(e);
        return res.status(500).json({
            ok: false,
            msg: 'Error en el servidor'
        })
    }
}

const actualizarLamphs = async(req=request, res=response)=>{
    try{

        const {id} = req.params;
        const {actualizado} = req.body;

        const fecha_fin = moment();

        const lamph = await Lamph.findByIdAndUpdate(id, {
            actualizado,
            fecha_fin
        });

        return res.status(200).json({
            ok: true,
            lamph
        })

    }catch(e){
        console.log(e);
        return res.status(500).json({
            ok: false,
            msg: 'Error en el servidor'
        })
    }
}

module.exports = {
    agregarLamph,
    obtenerLamphs,
    actualizarLamphs
}