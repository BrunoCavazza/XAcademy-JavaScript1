function main() {

//Ejercicio 1 Piramide
console.log("--- Ejercicio 1 --- \n");
let number = 9;
try{// corroboro que numero sea un numero mayor a 0, sino agarro la exepcion
    if (number <= 0 || number == NaN) {
        throw new Error("Numero introducido no valido");
        }else{
        piramide(number);
        }
}catch (error){
    console.log(error);
}


//Ejercicio 2 elementos iguales en array 
console.log("\n--- Ejercicio 2 --- \n");
console.log("Ejemplo 1: \n");

    let array1 = ['rojo', 'azul', 'amarillo'];
    let array2 = ['blanco', 'negro', 'rojo'];
    sameElements(array1, array2); //Ejemplo 1

console.log("\n Ejemplo 2: \n");

    let array3 = [4, 3, true, 'manzana'];
    let array4 = ['pera', 3, false, true, 3, true];
    sameElements(array3, array4); //Ejemplo 2



//Ejercicio 3 Carrito. 
/*Este ejercicio lo comence a hacer con variables en ingles como el resto asi que 
 lo termine haciendo todo en ingles si no hay problema.*/

console.log("\n--- Ejercicio 3 --- \n");

console.log("\nCreamos el carrito agregando azucar como producto base");
const newcart = new Cart(10, "Sugar", 1, 10);

console.log("\nAgregamos leche al carro");
console.log(newcart);
newcart.addProduct("Milk", 20, 2);

console.log("\nVolvemos a agregar leche y azucar para que salte el aviso de producto ya cargado");
console.log(newcart);
console.log("\n");
newcart.addProduct("Milk", 20, 3);
console.log("\n");
newcart.addProduct("Sugar", 30, 5);
newcart.addProduct("Cheese", 50, 3);
console.log("\n");
console.log(newcart);

}
//--------------------------Funciones-----------------------------------


// 1) Piramide 
function piramide(num) {
    let piramid = "";
        for (let i = 1; i <= num; i++) {
            console.log(piramid += i);
        }
}


// 2) Iguales Array
function sameElements(array1, array2) {
    const arrayEq = [];
    console.log("\n Elementos del array1:");//printeo en consola el array 1
        array1.forEach((element) => {
        console.log(element);})

        console.log(" ");

    console.log("\n Elementos del array2:");//printeo en consola el array 2
        array2.forEach((element) => {
        console.log(element);})

    array1.forEach((element) => {       // Compara los elementos iguales
        const existElement = array2.find(n => n === element);
        if (existElement && !arrayEq.includes(element)) {
            arrayEq.push(element);
        }
    })
    console.log("\n Elementos en comun:");
    arrayEq.forEach((element) => {
        console.log(element);
    } )
    return arrayEq;
}


// 3) Carrito 
class Cart { //3.1 classe del carrito
    constructor(totalAmount, product, units, price) {
        this.totalAmount = totalAmount;
        this.product = [product];
        this.units = [units];
        this.price = [price];
    }

    // 3.3 validación para no permitir duplicados
    addProduct(name, cost, units) {

        // Revisar si existe o no un elemento en el array
        const exist = (array, element) => {
            return array.find(n => n === element);
        }

        // Buscador de unidades de elemento
        const existUnits = (array, element) => {
            for (let i = 0; i < array.length; i++) {        
                if (array[i] === element) {
                    return this.units[i];
                }
            }
        }       
      
        
        // 3.2 Metodo de la clase que agregua un producto al carrito y actualice el montoTotal
        if (!exist(this.product, name)) {
            this.product.push(name);
            this.units.push(units);
            this.price.push(cost);
            this.totalAmount += (cost * units);
        } else { //3.3 Mensaje duplicado en consola
            console.log(`There is already some ${name} with ${existUnits(this.product, name)} units in the cart`)
        }
    }
}


main();
