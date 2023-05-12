import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import * as XLSX from 'xlsx';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  updateform: any;
  data: any;

  constructor(private authservice:AuthService,private fb: FormBuilder,private toastr:ToastrService,private route: ActivatedRoute,private router: Router){
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

    this.route.queryParams.subscribe(params => {
      this.data = params;
     console.log(this.data);
    });
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
  

}
