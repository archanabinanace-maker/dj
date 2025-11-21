import { PowerUp, PlayerStats } from '../types/game';

export const POWER_UPS: PowerUp[] = [
  {
    id: 'speed',
    name: '+20% Movement Speed',
    description: 'Move faster across the battlefield',
    effect: (stats: PlayerStats) => ({
      ...stats,
      movementSpeed: stats.movementSpeed * 1.2,
    }),
  },
  {
    id: 'attack_speed',
    name: '+15% Attack Speed',
    description: 'Attack more frequently',
    effect: (stats: PlayerStats) => ({
      ...stats,
      attackSpeed: stats.attackSpeed * 1.15,
    }),
  },
  {
    id: 'damage',
    name: '+10% Damage',
    description: 'Deal more damage with each hit',
    effect: (stats: PlayerStats) => ({
      ...stats,
      damage: stats.damage * 1.1,
    }),
  },
  {
    id: 'max_health',
    name: '+20 Max HP',
    description: 'Increase maximum health',
    effect: (stats: PlayerStats) => ({
      ...stats,
      maxHealth: stats.maxHealth + 20,
      health: stats.health + 20,
    }),
  },
  {
    id: 'projectile_size',
    name: '+25% Projectile Size',
    description: 'Bigger projectiles hit more easily',
    effect: (stats: PlayerStats) => ({
      ...stats,
      projectileSize: stats.projectileSize * 1.25,
    }),
  },
  {
    id: 'knockback',
    name: '+30% Knockback',
    description: 'Push enemies back further',
    effect: (stats: PlayerStats) => ({
      ...stats,
      knockback: stats.knockback * 1.3,
    }),
  },
  {
    id: 'cooldown',
    name: '-10% Cooldown',
    description: 'Reduce ability cooldowns',
    effect: (stats: PlayerStats) => ({
      ...stats,
      cooldownReduction: stats.cooldownReduction + 0.1,
    }),
  },
  {
    id: 'health_regen',
    name: '+10 HP',
    description: 'Restore health immediately',
    effect: (stats: PlayerStats) => ({
      ...stats,
      health: Math.min(stats.health + 10, stats.maxHealth),
    }),
  },
];
