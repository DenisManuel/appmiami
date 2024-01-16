import { Component, HostListener, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./componentes/header/header.component";
import { FooterComponent } from "./componentes/footer/footer.component";
import { HomeComponent } from "./paginas/home/home.component";
import { AboutComponent } from "./paginas/about/about.component";
import { PrivateservicesComponent } from "./paginas/privateservices/privateservices.component";
import { PrivatetoursComponent } from "./paginas/privatetours/privatetours.component";
import { GetquoteComponent } from "./paginas/getquote/getquote.component";
import { SharedshuttleComponent } from "./paginas/sharedshuttle/sharedshuttle.component";
import { CorporateComponent } from './paginas/corporate/corporate.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      CommonModule, 
      RouterOutlet,
      RouterLink, 
      HeaderComponent, 
      FooterComponent, 
      HomeComponent, 
      AboutComponent, 
      PrivateservicesComponent, 
      PrivatetoursComponent, 
      GetquoteComponent, 
      SharedshuttleComponent,
      CorporateComponent
    ]
})
export class AppComponent {
  title = 'appmiami';  
}//fin class AppComponent
