
def binario(hola):
      hola = int(hola, 2)
      hola = hex(hola)
      print("La conversion es: ",hola)

def hexadecimal(hola):
      hola = int(hola, 16)
      hola = bin(hola)
      print("La conversion es: ", hola)
num = str(input("ingrese el número que desea convertir: "))
sis = int(input("A que sistema desea convertir: \n 1°Binario \n 2°Hexadecimal \n :"))
if sis == 1:
      hexadecimal(num)
elif sis == 2:
      binario(num)

