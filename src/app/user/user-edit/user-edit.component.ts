import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userEditFormGroup: FormGroup;
  id;
  constructor(private formBuilder: FormBuilder, private route: Router, private activatedRoute: ActivatedRoute) { }

  userData: any = [
    { id: 1, firstname: "Sandip", lastname: "Dankhra", Email: "sandip@gmail.com", password: "1111" },
    { id: 2, firstname: "Vikas", lastname: "Patel", Email: "vikas@gmail.com", password: "1111" },
  ]
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");

    this.userEditFormGroup = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      passWord: ['']
    })
  }

  userEditData() {

    console.log(this.id);

    for (var i = 0; i <= this.userData[0].id == this.id; i++) {
      
      
    }
    // this.userData[this.id] = ({
    //   "id": (parseInt(this.userData.id)).toString(),
    //   firstname: this.userEditFormGroup.controls.firstName.value,
    //   lastname: this.userEditFormGroup.controls.lastName.value,
    //   Email: this.userEditFormGroup.controls.email.value,
    //   password: this.userEditFormGroup.controls.passWord.value,
    // });

    console.log(this.userEditFormGroup.value);
  }
}
