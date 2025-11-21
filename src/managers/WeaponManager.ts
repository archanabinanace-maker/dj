import { Weapon, WeaponType, Projectile, Position, PlayerStats } from '../types/game';
import { generateId, normalize } from '../utils/gameUtils';

export class WeaponManager {
  private weapon: Weapon;
  private lastAttackTime: number = 0;

  constructor(weapon: Weapon) {
    this.weapon = weapon;
  }

  canAttack(currentTime: number, cooldownReduction: number): boolean {
    const adjustedCooldown = this.weapon.cooldown * (1 - cooldownReduction);
    return currentTime - this.lastAttackTime >= adjustedCooldown;
  }

  attack(
    playerPos: Position,
    targetPos: Position,
    playerStats: PlayerStats,
    currentTime: number
  ): Projectile[] {
    if (!this.canAttack(currentTime, playerStats.cooldownReduction)) {
      return [];
    }

    this.lastAttackTime = currentTime;

    const direction = normalize({
      x: targetPos.x - playerPos.x,
      y: targetPos.y - playerPos.y,
    });

    const damage = this.weapon.baseDamage * playerStats.damage;

    switch (this.weapon.type) {
      case WeaponType.PISTOL:
        return this.createPistolProjectile(playerPos, direction, damage, playerStats);

      case WeaponType.SHOTGUN:
        return this.createShotgunProjectiles(playerPos, direction, damage, playerStats);

      case WeaponType.SWORD:
        return this.createSwordSlash(playerPos, direction, damage, playerStats);

      default:
        return [];
    }
  }

  private createPistolProjectile(
    position: Position,
    direction: Position,
    damage: number,
    playerStats: PlayerStats
  ): Projectile[] {
    const speed = 8;
    return [
      {
        id: generateId(),
        position: { ...position },
        velocity: { x: direction.x * speed, y: direction.y * speed },
        damage,
        size: 8 * playerStats.projectileSize,
      },
    ];
  }

  private createShotgunProjectiles(
    position: Position,
    direction: Position,
    damage: number,
    playerStats: PlayerStats
  ): Projectile[] {
    const speed = 7;
    const spreadAngle = Math.PI / 8;
    const projectiles: Projectile[] = [];

    for (let i = -1; i <= 1; i++) {
      const angle = Math.atan2(direction.y, direction.x) + spreadAngle * i;
      const dir = { x: Math.cos(angle), y: Math.sin(angle) };

      projectiles.push({
        id: generateId(),
        position: { ...position },
        velocity: { x: dir.x * speed, y: dir.y * speed },
        damage: damage * 0.7,
        size: 6 * playerStats.projectileSize,
      });
    }

    return projectiles;
  }

  private createSwordSlash(
    position: Position,
    direction: Position,
    damage: number,
    playerStats: PlayerStats
  ): Projectile[] {
    const speed = 12;
    return [
      {
        id: generateId(),
        position: { x: position.x + direction.x * 20, y: position.y + direction.y * 20 },
        velocity: { x: direction.x * speed, y: direction.y * speed },
        damage,
        size: 30 * playerStats.projectileSize,
        piercing: true,
      },
    ];
  }
}
