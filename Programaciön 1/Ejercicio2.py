num1 = str(input("Ingrese el primer número: "))
num2 = str(input("Ingrese el segundo número: "))

dec1 = int(num1,2)
dec2 = int(num2,2)

resultado = dec1 + dec2
resultadobin = bin(resultado)
print("El resultado es:", resultadobin)
