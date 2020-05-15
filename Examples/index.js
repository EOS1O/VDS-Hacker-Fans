var app = getApp();

var wxCharts = require('../utils/wxcharts.js');
var cardTeams;
var price;

var lineChart = null;

  
Page({
    mixins: [require('../mixin/themeChanged')],
    data: {
        list: [
            {
                id: 'form',
                name: '区块浏览器',
                open: false,
                pages: [{name:'my-vds',url:'my-vds'},{name:'vdscool',url:'vdscool'}],
            },
            {
                id: 'layout',
                name: '官方文档',
                open: false,
                pages: [{name:'白皮书',url:'whitepaper'},
                        {name:'激活VID源点账户',url:'Activate-VID-Source-Account'},
                        {name:'Linux:搭建超级节点教程',url:'Linux_creates-a-supernode'},
                        {name:'Windows:搭建超级节点教程',url:'Windows_creates-a-supernode'},
                        {name:'多签地址使用教程',url:'Multi-signature_address'},
                        {name:'MDS验证教程',url:'MD5-verification-tutorial'},
                        {name:'私钥分离教程',url:'Private-key-separation-tutorial'},
                        {name:'官方影像链接',url:'Official-video-resources'},],
            },
            {
                id: 'nav',
                name: 'APP下载',
                open: false,
                pages: [{name:'Andriod',url:'Andriod'},
                        {name:'Windows',url:'Windows'},
                        {name:'Linux',url:'Linux'},]
            },
            {
                id: 'money',
                name: 'OTC交易',
                open: false,
                pages: [{name:'OTC 交易群',url:'OTC-Groups'},
                        {name:'特色匿名群',url:'Distinctive-Groups'},]
            },
            {
                id: 'code',
                name: '开源代码',
                open: false,
                pages: [{name:'官方第一次开源代码',url:'vds-core'},
                        {name:'私钥传输协议',url:'vds-privatekey-transfer'},
                        {name:'区块浏览器',url:'Block-explorer'},
                        {name:'VDS小程序',url:'VDS-Hacker-Fans'},]
            },
            {
                id: 'search',
                name: 'VDS生态',
                open: false,
                pages: [{name:'VDS官网',url:'Website'},
                         {name:'VDS+',url:'VDS+'},
                         {name:'千里眼链讯',url:'fareye'},
                         {name:'Vzone',url:'Vzone'},
                         {name:'大富翁',url:'Monopoly'},
                         {name:'SV',url:'SV'},]
            },
            {
                id: 'feedback',
                name: 'VDS的秘密',
                open: false,
                pages: [{name:'大数据剖析VDS背后金主',url:'Big-data-analysis-of-VDS'},
                        {name:'VDS 大户的看法',url:'View-of-giant-whales'},
                        {name:'我是如何赚取1万VDS的',url:'How-to-earn-10000-VDS'},
                        {name:'VDS 大事纪',url:'VDS-Events'},
                        {name:'VDS 官方资料汇总',url:'Official-materials-summary'},
                        {name:'VDS 矿池揭秘',url:'mine-vds'},]
            },
            {
                id: 'zhuazi',
                name: '半缘君',
                open: false,
                pages:[{name:'VDS-Believer',url:'VDS-Believer'},]
            },
            
        ]
    },
    kindToggle: function (e) {
        var id = e.currentTarget.id, list = this.data.list;
        for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].id == id) {
                list[i].open = !list[i].open
            } else {
                list[i].open = false
            }
        }
        this.setData({
            list: list
        });
    },
    changeTheme: function() {
        console.log(this.data);
        getApp().themeChanged(this.data.theme === 'light' ? 'dark' : 'light');
    },

    onShareAppMessage: function () {
    },

   
    onPullDownRefresh: function () {
        wx.showNavigationBarLoading()
        this.onLoad()
        setTimeout(() => {
          wx.hideNavigationBarLoading()
          wx.stopPullDownRefresh()
        }, 2000);
      },

    touchHandler: function (e) {
        console.log(lineChart.getCurrentDataIndex(e));
        lineChart.showToolTip(e, {
            // background: '#7cb5ec',
            format: function (item, category) {
                return item.data 
            }
        });
    },    
    createSimulationData: function () {
        var categories = [];
        var data1 = [];
        for (var i = 4; i < 10; i++) {
            categories.push(" ");
            data1.push(Math.random()*(20-10)+10);
        }
        // data[4] = null;
        return {
            categories: categories,
            data: data1
        }
    },
    updateData: function () {
        var simulationData = this.createSimulationData();
        var series = [{
            data: simulationData.data,
            format: function (val, name) {
                return val.toFixed(2);
            }
        }];
        lineChart.updateData({
            categories: simulationData.categories,
            series: series
        });
    },
    onLoad: function (e) {
        var windowWidth = 50;
        try {
            var qq = wx.getSystemInfoSync();
            windowWidth = qq.windowWidth;
        } catch (e) {
            console.error('getSystemInfoSync failed!');
        }
        
        var simulationData = this.createSimulationData();
        lineChart = new wxCharts({
            canvasId: 'lineCanvas',
            type: 'line',
            categories: simulationData.categories,
            animation: true,
            // background: '#f5f5f5',
            series: [{
                data: simulationData.data,
                format: function (val, name) {
                    return val.toFixed(2) + '万';
                }
            }],
            xAxis: {
                disableGrid: true,
                disabled: true
            },
            yAxis: {
                disabled:true
            },
            dataLabel:false,
            legend:false,
            width: windowWidth - 80,
            height: 50,
            dataPointShape: false,
            extra: {
                lineStyle: 'curve'
            }
        });

        var that = this//不要漏了这句，很重要
        wx.request({
          url: 'https://fxhapi.feixiaohao.com/public/v1/ticker?limit=500&convert=CNY',
          headers: {
            'content-type': 'application/json'
          },
          method:'GET',
          
          success: function (res) {
              for (var i = 0; i < res.data.length; i++) {
                //result[i]表示获得第i个json对象即JSONObject
                //result[i]通过.字段名称即可获得指定字段的值
                if(res.data[i].id == "vollar")
                    {   
                        price = res.data[i].price_cny;
                    }
                    
            };
        
             that.setData({
                
                percent_change_24h: res.data[469].percent_change_24h,
                Price: price
               //res代表success函数的事件对，data是固定的，fengxiang是是上面json数据中fengxiang
             })

             
          }
        })


    }
    
       
    
});
