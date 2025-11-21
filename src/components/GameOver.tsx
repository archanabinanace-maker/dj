import { Skull } from 'lucide-react';

interface GameOverProps {
  wave: number;
  onReturnToMenu: () => void;
}

const GameOver = ({ wave, onReturnToMenu }: GameOverProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50">
      <div className="text-white text-center">
        <Skull className="w-24 h-24 mx-auto mb-6 text-red-500" />
        <h2 className="text-5xl font-bold mb-4 text-red-500">GAME OVER</h2>
        <p className="text-2xl mb-8 text-gray-300">You survived {wave} wave{wave !== 1 ? 's' : ''}</p>

        <button
          onClick={onReturnToMenu}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
        >
          Return to Menu
        </button>
      </div>
    </div>
  );
};

export default GameOver;
