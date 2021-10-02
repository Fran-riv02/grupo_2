const fs = require('fs');

let productosJson = fs.readFileSync("./public/js/productos.json", 'utf-8') ;
let productos = JSON.parse(productosJson);

const controlHome = {
    mostrar: function(req,res){
        res.render('home',{productos});
    },
    listarProductos: function(){},
    novedades: function(){},
    masVendidos: function(){},
};





module.exports = controlHome;