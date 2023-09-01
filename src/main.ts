import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div *ngIf="items.length else loading">
    {{items}}
</div>

<ng-template #loading>
    <div>Loading...</div>
</ng-template>

<button (click)="loadItems()" >
{{buttonText}}
</button>
  `,
})
export class App {
  items: string[] = [];
  load = false;
  buttonText = 'Load items';

  loadItems() {
    if (this.load) {
      this.items = [];
    } else {
      this.items = ['A', 'B', 'C'];
    }
    this.load = !this.load;
    this.load
      ? (this.buttonText = 'Unload items')
      : (this.buttonText = 'Load items');
  }
}

bootstrapApplication(App);
