import { Component, Input } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  template: `
    <div class="well pointable" (click)="toggleWell()">
      <!--Select attribute let us select which element to put in which ng-content in this case the first ng-content will display the element with the [well-title] attribute  -->
      <ng-content select="[well-title]"></ng-content>
      <!-- ng-content is like {children} prop in react-->
      <ng-content *ngIf="this.visiable" select="[well-body]"></ng-content>
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
