// pages/mine/personmanage/personmanage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    letter: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    operatorlist: [{ firstname: "A", operator: [{ name: '赵擂', tip: ["紧急通知", "拖车", "车辆维修"] }, { name: '赵擂', tip: ["紧急通知", "拖车", "车辆维修"] }]},
      { firstname: "B", operator: [{ name: '赵擂', tip: ["紧急通知", "拖车", "车辆维修"] }, { name: '赵擂', tip: ["紧急通知", "拖车", "车辆维修"] }] }, 
      { firstname: "C", operator: [{ name: '赵擂', tip: ["紧急通知", "拖车", "车辆维修"] }, { name: '赵擂', tip: ["紧急通知", "拖车", "车辆维修"] }] },
      { firstname: "D", operator: [{ name: '赵擂', tip: ["紧急通知", "拖车", "车辆维修"] }, { name: '赵擂', tip: ["紧急通知", "拖车", "车辆维修"] }] },
      { firstname: "E", operator: [{ name: '赵擂', tip: ["紧急通知", "拖车", "车辆维修"] }, { name: '赵擂', tip: ["紧急通知", "拖车", "车辆维修"] }] },
      { firstname: "F", operator: [{ name: '赵擂', tip: ["紧急通知", "拖车", "车辆维修"] }, { name: '赵擂', tip: ["紧急通知", "拖车", "车辆维修"] }] }
    ],
    animationData:{},
    isshow:true,
    islianxi:true
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

  },

  edit:function(){

    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease',
    })
    this.animation = animation
    animation.translateY(200).step()
    this.setData({
      animationData: animation.export(),
      isshow: false
    })

    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        
      })
    }.bind(this), 200)
  },

  close:function(){
    var that = this;

    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease',
    })
    that.animation = animation
    animation.translateY(200).step()
    that.setData({
      animationData: animation.export(),
    })

    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        isshow: true
      })
    }.bind(this), 200)
  },

  add:function(){
    wx.navigateTo({
      url: './addpersonnel/addpersonnel',
    })
  },

  lianxi:function(){
    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease',
    })
    this.animation = animation
    animation.translateY(400).step()
    this.setData({
      animationData: animation.export(),
      islianxi: false
    })

    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),

      })
    }.bind(this), 400)
  },

  cancel:function(){
    var that = this;

    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease',
    })
    that.animation = animation
    animation.translateY(400).step()
    that.setData({
      animationData: animation.export(),
    })

    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        islianxi: true
      })
    }.bind(this), 400)
  },

  jinyong:function(){
    wx.showModal({
      content: '确定要禁用吗?',
    })
  },

  shanchu:function(){
    wx.showModal({
      content: '确定要删除吗?',
    })
  }


})