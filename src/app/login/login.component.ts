import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted: boolean=false;
  val:any="password";
  eye1: boolean=true;
  eye2: boolean=false;
  signupDetails: any;
  key;
  flag: number;
  name: any;
  token: any;
  data: any;
  user: any;

  constructor(private formBuilder: FormBuilder,private signup:SignupService,private r :Router) { }

  ngOnInit() {
  //  console.log(this.signup.getItem());
  }
  loginForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  get f() { return this.loginForm.controls; }


  onSubmit() {
debugger;
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.signup.postLoginDetails(this.loginForm.value).subscribe(res=>{
      console.log(res);
      
      this.data=res;
      console.log(res);
      this.token=res['authorization'];
      this.user=res['authorities']
      localStorage.setItem("token",this.token)
      localStorage.setItem( "user",this.user)
      console.log(this.token);
     //  this.r.navigate(['/menu']);
       this.r.navigate(['/dashboard01']);
      
      // console.log(this.user);
      
      
     } );
    //  this.signup.getSignup().subscribe(response =>
    // {
    //   console.log(response);
    //   this.signupDetails = response;
    //   for (this.key in this.signupDetails) {
    //     if (this.signupDetails[this.key].email == this.loginForm.value.email && this.signupDetails[this.key].password == this.loginForm.value.password) {
    //       this.flag = 1
    //       // this.name = this.signupDetails[this.key].firstname

    //       // localStorage.setItem("nam", this.name)
    //       // localStorage.setItem("sat", "true")
    //       // localStorage.setItem("lsat", "true")
    //       // this.s.sendMessage(this.inputstatus);
    //       this.r.navigate(['/menu']);
    //     } else {
    //       continue
    //     }
    //   }
    //   if(this.flag== 1){
    //     console.log("sucess");
        
    //   }
    //   else{
    //     console.log("wrong credentials");
        
    //   }
    // });
  }



eye(){
    this.val="text";
    this.eye1=false;
    this.eye2=true;
  }
  eyes(){
    this.val="password";
    this.eye1=true;
    this.eye2=false;
  }
}
