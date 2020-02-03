import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserData } from '../userData.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  userFormGroup: FormGroup;
  userdata=UserData;

  constructor(private formBilder: FormBuilder) { }

  ngOnInit() {

  }
  deleteData() {
    
    alert("Are you sure you want to delete this?");
  }


}
