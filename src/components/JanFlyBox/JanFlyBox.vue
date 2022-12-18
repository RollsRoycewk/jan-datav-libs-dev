<template>
  <div class="jan-fly-box" :ref="refName">
    <svg :width="width" :height="height">
      <!--  用矩形实现也可以    -->
      <defs>
        <path
            :id="pathId"
            :d="path"
            fill="none"
        ></path>

        <!--    fx/fy  内圈的圆心范围    cx/cy  外圈的圆心范围  r 辐射半径   -->
        <radialGradient
            :id="radialGradient"
            r="50%"
            cx="50%"
            cy="50%"
            fx="100%"
            fy="50%"
        >
          <stop offset="0%" stop-color="#fff" stop-opacity="1"></stop>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
        </radialGradient>

        <mask :id="maskId">
          <circle :r="starLength" cx="0" cy="0" :fill="`url(#${radialGradient})`">
            <animateMotion
              :dur="`${duration}s`"
              :path="path"
              rotate="auto"
              repeatCount="indefinite"
            />
          </circle>
        </mask>
      </defs>

      <use
        :href="`#${pathId}`"
        stroke-width="1"
        :stroke="lineColor"
      ></use>

      <use
          :href="`#${pathId}`"
          stroke-width="3"
          :stroke="startColor"
          :mask="`url(#${maskId})`"
      ></use>


    </svg>
    <div class="jan-fly-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed,ref ,onMounted, getCurrentInstance } from "vue";
import { v4 as uuidv4 } from  "uuid";

export default {
  name: "JanFlyBox",
  props:{
    lineColor:{
      type:String,
      default:'#235fa7'
    },
    startColor:{
      type:String,
      default:'#4fd2dd'
    },
    starLength:{
      type:[String,Number],
      default:50
    },
    duration:{
      type:[String,Number],
      default:3
    },
  },
  setup(){
    const uuid = uuidv4();

    const width = ref(0);
    const height = ref(0);
    const refName = "jan-fly-box";

    const pathId = `${refName}-path-${uuid}`;
    const radialGradient = `${refName}-gradient-${uuid}`;
    const maskId = `${refName}-maskId-${uuid}`
    const path = computed(() => `M5 5 L${width.value - 5} 5 L${width.value - 5} ${height.value - 5} L5 ${height.value - 5} Z`)

    const init = () => {
      const instance = getCurrentInstance();
      const dom = instance.ctx.$refs[refName];


      width.value = dom.clientWidth;
      height.value = dom.clientHeight;
    }

    onMounted(() => {
      init()
    })

    return {
      width,
      height,
      refName,
      path,
      pathId,
      radialGradient,
      maskId
    }
  }
}
</script>

<style lang="scss" scoped>
.jan-fly-box{
  position: relative;
  width: 100%;
  height: 100%;

  svg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .jan-fly-box-content{
    width: 100%;
    height: 100%;
    padding: 2px;
    box-sizing: border-box;
  }
}
</style>
