// pages/shop/shop.js
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
        banner: ["https://6e6f-nongxianda-5g18j62m920c7008-1308332211.tcb.qcloud.la/country/pic.jpg?sign=286fbf54b3196c9b475ebd266a7f3e15&t=1685869156","https://6e6f-nongxianda-5g18j62m920c7008-1308332211.tcb.qcloud.la/country/pic.jpg?sign=286fbf54b3196c9b475ebd266a7f3e15&t=1685869156","https://6e6f-nongxianda-5g18j62m920c7008-1308332211.tcb.qcloud.la/country/pic.jpg?sign=286fbf54b3196c9b475ebd266a7f3e15&t=1685869156"],
        chosen1:false,
        chosen2:true,
        chosen3:true,
        chosen4:true
    },
   shopcar(){
   wx.showToast({
     title: '加入成功',
     icon:'success',
   })
   },
   shopping(){
    wx.showToast({
      title: '暂未开放',
      icon:'error'
    })
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
                searchWidth: (right - width)/3 // 胶囊按钮右边坐标 - 胶囊按钮宽度 = 按钮左边可使用宽度
              })
            },
          })
        },
        onChange: function (e) {
          this.setData({
            xindex: e.detail.current
          });
        },
     choose1(){
         this.setData({
             chosen1:false,
             chosen2:true,
             chosen3:true,
             chosen4:true
         })
     },
     choose2(){
        this.setData({
            chosen1:true,
            chosen2:false,
            chosen3:true,
            chosen4:true
        })
    },
    choose3(){
        this.setData({
            chosen1:true,
            chosen2:true,
            chosen3:false,
            chosen4:true
        })
    },
    choose4(){
        this.setData({
            chosen1:true,
            chosen2:true,
            chosen3:true,
            chosen4:false
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