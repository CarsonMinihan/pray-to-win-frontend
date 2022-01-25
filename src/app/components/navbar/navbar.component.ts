import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/shared/services/ui.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public ui: UiService, private router: Router, public userService: UserService) { }

  ngOnInit(): void {
  }
  logout(){

    this.userService.logoutUser().subscribe( 
    res => {
      console.log(res);
      if(res.success){
        this.ui.showToastMessage('Successfully Logged Out');
        
      }
    },
    res => {
      console.log(res);
      if(!res.error.success && res.error.message) {
        this.ui.showToastMessage('Error with Logout', 'danger');
      }
    });
    
    localStorage.clear();
    location.reload();
    
  }
}
