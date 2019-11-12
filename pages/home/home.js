// pages/home/home.js
import {
  Home
} from './homemode.js'
var home = new Home()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    car_no: '',
    total: [],
    serialshow:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this;
    that.data.page = 1
    home.caselist(that, res => {
      if (res.status == 1) {
        that.data.total = res.data;
        that.setData({
          caselist: res.data,
          count: res.count
        })
      }else{
        that.setData({
          tip: "暂无数据!",
          noData:true
        })
      }
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
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
  onReachBottom: function() {
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

        setTimeout(function() {
          that.setData({
            noData: false
          })
        }, 3000)
      }
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    })
  },

  //添加案件
  addcase: function() {
    wx.navigateTo({
      url: '../addcase/addcase',
    })
  },

  //更多
  more: function() {
    wx.navigateTo({
      url: '../morecase/morecase',
    })
  },

})