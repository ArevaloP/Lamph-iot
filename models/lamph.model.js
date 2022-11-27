const {Schema, model} = require('mongoose');


const LamphSchema = Schema({

    voltaje: {
        type: String,
        required: [true, 'Falta el voltaje']
    },
    corriente: {
        type: String,
        required: [true, 'Falta la corriente']
    },
    estado_sensor: {
        type: Boolean,
        default: false
    },
    actualizado: {
        type: Boolean,
        default: false
    },
    fecha_inicio: {
        type: Date
    },
    fecha_fin: {
        type: Date
    }

});

module.exports = model('Lamph', LamphSchema);