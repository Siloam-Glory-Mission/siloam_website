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
search: any;
  uniquemonths: any;
  filtereddata: any;


  constructor(private authservice:AuthService,private toastr:ToastrService,private sanitizer: DomSanitizer) {}

  ngOnInit(){
        this.authservice.youtube().subscribe((data:any)=>{
          this.youtube=data.message;
         // console.log(this.youtube)
          
          this.uniquemonths=unique(this.youtube,'month');
        //  console.log(this.uniquemonths);
         // this.filtereddata=
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
  filterdata(x:any){
    console.log(x.target.value);
  }

}
function unique(sbjnm: any, arg1: string): any {
   const uniqueValues = [...new Set(sbjnm.map((item: { [x: string]: any; }) => item[arg1 ]))];
   return uniqueValues;
  }
