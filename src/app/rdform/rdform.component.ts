import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rdform',
  templateUrl: './rdform.component.html',
  styleUrls: ['./rdform.component.css']
})
export class RdformComponent implements OnInit {
  formData: FormGroup;
  restrictedUsername: Array<string> = ['xxx', 'pron hub', 'angel'];

  constructor() { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      "username": new FormControl(null, 
        [Validators.required, this.usernameValidator.bind(this)]),
      "email": new FormControl(null, [Validators.required, Validators.email], this.emailValidator),
      "password": new FormControl(null, Validators.required),
      "fullAdress": new FormGroup({
        "adress": new FormControl(null),
        "state": new FormControl('AP'),
        "zip": new FormControl(null)
      }),
      "bio": new FormControl(null),
      "gender": new FormControl('female'),
      "checkout": new FormControl(true),
      "hobbies": new FormArray([])
    });

    //this.formData.valueChanges.subscribe(value => console.log(value));
    this.formData.statusChanges.subscribe(status => console.log(status));

  }

  onAddHobbies(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.formData.get('hobbies')).push(control);
  }

  emailValidator(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test@test'){
          resolve({'invalidEmail': true});
        }else
          resolve(null);
      }, 2000);
    });
    return promise;
  }

  usernameValidator(control: FormControl): { [s: string]: boolean }{
    if(this.restrictedUsername.indexOf(control.value) !== -1){
      return {'invalidUsername': true};
    }else{
      return null;
    }        
    //console.log(this.formData);
  }

  onSetValue(){
    this.formData.setValue({
      "username": 'John Doe',
      "email": 'ex@john.doe',
      "password": '12345',
      "fullAdress": {
        "adress": 'newYork',
        "state": 'UP',
        "zip": '2397'
      },
      "bio": '',
      "hobbies": [],
      "gender": 'male',
      "checkout": 'false'
    });
  }

  onPatchValue(){
    this.formData.patchValue({
      "username": 'Anney Doe',
      "email": 'ex@anney.doe',
      "password": '12345',
      "gender": 'female',
      "checkout": 'true'
    });
  }

  onSubmit(){
    console.log(this.formData);
  }

}
