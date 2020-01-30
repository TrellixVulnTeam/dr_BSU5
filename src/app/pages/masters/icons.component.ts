import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  public user: string;
  constructor() { }

  ngOnInit() {
    this.user=JSON.parse(localStorage.getItem("UData"));
  }
}
