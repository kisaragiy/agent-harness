// app.js
App({
  globalData: {
    apiBase: 'http://127.0.0.1:8765',  // TODO: 替换为实际部署地址
    apiToken: 'e8811f479fbb5dfe2103d944f1e3a979b4802cbf1bcc7811ba1e62e427d36a72',
    userInfo: null,
    chatMode: 'normal'  // normal | research | cs
  },

  onLaunch() {
    // 尝试读取本地存储的 API 配置
    const settings = wx.getStorageSync('lingShu_settings')
    if (settings) {
      this.globalData.apiBase = settings.apiBase || this.globalData.apiBase
      this.globalData.apiToken = settings.apiToken || this.globalData.apiToken
    }
  }
})
