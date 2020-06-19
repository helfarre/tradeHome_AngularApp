import { Component, OnInit, ɵConsole, Input } from '@angular/core';
import { DatageneratorService } from '../../services/datagenerator.service';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  @Input() stock_symbol:string;
  resolution:string="d";
  maxdate:Date=new Date();
  startdate:Date= new Date(new Date().setFullYear(new Date().getFullYear() + -1));
  mindate:Date= new Date(new Date().setFullYear(new Date().getFullYear() + -1));

  endDate:Date= new Date();


  public barChartOptions={
    scaleShowVerticalLines: false,
    responsive : true
  };
  public barChartLabels ;
  public barChartType= 'line';
  public barChartLegend =true;
  public barChartData= [
    {data :[65,66,22,31,22,11,23], label:'',fill : false,lineTension: 0},
  ];
  constructor(private datageneratorservice:DatageneratorService) { }
 
  ngOnInit(): void {
    this.datageneratorservice.getData(this.stock_symbol, this.startdate,this.endDate,this.resolution).subscribe((data: any)=>{
      if(data != null && data.length != 0)
      for (let i = 0; i < data['Date'].length; i++) {
        data['Date'][i]=(new Date(data['Date'][i])).toLocaleDateString();
    }
       this.barChartLabels=data['Date'];
       this.barChartData[0].label=this.stock_symbol;
       this.barChartData[0].data=flatt(data['Close']);

    });
  }
  onClickSubmit(data){
      if((data.resolution)!="")
  this.resolution=data.resolution;
  if((data.startdate)!=undefined)
    this.startdate=data.startdate;
  if((data.endDate)!=undefined)
      this.endDate=data.endDate;
this.ngOnInit();
 }
  

}
function flatt(input, depth = 1, stack = [])
{
    for (let item of input)
    {
        if (item instanceof Array && depth > 0)
        {
            flatt(item, depth - 1, stack);
        }
        else {
            stack.push(item);
        }
    }

    return stack;
}
