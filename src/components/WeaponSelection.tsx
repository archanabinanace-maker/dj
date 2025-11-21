import { Crosshair, Zap, Sword } from 'lucide-react';
import { Weapon } from '../types/game';
import { WEAPONS } from '../data/weapons';

interface WeaponSelectionProps {
  onSelectWeapon: (weapon: Weapon) => void;
}

const WeaponSelection = ({ onSelectWeapon }: WeaponSelectionProps) => {
  const getWeaponIcon = (weaponType: string) => {
    switch (weaponType) {
      case 'pistol':
        return <Crosshair className="w-16 h-16" />;
      case 'shotgun':
        return <Zap className="w-16 h-16" />;
      case 'sword':
        return <Sword className="w-16 h-16" />;
      default:
        return <Crosshair className="w-16 h-16" />;
    }
  };

  return (
    <div className="text-white text-center">
      <h1 className="text-5xl font-bold mb-4 text-red-500">SURVIVAL ARENA</h1>
      <p className="text-xl mb-12 text-gray-300">Choose Your Weapon</p>

      <div className="flex gap-8 justify-center">
        {WEAPONS.map((weapon) => (
          <button
            key={weapon.type}
            onClick={() => onSelectWeapon(weapon)}
            className="bg-gray-800 hover:bg-gray-700 border-2 border-gray-600 hover:border-red-500 rounded-lg p-8 w-64 transition-all transform hover:scale-105"
          >
            <div className="flex justify-center mb-4 text-red-400">
              {getWeaponIcon(weapon.type)}
            </div>
            <h3 className="text-2xl font-bold mb-2">{weapon.name}</h3>
            <p className="text-gray-400 mb-4">{weapon.description}</p>
            <div className="text-sm text-gray-500">
              <p>Damage: {weapon.baseDamage}</p>
              <p>Cooldown: {weapon.cooldown}ms</p>
              {weapon.range && <p>Range: {weapon.range}</p>}
            </div>
          </button>
        ))}
      </div>

      <p className="mt-12 text-gray-500">Use WASD to move • Survive the waves • Get stronger</p>
    </div>
  );
};

export default WeaponSelection;
