let frase = prompt("Ingrese la frase: ");

let longitud = frase.length;
for (let i = 0; i < longitud; i++) {
  let caracter = frase.charAt(i);
  
  if ('aeiou'.includes(caracter)) 
 
    document.write(caracter)
}
