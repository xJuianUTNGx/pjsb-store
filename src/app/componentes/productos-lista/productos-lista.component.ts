import { Component, OnInit } from '@angular/core';
import { Producto } from '../../modelos/producto';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.scss']
})
export class ProductosListaComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private servProductos: ProductosService) {}

  ngOnInit(): void {
    this.servProductos.getProductos().subscribe(
      response => this.productos = response
    );
  }

  
  getSeverity (producto: Producto) {
    switch (producto.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return '';
    }
};


  
}
