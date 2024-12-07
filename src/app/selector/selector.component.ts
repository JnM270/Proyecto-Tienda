import { NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { StoreComponent } from '../store/store.component';


@Component({
  selector: 'app-selector',
  imports: [NgFor, NgSwitch, NgSwitchCase, HomeComponent, StoreComponent],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.css'
})
export class SelectorComponent {
 
  secciones = ['Inicio', 'Tienda']; 
  seleccionada = 'Inicio';

  cambiaSeccion(event: any) {
    this.seleccionada = event.target.value;
  }
}

