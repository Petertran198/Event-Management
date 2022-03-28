import { trigger } from '@angular/animations';
import { Directive, ElementRef, OnInit, Inject, Input } from '@angular/core';
import { JQUERY_TOKEN } from './jQuery.service';
@Directive({
  selector: '[modal-trigger]',
})
export class ModalTriggerDirective implements OnInit {
  // if u need an @input but its name is in snakecase u can set an allias like this
  @Input('modal-trigger') modalId: string;

  element;
  constructor(private el: ElementRef, @Inject(JQUERY_TOKEN) private $: any) {
    //Get the specific element this directive sits on
    this.element = el.nativeElement;
  }
  ngOnInit(): void {
    //Add a click eventlistener that opens the modal when whatever element this directive is sitting on
    this.element.addEventListener('click', (event) => {
      this.$(`#${this.modalId}`).modal({});
    });
  }
}
