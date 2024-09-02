import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-recat-form',
  templateUrl: './recat-form.component.html',
  styleUrl: './recat-form.component.css',
})
export class RecatFormComponent {
  constactForm = new FormGroup({
    FirstName: new FormControl('',[Validators.required,Validators.maxLength(5)]),
    LastName: new FormControl('',[Validators.required,Validators.minLength(5)]),
    Email: new FormControl('',Validators.required),
    gender: new FormControl(''),
    address: new FormGroup({
      State: new FormControl('',Validators.required),
    }),
  });
  get firstName(){
    return this.constactForm.get('FirstName')
  }
  get lastname(){
    return this.constactForm.get('LastName')
  }
  get email(){
    return this.constactForm.get('Email')

  }
  get gender(){
    return this.constactForm.get('gender')
  }
  get state(){
    return this.constactForm.get('address')?.get('State');
  }
}
