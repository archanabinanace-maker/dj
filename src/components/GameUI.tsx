import { Heart, Skull } from 'lucide-react';
import { PlayerStats } from '../types/game';

interface GameUIProps {
  playerStats: PlayerStats;
  wave: number;
  enemiesRemaining: number;
}

const GameUI = ({ playerStats, wave, enemiesRemaining }: GameUIProps) => {
  const healthPercentage = (playerStats.health / playerStats.maxHealth) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 p-4 pointer-events-none z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-start">
        <div className="bg-gray-900 bg-opacity-80 rounded-lg p-4 border-2 border-gray-700">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-5 h-5 text-red-500" />
            <span className="text-white font-bold">
              {Math.ceil(playerStats.health)} / {playerStats.maxHealth}
            </span>
          </div>
          <div className="w-48 h-4 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-red-500 transition-all duration-200"
              style={{ width: `${Math.max(0, healthPercentage)}%` }}
            />
          </div>
        </div>

        <div className="bg-gray-900 bg-opacity-80 rounded-lg p-4 border-2 border-gray-700 text-center">
          <div className="text-yellow-400 font-bold text-2xl mb-1">Wave {wave}</div>
          <div className="flex items-center gap-2 justify-center text-gray-300">
            <Skull className="w-4 h-4" />
            <span className="text-sm">{enemiesRemaining} enemies</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameUI;
