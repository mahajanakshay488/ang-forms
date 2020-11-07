import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  @ViewChild('form') formData : NgForm;
  defoultState: string = "MP";
  gender = "male";
  constructor() { }

  ngOnInit(): void {
  }

  onSetValue(){
    this.formData.form.setValue({
      username: 'John Doe',
      email: 'ex@john.doe',
      password: '12345',
      fullAdress: {
        adress: 'newYork',
        state: 'UP',
        zip: '2397'
      },
      bio: '',
      gender: 'male',
      checkout: 'false'
    });
  }

  onPatchValue(){
    this.formData.form.patchValue({
      username: 'Anney Doe',
      email: 'ex@anney.doe',
      password: '12345',
      gender: 'female',
      checkout: 'true'
    });
  }

  onSubmit(){
    console.log(this.formData.value);
    this.formData.reset({bio: 'lab lage pde hai..'});
  }

}
