const express = require('express');
const router = express.Router();

const controller = require('../controllers/notas.controller');

router.post('/insertar', controller.insertarNota);
router.get('/notas', controller.obtenerNotas);
router.put('/notas/:id', controller.editarNota);

module.exports = router;