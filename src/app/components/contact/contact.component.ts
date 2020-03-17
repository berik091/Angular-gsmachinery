import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      name: new FormControl('', [
        Validators.required, Validators.minLength(3)
      ]),
      phone: new FormControl('', [
        Validators.required, Validators.minLength(5),
        // Validators.pattern(/^[0-9]+(?!.)/)
      ])
    });
  }
  submit() {

    if (this.form.valid) {
      console.log('Form: ', this.form );
      const formData = {... this.form.value};
      console.log('Form Data', formData);
    }
  }
}
