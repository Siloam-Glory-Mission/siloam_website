import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent {
  examdata: any;
  baptised: any;
  constructor(private authservice:AuthService){}
  
  ngOnInit(){
    this.authservice.getsms().subscribe((data:any)=>{
      
      this.examdata=data;
      console.log(this.examdata)
      
    
    })

  }


}
