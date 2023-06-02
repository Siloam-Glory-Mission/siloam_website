import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent {
  examdata: any;
  youtube: any;

  constructor(private authservice:AuthService,private toastr:ToastrService) {}

  ngOnInit(){
    this.authservice.youtube().subscribe((data:any)=>{
      
      this.youtube=data;
      if(this.youtube){

        

      }else{
        this.toastr.error('Session Timed Out Please Login Again')
        window.location.href='#/session';
      }
      
    
    })

  }
}
