import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent {
  examdata: any;
  youtube: any;
  videoData: any=[]; 
  getdata: any;


  constructor(private authservice:AuthService,private toastr:ToastrService,private sanitizer: DomSanitizer) {}

  ngOnInit(){
   
        this.authservice.youtube().subscribe((data:any)=>{
          this.youtube=data.message;
        })
  

  }
  getYouTubeEmbedUrl(url: string): SafeResourceUrl {
    const videoId = url.split('/').pop();
    console.log(videoId)
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
  getfacebookvideo(){

  }

}
