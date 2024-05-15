const sum = require('./sum').sum;
const cadena = require('./sum').Cadena;

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


test('Longitud mas larga y cuarta longitud mas larga', () => {
    const entrada = "sandalias, repositorio, sin-tacc, semáforo, rinoceronte-inglés, supositorios, sal, charlie-sheen";
  expect(cadena(entrada)).toEqual({ longest: "rinoceronte-inglés", cuarto: "repositorio" });
});

test('Longitud mas larga', () => {
    const entrada = "Agatha, Ruperta";
  expect(cadena(entrada)).toEqual({ longest: 'Ruperta' });
});