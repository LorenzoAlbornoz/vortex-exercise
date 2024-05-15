function media(entrada) {

    const suma = entrada.reduce((total, elemento) => total + elemento, 0);

    const cantidadElementos = entrada.length;

    if (cantidadElementos === 0) {
        return undefined;
    }

    const media = suma / cantidadElementos;

    return media;
}

function mediana(entrada) {
    const cantidadElementos = entrada.length;

    if (cantidadElementos === 0) {
        return undefined;
    }

    entrada.sort((a, b) => a - b);

    if (cantidadElementos % 2 !== 0) {
        return entrada[Math.floor(cantidadElementos / 2)];
    } else {
        const medio1 = entrada[cantidadElementos / 2 - 1];
        const medio2 = entrada[cantidadElementos / 2];
        return (medio1 + medio2) / 2;
    }
}

function moda(lista) {
    if (lista.length === 0) {
        return undefined;
    }

    const frequencyMap = {};
    let maxFrequency = 0;
    let modaNumbers = [];

    for (const number of lista) {
        frequencyMap[number] = (frequencyMap[number] || 0) + 1;

        if (frequencyMap[number] > maxFrequency) {
            maxFrequency = frequencyMap[number];
            modaNumbers = [number];
        } else if (frequencyMap[number] === maxFrequency && !modaNumbers.includes(number)) {
            modaNumbers.push(number);
        }
    }

    if (modaNumbers.length === 1) {
        return modaNumbers[0];
    } else {
        return modaNumbers.sort((a, b) => a - b);
    }
}

function rango(lista) {

    if (lista.length === 0) {
        return undefined;
    }

    let mayor = lista[0];
    let menor = lista[0];

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i];
        }
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }
    const resultado = mayor - menor

    return resultado ;
}

module.exports = { media, mediana, moda, rango };