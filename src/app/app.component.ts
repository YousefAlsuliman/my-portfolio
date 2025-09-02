import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from "./topbar/topbar.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AboutComponent, HeaderComponent, RouterOutlet, TopbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio-landing';
}
