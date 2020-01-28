import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userFormGroup: FormGroup;
  receivedChildMessage: string;
  messageSendParentToChild: string;

  constructor(private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit() {
  }
  sendMessageParent(message: string) {
    this.messageSendParentToChild = message;
  }
  getMessage(message: string) {
    this.receivedChildMessage = message;
  }
}
