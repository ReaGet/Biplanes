import { IBullet } from "../types";;

export class Bullet implements IBullet {
  alive: boolean;
  dir: number;
  firedBy: number;
  x: number;
  y: number;
  speed: number;

  constructor(planeX: number, planeY: number, planeDir: number, firedBy: number) {
    this.alive = true;
    this.x = planeX;
    this.y = planeY;
    this.dir = planeDir;
    this.firedBy = firedBy;
    this.speed = 2;
  }

  update(): void {
    this.updateCoordinates();
    this.hitAnimUpdate();
  }

  updateCoordinates(): void {
    if (!this.alive) {
      return;
    }

    this.x += this.speed * Math.sin(this.dir * Math.PI / 180);
    this.y += this.speed * Math.cos(this.dir * Math.PI / 180);
  }

  draw(): void {
    
  }

  destroy(): void {
    
  }

  isDead(): boolean {
    return true;
  }

  hitAnimUpdate(): void {
    
  }

  hitGround(): void {
    
  }

}