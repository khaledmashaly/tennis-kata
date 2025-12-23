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
    if (this.isGameDeuce()) return this.getDeuceScore();
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

  private isGameDeuce(): boolean {
    return this.m_score1 >= 4 || this.m_score2 >= 4;
  }

  private getTiedScore(): string {
    let score: string = '';

    switch (this.m_score1) {
      case 0:
        score = 'Love-All';
        break;
      case 1:
        score = 'Fifteen-All';
        break;
      case 2:
        score = 'Thirty-All';
        break;
      default:
        score = 'Deuce';
        break;
    }

    return score;
  }

  private getDeuceScore(): string {
    let score: string = '';
    const minusResult: number = this.m_score1 - this.m_score2;
    if (minusResult === 1) score = 'Advantage player1';
    else if (minusResult === -1) score = 'Advantage player2';
    else if (minusResult >= 2) score = 'Win for player1';
    else score = 'Win for player2';
    return score;
  }

  /**
   * Get game score when not tied or deuce.
   */
  private getNormalGameScore(): string {
    let score: string = '';
    let tempScore: number = 0;

    for (let i = 1; i < 3; i++) {
      if (i === 1) tempScore = this.m_score1;
      else { score += '-'; tempScore = this.m_score2; }
      switch (tempScore) {
        case 0:
          score += 'Love';
          break;
        case 1:
          score += 'Fifteen';
          break;
        case 2:
          score += 'Thirty';
          break;
        case 3:
          score += 'Forty';
          break;
      }
    }

    return score;
  }
}
