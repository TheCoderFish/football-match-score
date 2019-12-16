import { Component, OnInit } from '@angular/core';
import { ScoreService} from '../score.service';

@Component({
  selector: 'app-refree-panel',
  templateUrl: './refree-panel.component.html',
  styleUrls: ['./refree-panel.component.css']
})
export class RefreePanelComponent implements OnInit {

  constructor(private scoreService:ScoreService) { }

  ngOnInit() {
  }

  goal(teamNumber){
    this.scoreService.goal(teamNumber);
  }

  

}