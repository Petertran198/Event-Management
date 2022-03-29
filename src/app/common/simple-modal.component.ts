import { Component, ElementRef, Input, ViewChild, Inject } from '@angular/core';
import { JQUERY_TOKEN } from './jQuery.service';
@Component({
  selector: 'simple-modal',
  template: `
    <div
      class="modal fade"
      tabindex="-1"
      role="dialog"
      id="{{ modalId }}"
      #modalElement
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ title }}</h5>
          </div>
          <div class="modal-body" (click)="modalClosed()">
            <ng-content></ng-content>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .modal-body {
        height: 250px;
        overflow-y: scroll;
      }
    `,
  ],
})
export class SimpleModal {
  @Input() title: string;
  @Input() modalId: string;
  @Input() closedOnClick: boolean = true;
  //This will give us the modal element
  @ViewChild('modalElement') modalElement: ElementRef;

  constructor(@Inject(JQUERY_TOKEN) private $: any) {}

  modalClosed() {
    if (this.closedOnClick) {
      this.$(this.modalElement.nativeElement).modal('hide');
    }
  }
}
