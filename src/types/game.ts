export interface Position {
  x: number;
  y: number;
}

export interface PlayerStats {
  maxHealth: number;
  health: number;
  movementSpeed: number;
  damage: number;
  attackSpeed: number;
  projectileSize: number;
  knockback: number;
  cooldownReduction: number;
}

export interface Enemy {
  id: string;
  position: Position;
  health: number;
  maxHealth: number;
  speed: number;
  damage: number;
  size: number;
}

export interface Projectile {
  id: string;
  position: Position;
  velocity: Position;
  damage: number;
  size: number;
  piercing?: boolean;
}

export enum WeaponType {
  PISTOL = 'pistol',
  SHOTGUN = 'shotgun',
  SWORD = 'sword',
}

export interface Weapon {
  type: WeaponType;
  name: string;
  description: string;
  baseDamage: number;
  cooldown: number;
  range?: number;
}

export interface PowerUp {
  id: string;
  name: string;
  description: string;
  effect: (stats: PlayerStats) => PlayerStats;
}
