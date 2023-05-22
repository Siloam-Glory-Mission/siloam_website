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
  tracking: any;
  countsss: any;
  latest: any=[];
  constructor(private authservice:AuthService,private http:HttpClientModule,private router: Router,private toastr:ToastrService){}
  
  ngOnInit(){

    this.authservice.gettotallatest().subscribe((data:any)=>{
      console.log(data)
      this.totalcount=data.data[0];
    })
    
    this.authservice.getData().subscribe((data:any)=>{
      this.examdata=data.data;
      
     
      if(this.examdata){
       
        let count = 0;
        let counts = 0;
        let contss=0;
        let contsss=0;
        let conss=0;
        let countssss=0;
  
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
      //  console.log(this.filtere[i])
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
    
    this.authservice.getYouTubeData().subscribe(data => {
      const statistics = data['items'][0]['statistics'];
      this.subscribers = statistics['subscriberCount'];
      this.views = statistics['viewCount'];
      this.videoCount = statistics['videoCount'];
    });

    this.authservice.gettracking().subscribe((data:any)=>{
      this.tracking=data.data.data;
    for (let i = 0; i < this.tracking.length; i++) {
      if (this.tracking) { // assuming 'status' is a property of each data object
        countssss++;
      }
    }
    this.countsss=countssss;
    //console.log(this.tracking.data.decoded)
    
   
    })
    this.authservice.gettotallatest().subscribe((data:any)=>{
   //   console.log(data)
      this.totalcount=data.data[0];
     // console.log(this.totalcount)
      
    })

    
   
     
      }else{
       // alert(data.error)
        this.toastr.error(data.error)
        window.location.href='#/session';
      }

      
     
      
     
     // this.toastr.success(data.message)
   
    
    
      
    })
   

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
  trackingg(){
    this.router.navigate(['tracking'])
  }

  
 
  


}
