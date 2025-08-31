import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerComponent } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxSpinnerComponent],
  template: `
    <div class="container mx-auto">
      <router-outlet></router-outlet>
    </div>
    <ngx-spinner>
      <div class="loading"></div>
    </ngx-spinner>
  `,
})
export class App {}
