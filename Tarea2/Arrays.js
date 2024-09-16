function sumarNumeros(array) {
    return array.reduce((sum, num) => sum + num, 0);
  }
  
  const num1 = [1, 2, 3, 4, 5];
  const sumTotal = sumarNumeros(num1);
  console.log(sumTotal); 
  

  function promedioNumeros(array) {
    const sum = sumarNumeros(array);
    return array.length > 0 ? sum / array.length : 0;
  }
  
  const promTotal = promedioNumeros(num1);
  console.log(promTotal); 
  

  function retornarenMayusculas(array) {
    return array.map(str => str.toUpperCase());
  }
  
  const strings = ["convertir", "en", "mayuscula"];
  const mayusculas = retornarenMayusculas(strings);
  console.log(mayusculas);
  

  function filtrarNumPares(array) {
    return array.filter(num=> num % 2 === 0);
  }
  
  const num2 = [1, 2, 3, 4, 5, 6];
  const pares = filtrarNumPares(num2);
  console.log(pares)