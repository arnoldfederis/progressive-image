export class CanvasImage {
    constructor(element, target) {
        this.element = element;
        element.width = target.width;
        element.height = target.height;
        this.context = element.getContext('2d');
        this.context.drawImage(target, 0, 0);
    }

    blur(element) {
        this.context.globalAlpha = 0.5;
        for(let t = -element; t <= element; t += 2) {
            for(let n = -element; n <= element; n += 2) {
                this.context.drawImage(this.element, n, t);
                n >= 0 && t >= 0 && this.context.drawImage(this.element, -(n -1), -(t-1));
            }
        }
    }
}
