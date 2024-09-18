import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
  RouterOutlet, 
  HeaderComponent, 
  FooterComponent, 
  ContactComponent,
  AboutComponent,

],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VillageFigWeb';
}
