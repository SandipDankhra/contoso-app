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
    console.log(this.getId);
    // this.getId = this.getId - 1;
    let item = UserData.filter(f => f.id == this.getId)[0];
    console.log(item);

    this.userEditFormGroup = this.formBuilder.group({
      // Use Filter in get ID
      firstName: [item.firstName],
      lastName: [item.lastName],
      email: [item.email],
      passWord: [item.passWord]

      //Diarect Get  ID
      // id: [this.userData[this.getId].id],
      // firstName: [this.userData[this.getId].firstName],
      // lastName: [this.userData[this.getId].lastName],
      // email: [this.userData[this.getId].email],
      // passWord: [this.userData[this.getId].passWord]
    });
  }

  userEditData() {
    // Use IndexOf() function
    let item = UserData.filter(f => f.id == this.getId)[0];

    const foundIndex = this.userData.findIndex(e => e.id === item.id);
    this.userData[foundIndex] = item;

    // item = this.userEditFormGroup.value;
    // console.log(item);

    // Using formcontrol
    // item.firstName = this.userEditFormGroup.controls.firstName.value;
    // item.lastName = this.userEditFormGroup.controls.lastName.value;
    // item.email = this.userEditFormGroup.controls.email.value;
    // item.passWord = this.userEditFormGroup.controls.passWord.value;

    // this.userData[this.getId].passWord = this.userEditFormGroup.controls.passWord.value;

    this.route.navigateByUrl('user');
  }
}
