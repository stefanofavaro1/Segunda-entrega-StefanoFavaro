
alert("Ingrese la opcion del producto que desea llevar, para salir ingrese ESC")
let seleccionarProductos = Number(prompt( "1 Fuente de poder 750W $44900- 2 Procesador ryzen 5 5600 $122200 - 3 Gabinete Gamer $55400 - 4 Monitor Samsung T350 24 $90000  "))
let seleccionarCantidad;
let total = 0;



const cantidad = (cant, precio) => {
  return cant * precio 
}

let arrayProductos = []


while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad= Number(prompt("el producto seleccionado es Fuente de poder 750W , indique la cantidad"))
      arrayProductos.push("Fuente de poder 750W")
      total += cantidad(seleccionarCantidad, 44900)
      break;
      case 2:
        seleccionarCantidad = Number(prompt("el producto seleccionado es Procesador ryzen 5 5600 , indique la cantidad"))
        arrayProductos.push("Procesador ryzen 5 5600")
        total += cantidad(seleccionarCantidad, 122200)
      break;
    case 3:
      seleccionarCantidad = Number(prompt("el producto seleccionado es Gabinete Gamer , indique la cantidad"))
      arrayProductos.push("Gabinete Gamer")
      total += cantidad(seleccionarCantidad)
    break;
    case 4:
      seleccionarCantidad = Number(prompt("el producto seleccionado es Monitor Samsung T350 24 , indique la cantidad"))
      arrayProductos.push("Monitor Samsung T350 24")
      total += cantidad(seleccionarCantidad, 90000)
      break;

    default:
      break;
  }
  seleccionarProductos = Number(prompt( " 1 Fuente de poder 750W $44900- 2 Procesador ryzen 5 5600 $122200 - 3 Gabinete Gamer $55400 - 4 Monitor Samsung T350 24 $90000 "))
}

alert("el total de la compra es de: " + total)
console.log(arrayProductos)
    

const envio = () => {
    if (total >= 10000) {
      alert("El envio es gratuito")
    }else{
      total += 1000
      alert("el costo de envio es de 1000, el total es: " + total)
    }
}



const metodoDePago = () => {
  let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo" )
  if (metodo == "tarjeta") {
    total *= 1.1
    console.log(total);
  } 
  else if ( metodo == "efectivo") {
    total -= 1000
   alert("tenes un descuento de 1000, el total es:" + total)
  }
}

metodoDePago()

function Producto(titulo, color, precio) {

       this.titulo = titulo;
       this.color = color;
       this.precio = precio;
  
   }
  
   const producto1 = new Producto("Fuente de poder 750W", "Negro", 44900 );
   const producto2 = new Producto("Procesador ryzen 5 5600", "Negro", 122200 );
  
   console.log(producto1);
   console.log(producto2);

   function Producto(titulo, color, precio) {

         this.titulo = titulo;
         this.color = color;
         this.precio = precio;
    
    }
    
     const producto3 = new Producto("Gabinete Gamer", "Negro", 55400);
     const producto4 = new Producto("Monitor Samsung T350", "Negro", 90000);
    
     console.log(producto3);
     console.log(producto4);
    
     const productos = [
      { nombre: "Fuente de poder 750W", precio: 44900 },
      { nombre: "Procesador ryzen 5 5600", precio: 122200 },
      { nombre: "Gabinete gamer", precio: 90000 },
      { nombre: "Monitor Samsung T350", precio: 90000 },
      
  ];
  
     arrayProductos.forEach((producto) => {
       console.log(producto);
     });