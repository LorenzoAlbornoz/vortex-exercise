function extraerInformacion(lineas) {
    const productos = {};
    const monedaDefault = "Peso Argentino";
    const monedaMap = {
        "$": "Peso Argentino",
        "us$": "Dólar",
        "€": "Euro",
        "£": "Libra",
        "¥": "Yen"
    };

    const separadorRegex = /(?:=|:|->)\s*/;
    const precioRegex = /(\$|us\$|€|£|¥)?\s*([\d,.]+)/;
    const valoracionRegex = /\((.*?)\)$/;
    const marcaRegex = /marca\s*(\w+)/i;

    lineas.forEach(linea => {
        linea = linea.trim();
        
        let [nombre, resto] = linea.split(separadorRegex);

        if (resto) {
            nombre = nombre.trim();
            
            let valoracion = null;
            const valoracionMatch = resto.match(valoracionRegex);
            if (valoracionMatch) {
                valoracion = valoracionMatch[1].trim();
                resto = resto.replace(valoracionRegex, '').trim();
            }
            
            const precioMatch = resto.match(precioRegex);
            if (precioMatch) {
                const simboloMoneda = precioMatch[1];
                const precio = parseFloat(precioMatch[2].replace(",", ""));
                const moneda = simboloMoneda ? (monedaMap[simboloMoneda.toLowerCase()] || simboloMoneda) : monedaDefault;
                
                const producto = {
                    nombre: nombre,
                    precio: precio.toFixed(2),
                    moneda: moneda
                };
                
                if (valoracion) {
                    producto.valoracion = valoracion;
                }
                
                const marcaMatch = nombre.match(marcaRegex);
                let marca;
                if (marcaMatch) {
                    marca = marcaMatch[1].toLowerCase();
                    producto.nombre = nombre.replace(marcaRegex, '').trim();
                } else {
                    marca = "Sin marca especificada";
                }
                
                if (!productos[marca]) {
                    productos[marca] = [];
                }
                productos[marca].push(producto);
            }
        }
    });
    
    return productos;
}

const lineas = [
    "Aspiradora=45200",
    "Madera Balsa x 100gr =965 (7 de 10)",
    "Jamón cocido xKg = 4750.75 (42 estrellas de 100)",
    "Camisa Azul marca Polo = 9499.9 (4.3/5)",
    "Anteojos de sol del Diego: $230666",
    "Ropero antiguo -> (9 de 10) $14500.6",
    "Sandalias de Sakura Card Captors marca eToys: (12 de 10 estrellas) 1210",
    "Combo de 15 Tuppers en diversos tamaños = $24899.99 (3.35/5)",
    "Lapicera Birome con entradas de regalo para ver a Taylor Swift: us$350",
    "Buzo \"London\" marca Persia Hnos. -> (10 estrellas de 10, totalmente inalterado) £199.9",
    "Revólver musical de Frozen: ¥43.29",
    "Tanque K9 Thunder marca Samsung: us$ 9150499 (367 valoraciones altas)",
    "Combo Dulce de leche con salmuera: $1790 (97/100)",
    "Mortadela x100 gr marca Paladini -> 649.95",
    "Paquete de Cigarrillos de la mujer maravilla: (99/100) ¥10",
    "Cinturón WELT marca SAMSUNG = €184.56"
];

const productos = extraerInformacion(lineas);
console.log(JSON.stringify(productos, null, 2));
