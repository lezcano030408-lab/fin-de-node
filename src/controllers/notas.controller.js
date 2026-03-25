const service = require('../services/notas.service');

exports.insertarNota = (req, res) => {
    const { nombre, descripcion } = req.body;

    service.insertar(nombre, descripcion, (err) => {
        if (err) return res.send('Error');

        res.send('Guardado');
    });
};

exports.obtenerNotas = (req, res) => {
    service.obtener((err, data) => {
        if (err) return res.send('Error');

        res.json(data);
    });
};

exports.editarNota = (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;

    service.editar(id, nombre, descripcion, (err) => {
        if (err) return res.send('Error');

        res.send('Actualizado');
    });
};