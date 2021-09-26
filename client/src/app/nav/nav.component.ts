import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any = {};
 // currentUser$: Observable<User> | undefined ;

  constructor(public accountService: AccountService, private router:Router) { }

  ngOnInit(): void {
   // this.currentUser$ = this.accountService.currentUser$;
  }

  login(){
    this.accountService.login(this.model).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/members');
     // this.loggedIn = true;
    }, error => {
      console.log(error);
    });
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

}
