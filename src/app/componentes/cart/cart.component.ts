import { Component,  } from '@angular/core';
import { CartProducto } from '../../modelos/cart-producto';
import { TitleCasePipe } from '@angular/common';
import { Producto } from '../../modelos/producto';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cart: CartProducto[] = []
  productos: Producto[] = [];
  titleCasePipe = new TitleCasePipe();


  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem('cart') as string) 
  }
}
