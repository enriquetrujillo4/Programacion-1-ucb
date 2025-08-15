def binario(hola):
   bin = ""
   while hola > 0: 
       bin = str(hola % 2) + bin 
       hola = hola // 2
   print("El resultado es: ", bin)

def octal(hola):
    octi = ""
    while hola > 0:
        octi = str(hola % 8) + octi
        hola = hola // 8 
    print("El resultado es:", octi)

def hexadecimal(hola):
    digitos = "0123456789ABCDEF"
    hexa = ""
    while hola > 0:
        resto = hola % 16
        hexa = digitos[resto] + hexa
        hola = hola // 16
    print("El resultado es:", hexa)

num = int(input("Ingrese el número que desea convertir: "))
print ("A que sistema númerico desea convertir: \n 1.binario \n 2.Octal \n 3.Hexadecimal ")
sis = int(input())
if sis == 1:
    binario(num)

if sis == 2:
    octal(num)

if sis == 3:
    hexadecimal(num)

