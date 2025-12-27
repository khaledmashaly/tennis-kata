import { TennisGame } from './TennisGame';

export class TennisGame1 implements TennisGame {
  private m_score1: number = 0;
  private m_score2: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1') this.addPointToFirstPlayer();
    else this.addPointToSecondPlayer();
  }

  getScore(): string {
    if (this.isGameTied()) return this.getTiedScore();
    if (this.isScoreAboveForty()) return this.getScoreAboveForty();
    return this.getNormalGameScore();
  }

  private addPointToFirstPlayer(): void {
    this.m_score1 += 1;
  }

  private addPointToSecondPlayer(): void {
    this.m_score2 += 1;
  }

  private isGameTied(): boolean {
    return this.m_score1 === this.m_score2;
  }

  private isScoreAboveForty(): boolean {
    return this.m_score1 >= 4 || this.m_score2 >= 4;
  }

  private getTiedScore(): string {
    const scores: Record<number, string> = {
      0: 'Love-All',
      1: 'Fifteen-All',
      2: 'Thirty-All',
    };

    return scores[this.m_score1] ?? 'Deuce';
  }

  /**
   * Score when one of the players has 4 or more points.
   */
  private getScoreAboveForty(): string {
    const scoreDiff = this.m_score1 - this.m_score2;

    if (scoreDiff === 1) return 'Advantage player1';
    if (scoreDiff === -1) return 'Advantage player2';
    if (scoreDiff >= 2) return 'Win for player1';

    return 'Win for player2';
  }

  /**
   * Get game score when not tied or deuce.
   */
  private getNormalGameScore(): string {
    const scores: Record<number, string> = {
      0: 'Love',
      1: 'Fifteen',
      2: 'Thirty',
      3: 'Forty',
    };

    return `${scores[this.m_score1]}-${scores[this.m_score2]}`;
  }
}
