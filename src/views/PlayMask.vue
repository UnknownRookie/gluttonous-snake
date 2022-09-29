<script setup lang="ts">
import { ElButton } from "element-plus";
import { RefreshLeft } from "@element-plus/icons-vue";
import { gameConfigInfo } from "@/stores/game.ts";
const snakeGame = gameConfigInfo();
const emit = defineEmits(["restart"]);
const reStart = (): void => {
  snakeGame.changeStatus("living");
  emit("restart");
};
</script>

<template>
  <div class="mask">
    <el-button :icon="RefreshLeft" circle @click="reStart" />
  </div>
</template>

<style lang="less" scoped>
.mask {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 30px;
  background-color: #ccc;
  opacity: 0.7;
  .el-button.is-circle {
    width: 100px;
    height: 100px;
    // border-radius: 50%;
    // line-height: 100px;
    // text-align: center;
    // margin: 0 10px;
    border: 0px;
    font-size: 100px;
    background: transparent;
  }
}
</style>
