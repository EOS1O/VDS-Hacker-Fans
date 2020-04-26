var app = getApp();
var cardTeams;


Page({
    mixins: [require('../mixin/themeChanged')],
    data: {
        list: [
            {
                id: 'form',
                name: '区块浏览器',
                open: false,
                pages: ['my-vds','vdscool']
            },
            {
                id: 'layout',
                name: '官方文档',
                open: false,
                pages: ['Whitepaper', 'Activate-VID-Source-Account', 'Linux_creates-a-supernode', 'Windows_creates-a-supernode', 'Multi-signature_address', 'MD5-verification-tutorial', 'Private-key-separation-tutorial', 'Official-video-resources', ]
            },
            {
                id: 'feedback',
                name: '相关资讯',
                open: false,
                pages: ['Big-data-analysis-of-VDS', 'View-of-giant-whales', 'How-to-earn-10000-VDS', 'VDS-Events', 'Official-materials-summary']
            },
            {
                id: 'nav',
                name: 'APP下载',
                open: false,
                pages: ['Andriod', 'Windows','Linux']
            },
            {
                id: 'search',
                name: 'VDS生态',
                open: false,
                pages:['Website','VDS+','Vzone','Monopoly','SV']
            },
            {
                id: 'zhuazi',
                name: '半缘君',
                open: false,
                pages:['VDS-Believer']
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

});
