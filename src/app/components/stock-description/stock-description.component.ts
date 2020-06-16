import { Component, OnInit, Input } from '@angular/core';

import { Stock } from 'src/app/models/Operation.Model';


@Component({
  selector: 'app-stock-description',
  templateUrl: './stock-description.component.html',
  styleUrls: ['./stock-description.component.css']
})
export class StockDescriptionComponent implements OnInit {
  
  isAuthenticated : boolean;
  name : string;
  @Input() stock : Stock;
  actualroute: string;
  constructor() { }

  ngOnInit(): void {

     }

  

}
