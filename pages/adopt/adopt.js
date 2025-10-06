// pages/adopt/adopt.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
    person:'请输入收货人',
    mobile:'请输入联系方式',
    mail:'请输入邮箱',
    year:'李子',
    school:'75',
    treename:'李子干'
    },
    toperson(){
    wx.showModal({
      title:'请输入收货人',
      editable:true,
     success:(res)=>{
        let type=res.content;
        this.setData({
           person:type
        })
     }
    })
    },
    tomobile(){
        wx.showModal({
            title:'请输入联系方式',
            editable:true,
           success:(res)=>{
              let type=res.content;
              this.setData({
                 mobile:type
              })
           }
          })
    },
    tomail(){
              wx.showModal({
                  title:'请输入邮箱',
                  editable:true,
                 success:(res)=>{
                    let type=res.content;
                    this.setData({
                       mail:type
                    })
                 }
                })
    },
    toyear(){
        wx.showModal({
            title:'请输入商品种类',
            editable:true,
           success:(res)=>{
              let type=res.content;
              this.setData({
                 year:type
              })
           }
          })
    },

toschool(){
  wx.showModal({
      title:'请输入院系',
      editable:true,
     success:(res)=>{
        let type=res.content;
        this.setData({
           school:type
        })
     }
    })
    },
    makesure(){
        wx.showToast({
          title: '保存成功',
          icon:'success'
        })
        wx.navigateBack({
            url: '/pages/index/index',
          })
    },
    toname(){
      wx.showModal({
         title:'请输入名字',
         editable:true,
        success:(res)=>{
           let type=res.content;
           this.setData({
              treename:type
           })
        }
       })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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