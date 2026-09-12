import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public show_log_error=''; 
  logdata: FormGroup; 

  constructor(private fb: FormBuilder,private router: Router,private authservice:AuthService,private http:HttpClient,private toastr: ToastrService) {

    this.logdata = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

  }
  onLogin() {
    // console.log(this.logdata.value)
    let username = this.logdata.value.username;
    let password = this.logdata.value.password;
    
    let username2 = this.logdata.value.username;
    var test={
      "email":username2
    }
    var obj = {
      "email": username,
      "password": password,
      
    }
    this.authservice.login(obj).subscribe((data) => {
      //this.router.navigate(['/dashboard']);
      this.router.navigate(['/dashboard']);
    });
    
   
  }
  
  clearfunction(){
    this.show_log_error = '';  
  }
 
  

}
