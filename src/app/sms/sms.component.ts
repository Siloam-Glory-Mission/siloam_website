import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent {
  examdata: any;
  baptised: any;
  constructor(private authservice:AuthService,private toastr:ToastrService){}
  
  ngOnInit(){
    this.authservice.getsms().subscribe((data:any)=>{
      
      this.examdata=data;
      if(this.examdata){

      }else{
        this.toastr.error('Session Timed Out Please Login Again')
        window.location.href='#/session';
      }
      
    
    })

  }


}
