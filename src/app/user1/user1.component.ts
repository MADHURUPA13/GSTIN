import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {
  submitted: boolean=false;
 
  constructor(private formbuilder: FormBuilder) { }
  GstForm = this.formbuilder.group({
    returns: ['', [Validators.required]],
    suppiler: ['', [Validators.required, Validators.minLength(6)]],
    financialYear:['',Validators.required],
    TaxPeriod:['',Validators.required],
    check:['',Validators.required]
  });
  get f() { return this.GstForm.controls; }
 
  
  onSubmit() {
 
    this.submitted = true;
    if (this.GstForm.invalid) {
      return;
    }
  }
 
  ngOnInit() {
  }
 
}