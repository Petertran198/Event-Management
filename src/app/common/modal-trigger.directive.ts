import { Directive, ElementRef, OnInit, Inject } from '@angular/core';
import { JQUERY_TOKEN } from './jQuery.service';
@Directive({
  selector: '[modal-trigger]',
})
export class ModalTriggerDirective implements OnInit {
  element;
  constructor(private el: ElementRef, @Inject(JQUERY_TOKEN) private $: any) {
    //Get the specific element this directive sits on
    this.element = el.nativeElement;
  }
  ngOnInit(): void {
    //Add a click eventlistener that opens the modal when whatever element this directive is sitting on
    this.element.addEventListener('click', (event) => {
      this.$('#simple-modal').modal({});
    });
  }
}
