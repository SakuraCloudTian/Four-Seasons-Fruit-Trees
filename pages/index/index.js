// pages/index/index.js
const app = getApp()
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
        textBanner:["尝一口鲜美多汁的李子，品味大自然的馈赠。农鲜达带给您纯正的李子口感，甜美的滋味在舌尖绽放。每一颗李子都经过精心呵护，保证新鲜、健康，为您和家人带来一份天然的美味。让李子的酸甜交融在您的味蕾间，留下难忘的味道回忆。选择农鲜达，品质保证，让李子的魅力点亮您的生活"]
    },
    toMessage(){
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
        torules(){
        wx.navigateTo({
          url: '/pages/rules/rules',
        })
        },
        tosteps(){
          wx.navigateTo({
            url: '/pages/steps/steps',
          })
        },
        toauthentication(){
        wx.navigateTo({
          url: '/pages/authentication/authentication',
        })
        },
        toadopt(){
        wx.navigateTo({
          url: '/pages/adopt/adopt',
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