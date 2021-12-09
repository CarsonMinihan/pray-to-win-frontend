import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/shared/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit(): void {
  }

}
