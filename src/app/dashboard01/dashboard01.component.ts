import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard01',
  templateUrl: './dashboard01.component.html',
  styleUrls: ['./dashboard01.component.css']
})
export class Dashboard01Component implements OnInit {
  opened = true;
  constructor() { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

}
