import { THitbox } from "./hitbox";
import { IPlane } from "./plane";

export interface IPilot {
  plane: IPlane;
  run: boolean;
  chute: boolean;
  dead: boolean;

  x: number;
  y: number;
  width: number;
  height: number;
  dir: number;

  speed: number;
  vspeed: number;
  gravity: number;

  hitbox: THitbox;
  chuteHitbox: THitbox;

  update(): void;
  move(dir: number): void;
  moveIdle(): void;
  bail(planeX: number, planeY: number, bailDir: number): void;
  openChute(): void;
  chuteUnlock(): void;
  hitboxUpdate(): void;
  chuteHitboxUpdate(): void;
  chuteIsHit(checkX: number, checkY: number): boolean;
  chuteHit(): void;
  death(): void;
  isDead(): boolean;
  isHit(checkX: number, checkY: number): boolean;
  kill(killedBy: number): void;
  hitGroundCheck(): void;
  fallSurvive(): void;
  rescue(): void;
  respawn(): void;

  getX(): number;
  getY(): number;
  setX(newX: number): void;
  setY(newY: number): void;

  fallUpdate(): void;
  runUpdate(): void;
  deathUpdate(): void;
  animationsUpdate(): void;
  animationsReset(): void;
  fallAnimUpdate(): void;
  chuteAnimaUpdate(): void;
  runAnimUpdate(): void;
  deathAnimUpdate(): void;
}