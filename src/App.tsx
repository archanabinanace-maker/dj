import { useState } from 'react';
import WeaponSelection from './components/WeaponSelection';
import GameCanvas from './components/GameCanvas';
import { Weapon } from './types/game';

function App() {
  const [selectedWeapon, setSelectedWeapon] = useState<Weapon | null>(null);
  const [gameStarted, setGameStarted] = useState(false);

  const handleWeaponSelect = (weapon: Weapon) => {
    setSelectedWeapon(weapon);
    setGameStarted(true);
  };

  const handleReturnToMenu = () => {
    setGameStarted(false);
    setSelectedWeapon(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      {!gameStarted ? (
        <WeaponSelection onSelectWeapon={handleWeaponSelect} />
      ) : (
        <GameCanvas weapon={selectedWeapon!} onReturnToMenu={handleReturnToMenu} />
      )}
    </div>
  );
}

export default App;
