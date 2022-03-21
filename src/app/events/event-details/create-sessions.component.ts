import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from '../shared';

@Component({
  selector: 'create-sessions',
  templateUrl: './create-sessions.component.html',
  styles: [
    `
      em {
        float: right;
        color: red;
      }

      .error {
        border-color: red;
      }
    `,
  ],
})
export class CreateSessionsComponent implements OnInit {
  name: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;
  presenter: FormControl;
  newSessionFormGroup: FormGroup;
  @Output() saveSession = new EventEmitter();
  @Output() cancelSession = new EventEmitter();

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [
      Validators.required,
      Validators.maxLength(400),
      this.restrictedWord(['foo', 'bar']),
    ]);

    this.newSessionFormGroup = new FormGroup({
      name: this.name,
      duration: this.duration,
      presenter: this.presenter,
      level: this.level,
      abstract: this.abstract,
    });
  }

  submit(form) {
    console.log(form);
    const session: ISession = {
      id: undefined,
      name: form.name,
      presenter: form.presenter,
      duration: +form.duration,
      level: form.level,
      abstract: form.abstract,
      voters: [],
    };
    this.saveSession.emit(session);
  }

  //Custom Validator
  // restrictedWord(control: FormControl) {
  //   return control.value.includes('foo') ? { restrictedWords: 'foo' } : null;
  // }

  //Custom Validator takes params the returns the validator
  restrictedWord(words) {
    //The returned validator is a function with the formControl to check validation
    return function (control: FormControl) {
      if (!words) return null;
      const invalidWords = words
        .map((word) => (control.value.includes(word) ? word : null))
        .filter((word) => word != null);

      console.log(control);
      if (invalidWords.length > 0) {
        // This is what gets returned in control.errors if there is an invalid word
        return { restrictedWords: invalidWords };
      } else {
        return null;
      }
    };
  }

  handleCancel() {
    this.cancelSession.emit();
  }
}
