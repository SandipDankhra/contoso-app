import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserEditData } from './user-edit.model';
import { UserData } from '../../userData.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userEditFormGroup: FormGroup;
  userEdit: UserEditData = new UserEditData();
  userData = UserData;
  getId;

  constructor(private formBuilder: FormBuilder, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getId = this.activatedRoute.snapshot.paramMap.get("id");
    // let item = UserEditData.filter(f => f.id = this.getId[0]);
    this.getId = this.getId - 1;

    console.log("Index : " + this.getId);
    console.log(this.userData[this.getId].id);
    console.log(this.userData[this.getId].firstName);
    console.log(this.userData[this.getId].lastName);
    console.log(this.userData[this.getId].email);
    console.log(this.userData[this.getId].passWord);

    this.userEditFormGroup = this.formBuilder.group({
      id: [this.userData[this.getId].id],
      firstName: [this.userData[this.getId].firstName],
      lastName: [this.userData[this.getId].lastName],
      email: [this.userData[this.getId].email],
      passWord: [this.userData[this.getId].passWord]
    });

  }

  userEditData() {
    this.userData[this.getId].firstName = this.userEditFormGroup.controls.firstName.value;
    this.userData[this.getId].lastName = this.userEditFormGroup.controls.lastName.value;
    this.userData[this.getId].email = this.userEditFormGroup.controls.email.value;
    this.userData[this.getId].passWord = this.userEditFormGroup.controls.passWord.value;
    this.route.navigateByUrl('user');
  }
}
