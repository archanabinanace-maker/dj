import { PowerUp } from '../types/game';
import { POWER_UPS } from '../data/powerups';

export class WaveManager {
  private currentWave: number = 1;
  private waveInProgress: boolean = false;
  private showingPowerUpSelection: boolean = false;

  startWave(): void {
    this.waveInProgress = true;
    this.showingPowerUpSelection = false;
  }

  completeWave(): void {
    this.waveInProgress = false;
    this.showingPowerUpSelection = true;
  }

  nextWave(): void {
    this.currentWave++;
    this.startWave();
  }

  getCurrentWave(): number {
    return this.currentWave;
  }

  isWaveInProgress(): boolean {
    return this.waveInProgress;
  }

  isShowingPowerUpSelection(): boolean {
    return this.showingPowerUpSelection;
  }

  getRandomPowerUps(count: number = 3): PowerUp[] {
    const shuffled = [...POWER_UPS].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }

  reset(): void {
    this.currentWave = 1;
    this.waveInProgress = false;
    this.showingPowerUpSelection = false;
  }
}
