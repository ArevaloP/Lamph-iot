const {Router} = require('express');
const {check} = require('express-validator');

const { agregarLamph, obtenerLamphs, actualizarLamphs, obtenerActivoRangoFechas } = require('../controllers/lamph.controller');
const { validarCampos } = require('../middlewares/validar-campos.middleware');

const router = Router();

router.post('/', [
    check('voltaje', 'Hace falta el voltaje').not().isEmpty(),
    check('corriente', 'Hace falta la corriente').not().isEmpty(),
    check('estado_sensor', 'Hace falta el estado').isBoolean(),
    validarCampos
], agregarLamph);

router.get('/', obtenerLamphs)

router.get('/sensor', obtenerActivoRangoFechas);

router.put('/:id',[
    check('id', 'Id No valido').isMongoId(),
    validarCampos
], actualizarLamphs)

module.exports = router;

