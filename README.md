# Salidas de consola:
--- Ejercicio 1 --- 

1

12

123

1234

12345

123456

1234567

12345678

123456789

--- Ejercicio 2 ---

Ejemplo 1:


 Elementos del array1:
rojo
azul
amarillo


 Elementos del array2:
blanco
negro
rojo

 Elementos en comun:
rojo

 Ejemplo 2:


 Elementos del array1:
4
3
true
manzana


 Elementos del array2:
pera
3
false
true
3
true

 Elementos en comun:
3
true

--- Ejercicio 3 ---


Creamos el carrito agregando azucar como producto base

Agregamos leche al carro
Cart {
  totalAmount: 10,
  product: [ 'Sugar' ],
  units: [ 1 ],
  price: [ 10 ]
}

Volvemos a agregar leche y azucar para que salte el aviso de producto ya cargado
Cart {
  totalAmount: 50,
  product: [ 'Sugar', 'Milk' ],
  units: [ 1, 2 ],
  price: [ 10, 20 ]
}


There is already some Milk with 2 units in the cart


There is already some Sugar with 1 units in the cart


Cart {
  totalAmount: 200,
  product: [ 'Sugar', 'Milk', 'Cheese' ],
  units: [ 1, 2, 3 ],
  price: [ 10, 20, 50 ]
}
