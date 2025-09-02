import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [AboutComponent, ProjectsComponent, ContactComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
