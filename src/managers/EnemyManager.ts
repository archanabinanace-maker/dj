import { Enemy, Position } from '../types/game';
import { generateId, normalize, distance, randomInRange } from '../utils/gameUtils';

export class EnemyManager {
  private enemies: Enemy[] = [];
  private canvasWidth: number;
  private canvasHeight: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
  }

  spawnWave(wave: number): void {
    const enemyCount = Math.min(5 + wave * 3, 40);
    const baseHealth = 20 + wave * 5;
    const baseSpeed = 1 + wave * 0.1;
    const baseDamage = 5 + wave * 2;

    for (let i = 0; i < enemyCount; i++) {
      this.spawnEnemy(baseHealth, baseSpeed, baseDamage);
    }
  }

  private spawnEnemy(health: number, speed: number, damage: number): void {
    const side = Math.floor(Math.random() * 4);
    let x: number, y: number;

    switch (side) {
      case 0:
        x = Math.random() * this.canvasWidth;
        y = -50;
        break;
      case 1:
        x = this.canvasWidth + 50;
        y = Math.random() * this.canvasHeight;
        break;
      case 2:
        x = Math.random() * this.canvasWidth;
        y = this.canvasHeight + 50;
        break;
      default:
        x = -50;
        y = Math.random() * this.canvasHeight;
    }

    const size = randomInRange(20, 30);

    this.enemies.push({
      id: generateId(),
      position: { x, y },
      health,
      maxHealth: health,
      speed,
      damage,
      size,
    });
  }

  updateEnemies(playerPos: Position, deltaTime: number): void {
    this.enemies.forEach((enemy) => {
      const direction = normalize({
        x: playerPos.x - enemy.position.x,
        y: playerPos.y - enemy.position.y,
      });

      const moveSpeed = enemy.speed * (deltaTime / 16);
      enemy.position.x += direction.x * moveSpeed;
      enemy.position.y += direction.y * moveSpeed;
    });
  }

  damageEnemy(enemyId: string, damage: number, knockback: number, playerPos: Position): boolean {
    const enemy = this.enemies.find((e) => e.id === enemyId);
    if (!enemy) return false;

    enemy.health -= damage;

    const direction = normalize({
      x: enemy.position.x - playerPos.x,
      y: enemy.position.y - playerPos.y,
    });

    enemy.position.x += direction.x * knockback;
    enemy.position.y += direction.y * knockback;

    if (enemy.health <= 0) {
      this.enemies = this.enemies.filter((e) => e.id !== enemyId);
      return true;
    }

    return false;
  }

  getEnemies(): Enemy[] {
    return this.enemies;
  }

  checkPlayerCollision(playerPos: Position, playerSize: number): number {
    let totalDamage = 0;
    const currentTime = Date.now();

    this.enemies.forEach((enemy) => {
      const dist = distance(playerPos, enemy.position);
      if (dist < (playerSize + enemy.size) / 2) {
        totalDamage += enemy.damage;
      }
    });

    return totalDamage;
  }

  clear(): void {
    this.enemies = [];
  }

  isEmpty(): boolean {
    return this.enemies.length === 0;
  }

  getCount(): number {
    return this.enemies.length;
  }
}
