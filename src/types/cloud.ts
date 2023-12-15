export interface ICloud {
  x: number;
  y: number;
  width: number;
  height: number;
  dir: boolean;
  id: number;
  opaque: boolean;

  update(): void;
  draw(): void;
  updateCoordinates(): void;
  updateHeight(): void;
  updateCollisionBox(): void;
  isHit(): boolean;
  setTransparent(): void;
  setOpaque(): void;
  respawn(): void;
}