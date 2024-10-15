import { Component } from '@angular/core';
import { Router } from '@angular/router';;
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {
  constructor(private router: Router) { }
  navigateToRoute(route: string) {
    switch (route) {
      case 'gis-data':
        this.router.navigate(['/gis-data']);
        break;
      case 'web-development':
        this.router.navigate(['/web-development']);
        break;
      case 'process-data':
        this.router.navigate(['/process-data']);
        break;
      case 'map-creation':
        this.router.navigate(['/map-creation']);
        break;
      default:
        console.error('Route not recognized!');
    }
  }
}
