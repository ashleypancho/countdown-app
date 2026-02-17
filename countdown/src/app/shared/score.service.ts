import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const SESSION_SCORE_KEY = 'countdown.totalScore';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private readonly totalScoreSubject = new BehaviorSubject<number>(this.getInitialScore());
  readonly totalScore$ = this.totalScoreSubject.asObservable();

  addPoints(points: number): void {
    const safePoints = Number.isFinite(points) ? Math.max(0, points) : 0;
    const nextScore = this.totalScoreSubject.value + safePoints;
    this.totalScoreSubject.next(nextScore);
    this.persist(nextScore);
  }

  resetScore(): void {
    this.totalScoreSubject.next(0);
    this.persist(0);
  }

  private getInitialScore(): number {
    if (typeof sessionStorage === 'undefined') {
      return 0;
    }

    const rawScore = sessionStorage.getItem(SESSION_SCORE_KEY);
    const parsed = rawScore === null ? NaN : Number(rawScore);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
  }

  private persist(score: number): void {
    if (typeof sessionStorage === 'undefined') {
      return;
    }
    sessionStorage.setItem(SESSION_SCORE_KEY, String(score));
  }
}
