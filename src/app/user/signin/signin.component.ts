import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @Input() receivedParentMessage:string;
  @Output() messageToEmit=new EventEmitter<string>();

  messageToSendC: string = "Hello Parent !";

  signinFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, private route: Router) { }
 
  ngOnInit() {
    this.signinFormGroup=this.formBuilder.group({
      Email:[''],
      password:['']
    })
  }
  userJson: any = [
    {
      "id": 1,
      "firstName": "Sandip",
      "lastName": "Patel",
      "emailAddress": "sandip@gmail.com",
      "password": "12345"
    },
    {
      "id": 2,
      "firstName": "Vikas",
      "lastName": "Patel",
      "emailAddress": "vikas@gmail.com",
      "password": "12345"
    },
    {
      "id": 3,
      "firstName": "Yagnik",
      "lastName": "patel",
      "emailAddress": "Yagnik@gmail.com",
      "password": "12345"
    }
  ];

  // signIn() {
  //   for (var i = 0; i < this.userJson.length; i++) {
  //     console.log(this.userJson[i]);
  //   }
  // }

}
