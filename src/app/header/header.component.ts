import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private routes: Router) { }
  // menubar = true;

  // toggleMenu() {
  //   this.menubar = !this.menubar;
  // }

  gotodashboard() {
    this.routes.navigate(['/'])
  }
}
