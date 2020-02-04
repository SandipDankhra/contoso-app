import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import { UserData } from '../userData.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  userFormGroup: FormGroup;
  userdata = UserData;
  getId;
  constructor(private formBilder: FormBuilder, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {


  }
  deleteData(removeID) {
    const _removeID = this.userdata.findIndex(e => e.id == removeID);
    if (_removeID !== -1) {
      this.userdata.splice(_removeID, 1);
      alert("ID " + removeID + " Are you sure you want to delete this?");
    }
  }


}
