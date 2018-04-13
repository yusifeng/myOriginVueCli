<template>
<div class="wrapper">
  <div class="echart" ref="echarts1" ></div>
  <div class="echart" ref="echarts2" ></div>
  <div class="echart" ref="echarts3" ></div>
</div>
</template>

<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      options1: {
        tooltip: {
          trigger: 'axis'
        },
        title: {
          show: true,
          text: '销售额增长',
          // backgroundColor: 'red'
        },
        xAxis: {
          gridIndex: 0,
          type: 'category',
          data: [2013, 2014, 2015, 2016, 2017, 2018],
          name: '(年)',
          nameGap: 10,
          // nameRotate: '90',
          // inverse: true,
          // boundaryGap: ['50%', '20%'],
          // silent: true,
          axisLine: {
            // show: false,
            // symbol: 'arrow',
            // symbolSize: [20, 20],
            lineStyle: {
              color: '#4fc08d',
              width: 3
            }
          },
          axisTick: {
            // show: false,
            alignWithLabel: true,
            inside: false,
            // length: 5,
            lineStyle: {
            }
          },
          axisLabel: {
            // show: false,
            // inside: true
          },
          axisPointer: {
            // show: false,
            // type: 'shadow',
            // snap: true
            label: {
              // show: true,
              // fontSize: 16
            },
            lineStyle: {
              color: 'red'
            }
          }
        },
        yAxis: {
          type: 'value',
          name: '元',
          scale: true
        },
        series: [{
          name: '营销总额',
          data: [500, 1200, 3000, 7000, 10000],
          type: 'line'
        }],
        legend: {
          // type: 'scroll',
          // show: false,
          // left: 'center',
          orient: 'vertical',
          data:[{
            name: '营销总额',
          }],
          backgroundColor: 'purple'
        },
        grid: {
          show: true,
        },
        toolbox: {
          show: true,
          iconStyle: {
            color: 'red'
          }
        } 
      },
      options2: {
        title: {
          text: '技术客服团队占比',
          x: 'center'
        },
        tooltip : {
          // show: false,
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['2013年', '2014年', '2015年', '2016年','2017年']
        },
        series: {
          name: '客服人数',
          type: 'pie',
          radius: '55%',
          data: [
            {value: 2, name: '2013年'},
            {value: 5, name: '2014年'},
            {value: 10, name: '2015年'},
            {value: 35, name: '2016年'},
            {value: 50, name: '2017年'},
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      },
      options3: {
        tooltip: {
          trigger: 'item'
        },
        title: {
          show: true,
          text: '团队规模',
          textStyle: {
          }
        },
        xAxis: {
          type: 'category',
          data: [2013, 2014, 2015, 2016, 2017, 2018],
          name: '(年)',
          nameGap: 1,
          axisTick: {
            show: false,
            alignWithLabel: true
          }
        },
        yAxis: {
          type: 'value',
          data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
          name: '(人数)',
        },
        series: [
          {
            type: 'bar',
            barWidth: '60%',
            data: [10, 20, 50, 80, 150]
          }
        ],
        legend: {
          data:[{
            name: '营销总额',
          }]
        },
      },
      options4: {
        radar: {
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
           { name: '销售（sales）', max: 6500, color: 'red'},
           { name: '管理（Administration）', max: 16000},
           { name: '信息技术（Information Techology）', max: 30000},
           { name: '客服（Customer Support）', max: 38000},
           { name: '研发（Development）', max: 52000},
           { name: '市场（Marketing）', max: 25000}
        ]
        }
      }
    }
  },
  mounted() {
    this._initECharts()
  },
  methods: {
    _initECharts() {
      this.echarts1 = echarts.init(this.$refs.echarts1)
      this.echarts2 = echarts.init(this.$refs.echarts2)
      this.echarts3 = echarts.init(this.$refs.echarts3)
      this.echarts1.setOption(this.options1)
      this.echarts2.setOption(this.options2)
      this.echarts3.setOption(this.options3)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    display flex
    font-size 0
    .echart
      height 400px
      flex 1
      background-color #fff
</style>

