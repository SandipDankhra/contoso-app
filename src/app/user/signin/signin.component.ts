import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from '../../userData.model';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinFormGroup: FormGroup;
  userData = UserData;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.signinFormGroup = this.formBuilder.group({
      email: [''],
      passWord: ['']
    })
  }

  // userData = [
  //   { id: 1, name: "Sandip", Email: "sandip@gmail.com", password: "1111" },
  //   { id: 2, name: "Vikas", Email: "vikas@gmail.com", password: "2222" },
  //   { id: 3, name: "Yagnik", Email: "yagnik@gmail.com", password: "3333" },
  //   { id: 4, name: "Sanjay", Email: "sanjay@gmail.com", password: "4444" }
  // ]


  userSignIn() {
    var chk: boolean = false;

    for (var i = 0; i < this.userData.length; i++) {

      // var chEmail = this.userData[i].email;
      // var chPassword = this.userData[i].passWord;

      if (this.signinFormGroup.controls.email.value == this.userData[i].email && this.signinFormGroup.controls.passWord.value == this.userData[i].passWord) {
        console.log("check Email and Pass");
        this.router.navigateByUrl('/user');
        chk = true;
        break;
      }
    }
    if (chk == false) {
      alert("invalid Username or Password");
    }

  }




}
