import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
import { gameConfigInfo } from "@/stores/game.ts";
const snakeGame = gameConfigInfo();
class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  direction: string = ""; //方向变量
  isLive: boolean = true;
  timer: number = 0;
  constructor(maxLevel: number, upScore: number, speed: number = 10) {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel(maxLevel, upScore);
    this.init();
  }
  init() {
    document.addEventListener("keydown", this.keydownHandler.bind(this));
    this.run();
  }
  keydownHandler(e: KeyboardEvent) {
    this.direction = e.key;
  }
  run() {
    let X = this.snake.X;
    let Y = this.snake.Y;
    switch (this.direction) {
      case "ArrowUp":
        Y -= 10;
        break;
      case "ArrowDown":
        Y += 10;
        break;
      case "ArrowLeft":
        X -= 10;
        break;
      case "ArrowRight":
        X += 10;
        break;
      default:
        break;
    }
    try {
      this.checkEat(X, Y);
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (error) {
      // alert("游戏结束！");
      snakeGame.changeStatus("stop");
      this.isLive = false;
    }

    if (this.timer) clearTimeout(this.timer);
    this.isLive &&
      (this.timer = window.setTimeout(
        this.run.bind(this),
        200 - (this.scorePanel.level - 1) * 30
      ));
  }
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      this.food.change();
      this.scorePanel.addScore();
      this.snake.addBody();
    }
  }
}
export default GameControl;
