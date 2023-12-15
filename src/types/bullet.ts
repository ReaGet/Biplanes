export interface IBullet {
  alive: boolean;
  x: number;
  y: number;
  dir: number;
  firedBy: number;
  speed: number;

  update(): void;
  updateCoordinates(): void;
  draw(): void;
  isDead(): boolean;

  hitAnimUpdate(): void;
  hitGround(): void;

  destroy(): void;
}

export interface IBulletsManager {
  bullets: IBullet[];
  spawnBullet(planeX: number, planeY: number, planeDir: number, firedBy: number): void;
  updateBullets(): void;
  draw(): void;
  clear(): void;
}