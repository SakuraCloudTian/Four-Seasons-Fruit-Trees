// pages/personal/personal.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
    userInfo:{},
    box:true,
    zhongcao:'0',
    shoucang:'0',
    youhuiquan:'0'
    },
    ordering(){
    wx.showToast({
      title: '暂未开放',
      icon:'error'
    })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let userInfo=wx.getStorageSync('userInfo');
        if(userInfo){
      this.setData({
        userInfo:JSON.parse(userInfo),
        box:false,
        zhongcao:'8',
        shoucang:'12',
        youhuiquan:'0'
      })
    }
    },
    getUserProfile(e){ 
        wx.getUserProfile({
            desc:"完善用户资料",
            success:(res)=>{
            this.setData({
                userInfo:res.userInfo,
                box:false,
                zhongcao:'8',
                shoucang:'12',
                youhuiquan:'0'
            })
            wx.setStorageSync('userInfo',JSON.stringify(res.userInfo))
            wx.showToast({
                title: '登陆成功',
                icon:'success'
              })
            },
            fail:(err)=>{
            wx.showToast({
              title: '登陆失败',
              icon:'error'
            })
            }
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
    wx.showModal({
        title:"提示",
        content:"你要刷新页面吗",
        showCancel:true,
        success:(res)=>{
        this.setData({
            userInfo:{},
            box:true,
            zhongcao:'0',
            shoucang:'0',
            youhuiquan:'0'
        })
        wx.clearStorageSync()
        }
    })
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