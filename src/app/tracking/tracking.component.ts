import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent {
  tracking: any;
  decoed: any;
  trackingg: any;
  
  constructor(private auth:AuthService,private toastr:ToastrService) {}

  ngOnInit(){
    this.auth.gettracking().subscribe((data:any)=>{
      //console.log(data)
      this.tracking=data.data.data;
      console.log(this.tracking)
      for(var i=0;i<this.tracking.length;i++){
        //console.log(JSON.parse(this.tracking[i].decoded))
        this.trackingg=this.tracking[i].decoded
      }
      this.decoed=data.data.decoded;
      
      if(this.tracking){
       

      }else{
        this.toastr.error(data.error)

      }
      //console.log(this.decoed)
      
    })
  }
  getIssuedAt(index:number){
    const decodedObj = JSON.parse(this.tracking[index].decoded)
    const issuedAt = new Date(decodedObj.iat*1000);
    return issuedAt.toLocaleTimeString();

  }

  getExpirationTime(index:number){
    const decodedObj = JSON.parse(this.tracking[index].decoded);
    const expirationTime = new Date(decodedObj.exp*1000);
    return expirationTime.toLocaleTimeString();
  }

  
  
}
