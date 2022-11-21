<template>
  <div id="jan-container" :ref="refName">
    <template v-if="ready">
      <slot></slot>
    </template>
  </div>
</template>

<script>
import { ref, onMounted, getCurrentInstance,onUnmounted,nextTick } from "vue";
import { debounce } from "../../utils"

export default {
  name: "JanContainer",
  props:{
    options:Object
  },
  setup(ctx){
    const refName = 'JanContainer';
    const width = ref(0);
    const height = ref(0);
    const originalWidth = ref(0);
    const originalHeight = ref(0);
    const ready = ref(false);

    let context,dom;

    const initSize = () => {
      return new Promise((resolve) => {
        // 渲染更新之后执行
        nextTick(() => {
          dom = context.$refs[refName];

          // 获取大屏的真实尺寸
          if (ctx.options &&  ctx.options.width && ctx.options.height){
            width.value = ctx.options.width;
            height.value = ctx.options.height;
          }else{
            width.value = dom.clientWidth;
            height.value = dom.clientHeight;
          }

          // 获取画布尺寸 节省性能,不用每次都重新获取
          if (!originalWidth.value || !originalHeight.value){
            originalWidth.value = window.screen.width;
            originalHeight.value = window.screen.height;
          }

          console.log("初始值",width.value,height.value,"====",originalWidth.value,originalHeight.value)

        })

        resolve()
      }).catch((e) => {
        console.log("e",e)
      })
    }

    const updateSize = () => {

      if (width.value && height.value){
        dom.style.width = `${width.value}px`;
        dom.style.height = `${height.value}px`;
      }else{
        dom.style.width = `${originalWidth.value}px`;
        dom.style.height = `${originalHeight.value}px`;
      }

    }

    const updateScale = () => {
      // 获取真实的视口尺寸
      const currentWidth = document.body.clientWidth;
      const currentHeight = document.body.clientHeight;

      // 获取大屏最终的宽高
      const realWidth = width.value || originalWidth.value;
      const realHeight = height.value || originalHeight.value;

      const widthScale = currentWidth / realWidth;
      const heightScale = currentHeight / realHeight;

      dom && (dom.style.transform = `scale(${widthScale},${heightScale})`)
    }

    const onResize = async () => {
      console.log()
      await initSize()
      updateScale()
    }


    onMounted(async () => {
      ready.value = false;
      context = getCurrentInstance().ctx;
      await initSize();
      updateSize();
      updateScale();

      window.addEventListener('resize',debounce(100,onResize))
      ready.value = true;
    })

    onUnmounted(() => {
      window.removeEventListener('resize',onResize)
    })


    return {
      refName,
      ready
    }
  }
}
</script>

<style lang="scss" scoped>
 #jan-container{
   position: fixed;
   top: 0;
   left: 0;
   overflow: hidden;
   z-index: 999;
   transform-origin: left top; /* 默认center center  所以偏移 */

 }
</style>
