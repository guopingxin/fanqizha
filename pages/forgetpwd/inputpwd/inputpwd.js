import {Forgetpwd} from '../forgetpwdmode.js'
var forgetpwd = new Forgetpwd();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    that.data.mobile = options.phone;

  },

  forgetsubmit:function(e){
    var that = this;
    if (e.detail.value.password){

      if (e.detail.value.password1){

        if (e.detail.value.password == e.detail.value.password1){

          that.data.password = e.detail.value.password
          that.data.password1 = e.detail.value.password1

          forgetpwd.setPwd(that,res=>{
            if(res.status == 1){
              wx.redirectTo({
                url: '../../login/login',
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
            title: '两次密码输入一致!',
            icon: "none",
            duration: 2000
          })
        }
      }else{
        wx.showToast({
          title: '确认密码不能为空!',
          icon: "none",
          duration: 2000
        })
      }
    }else{
      wx.showToast({
        title: '新密码不能为空!',
        icon:"none",
        duration:2000
      })
    }
  }
})