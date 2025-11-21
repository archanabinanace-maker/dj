import { PowerUp } from '../types/game';

interface PowerUpSelectionProps {
  powerUps: PowerUp[];
  onSelectPowerUp: (powerUp: PowerUp) => void;
  wave: number;
}

const PowerUpSelection = ({ powerUps, onSelectPowerUp, wave }: PowerUpSelectionProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="text-white text-center max-w-4xl">
        <h2 className="text-4xl font-bold mb-2 text-green-400">Wave {wave} Complete!</h2>
        <p className="text-xl mb-8 text-gray-300">Choose a Power-Up</p>

        <div className="flex gap-6 justify-center">
          {powerUps.map((powerUp) => (
            <button
              key={powerUp.id}
              onClick={() => onSelectPowerUp(powerUp)}
              className="bg-gray-800 hover:bg-gray-700 border-2 border-gray-600 hover:border-green-500 rounded-lg p-6 w-64 transition-all transform hover:scale-105"
            >
              <h3 className="text-xl font-bold mb-3 text-green-400">{powerUp.name}</h3>
              <p className="text-gray-400 text-sm">{powerUp.description}</p>
            </button>
          ))}
        </div>

        <p className="mt-8 text-gray-500">Select a power-up to continue</p>
      </div>
    </div>
  );
};

export default PowerUpSelection;
