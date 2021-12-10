import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UiService } from 'src/app/shared/services/ui.service';
import { UserService } from 'src/app/shared/services/user.service';
import { NewUser } from 'src/app/shared/models/new-user.model';
import { ReturningUser } from 'src/app/shared/models/returning-user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  closeResult = '';

  createAccount: boolean = false;

  newUser: NewUser = new NewUser();

  user: ReturningUser = new ReturningUser();

  constructor(
    private modalService: NgbModal,
    private router: Router,
    public nav: UiService,
    public myUserService: UserService
  ) {}

  //this is just for testing
  userToken = '1';

  ngOnInit(): void {
    // this.nav.hide();
  }

  toggleCreate() {
    this.createAccount = !this.createAccount;
  }

  signUpSubmit() {
    // if(this.loginForm.get('password').value === this.loginForm.get('confirmPass').value) {
    //   // console.log("Name: " + this.loginForm.get('username').value);
    //   // console.log("Pass: " + this.loginForm.get('password').value);
    //   this.myUserService.createUser(this.newUser);
    // }
    // else {
    //   console.log("Your passwords must match!");
    // }
    this.myUserService.createUser(this.newUser);
  }

  loginSubmit(): void {
    this.myUserService.loginUser(this.user);

    localStorage.setItem('SeesionUser', this.userToken);
    this.router.navigate(['/journal']);
  }
}
