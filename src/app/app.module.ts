import { AppComponent } from './app.component';
import { DBZModule } from './dbz/dbz.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';



@NgModule({
  imports: [
    DBZModule,

  ],

  exports: [

  ],
  declarations: [
    AppComponent
  ],
  providers: [

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
