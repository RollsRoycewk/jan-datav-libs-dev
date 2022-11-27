<template>
  <div class="base-scroll-list" :id="id">
    <div
        class="base-scroll-list-header"
         :style="{ backgroundColor: config.headerBg,height:`${config.headerHeight}px`}">
      <div class="header-item base-scroll-list-text"
           v-for="(headerItem,i) in headerData"
           :key="headerItem + i"
           :style="{
             width:`${columnWidths[i]}px`,
             ...headerStyle[i]
           }"
           v-html="headerItem"
      ></div>
    </div>
    <div class="base-scroll-list-rows"></div>
  </div>
</template>

<script>
import { ref ,onMounted} from "vue";
import { v4 as uuidv4 } from "uuid"
import useScreen from "../../hooks/useScreen"
import cloneDeep from "lodash/cloneDeep"
import assign from "lodash/assign"

export default {
  name: "BaseScrollList",
  props:{
    config:{
      type:Object,
      default: () => ({})
    }
  },
  setup(props){
    const id = `base-scroll-list-${uuidv4()}`
    const { config } = props
    const { width,height } = useScreen(id)
    const headerData = ref([])
    const headerStyle = ref([])
    const actualConfig = ref({})
    const columnWidths = ref([])


    const defaultConfig = {
      // 标题数据,格式: ['a','b','c']
      headerData:[],
      // 标题样式,格式[{},{},{}]
      headerStyle:[],
      // 标题的背景色
      headerBg:"rgb(90,90,90)",
      // 标题的高度
      headerHeight:35,
      // 标题是否展示序号
      headerIndex:false,
      headerIndexContent:"#",
      headerIndexStyle:{
        width:'50px'
      }
    }


    const handleHeader = (config) => {
      // 因为每一次对原数据的操作会触发重新渲染
      const _headerData = cloneDeep(config.headerData)
      const _headerStyle = cloneDeep(config.headerStyle)

      if (_headerData.length === 0){
        return
      }

      if (config.headerIndex){
        _headerData.unshift(config.headerIndexContent)
        _headerStyle.unshift(config.headerIndexStyle)
      }

      // 动态计算header中的每一列的宽度
      let usedWidth = 0;
      let usedColumnNum = 0;
      // 判断是否自定义width
      _headerStyle.forEach((style) => {
        if (style.width){
          usedWidth += +style.width.replace('px','')
          usedColumnNum ++
        }
      })
      // 动态计算列宽时,使用剩余的宽度除以剩余的列数
      const avgWidth = (width.value - usedWidth) / (_headerData.length - usedColumnNum);
      const _columnWidth= new Array(_headerData.length).fill(avgWidth)

      columnWidths.value = _columnWidth

      headerData.value = _headerData;
      headerStyle.value = _headerStyle
    }

    onMounted(() => {
      const _actualConfig = assign(defaultConfig,props.config)
      handleHeader(_actualConfig)

      actualConfig.value = _actualConfig;
    })

    return {
      id,
      headerData,
      headerStyle,
      columnWidths
    }
  }
}
</script>

<style scoped lang="scss">
 .base-scroll-list{
   width: 100%;
   height: 100%;

   .base-scroll-list-text{
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
     padding: 0 10px;
     box-sizing: border-box;
   }

   .base-scroll-list-header{
     display: flex;
     font-size: 15px;
     align-items: center;

     .header-item{

     }
   }
 }
</style>
