import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  val: any = "password";
  eye1: boolean = true;
  eye2: boolean = false;
  submitted: boolean = false;
  toekn1: string;
  regOnj: any;
  userRole:any;
  constructor(
    private formBuilder: FormBuilder, 
    private sign: SignupService, 
    private r: Router, 
    private toastr: ToastrManager ) 
    {
    
    }
  
  registerForm = this.formBuilder.group({
   
     mobile: [''],
   gstn: [''],
     email: [''],
   organizationName: ['']
   
    


  });

  ngOnInit() {
    this.toekn1 = localStorage.getItem('token');
    // this.sign.getUserRole().subscribe((res:any)=>{
    //   this.userRole = res;
    //   console.log(this.userRole,"userrole");
    // })
  }

  get f() { return this.registerForm.controls; }

  onsubmit() {
    this.submitted = true;
    let data = {
       mobile: this.registerForm.value.mobile,
       gstn: this.registerForm.value.gstn,
       email: this.registerForm.value.email,
       organizationName:this.registerForm.value.organizationName,
      }
    console.log("dfgfg", data);

    this.sign.postRegisterDetails(data).subscribe(
     (resp: any) => {
        console.log(resp);
        if(resp.message == 'Success' ){
          this.toastr.successToastr(resp.message, 'Success');
          this.r.navigate(['/login']);
        }
      },error => {
        this.toastr.warningToastr(error.error.message, 'Error');
      },
      )
     //alert("your are successfully registered your account")


  }

}
