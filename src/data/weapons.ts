import { Weapon, WeaponType } from '../types/game';

export const WEAPONS: Weapon[] = [
  {
    type: WeaponType.PISTOL,
    name: 'Pistol',
    description: 'Shoots single bullets with good accuracy',
    baseDamage: 10,
    cooldown: 500,
    range: 400,
  },
  {
    type: WeaponType.SHOTGUN,
    name: 'Shotgun',
    description: 'Spreads 3 projectiles in a cone',
    baseDamage: 8,
    cooldown: 800,
    range: 300,
  },
  {
    type: WeaponType.SWORD,
    name: 'Sword',
    description: 'Melee slash attack with high damage',
    baseDamage: 25,
    cooldown: 400,
    range: 60,
  },
];
