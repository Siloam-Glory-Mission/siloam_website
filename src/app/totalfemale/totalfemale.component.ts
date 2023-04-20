import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

import * as XLSX from 'xlsx';
import { ToastrService } from 'ngx-toastr';





@Component({
  selector: 'app-totalfemale',
  templateUrl: './totalfemale.component.html',
  styleUrls: ['./totalfemale.component.css']
})
export class TotalfemaleComponent {
  examdata: any;
  baptised: any;
  search:any;
  
  title = 'angular-app';
  fileName= 'ExcelSheet.xlsx';
  constructor(private authservice:AuthService,private toastr:ToastrService){}
  
  ngOnInit(){
    this.authservice.getData().subscribe((data:any)=>{
      
      this.examdata=data.data;
      this.toastr.success("You are Seeing Total Female Members List")
      
      
    var filter = this.examdata.filter((e: { sex: String; }) => e.sex == 'Female');
    this.baptised=filter;
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
