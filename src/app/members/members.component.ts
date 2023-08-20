import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import * as XLSX from 'xlsx';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {
  examdata: any;
  baptised: any;
  modaldetails: any;
  search:any;
  page: any;
  buttonHidden = false;
  profileEditForm: any;
  updateform: any;
  x: any;

  title = 'angular-app';
  fileName= 'ExcelSheet.xlsx';
update: any;
  membersdata: any;
  constructor(private authservice:AuthService,private fb: FormBuilder,private toastr:ToastrService,private route: ActivatedRoute,private router: Router){
    
  }
  
  ngOnInit(){
    this.page=1;
    this.authservice.getData().subscribe((data:any)=>{
      
      this.membersdata=data.data;
     // console.log(this.examdata)
      if(this.membersdata){
        console.log("Working")


      }else{
        this.toastr.error(data.error)
        window.location.href='#/session'

      }
      
   
    })

  }
  updatedetails(x:any){
  //  console.log(x)
    
    this.router.navigate(['/update'], { queryParams: x });

  }
  getselecteddetails(selecteddata: any) {
    this.modaldetails = this.membersdata.filter((e: { id: any; }) => e.id === selecteddata);
    console.log(this.modaldetails)
  }
delete(id:any){
  console.log(id)
  this.modaldetails = this.membersdata.filter((e: { id: any; }) => e.id === id);
  console.log(this.modaldetails[0].id)

  this.authservice.delete(this.modaldetails[0].id).subscribe((data:any)=>{
    this.toastr.success(data.message);
    window.location.href='#/dashboard';
  })


}
  
  
  Back(){
    this.page=1;
  }
  updateage(){
    window.location.href='#/updateage'
  }
  lastupdated(){
    window.location.href='#/lastupdated';
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
