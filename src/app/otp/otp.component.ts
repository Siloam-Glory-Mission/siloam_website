import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {

  public show_log_error=''; 
  logdata: FormGroup; 
  show_success: any;

  constructor(private fb: FormBuilder,private router: Router,private authservice:AuthService,private http:HttpClient,private toastr: ToastrService) {

    this.logdata = this.fb.group({
      username: ['', [Validators.required]],
    });

  }
  ngOnInit(){
this.otp();
       
  }
  otp(){
    let otpdetails = localStorage.getItem('otpdetails');
    
    //console.log(otpdetails);
    if(otpdetails){

      let otpdetail = JSON.parse(otpdetails);
//      console.log(otpdetail)

      var obj={
        "email":otpdetail.data[0].email
      }
   ///   console.log(obj)
      this.authservice.sendotp(obj).subscribe((data)=>{
      //  console.log(data)
        this.show_success='xxxxxx@gmail.com';
        this.toastr.success("Email Sent Sucessfully")
      })
    } else{

    }
  }

  onLogin(){
    let otpdetails = localStorage.getItem('otpdetails');
    if(otpdetails){
      let otpdetail = JSON.parse(otpdetails);

    var obj2={
      "email":otpdetail.data[0].email,
      "otp":this.logdata.value.username
    }
    console.log(obj2)
    this.authservice.verifyotp(obj2).subscribe((data)=>{
      console.log(data)
      if(data.length==0){
        this.toastr.error("Incorrect OTP")
      }else{
        this.router.navigate(['/dashboard'])
      }
    })
  }else{

  }
    
  }
  
    
    
    
   
    
    
  
 
  

}
