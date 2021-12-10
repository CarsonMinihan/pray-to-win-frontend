import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  matchPassword: boolean = false;
  emptyfield: boolean = false;

  newUser: NewUser = new NewUser();

  user: ReturningUser = new ReturningUser();

  confirmpassword: string;

  // @ViewChild('confirmpassword', {static: true}) confirmpassword: ElementRef;

  constructor(
    private modalService: NgbModal,
    private router: Router,
    public nav: UiService,
    public myUserService: UserService
  ) {}

  ngOnInit(): void {
    // this.nav.hide();
  }

  toggleCreate() {
    this.createAccount = !this.createAccount;
  }

  signUpSubmit() {
    if(this.newUser.email && this.newUser.name && this.newUser.password && this.newUser.username){
      this.emptyfield = false;
      if (this.newUser.password === this.confirmpassword) {
        this.myUserService.createUser(this.newUser).subscribe ((res: {}) => {
        console.log(res)
        })
        this.matchPassword = false;
      }
      else {
        this.matchPassword = true;
      };
      }
      else {
      this.emptyfield = true;
      };
    };
    

    
  

  loginSubmit(): void {
    this.myUserService.loginUser(this.user).subscribe ((res) => {
      console.log(res);
      if (res.token) {
        localStorage.setItem('UserToken', res.token);
        this.router.navigate(['/journal']);
      }
    });
  }
}
