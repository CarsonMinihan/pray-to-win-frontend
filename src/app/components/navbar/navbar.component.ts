import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/shared/services/ui.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public nav: UiService, private router: Router,) { }

  ngOnInit(): void {
  }
  logout(){
    //
    //Add Logout Function to backend
    //
    localStorage.clear();
    location.reload();
  }

}
