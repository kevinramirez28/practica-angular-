import { AppComponent } from './app.component';
import { DBZModule } from './dbz/dbz.module';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
  ],
  imports: [
    DBZModule,
    AppComponent
  ],
  providers: [
  ],
})
export class AppModule { }

