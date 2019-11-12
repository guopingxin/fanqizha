// pages/mine/useredit/useredit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showimg:true,
    headimg:"/images/head-portrait.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //选择照片
  chooseimg:function(){
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        that.setData({
          headimg: res.tempFilePaths[0]
        })

      },
      fail: function (res) {
        console.log(res);
      }
    })
  }

})