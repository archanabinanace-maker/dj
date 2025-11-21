import { Position } from '../types/game';

export const distance = (pos1: Position, pos2: Position): number => {
  const dx = pos2.x - pos1.x;
  const dy = pos2.y - pos1.y;
  return Math.sqrt(dx * dx + dy * dy);
};

export const normalize = (pos: Position): Position => {
  const len = Math.sqrt(pos.x * pos.x + pos.y * pos.y);
  if (len === 0) return { x: 0, y: 0 };
  return { x: pos.x / len, y: pos.y / len };
};

export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export const checkCollision = (
  pos1: Position,
  size1: number,
  pos2: Position,
  size2: number
): boolean => {
  const dist = distance(pos1, pos2);
  return dist < (size1 + size2) / 2;
};

export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

export const randomInRange = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};
