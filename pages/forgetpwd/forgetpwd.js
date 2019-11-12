// pages/forgetpwd/forgetpwd.js
import {Register} from '../register/registermode.js';
import {Forgetpwd} from "./forgetpwdmode.js"

var registerMode = new Register();
var forgetpwdMode = new Forgetpwd();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    code:"发送验证码"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onHide:function(){
    var that=  this;
    clearInterval(that.data.time)
  },

  obtainphone: function (e) {
    var that = this;
    that.data.mobile = e.detail.value
  },

  sendcode: function () {

    var that = this;
    var num = 60
    var regPhone = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/

    if (regPhone.test(that.data.mobile)) {

      registerMode.setCode(that.data.mobile, res => {

        if (res.status == 1) {
          wx.showToast({
            title: '验证码已发送!',
            icon: 'none',
            duration: 2000
          })

          that.setData({
            code: num + "s"
          })

          that.data.time = setInterval(function () {
            num--;
            if (num < 1) {
              that.setData({
                code: "发送验证码"
              })
              clearInterval(that.data.time)
            } else {
              that.setData({
                code: num + "s"
              })
            }
          }, 1000)

        } else {
          wx.showToast({
            title: '验证码发送失败!',
            icon: 'none',
            duration: 2000
          })
        }
      })
    } else {
      wx.showToast({
        title: '请核对您输入的手机号!',
        icon: 'none',
        duration: 2000
      })
    }
  },

  //下一步
  forgetsubmit:function(e){

    var that = this;
    wx.navigateTo({
      url: './inputpwd/inputpwd?phone=' + that.data.mobile,
    })

    
    // var regPhone = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/
    
    // if (e.detail.value.phone) {

    //   if (regPhone.test(e.detail.value.phone)){

    //     if (e.detail.value.code){

    //       that.data.mobile = e.detail.value.phone
    //       that.data.code = e.detail.value.code
    //       forgetpwdMode.forgetpwd(that,res=>{
    //         if(res.status == 1){
    //           wx.navigateTo({
    //             url: './inputpwd/inputpwd?phone=' + that.data.mobile,
    //           })
    //         }else{
    //           wx.showToast({
    //             title: res.msg,
    //             icon:"none",
    //             duration:2000
    //           })
    //         }
    //       })

    //     }else{
    //       wx.showToast({
    //         title: '验证码不能为空!',
    //         icon: "none",
    //         duration: 2000
    //       })
    //     }
    //   }else{
    //     wx.showToast({
    //       title: '请核对您的手机号!',
    //       icon: "none",
    //       duration: 2000
    //     })
    //   }
    // }else{
    //   wx.showToast({
    //     title: '手机号不能为空!',
    //     icon:"none",
    //     duration:2000
    //   })
    // }
  }
})