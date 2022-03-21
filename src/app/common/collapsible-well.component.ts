import { Component, Input } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  template: `
    <div class="well pointable" (click)="toggleWell()">
      <h4>{{ title }}</h4>
      <!-- ng-content is like {children} prop in react-->
      <ng-content *ngIf="this.visiable"></ng-content>
    </div>
  `,
})
export class CollapsibleWellComponent {
  @Input() title;
  visiable: boolean = true;

  toggleWell() {
    this.visiable = !this.visiable;
  }
}
