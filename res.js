'use strict';

exports.ok = (values, res) => {
    var data = {
        'status': 200,
        'values': values
    };
    res.json(data); //soal
    res.end();
};

exports.gagal = (values, res) =>{
    var data = {
        'status': 500,
        'values': values
    };
    res.json(data); //soal
    res.end();
};