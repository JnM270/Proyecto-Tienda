import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { SelectorComponent } from './selector/selector.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HomeComponent, StoreComponent, SelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-tienda';
}
