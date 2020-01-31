import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) { }



  userData: any = [
    { id: 1, firstname: "Sandip", lastname: "Dankhra", Email: "sandip@gmail.com", password: "1111" },
    { id: 2, firstname: "Vikas", lastname: "Patel", Email: "vikas@gmail.com", password: "1111" },
  ]

  cntLength = this.userData.length + 1;
  ngOnInit() {
    this.signUpFormGroup = this.formBuilder.group({
      id: this.cntLength,
      firstName: [''],
      lastName: [''],
      email: [''],
      passWord: ['']
    })
  }


  userAddData() {
    this.userData.push(this.signUpFormGroup.value);
    console.log(this.signUpFormGroup.value);
    console.log(this.userData);
    // this.userData.firstname = this.signUpFormGroup.controls.firstName.value;
    // this.userData.lastName = this.signUpFormGroup.controls.lastName.value;
    // this.userData.Email = this.signUpFormGroup.controls.email.value;
    // this.userData.password = this.signUpFormGroup.controls.passWord.value;

  }

}
