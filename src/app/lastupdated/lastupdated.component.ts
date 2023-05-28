import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lastupdated',
  templateUrl: './lastupdated.component.html',
  styleUrls: ['./lastupdated.component.css']
})
export class LastupdatedComponent {
  tracking: any;
  decoed: any;
  trackingg: any;
  track: any;
  public parsed: any=[];
  getdata: any;
  
  constructor(private auth:AuthService,private toastr:ToastrService) {}

  ngOnInit(){
    this.auth.getData().subscribe((data:any)=>{
      this.getdata=data.data;

      if(this.getdata){
        this.auth.reporrt().subscribe((data:any)=>{
         console.log(data);
          
          this.tracking=data.data;
          for(var i=0;i<this.tracking.length;i++)
          {
         //  console.log(this.tracking[i])
           var obj={
             "status":this.tracking[i].status,
             "message":this.tracking[i].message,
             "time":this.tracking[i].timestamp,
             "age":JSON.parse(this.tracking[i].age)
           }
           console.log(obj)
           this.parsed.push(obj)
          }
      //    console.log(this.parsed)
         
           
         })
        
      }else{
        window.location.href='#/session';
        this.toastr.error('Session Timed Out Please Login Again');
      }
      
    })
   
  }
}
