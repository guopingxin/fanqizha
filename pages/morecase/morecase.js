// pages/morecase/morecase.js
import { Home } from '../home/homemode.js'
var home = new Home()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    caselist: [
    // {
    //   caseid: "91700002700102482685",
    //   type: 1
    // },
    // {
    //   caseid: "91700002700104668036",
    //   type: 2
    // },
    // {
    //   caseid: "91700002700102482685",
    //   type: 3
    // },
    // {
    //   caseid: "91700002700104668036",
    //   type: 1
    // },
    // {
    //   caseid: "91700002700102482685",
    //   type: 1
    // },
    // {
    //   caseid: "91700002700104668036",
    //   type: 2
    // },
    // {
    //   caseid: "91700002700104668036",
    //   type: 2
    // },
    // {
    //   caseid: "91700002700102482685",
    //   type: 3
    // },
    // {
    //   caseid: "91700002700104668036",
    //   type: 3
    // },
    // {
    //   caseid: "91700002700102482685",
    //   type: 1
    // }
    ],
    page:1,
    car_no:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    home.caselist(that, res => {
      if (res.status == 1) {
        that.setData({
          caselist: res.data
        })
      } else {
        that.setData({
          tip: "暂无数据!",
          noData: true
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
    var that = this;
    wx.showNavigationBarLoading() //显示导航条加载动画
    that.data.page = 1
    home.caselist(that, res => {
      if (res.status == 1) {
        that.data.total = [];
        for (var item in res.data) {
          that.data.total.push(res.data[item])
        }
        that.setData({
          caselist: that.data.total,
          count: res.count
        })
      }

      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    wx.showNavigationBarLoading();
    that.setData({
      noData: true,
      tip: "正在加载..."
    })
    // var page = parseInt(that.data.page)+1;
    that.data.page += 1
    home.caselist(that, res => {

      if (res.status == 1) {

        that.data.total.push(res.data)

        that.setData({
          caselist: that.data.total,
          count: res.count
        })
      } else {

        that.setData({
          tip: "暂无数据!"
        })

        setTimeout(function () {
          that.setData({
            noData: false
          })
        }, 3000)
      }
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  search:function(){

    var that = this;
    home.caselist(that, res => {
      if (res.status == 1) {
        that.setData({
          caselist: res.data
        })
      } else {
        that.setData({
          caselist: res.data
        })
      }
    })
  },

  //搜索案件
  inputcarNo:function(e){

    var that = this;
    that.data.car_no = e.detail.value;
    home.caselist(that, res => {
      if (res.status == 1) {
        that.setData({
          caselist:res.data
        })
      }else{
        that.setData({
          caselist: res.data
        })
      } 
    })
  }
})