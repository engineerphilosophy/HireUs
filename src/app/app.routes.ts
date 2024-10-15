import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GisDataComponent } from './gis-data/gis-data.component';
import { MapCreationComponent } from './map-creation/map-creation.component';
import { ProcessDataComponent } from './process-data/process-data.component';
import { SettingComponent } from './setting/setting.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';

export const routes: Routes = [
  {
    path: "",
    component: SettingComponent
  },
  {
    path: "gis-data",
    component: GisDataComponent
  },
    {
    path: "web-development",
    component: WebDevelopmentComponent
  },
  {
    path: "process-data",
    component: ProcessDataComponent
  },
  {
    path: "map-creation",
    component: MapCreationComponent
  }
];
