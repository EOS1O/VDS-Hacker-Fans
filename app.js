require('./libs/Mixins.js');

const themeListeners = [];




App({
    globalData: {
        theme: 'dark', // dark
    },
    themeChanged(theme) {
        this.globalData.theme = theme;
        themeListeners.forEach((listener) => {
            listener(theme);
        });
    },
    watchThemeChange(listener) {
        if (themeListeners.indexOf(listener) < 0) {
            themeListeners.push(listener);
        }
    },
    unWatchThemeChange(listener) {
        const index = themeListeners.indexOf(listener);
        if (index > -1) {
            themeListeners.splice(index, 1);
        }
    },

    onPullDownRefresh: function () {
        wx.showNavigationBarLoading()
        this.onLoad()
        setTimeout(() => {
          wx.hideNavigationBarLoading()
          wx.stopPullDownRefresh()
        }, 2000);
      },

 
    
});