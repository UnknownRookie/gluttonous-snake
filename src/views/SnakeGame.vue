<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import GameControl from "@/components/games/GameControl";
import { gameConfigInfo } from "@/stores/game.ts";
import { ElButton } from "element-plus";
import { VideoPlay } from "@element-plus/icons-vue";
import PlayMask from "./PlayMask.vue";
const snakeGame = gameConfigInfo();
onMounted(() => {
  new GameControl(10, 10);
  let ele: HTMLElement = document.getElementById("state")!;
  snakeGame.setContainer(ele.offsetWidth, ele.offsetHeight);
});
const score = computed(() => {
  return snakeGame.score;
});
const level = computed(() => {
  return snakeGame.level;
});
const showmask = computed(() => snakeGame.status === "stop");
const restart = () => {
  new GameControl(10, 10);
};
</script>
<style lang="less" scoped>
@import "./style/game.less";
</style>
<template>
  <main>
    <div id="state">
      <div id="snake">
        <div></div>
      </div>
      <ul id="food">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </ul>
    </div>
    <play-mask v-if="showmask" @restart="restart"></play-mask>
    <div id="score-panel">
      <p>
        SCORE: <span id="score">{{ score }}</span>
      </p>

      <p>
        LEVEL: <span id="level">{{ level }}</span>
      </p>
    </div>
  </main>
</template>
