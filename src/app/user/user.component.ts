import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  userFormGroup: FormGroup;

  constructor(private formBilder: FormBuilder) { }

  userData = [
    { id: 1, name: "Sandip", emailId: "sandip@gmail.com", passWord: "1234" },
    { id: 2, name: "Vikas", emailId: "vikas@gmail.com", passWord: "1234" },
    { id: 3, name: "Yagnik", emailId: "yagnik@gmail.com", passWord: "1234" },
    { id: 4, name: "Sanjay", emailId: "sanjay@gmail.com", passWord: "1234" }
  ]


  ngOnInit() {

  }
  deleteData() {
    alert("Are you sure you want to delete this?");
  }


}
