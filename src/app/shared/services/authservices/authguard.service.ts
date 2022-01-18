import { Injectable } from '@angular/core';
import { UiService } from '../ui.service';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(public ui: UiService,public userService: UserService) { }

  gettoken(){  
    if(!!localStorage.getItem("UserToken")){
      this.userService.refreshUser().subscribe( 
        res => {
          console.log(res);
          if(res.success && res.data.token){
            localStorage.clear();
            localStorage.setItem('UserToken', res.data.token);
            console.log(res)
          }
        },
        res => {
          if(!res.error.success && res.error.message) {
            this.ui.showToastMessage('Error: Please log back in', 'danger');
          }
        });
    }
    return !!localStorage.getItem("UserToken");  
    }  
}
