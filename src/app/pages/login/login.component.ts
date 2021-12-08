import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  closeResult = '';

  createAccount: boolean = false;

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    confirmPass: new FormControl(),
  }); 

  constructor(private modalService: NgbModal, private router: Router, public nav: NavbarService) { 

  }

  //this is just for testing
  user='1';

  ngOnInit(): void {
    this.nav.hide();
  }
  
  toggleCreate() {
    if (this.createAccount === true) {
      this.createAccount = false;
    }
    else {
      this.createAccount = true;
    }
  }

  signUpSubmit(): void{
    if(this.loginForm.get('password').value === this.loginForm.get('confirmPass').value) {
      console.log("Name: " + this.loginForm.get('username').value);
      console.log("Pass: " + this.loginForm.get('password').value);
    }
    else {
      console.log("Your passwords must match!");
    }
  }

  loginSubmit(): void{
    console.log("Name: " + this.loginForm.get('username').value);
    console.log("Pass: " + this.loginForm.get('password').value);

    localStorage.setItem('SeesionUser',this.user)
    this.router.navigate(['/journal']);
  }

}
