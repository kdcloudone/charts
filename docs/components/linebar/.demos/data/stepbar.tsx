export const DefaultOption = {
  tooltip: {}, // 设置显示tooltip，非必选
  legend: {}, // 设置显示图例，非必选
  xAxis: [
    {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月'],
      axisPointer: {
        type: 'shadow',
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: '{value} ml',
      },
    },
    {
      type: 'value',
      min: 0,
      max: 25,
      interval: 5,
      axisLabel: {
        formatter: '{value} °C',
      },
    },
  ],
  series: [
    {
      name: '蒸发量',
      type: 'bar',
      data: [
        2.0,
        4.9,
        7.0,
        23.2,
        25.6,
        76.7,
        135.6,
        162.2,
        32.6,
        20.0,
        6.4,
        3.3,
      ],
      itemStyle: {
        color: '#276FF5', // 设置柱状图颜色
      },
    },
    {
      name: '平均温度',
      type: 'line',
      yAxisIndex: 1,
      step: 'middle', // 设置为阶梯线
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
      lineStyle: {
        color: '#A571F7', // 设置线形图颜色
      },
      itemStyle: {
        color: '#A571F7', // 设置标记点颜色
      },
    },
  ],
};
