import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.scss']
})
export class TopheaderComponent implements OnInit {
@Input() telephone: any;
@Input() email: any;
@Input() social: any;

telephones: any[] = [{href: 'tel:+7 (727) 317 85 49', i: 'fas fa-phone-alt', telephone: '+7 (727) 317 85 50'}];
emails: any[] = [{href: 'tel:+7 (727) 317 85 49', i: 'fas fa-phone-alt', email: '+7 (727) 317 85 50'}];
  constructor() { }
  ngOnInit(): void {
  }

}
