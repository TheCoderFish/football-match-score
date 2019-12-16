import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { ScoreService} from '../score.service';
import { pluck } from "rxjs/operators";

@Component({
  selector: 'app-match-score',
  templateUrl: './match-score.component.html',
  styleUrls: ['./match-score.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchScoreComponent implements OnInit {

  scores;

  constructor(private scoreService:ScoreService) { }

  ngOnInit() {
    this.scores = this.scoreService.getScore();
  }

}