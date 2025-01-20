import { Component } from '@angular/core';
import { DBZModule } from './dbz/dbz.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ DBZModule ]
})
export class AppComponent {
  title = 'practice';
}
