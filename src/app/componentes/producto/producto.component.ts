import { Component, Input } from '@angular/core';
import { Producto } from '../../modelos/producto';
import { UpperCasePipe } from '@angular/common';
import { CartProducto } from '../../modelos/cart-producto';
import { TitleCasePipe } from '@angular/common'; // Asegúrate de importar el TitleCasePipe
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss',
})
export class ProductoComponent {
  @Input() producto?: Producto;
  cart: CartProducto[] = [];

  constructor() {}

  get nombre() {
    return this.producto?.nombre;
  }

  add() {
    console.log('Estoy comprando el producto ' + this.producto?.nombre);
    // Cargar localStorage
    this.cart = JSON.parse(localStorage.getItem('cart') as string) ?? [];

    const existingProduct = this.cart.find(item => item.id === this.producto?.id);

    if (existingProduct) {
        existingProduct.cantidad += 1;
    } else {
        this.cart.push({
            id: this.producto?.id as number,
            nombre: this.producto?.nombre as string,
            descripcion: this.producto?.descripcion as string,
            descripcion2: this.producto?.descripcion2 as string,
            descripcion3: this.producto?.descripcion3 as string,
            precio: this.producto?.precio as number,
            imagen: this.producto?.imagen as string,
            fecha: this.producto?.fecha as Date,
            cantidad: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(this.cart));
}


 /*  add() {
    console.log('Estoy comprando el producto ' + this.producto?.nombre);
    //Cargar localStorage
    this.cart = JSON.parse(localStorage.getItem('cart') as string);

    if (this.cart.length > 0) {
     this.cart.forEach(elem => {
      if (elem.id === this.producto?.id){
        elem.cantidad += 1
      }
     })

    } else {
      this.cart.push({id: this.producto?.id as number,
        nombre: this.producto?.nombre as string,
        descripcion: this.producto?.descripcion as string,
        descripcion2: this.producto?.descripcion2 as string,
        descripcion3: this.producto?.descripcion3 as string,
        precio: this.producto?.precio as number,
        imagen: this.producto?.imagen as string,
        fecha: this.producto?.fecha as Date,
        cantidad: 1 });
    }

    

    localStorage.setItem('cart', JSON.stringify(this.cart));
  } */
}
