class Snake {
  element: HTMLElement;
  head: HTMLElement;
  bodies: HTMLCollection;
  constructor() {
    this.element = document.getElementById("snake")!;
    this.head = document.querySelector("#snake>div")!;
    this.bodies = this.element.getElementsByTagName("div");
  }
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }
  set X(value: number) {
    if (this.X === value) return;
    if (value < 0 || value > 530) throw new Error();
    if (
      this.bodies[1] &&
      (this.bodies[1] as HTMLElement).offsetLeft === value
    ) {
      value > this.X ? (value = this.X - 10) : (value = this.X + 10);
    }
    this.moveBody();
    this.head.style.left = value + "px";
    this.checkKnock();
  }
  set Y(value: number) {
    if (this.Y === value) return;
    if (value < 0 || value > 620) throw new Error();
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      value > this.Y ? (value = this.Y - 10) : (value = this.Y + 10);
    }
    this.moveBody();
    this.head.style.top = value + "px";
    this.checkKnock();
  }
  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }
  moveBody() {
    for (let i = this.bodies.length - 1; i > 0; --i) {
      const X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      const Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
      (this.bodies[i] as HTMLElement).style.left = X + "px";
      (this.bodies[i] as HTMLElement).style.top = Y + "px";
    }
  }
  checkKnock() {
    for (let i = 1; i < this.bodies.length; ++i) {
      const el = this.bodies[i] as HTMLElement;
      if (this.X === el.offsetLeft && this.Y === el.offsetTop) {
        throw new Error();
      }
    }
  }
}
export default Snake;
