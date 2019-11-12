// pages/login/login.js
import {
  LoginMode
} from './loginmode.js'

var login = new LoginMode();
var app =getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  //登录
  loginsubmit: function(e) {

    // wx.switchTab({
    //   url: '../home/home',
    // })
    var that = this;
    var regPhone = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/
    if (e.detail.value.username){
      if (regPhone.test(e.detail.value.username)){
        if (e.detail.value.password){
          that.data.account = e.detail.value.username
          that.data.password = e.detail.value.password

          login.login(that,res=>{

            if(res.status == 1){

              app.globalData.userInfo = res.service;
              app.globalData.sessionId = res.session_id;

              wx.switchTab({
                url: '../home/home',
              })
            }else{
              wx.showToast({
                title: res.msg,
                icon:"none",
                duration:2000
              })
            }
          })
        }else{
          wx.showToast({
            title: '密码不能为空!',
            icon: "none",
            duration: 2000
          })
        }
      }else{
        wx.showToast({
          title: '请核对您的手机号!',
          icon: "none",
          duration: 2000
        })
      }
    }else{
      wx.showToast({
        title: '账号不能为空!',
        icon:"none",
        duration:2000
      })
    } 
  },

  //申请加盟
  register: function() {
    wx.navigateTo({
      url: '../register/register',
    })
  },

  //忘记密码
  forgetpwd: function() {
    wx.navigateTo({
      url: '../forgetpwd/forgetpwd',
    })
  },

})