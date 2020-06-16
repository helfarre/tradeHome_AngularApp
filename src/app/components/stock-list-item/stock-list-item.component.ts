import { Component, OnInit, Input } from '@angular/core';
import { Stock } from 'src/app/models/Operation.Model';

@Component({
  selector: 'app-stock-list-item',
  templateUrl: './stock-list-item.component.html',
  styleUrls: ['./stock-list-item.component.css']
})
export class StockListItemComponent implements OnInit {
  @Input() stock : Stock;

  constructor() { }

  ngOnInit(): void {
  }
 
}
