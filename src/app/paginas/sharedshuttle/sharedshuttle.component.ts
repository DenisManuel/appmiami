import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sharedshuttle',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './sharedshuttle.component.html',
  styleUrl: './sharedshuttle.component.css'
})
export class SharedshuttleComponent {

}
