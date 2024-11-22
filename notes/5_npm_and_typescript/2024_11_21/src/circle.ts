import P5Lib from 'p5';
import { Shape } from "./shape";
import { getColor } from './color';

export class Circle extends Shape {
    readonly #VERTS: P5Lib.Vector[] = [];
    readonly #VERT_COLORS: P5Lib.Color[] = [];
    readonly #COLORS: P5Lib.Color[] = [];

    readonly #VERT_TOTAL: number = 50;

    // #color: P5Lib.Color;

    public constructor(p5: P5Lib) {
        super(p5);
        this.#COLORS.push(getColor(p5));
        this.#COLORS.push(getColor(p5));
        this.#COLORS.push(getColor(p5));
        this.#buildVertices();
        this.#buildColors();
    }

    public override draw(): void {
        this.p5.push();
        this.p5.translate(this.POS.x, this.POS.y);
        this.p5.beginShape();

        for (let i: number = 0; i < this.#VERT_TOTAL; i++) {
            this.p5.fill(this.#VERT_COLORS[i]);
            this.p5.vertex(this.#VERTS[i].x, this.#VERTS[i].y);
        }
        this.p5.endShape(this.p5.CLOSE);
        this.p5.pop();

        this.#buildVertices();
    }

    public override setColor(color: P5Lib.Color | P5Lib.Color[]): void {
        if (color instanceof P5Lib.Color) {
            this.#COLORS.splice(0, this.#COLORS.length);
            this.#COLORS.push(color);
        } else {
            if (color.length > 0) {
                this.#COLORS.splice(0, this.#COLORS.length);
                this.#COLORS.push(...color);
            }
        }

        this.#buildColors;
    }

    #buildVertices() {
        let theta: number = 0;
        let r: number = this.SIZE / 2.0;

        for (let i: number = 0; i < this.#VERT_TOTAL; i++) {
            const x: number = Math.cos(theta) * r;
            const y: number = Math.sin(theta) * r;

            theta += this.p5.TWO_PI / this.#VERT_TOTAL;
            this.#VERTS.push(new P5Lib.Vector(x, y));
        }
    }

    #buildColors() {
        for (let i: number = 0; i < this.#VERT_TOTAL; i++) {
            const ratio: number = i / this.#VERT_TOTAL;
            const map: number = this.p5.map(ratio, 0, 1, 0, (this.#COLORS.length - 1));
            const colorIndex: number = Math.floor(map);
            if (colorIndex < this.#COLORS.length) {
                this.#COLORS[colorIndex].setAlpha(100);
                this.#VERT_COLORS.push(this.#COLORS[colorIndex]);
            } else {
                this.#VERT_COLORS.push(this.p5.color(255, 0, 0));
            }
        }
    }
}