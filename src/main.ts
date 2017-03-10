import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';



if (environment.production) {
  enableProdMode();
}


let x:Promise<any> = platformBrowserDynamic().bootstrapModule(AppModule);
x.then( result =>console.log(result)).catch( result => console.error(result));

