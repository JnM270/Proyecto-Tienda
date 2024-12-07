import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  imports: [NgFor],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
})
export class StoreComponent implements OnInit {
   
    productos = [
        { nombre: 'Gorra plana gris', imagen: 'imgTienda/IMGGorras/GPgris.jpg', precio: '3$', cantidad: '10', fecha: '28/11/2024', proveedor: 'Skull Cap' },
        { nombre: 'Gorra plana marrón', imagen: 'imgTienda/IMGGorras/GPmarron.jpg', precio: '3$', cantidad: '14', fecha: '28/11/2024', proveedor: 'Skull Cap' },
        { nombre: 'Gorra plana beige', imagen: 'imgTienda/IMGGorras/GPbeige.jpg', precio: '3$', cantidad: '12', fecha: '28/11/2024', proveedor: 'Skull Cap' },
        { nombre: 'Gorra plana negra', imagen: 'imgTienda/IMGGorras/GPnegra.jpg', precio: '2$', cantidad: '4', fecha: '29/11/2024', proveedor: 'Lion Cap' },
        { nombre: 'Gorra plana azul', imagen: 'imgTienda/IMGGorras/GPazul.jpg', precio: '2$', cantidad: '9', fecha: '29/11/2024', proveedor: 'Lion Cap' },
        { nombre: 'Gorra plana roja', imagen: 'imgTienda/IMGGorras/GProja.jpg', precio: '3$', cantidad: '11', fecha: '30/11/2024', proveedor: 'Fire Cap' },
        { nombre: 'Gorra plana verde', imagen: 'imgTienda/IMGGorras/GPverde.jpg', precio: '3$', cantidad: '13', fecha: '28/11/2024', proveedor: 'Fire Cap' },
        { nombre: 'Gorra plana amarilla', imagen: 'imgTienda/IMGGorras/GPamarilla.jpg', precio: '4$', cantidad: '10', fecha: '28/11/2024', proveedor: 'VIP Cap' },
        { nombre: 'Gorra plana rosada', imagen: 'imgTienda/IMGGorras/GProsada.jpg', precio: '4$', cantidad: '15', fecha: '28/11/2024', proveedor: 'VIP Cap' },
        { nombre: 'Gorra plana celeste', imagen: 'imgTienda/IMGGorras/GPceleste.jpg', precio: '4$', cantidad: '6', fecha: '28/11/2024', proveedor: 'VIP Cap' },
        { nombre: 'Gorra curva negra', imagen: 'imgTienda/IMGGorras/GCnegra.jpg', precio: '2$', cantidad: '2', fecha: '29/11/2024', proveedor: 'Fire Cap' },
        { nombre: 'Gorra curva gris', imagen: 'imgTienda/IMGGorras/GCgris.jpg', precio: '2$', cantidad: '7', fecha: '29/11/2024', proveedor: 'Fire Cap' },
        { nombre: 'Gorra curva roja', imagen: 'imgTienda/IMGGorras/GCroja.jpg', precio: '2$', cantidad: '5', fecha: '28/11/2024', proveedor: 'Lion Cap' },
        { nombre: 'Gorra curva verde', imagen: 'imgTienda/IMGGorras/GCverde.jpg', precio: '2$', cantidad: '2', fecha: '28/11/2024', proveedor: 'Fire Cap' },
        { nombre: 'Gorra curva amarilla', imagen: 'imgTienda/IMGGorras/GCamarilla.jpg', precio: '3$', cantidad: '8', fecha: '30/11/2024', proveedor: 'Lion Cap' },
        // Se pueden añadir más productos si hace falta
      ];
    
      filtrarProducto = this.productos;
      cart = [];
    
      ngOnInit() {
        this.filtrarProducto = this.productos;
      }
    
      Filtrar(event: Event) {
        const filtrarValor = (event.target as HTMLInputElement).value.toLowerCase();
        const filPalabras = filtrarValor.split(' ');
    
        this.filtrarProducto = this.productos.filter(prod => {
          return filPalabras.every(palabra =>
            prod.nombre.toLowerCase().includes(palabra) ||
            prod.proveedor.toLowerCase().includes(palabra) ||
            prod.fecha.includes(palabra) ||
            prod.precio.includes(palabra)
          );
        });
      }
}

