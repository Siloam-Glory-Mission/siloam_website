import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import * as XLSX from 'xlsx';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent {

  examdata: any;
  baptised: any;
  search:any;
  
  title = 'angular-app';
  fileName= 'ExcelSheet.xlsx';
  latesdata: any;
  logdata: any;
  constructor(private authservice:AuthService,private toastr:ToastrService,private fb: FormBuilder){

    this.logdata = this.fb.group({
      date:['',[Validators.required]]
    })

  }
  
  ngOnInit(){
   

  }
  onsubmit(){
    var obj={
      "year_id":this.logdata.value.date

    }
    this.authservice.getlatestdata(obj).subscribe((data:any)=>{
      
      this.latesdata=data.data;
      if(this.latesdata){
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
