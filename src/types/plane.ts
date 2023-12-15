import { THitbox } from "./hitbox";
import { IPilot } from "./pilot";

export interface IPlane {
  pilot: IPilot;
  type: number;
  score: number;

  x: number;
  y: number;
  width: number;
  height: number;

  dead: boolean;
  hp: number;
  onground: boolean;
  takeoff: boolean;
  speed: number;
  maxSpeed: number;

  fire: boolean;
  isJump: boolean;
  hitbox: THitbox;

  update(): void;
  accelerate(): void;
  decelerate(): void;
  turn(dir: number): void;
  shoot(): void;
  jump(): void;
  speedUpdate(): void;
  coordinatesUpdate(): void;
  collisionsUpdate(): void;
  abandonedUpdate(): void;
  animationsUpdate(): void;
  animationsReset(): void;
  smokeUpdate(): void;
  fireUpdate(): void;
  explosionUpdate(): void;
  hitboxUpdate(): void;
  takeOffUpdate(): void;
  takeOffStart(): void;
  takeOffFinish(): void;
  hit(hitBy: number): void;
  isHit(checkX: number, checkY: number): boolean;
  explode(): void;
  crash(): void;
  respawn(): void;
  resetSpawnProtection(): void;
  resetScore(): void;
  scoreChange(deltaScore: number): void;
  getType(): number;
  getScore(): number;
  getX(): number;
  getY(): number;
  getData(): TPlaneData;
  setCoords(planeData: TPlaneData): void;
  setDir(newDir: number): void;
  isDead(): boolean;
}

export type TPlaneData = {
  x: number;
  y: number;
  dir: number;
  pilotX: number;
  pilotY: number;
}