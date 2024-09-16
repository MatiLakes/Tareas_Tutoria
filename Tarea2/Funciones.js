function retornarAMayusculas(texto) {
    return texto.toUpperCase();
  }
  
  const retornarenMayusculas = retornarAMayusculas("muestra en mayusculas");
  console.log(retornarenMayusculas); 

  function retornarAMinuscula(texto) {
    return texto.toLowerCase();
  }
  
  const retornarenMinuscula = retornarAMinuscula("muestra en minuscula");
  console.log(retornarenMinuscula); 
  
  function restar(num1, num2) {
    return num1 - num2;
  }
  
  const resResta = restar(50, 20);
  console.log(resResta); 
  
  function dividir(num1, num2) {
    if (num2 === 0) {
      return 'Error al dividir';
    }
    return num1 / num2;
  }
  
  const resDivision = dividir(50, 20);
  console.log(resDivision);
  
  function multiplicar(num1, num2) {
    return num1 * num2;
  }
  
  const resMult = multiplicar(50, 20);
  console.log(resMult);
  
  function recibirLongitud(texto) {
    return texto.length;
  }
  
  
  const longitudTexto = recibirLongitud("Test de texto");
  console.log(longitudTexto);
  