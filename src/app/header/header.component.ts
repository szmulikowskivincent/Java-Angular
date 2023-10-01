import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
user: any;
file: string;

  constructor() { }
  

  ngOnInit(): void {
  }

  resetInput() {
    throw new Error('Method not implemented.');
  }
}

