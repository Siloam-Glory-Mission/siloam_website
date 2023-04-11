import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  data: any;
  datas: any;

  constructor(private authService:AuthService,private router:Router){}

  ngOnInit(){
    this.data = localStorage.getItem('logindetails')
   this.datas=JSON.parse(this.data)

   
    
  }

  toggle(){
    const element = document.body as HTMLBodyElement
    element.classList.toggle('toggle-sidebar')

  }

  logout() {
    
    localStorage.removeItem("token");
    localStorage.removeItem("logindetails");
    this.authService.logout();
    this.router.navigate(['/']);
  }
  

}
