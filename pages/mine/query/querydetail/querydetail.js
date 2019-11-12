// pages/mine/query/querydetail/querydetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartiplist: ['奔驰600', '张三', "132xxxx4587",'VIN:14785632147'],
    carunderwriting: [{ time: "2000/03-2001/04", company: "中国平安", add: "陕西 西安" }, { add: "陕西 西安", time: "2000/03-2001/04", company: "中国平安" }, { company: "中国平安", add: "陕西 西安", time: "2000/03-2001/04"}],

    cartransfer: [{ time: "2000/03-2001/04", company: "中国平安", transfer:'过户', name:"张三" }],
    risk:1,
    riskinfor: [{time:"2000/03/01",carid:"陕A14785"}]
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


  todetail:function(){
    wx.navigateTo({
      url: './cardetail/cardetail',
    })
  }
})