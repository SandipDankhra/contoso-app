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

  ngOnInit() {
    this.signUpFormGroup = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      passWord: ['']
    })
  }

  userData = [
    { id: 1, firstname: "Sandip", lastname: "Dankhra", Email: "sandip@gmail.com", password: "1111" },
    { id: 2, firstname: "Vikas", lastname: "Patel", Email: "vikas@gmail.com", password: "1111" }

  ]

  userAddData(){
    this.signUpFormGroup
  }
}
