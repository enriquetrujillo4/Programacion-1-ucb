def suma(hola, num):
    hola = int(hola, 2)
    num = int (num, 2)
    resultado = hola + num 
    resultado = bin(resultado)
    print(resultado)
def resta(hola, num):
    hola = int(hola, 2)
    num = int(hola, 2)
    resultado = hola - num 
    resultado = bin(resultado)
    print(resultado)
def multiplicación(hola, num):
    hola = int(hola, 2)
    num = int(num, 2)
    resultado = hola * num 
    resultado = bin(resultado)
    print(resultado)
def division(hola, num):
    hola = int(hola, 2)
    num = int(num, 2)
    resultado = hola // num 
    resultado = bin(resultado)
    print(resultado)
numA = str(input("Ingrese la primera cantidad: "))
numB = str(input("Ingrese la segunda cantidad: "))
sis = int(input("Que operacion desea realizar: \n 1.Sumar \n 2.Restar \n 3.Multiplicar \n 4.Dividir \n . "))
if sis == 1:
    suma(numA, numB)
elif sis == 2:
    resta(numA, numB)
elif sis == 3:
    multiplicación(numA, numB)
elif sis == 4:
    division(numA, numB)