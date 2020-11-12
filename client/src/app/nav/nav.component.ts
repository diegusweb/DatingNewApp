import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedIn: boolean;

  constructor(private accountServices: AccountService) { }

  ngOnInit(): void {
  }

  login(){
    this.accountServices.login(this.model).subscribe(response => {
      console.log(response);
      this.loggedIn = true;
    }, error => {
      console.log(error);
      this.loggedIn = false;
    })
  }

  logout() {
    this.loggedIn = false;
  }
}
