import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api'; 
import { HttpClientModule } from '@angular/common/http';
import { ModprimengModule } from './modprimeng.module';
import { HeaderComponent } from './componentes/plantillas/header/header.component';
import { FooterComponent } from './componentes/plantillas/footer/footer.component';
import { ProductosModule } from './modulos/productos/productos.module';
import { ProductosService } from './servicios/productos.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    
  ],
  
  imports: [
     BrowserModule,
    AppRoutingModule,
    ModprimengModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductosModule
  ],

  providers: [
    MessageService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private service:ProductosService) {
    localStorage.setItem('cart', JSON.stringify([]))
  }
 }
