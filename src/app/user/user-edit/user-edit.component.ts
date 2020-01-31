import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userEditFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: Router) { }

  userData: any = [
    { id: 1, firstname: "Sandip", lastname: "Dankhra", Email: "sandip@gmail.com", password: "1111" },
    { id: 2, firstname: "Vikas", lastname: "Patel", Email: "vikas@gmail.com", password: "1111" },
  ]
  ngOnInit() {
    this.userEditFormGroup = this.formBuilder.group({
      id:[''],
      firstName: [''],
      lastName: [''],
      email: [''],
      passWord: ['']
    })
  }

  userEditData() {
    console.log(this.userEditFormGroup.value);
    
    this.userData[this.userData.id] = ({
      "id": (parseInt(this.userData.id) + 1).toString(),
      firstname: this.userEditFormGroup.controls.firstName.value,
      lastname: this.userEditFormGroup.controls.lastName.value,
      Email: this.userEditFormGroup.controls.email.value,
      password: this.userEditFormGroup.controls.passWord.value,
    });

    console.log(this.userEditFormGroup.value);
  }
}
