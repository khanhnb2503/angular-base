import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NZ_I18N, vi_VN } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    { provide: NZ_I18N, useValue: vi_VN }
  ]
})
export class AppComponent {
  title = 'example';
}
