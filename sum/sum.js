function sum(a, b) {
  return a + b;
}

function Cadena(cadena) {  
    if (cadena.length < 4) {
  
      const palabrasOrdenadas = cadena.split(', ').sort((a, b) => b.length - a.length);
      const palabraMasLarga = palabrasOrdenadas[0];
  
      return { longest: palabraMasLarga };
    } else {
      
      const palabrasOrdenadas = cadena.split(', ').sort((a, b) => b.length - a.length);
      const palabraMasLarga = palabrasOrdenadas[0];
      const cuartaPalabraMasLarga = palabrasOrdenadas[3];
  
      return { longest: palabraMasLarga, cuarto: cuartaPalabraMasLarga };
    }
  }
  module.exports = {Cadena, sum};