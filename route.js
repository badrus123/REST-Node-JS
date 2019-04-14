'use strict';
var modelmod10 = require('./model.js');

module.exports = (app) => {
    //halaman index
    app.route('/')
        .get(modelmod10.index);

    //api ngambil semua data
    app.route('/get_all_manusia')
        .get(modelmod10.manusia);
    //dihapus semua
    
    //api buat cari manusia
    app.route('/find_manusia/:carimanusia')
        .get(modelmod10.cari_manusia);

    //api buat nambah manusia
    app.route('/tambah_manusia')
        .post(modelmod10.tambah_manusia);
    //ganti post

    //api buat update manusia
    app.route('/update_manusia')
        .post(modelmod10.update_manusia);
    //ganti post

    //api buat delete manusia
    app.route('/delete_manusia')
        .post(modelmod10.delete_manusia);
    //ganti post
        

};