class Food {
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById("food")!;
  }
  //获取食物坐标
  get X() {
    return this.element.offsetLeft;
  }
  get Y() {
    return this.element.offsetTop;
  }
  //生成随机果实
  change() {
    const left = Math.round(Math.random() * 54) * 10;
    const top = Math.round(Math.random() * 63) * 10;
    this.element.style.left = left + "px";
    this.element.style.top = top + "px";
  }
}
export default Food;
