// pages/plan/plan.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navHeight: '',
        menuButtonInfo: {},
        searchMarginTop: 0, // 搜索框上边距
        searchWidth: 0, // 搜索框宽度
        searchHeight: 0,
        
        banner: ["https://6e6f-nongxianda-5g18j62m920c7008-1308332211.tcb.qcloud.la/country/address/hanfengshengu.jpg?sign=462801072e8331e7f11420479f3de72f&t=1685872481", 
        "https://6e6f-nongxianda-5g18j62m920c7008-1308332211.tcb.qcloud.la/country/address/linwudong.jpg?sign=00f3c82c6935f72f24840a0d6e4bf263&t=1685872488", 
         "https://6e6f-nongxianda-5g18j62m920c7008-1308332211.tcb.qcloud.la/country/address/jinianguan.jpg?sign=97d3aa0c4fcc40574fbd55f110f89b09&t=1685872523", 
         "https://6e6f-nongxianda-5g18j62m920c7008-1308332211.tcb.qcloud.la/country/address/hongchiba.png?sign=ee8d8ce5f56dade537ac922801767079&t=1685872531",
          "https://6e6f-nongxianda-5g18j62m920c7008-1308332211.tcb.qcloud.la/country/address/daxiagu.jpg?sign=7de543dd00df125e7ef907be81024301&t=1685872537", 
          "https://6e6f-nongxianda-5g18j62m920c7008-1308332211.tcb.qcloud.la/country/address/guzhen.jpg?sign=7d19da4f74053181afe7c9667540a904&t=1685872544",
],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            menuButtonInfo: wx.getMenuButtonBoundingClientRect()
          })
          const { top, width, height, right } = this.data.menuButtonInfo
          wx.getSystemInfo({
            success: (res) => {
              const { statusBarHeight } = res
              const margin = top - statusBarHeight
              this.setData({
                navHeight: (height + statusBarHeight + (margin * 2)),
                searchMarginTop: statusBarHeight + margin, // 状态栏 + 胶囊按钮边距
                searchHeight: height,  // 与胶囊按钮同高
                searchWidth: right - width // 胶囊按钮右边坐标 - 胶囊按钮宽度 = 按钮左边可使用宽度
              })
            },
          })
    },
    onChange: function (e) {
        this.setData({
          xindex: e.detail.current
        });
      },
    shopcar(){
    wx.showToast({
      title: '暂未开放',
      icon:'error'
    })
    },
    toplanA(){
    wx.navigateTo({
      url: '/pages/planA/planA',
    })
    },
    toplanB(){
    wx.navigateTo({
      url: '/pages/planB/planB',
    })
    },
    toplanC(){
    wx.navigateTo({
      url: '/pages/planC/planC',
    })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})