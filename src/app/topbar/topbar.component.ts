import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  imports: [],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})
export class TopbarComponent {
  dropDownActive: boolean = false;

  onDropDown() {
    if (this.dropDownActive === false) {
      this.dropDownActive = true;
    } else {
      this.dropDownActive = false;
    }
  }
}
