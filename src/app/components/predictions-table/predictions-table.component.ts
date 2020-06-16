import { Component, OnInit, Input } from '@angular/core';
import { predictions } from 'src/app/models/Predictions.Model';

@Component({
  selector: 'app-predictions-table',
  templateUrl: './predictions-table.component.html',
  styleUrls: ['./predictions-table.component.css']
})
export class PredictionsTableComponent implements OnInit {
  @Input() values : Array<predictions>;
  
  constructor() { }

  ngOnInit(): void {
  }

}
