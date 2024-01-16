import { Component } from '@angular/core';
import { PrivateservicesComponent } from "../privateservices/privateservices.component";
import { PrivatetoursComponent } from "../privatetours/privatetours.component";
import { GetquoteComponent } from "../getquote/getquote.component";
import { SharedshuttleComponent } from "../sharedshuttle/sharedshuttle.component";
import { AboutComponent } from "../about/about.component";
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CorporateComponent } from '../corporate/corporate.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RouterOutlet, RouterLink, RouterLinkActive, PrivateservicesComponent, PrivatetoursComponent, GetquoteComponent, SharedshuttleComponent, AboutComponent, CorporateComponent]
})
export class HomeComponent {

}
