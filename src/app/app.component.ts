import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto1';
}

// ................................................... INTERFACES  ..................................................//

// Interface PRODUCTO
interface producto{
  codProducto: string;
  nombre: string;
  precio: number;
  cantidad: number;
}

// Interface ALMACEN
interface almacen{
  codAlmacen: string;
  nomAlmacen: string;
  stock: producto[];
}

//............................................ Productos .........................................................//

let P1: producto = {
  codProducto: 'P1',
  nombre: 'Ace',
  precio: 3,
  cantidad: 11,
}

let P2: producto = {
  codProducto: 'P2',
  nombre: 'Doritos',
  precio: 2,
  cantidad: 20,
}

let P3: producto = {
  codProducto: 'P3',
  nombre: 'Fanta',
  precio: 9,
  cantidad: 30,
}

//.......................................... Almacenes ..........................................................//

let A1 : almacen = {
  codAlmacen: 'A1',
  nomAlmacen: 'Almacen 1',
  stock: [],
}

let A2 : almacen = {
  codAlmacen: 'A2',
  nomAlmacen: 'Almacen 2',
  stock: [],
}

let A3 : almacen = {
  codAlmacen: 'A3',
  nomAlmacen: 'Almacen 3',
  stock: [],
}

 // Agregar 
 function Agregar(A: almacen, P: producto){
   A.stock.push(P);
 }

 function buscarProducto(A: almacen, P : producto){
  let found = false;
  let position = -1;
  let index = 0;

  while(!found && index < A.stock.length) {
      if(A.stock[index] == P) {
          found = true;
          position = index;
      } else {
          index += 1;
      }
  }
  return position;
}

 // Eliminar 
 function Eliminar(A: almacen, P: producto){
  let posicion = buscarProducto(A,P);
  
      A.stock.splice(posicion,1);
    }

 // Mover
 function Mover(A: almacen, P: producto){
  let posicion = buscarProducto(A,P);
  if(posicion == -1){
    console.log("Producto no habido en stock");

  }else{
    Agregar(A, A.stock[posicion])
    Eliminar(A, P)
    console.log("Accion Exitosa");
  }
}

function MoverCantidad(A: almacen, P: producto, cantidad: number){
  for (let index = 0; index < cantidad; index++) {
    Mover(A,P);
  }
}

 // ......... Agregar Productos ..........//

 Agregar(A1, P3)
 Agregar(A1, P2)
 Agregar(A3, P1)

// ............  ALMACENES ................//

console.log(" --> ALMACEN 1 <-- ");
console.table(A1)
console.log("");
console.log(" --> ALMACEN 2 <-- ");
console.table(A2)
console.log("");
console.log(" --> ALMACEN 3 <-- ");
console.table(A3)
console.log("");


MoverCantidad(A2, P2, 4);