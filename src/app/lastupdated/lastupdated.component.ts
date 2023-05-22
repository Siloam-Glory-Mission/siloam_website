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
  
  constructor(private auth:AuthService,private toastr:ToastrService) {}

  ngOnInit(){
    this.auth.reporrt().subscribe((data:any)=>{
     console.log(data);
     this.tracking=data.data;
     this.track=JSON.parse(this.tracking);
     this.trackingg=this.track;
     console.log(this.trackingg)
    
      
    })
  }
}
