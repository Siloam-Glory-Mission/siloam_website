import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import * as XLSX from 'xlsx';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-totalmale',
  templateUrl: './totalmale.component.html',
  styleUrls: ['./totalmale.component.css']
})
export class TotalmaleComponent {
  examdata: any;
  baptised: any;
  search:any;
  
  title = 'angular-app';
  fileName= 'ExcelSheet.xlsx';
  constructor(private authservice:AuthService,private toastr:ToastrService){}
  
  ngOnInit(){
    this.authservice.getmaledata().subscribe((data:any)=>{
      
      this.examdata=data.data;
      if(this.examdata){
        var filter = this.examdata.filter((e: { sex: String; }) => e.sex == 'Male');
        this.baptised=filter;

      }else{
        this.toastr.error(data.message2)
      }
//      this.toastr.success("You Are Seeing Total Male Members List");

      
   

    
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
