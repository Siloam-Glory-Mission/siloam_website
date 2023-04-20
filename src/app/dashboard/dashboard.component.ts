import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  examdata: any;
  baptised: any;
  totalcount: any;
  totalbaptised: any;
  formattedPercentage: String | undefined;
  notbaptised: any;
  formatpercentage: String | undefined;
  not: any;
  filtere:any;
  female: any;
  subscribers: any;
  views: any;
  videoCount: any;
  count: any;
  counts: any;
  contss: any;
  percent: any;
  percentage: any;
  contsss: any;
  conss: any;
  constructor(private authservice:AuthService,private http:HttpClientModule,private router: Router,private toastr:ToastrService){}
  
  ngOnInit(){
    this.authservice.getData().subscribe((data:any)=>{
      console.log(data)
      let count = 0;
      let counts = 0;
      let contss=0;
      let contsss=0;
      let conss=0;

      
      this.examdata=data.data;
     // this.toastr.success(data.message)
      //this.totalcount=this.examdata.length;
      var filter = this.examdata.filter((e: { status: String; }) => e.status == 'Baptised');
    this.baptised=filter;
    
    this.filtere = this.examdata.filter((e: { sex: String; }) => e.sex == 'Male');
    this.female=this.examdata.filter((e: { sex: String; }) => e.sex == 'Female');
    
    var filtered = this.examdata.filter((e: { status: String; }) => e.status == 'Not-Baptised');
    for(var i=0;i<filtered.length;i++){

      if (filtered[i].status == 'Not-Baptised') {
        count++;
      }
      
     
    }
    for(var j=0;j<filter.length;j++){
      if(filter[i].status=='Baptised'){
        counts++;
      }
    }
    for(var k=0;k<this.examdata.length;k++){
      if(this.examdata[i]){
        contss++;
      }
    }
    for(var m=0;m<this.filtere.length;m++){
      if(this.filtere[m].sex=='Male'){
        contsss++;
      }
    }
    for(var g=0;g<this.female.length;g++){
      if(this.female[g].sex=='Female'){
        conss++;
      }
    }
    this.count=count;
    this.counts=counts;
    this.not=filtered;
    this.contss=contss;
    this.contsss=contsss;
    this.conss=conss;
   
   // this.totalbaptised=this.baptised.length;// assume we have two variables num1 and num2 representing the numerator and denominator respectively
    let percentage = (this.counts / this.contss) * 100;
    let percent = (this.count/this.contss)*100;

    
    this.percent=percent
    this.percentage=percentage
    this.formatpercentage=this.percent.toFixed(2)+'%';
    this.formattedPercentage = this.percentage.toFixed(2) + '%'; // format the percentage to 2 decimal places
    

    
    
    
      
    })
    this.authservice.getYouTubeData().subscribe(data => {
      const statistics = data['items'][0]['statistics'];
      this.subscribers = statistics['subscriberCount'];
      this.views = statistics['viewCount'];
      this.videoCount = statistics['videoCount'];
    });


  }
  onClick() {
    this.router.navigate(['baptised']);

  }
  total(){
    this.router.navigate(['members'])
  }
  nottt(){
    this.router.navigate(['notbaptised'])
  }
  male(){
    this.router.navigate(['male'])
  }
  femalee(){
    this.router.navigate(['female'])
  }

  
 
  


}
