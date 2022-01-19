import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UiService } from 'src/app/shared/services/ui.service';
import { UserService } from 'src/app/shared/services/user.service';
import { NewUser } from 'src/app/shared/models/new-user.model';
import { AuthUser } from 'src/app/shared/models/auth-user.model';
import { ReturningUser } from 'src/app/shared/models/returning-user.model';
import { Observable, of } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.3s ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class LoginComponent implements OnInit {
  closeResult = '';

  createAccount: boolean = false;
  matchPassword: boolean = false;
  emptyfield: boolean = false;

  newUser: NewUser = new NewUser();
  user: ReturningUser = new ReturningUser();
  userFormData: AuthUser = new AuthUser('', '', '', '', '');
  confirmpassword: string;

  // @ViewChild('confirmpassword', {static: true}) confirmpassword: ElementRef;

  constructor(
    private modalService: NgbModal,
    private router: Router,
    public nav: UiService,
    public myUserService: UserService,
    private ui: UiService
  ) {}

  ngOnInit(): void {
    // this.nav.hide();
    this.$checkPasswords().subscribe((data) => {
      console.log(data);
    });
  }

  // this handles both LOGIN & CREATE
  handleForm() {
    if (this.createAccount) {
      console.log('CREATING ACCOUNT');

      let newUserData: NewUser = {
        username: this.userFormData.username,
        name: this.userFormData.name,
        password: this.userFormData.password,
        email: this.userFormData.email,
      };
      if (this.userFormData.password == this.userFormData.confirmPassword) {
        this.myUserService.createUser(newUserData).subscribe(
          (res: any) => {
            console.log(res);
            if (res.success) this.ui.showToastMessage(res.message);
          },
          (error) => {
            this.ui.showToastMessage(
              'make sure all fields are filled',
              'danger'
            );
          }
        );
      } else {
        this.ui.showToastMessage("Passwords don't match", 'danger');
      }
    } else {
      console.log('LOGGING IN');
      let userData: ReturningUser = {
        username: this.userFormData.username,
        password: this.userFormData.password,
      };
      this.loginSubmit(userData);
    }
  }

  $checkPasswords(): Observable<boolean> {
    console.log(this.userFormData.password + ' IS PASS');

    return of(this.userFormData.password == this.userFormData.confirmPassword);
  }

  signUpSubmit(userData) {
    if (
      userData.email &&
      userData.name &&
      userData.password &&
      userData.username
    ) {
    } else {
      this.emptyfield = true;
    }
  }

  toggleCreate() {
    this.createAccount = !this.createAccount;
  }

  loginSubmit(userData): void {
    this.myUserService.loginUser(userData).subscribe(
      (res) => {
        console.log(res);
        if (res.success) this.ui.showToastMessage(res.message);
        if (res.data.token) {
          localStorage.setItem('UserToken', res.data.token);
          // 30 minutes is 1800000
          let expiration = Date.now() + 3000000;
          localStorage.setItem('tokenExpiration', expiration.toString());
          this.router.navigate(['/journal']);
        }
      },
      (res) => {
        console.log(res.error);
        if (!res.error.success && res.error.message) {
          let message = 'Error: ' + res.error.message;
          this.ui.showToastMessage(message, 'danger');
        } else {
          this.ui.showToastMessage('Error: with Authentication.', 'danger');
        }
      }
    );
  }
}
