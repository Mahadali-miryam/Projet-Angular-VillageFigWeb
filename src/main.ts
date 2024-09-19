import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


//bootstrapApplication(AppComponent, {
 // providers: [
  //  provideRouter(routes),
   // ProductService  // Assurez-vous de fournir ProductService ici
 // ]

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
