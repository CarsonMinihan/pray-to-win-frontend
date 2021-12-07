import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  createAccount: boolean = false;
  
  toggleCreate() {
    if (this.createAccount === true) {
      this.createAccount = false;
    }
    else {
      this.createAccount = true;
    }
    // console.log(this.createAccount);
  }
}
