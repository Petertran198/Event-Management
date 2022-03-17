import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [
      Validators.required,
      Validators.maxLength(400),
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
    console.log(session);
    console.log(this.newSessionFormGroup);
  }
}
