import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-privatetours',
    standalone: true,
    templateUrl: './privatetours.component.html',
    styleUrl: './privatetours.component.css',
    imports: [RouterOutlet, RouterLink, RouterLinkActive]
})
export class PrivatetoursComponent {

}
