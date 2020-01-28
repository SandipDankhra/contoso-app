import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  receivedChildMessage: string;
  messageToSendP: string = '';
  userFormGroup: FormGroup;
  
  constructor(private formBilder: FormBuilder) { }

  ngOnInit() {

  }

  

}
