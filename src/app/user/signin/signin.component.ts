import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  userFormGroup: FormGroup;
  constructor(private formBilder: FormBuilder, private route: Route) { }

  ngOnInit() {
  }
  userJson: any = [
    {
      "id": 1,
      "firstName": "Sandip",
      "lastName": "Patel",
      "emailAddress": "sandip@gmail.com",
      "password": "12345"
    },
    {
      "id": 2,
      "firstName": "Vikas",
      "lastName": "Patel",
      "emailAddress": "vikas@gmail.com",
      "password": "12345"
    },
    {
      "id": 3,
      "firstName": "Yagnik",
      "lastName": "patel",
      "emailAddress": "Yagnik@gmail.com",
      "password": "12345"
    }
  ];

  signIn() {
    for (var i = 0; i < this.userJson.length; i++) {
      console.log(this.userJson[i]);
    }
  }
}
