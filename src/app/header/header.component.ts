import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activetab= 'home';

  constructor() { }

  ngOnInit(): void {
  }
  getActiveTab(tabname:string){
    this.activetab = tabname;
  }

}
