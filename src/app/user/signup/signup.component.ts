import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserData } from '../../userData.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) { }
  userdata=UserData;


  

  cntLength = this.userdata.length + 1;
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
    this.userdata.push(this.signUpFormGroup.value);
    console.log(this.signUpFormGroup.value);
    console.log(this.userdata);
    // this.userData.firstname = this.signUpFormGroup.controls.firstName.value;
    // this.userData.lastName = this.signUpFormGroup.controls.lastName.value;
    // this.userData.Email = this.signUpFormGroup.controls.email.value;
    // this.userData.password = this.signUpFormGroup.controls.passWord.value;

  }

}
