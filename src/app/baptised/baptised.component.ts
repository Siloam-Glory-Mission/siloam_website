import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import * as XLSX from 'xlsx';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-baptised',
  templateUrl: './baptised.component.html',
  styleUrls: ['./baptised.component.css']
})
export class BaptisedComponent  {
  examdata: any;
  baptised: any;
  search:any;
  counts: any;
  baptisedd: any;
  title = 'angular-app';
  fileName= 'ExcelSheet.xlsx';
  
  constructor(private authservice:AuthService,private toastr:ToastrService){}
  
  ngOnInit(){
    
    this.authservice.getbaptised().subscribe((data:any)=>{
      let counts=0;
     // console.log(data)
      this.baptisedd=data.data;
      if(this.baptisedd){
        var filter = this.baptisedd.filter((e: { status: String; }) => e.status == 'Baptised');
    this.baptised=filter;
    for(var i=0;i<this.baptised.length;i++){
      if(this.baptised[i].status=='Baptised'){
        counts++;
      }
      this.counts=counts;

    }
   

      }else{
        this.toastr.error(data.error)
        window.location.href='#/session'
      }
     // this.toastr.success("You are Seeing Baptised Members Data")
      
    
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
