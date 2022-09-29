import { defineStore } from "pinia";
type State = {
  width: number;
  height: number;
  speed: number;
  score: number;
  level: number;
  status: string;
};
export const gameConfigInfo = defineStore({
  id: "game",
  state: (): State => ({
    width: 600,
    height: 500,
    speed: 10,
    score: 0,
    level: 1,
    status: "living",
  }),
  getters: {},
  actions: {
    /**
     *@param {type} params
     *@return {type} params
     */
    setContainer(width: number, height: number) {
      this.width = width;
      this.height = height;
    },
    setScore(value: number) {
      this.score = value;
    },
    setLevel(value: number) {
      this.level = value;
    },
    changeStatus(status: string) {
      this.status = status;
    },
  },
});
