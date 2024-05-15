const media = require('./ejercicio1').media;
const mediana = require('./ejercicio1').mediana;
const moda = require('./ejercicio1').moda;
const rango = require('./ejercicio1').rango;

test('media', () => {
    const entrada1 = [12, 4, 2]
    expect(media(entrada1)).toBe(6);
});

test('media undefined', () => {
    const entrada5 = []
    expect(media(entrada5)).toBe(undefined);
});

test('mediana cantidad impar', () => {
    const entrada2 = [8, 10, 3, 10, 1]
    expect(mediana(entrada2)).toBe(8);
});

test('mediana cantidad par', () => {
    const entrada3 = [9, 0, 6, 1, 3, 6, 8, 6]
    expect(mediana(entrada3)).toBe(6);
});

test('mediana undefined', () => {
    const entrada4 = []
    expect(mediana(entrada4)).toBe(undefined);
});

test('moda de un numero', () => {
    const entrada6 = [5, 8, 8, 9, 0, 8, 3, 2];
    expect(moda(entrada6)).toEqual(8);
});

test('moda de varios numeros', () => {
    const entrada7 = [3, 9, 3, 10, 9, 0, 3, 9, 5, 10, 6, 10];
    expect(moda(entrada7)).toEqual([3, 9, 10]);
});

test('moda undefined', () => {
    const entrada8 = [];
    expect(moda(entrada8)).toEqual(undefined);
});

test('rango', () => {
    const entrada9 = [3, 8, 5, 3, 2];
    expect(rango(entrada9)).toEqual(6)
})

test('rango undefined', () => {
    const entrada10 = [];
    expect(rango(entrada10)).toEqual(undefined)
})







