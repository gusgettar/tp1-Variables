let numero1, numero2, numero3
parseInt(numero1 = prompt("Ingrese el primer numero: "))
parseInt(numero2 = prompt("Ingrese el segundo numero: "))
parseInt(numero3 = prompt("Ingrese el tercer numero: "))

if(numero1>numero2 && numero1>numero3)
    document.write("<p>El numero mayor es: </p>"+numero1)
else if(numero2>numero1 && numero2>numero3)
    document.write("<p>El numero mayor es: </p>"+numero2)
else if (numero3>numero1 && numero3>numero2)
document.write("<p>El numero mayor es: </p>"+numero3)