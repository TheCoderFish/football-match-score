import { Injectable } from "@angular/core";
import { of, interval, Observable, BehaviorSubject, Subject } from "rxjs";
import { mapTo, map, tap, takeUntil } from "rxjs/operators";

@Injectable()
export class ScoreService {
  private _scores;
  private score: BehaviorSubject<any>;
  private score$: Observable<any>;
  private reset$: Subject<any>;
  private _initial = {
    teamOne: 0,
    teamTwo: 0,
    time: 0
  };

  constructor() {
    this.scores = { ...this._initial };
    this.reset$ = new Subject();
    this.score = new BehaviorSubject(this.scores);
    this.score$ = this.score.asObservable();

    this.startMatch();
  }

  public get scores() {
    return this._scores;
  }

  public set scores(value) {
    this._scores = value;
  }

  getScore(): Observable<any> {
    /*   return interval(1000).pipe(
      map(current => ({ teamOne: this.teamOneScore, teamTwo: this.teamTwoScore,time : this.time })),
      tap(()=>this.time++)
      ); */

    return this.score$;
  }

  startMatch() {
    interval(1000)
      .pipe(
        takeUntil(this.reset$),
        tap(() => console.log(this._initial))
      )
      .subscribe(matchStarter => {
        this.score.next(this.scores);
        this.scores.time++;
      });
  }

  goal(teamNumber) {
    if (teamNumber == 1) {
      this.scores.teamOne++;
    } else {
      this.scores.teamTwo++;
    }
    this.score.next(this.scores);
  }

  reset() {
    this.reset$.next(true);
    this.scores = { ...this._initial };
    this.score.next(this.scores);
  }
}
