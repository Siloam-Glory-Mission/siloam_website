import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import * as XLSX from 'xlsx';
import { ToastrService } from 'ngx-toastr';




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

  title = 'angular-app';
  fileName= 'ExcelSheet.xlsx';
  constructor(private authservice:AuthService,private fb: FormBuilder,private toastr:ToastrService){
    this.updateform=this.fb.group({
      name:[''],
      cname:[''],
      sex:[''],
      dob:[''],
      sdob:[''],
      status:[''],
      age:[''],
      sage:[''],
      occupation:[''],
      surname:[''],
      others:[''],
      software:[''],
      studying:[''],
      marital:[''],
      dno:[''],
      parish:[''],
      village:[''],
      city:[''],
      phone:[''],
      email:[''],
      CreationDate:[''],
      business:['']
    })
  }
  
  ngOnInit(){
    this.page=1;
    this.authservice.getData().subscribe((data:any)=>{
      
      this.examdata=data;
      console.log(this.examdata)
      
   
    })

  }
  onsubmit(){
    var obj={
      "name":this.updateform.value.name,
      "cname":this.updateform.value.cname,
      "sex":this.updateform.value.sex,
      "dob":this.updateform.value.dob,
      "sdob":this.updateform.value.sdob,
      "status":this.updateform.value.status,
      "age":this.updateform.value.age,
      "sage":this.updateform.value.sage,
      "occupation":this.updateform.value.occupation,
      "surname":this.updateform.value.surname,
      "others":this.updateform.value.others,
      "software":this.updateform.value.software,
      "studying":this.updateform.value.studying,
      "marital":this.updateform.value.marital,
      "dno":this.updateform.value.dno,
      "parish":this.updateform.value.parish,
      "village":this.updateform.value.village,
      "city":this.updateform.value.city,
      "phone":this.updateform.value.phone,
      "email":this.updateform.value.email,
      "CreationDate":this.updateform.value.CreationDate,
      "business":this.updateform.value.business
    }
    
    this.authservice.updatedata(obj).subscribe((data:any)=>{
      console.log(data);
          this.toastr.success('Welcome')


    })
    console.log(obj)


  }
  getselecteddetails(selecteddata: any) {
    this.modaldetails = this.examdata.filter((e: { id: any; }) => e.id === selecteddata);
  }
  Edit(){
    this.page=2;
    this.buttonHidden = true;

  }
  Back(){
    this.page=1;
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
