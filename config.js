// 配置
window.Config = {

  // 站点名
  SiteName: '多美云加速│服务状态',

  // 站点链接
  SiteUrl: 'https://status.lululucloud.top/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'ur1001354-df3d7e5d232744e424481217',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
        {
      text: '多美云加速│官网',
      url: 'https://lululucloud.xyz/'
    },
    {
      text: '多美云加速│用户中心',
      url: 'https://lululucloud.top/'
    },
  ]
};
