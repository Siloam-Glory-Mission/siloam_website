import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  constructor(private auth:AuthService,private router:Router) {}

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("logindetails");
    this.auth.logout();
    this.router.navigate(['/']);

  }

}
