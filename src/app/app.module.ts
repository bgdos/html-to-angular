import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule}  from "@angular/http";

/** Routes */
import {app_routing} from './app.routes';

/** Services */
import  {InfoService} from "./services/info.service";
import {ProductsService} from "./services/products.service";

/** Components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ItemComponent } from './components/item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent
  ],  
  imports: [
    HttpModule,
    BrowserModule,
    app_routing
  ],
  providers: [
    InfoService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
