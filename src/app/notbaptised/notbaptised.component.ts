import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-notbaptised',
  templateUrl: './notbaptised.component.html',
  styleUrls: ['./notbaptised.component.css']
})
export class NotbaptisedComponent {
  examdata: any;
  notbaptised: any;
  search:any;
  counts: any;
  notbaptisedd: any;
  
  title = 'angular-app';
  fileName= '{{ExcelSheet}}.xlsx';
  constructor(private authservice:AuthService,private toastr:ToastrService){}
  ngOnInit(){
    this.authservice.getnotbaptised().subscribe((data:any)=>{
     // console.log(data.data)
      let counts=0;
      this.notbaptisedd=data.data;
      if(this.notbaptisedd){
        var filter = this.notbaptisedd.filter((e: { status: String; }) => e.status == 'Not-Baptised');
        this.notbaptised=filter;
        for(var i=0;i<this.notbaptised.length;i++){
          if(this.notbaptised[i].status=='Not-Baptised'){
            counts++;
          }
          this.counts=counts;
    
        }
      }else{
        this.toastr.error(data.error)
        window.location.href='#/session'
      }
     // this.toastr.success("You are Seeing Not-Baptised Members Data")
      
   
     })

  }
  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('print-section');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }

}
