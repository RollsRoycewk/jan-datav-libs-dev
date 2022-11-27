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
    <div class="base-scroll-list-rows"
         v-for="(rowData,rowIndex) in rowsData"
         :key="rowIndex"
         :style="{
             height:`${rowHeights[rowIndex]}px`
           }"
    >

          <div
            class="base-scroll-list-columns"
            v-for="(colData,colIndex) in rowData"
            :key="colData + colIndex"
            v-html="colData"
            :style="{
             width:`${columnWidths[colIndex]}px`
           }"
          ></div>
    </div>
  </div>
</template>

<script>
import { ref ,onMounted} from "vue";
import { v4 as uuidv4 } from "uuid"
import useScreen from "../../hooks/useScreen"
import cloneDeep from "lodash/cloneDeep"
import assign from "lodash/assign"

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
  },
  // 数据项,二维数组
  data:[],
  rowNum:10
}

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
    const rowsData = ref([])
    const rowHeights = ref([])
    const rowNum = ref(defaultConfig.rowNum);


    const handleHeader = (config) => {
      // 因为每一次对原数据的操作会触发重新渲染
      const _headerData = cloneDeep(config.headerData)
      const _headerStyle = cloneDeep(config.headerStyle)
      const _rowsData = cloneDeep(config.data)

      if (_headerData.length === 0){
        return
      }

      if (config.headerIndex){
        _headerData.unshift(config.headerIndexContent)
        _headerStyle.unshift(config.headerIndexStyle)
        _rowsData.forEach((rows,index) => {
          rows.unshift(index+1)
        })
      }

      // 动态计算header中的每一列的宽度
      let usedWidth = 0;
      let usedColumnNum = 0;
      // 判断是否自定义width
      // _headerStyle.forEach((style) => {
      //   if (style.width){
      //     usedWidth += +style.width.replace('px','')
      //     usedColumnNum ++
      //   }
      // })
      // 动态计算列宽时,使用剩余的宽度除以剩余的列数
      const avgWidth = (width.value - usedWidth) / (_headerData.length - usedColumnNum);
      const _columnWidth= new Array(_headerData.length).fill(avgWidth)

      _headerStyle.forEach((style,index) => {
        if (style.width){
          // usedWidth += +style.width.replace('px','')
          const headerWidth = +style.width.replace('px','')
          usedWidth += headerWidth
          usedColumnNum ++
          _columnWidth[index] = headerWidth;
        }
      })

      columnWidths.value = _columnWidth

      headerData.value = _headerData;
      rowsData.value = _rowsData;
      headerStyle.value = _headerStyle
    }

    const handleRows = (config) => {
      // 动态计算每行数据的高度
      const { headerHeight  } = config;
      rowNum.value = config.rowNum;
      const unusedHeight = height.value - headerHeight;
      // 如果rowNum大于实际数据长度,则以实际数据长度为准

      if (rowNum.value > rowsData.value.length){
        rowNum.value = rowsData.value.length;
      }

      const avgHeight = unusedHeight / rowNum.value;
      rowHeights.value = new Array(rowNum.value).fill(avgHeight)
    }

    onMounted(() => {
      const _actualConfig = assign(defaultConfig,props.config)

      rowsData.value = _actualConfig.data || [];
      handleHeader(_actualConfig)
      handleRows(config);

      actualConfig.value = _actualConfig;
    })

    return {
      id,
      headerData,
      headerStyle,
      columnWidths,
      rowsData,
      rowHeights
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

   .base-scroll-list-rows{
     display: flex;
     align-items: center;

     .base-scroll-list-columns{
       //font-size: 28px;
     }
   }
 }
</style>
