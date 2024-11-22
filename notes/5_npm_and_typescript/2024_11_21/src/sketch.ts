import P5Lib from 'p5';
import { Spiral } from './spiral';
import { getColor } from './color';
import { Circle } from './circle';

function sketch(p5: P5Lib): void {
    const spirals: Spiral[] = [];
    const circles: Circle[] = [];
    const spiralTotal: number = 10;
    const circleTotal: number = 25;

    p5.setup = (): void => {
        p5.createCanvas(p5.windowWidth - 25, p5.windowHeight -25);
        for (let i: number = 0; i < spiralTotal; i++) {
            spirals.push(new Spiral(p5));
        }

        for (let i: number = 0; i < circleTotal; i++) {
            circles.push(new Circle(p5));
        }
    }

    p5.draw = (): void => {
        p5.background(0);
        spirals.forEach((spiral: Spiral) => {
            spiral.draw();
            spiral.move();
        });

        circles.forEach((circle: Circle) => {
            circle.draw();
            circle.move();
        })
    }

    p5.keyPressed = (): void => {
        if (p5.key === 'a') {
            const c: P5Lib.Color = getColor(p5);
            spirals.forEach((spiral: Spiral) => {
                spiral.setColor(c);
            });

            circles.forEach((circle: Circle) => {
                circle.setColor(c);
            });
        }
    }
}

new P5Lib(sketch);