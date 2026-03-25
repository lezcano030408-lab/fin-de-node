const db = require('../config/db');

exports.insertar = (nombre, descripcion, callback) => {
    const sql = 'INSERT INTO notas (nombre, descripcion) VALUES (?, ?)';
    db.query(sql, [nombre, descripcion], callback);
};

exports.obtener = (callback) => {
    db.query('SELECT * FROM notas', callback);
};

exports.editar = (id, nombre, descripcion, callback) => {
    const sql = 'UPDATE notas SET nombre=?, descripcion=? WHERE id=?';
    db.query(sql, [nombre, descripcion, id], callback);
};