import { IBullet } from "../types";
import { degToRad } from "./helpers";
import { barn, bullet, screen } from "../variables";

export class Bullet implements IBullet {
  alive: boolean;
  dir: number;
  firedBy: number;
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;

  constructor(planeX: number, planeY: number, planeDir: number, firedBy: number) {
    this.alive = true;
    this.x = planeX;
    this.y = planeY;
    this.width = 0;
    this.height = 0;
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

    this.x += this.speed * Math.sin(degToRad(this.dir));
    this.y += this.speed * Math.cos(degToRad(this.dir));

    if (this.x > screen.size.x ||
        this.x < 0 ||
        this.y < -bullet.size.y / 2) {
      this.destroy();    
    } else if (( this.x > barn.bullet_collision.x &&
                 this.x < barn.bullet_collision.x + barn.size.x * 0.95 &&
                 this.y > barn.bullet_collision.y ) ||
                 this.y > bullet.ground_collision ) {
      this.hitGround();
    }
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